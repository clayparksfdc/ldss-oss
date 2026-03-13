/**
 * CSS variable parser for comparing Lightning Blue (sldsTemplate) vs Cosmos (sldsPlusTemplate).
 */

export interface VariableData {
  name: string;
  sldsRef: string | null;
  sldsRaw: string | null;
  sldsLight: string | null;
  sldsDark: string | null;
  plusRef: string | null;
  plusRaw: string | null;
  plusLight: string | null;
  plusDark: string | null;
  category: 'color' | 'spacing' | 'sizing' | 'font' | 'radius' | 'shadow' | 'other';
  type: 'global' | 'semantic' | 'reference';
}

export class CSSVariableParser {
  sldsVars = new Map<string, string>();
  plusVars = new Map<string, string>();
  sldsAllVars = new Map<string, string>();
  plusAllVars = new Map<string, string>();
  allVars = new Map<string, string>();

  parseCSS(cssText: string, targetMap: Map<string, string>) {
    const varRegex = /--(slds-[gsr]-[a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
    let match;
    while ((match = varRegex.exec(cssText)) !== null) {
      const varName = `--${match[1]}`;
      const value = match[2].trim();
      if (!targetMap.has(varName)) targetMap.set(varName, value);
    }
  }

  parseAllVars(cssText: string, targetMap: Map<string, string>) {
    const varRegex = /--(slds-[a-zA-Z]-[a-zA-Z0-9-]+)\s*:\s*([^;]+);/g;
    let match;
    while ((match = varRegex.exec(cssText)) !== null) {
      const varName = `--${match[1]}`;
      const value = match[2].trim();
      if (!targetMap.has(varName)) targetMap.set(varName, value);
    }
  }

  resolveValue(value: string, sourceMap: Map<string, string>, visited = new Set<string>()): string {
    if (!value || visited.has(value)) return value;
    visited.add(value);
    const varRefRegex = /var\(\s*(--[a-zA-Z0-9-]+)(?:\s*,\s*([^)]+))?\s*\)/g;
    let resolved = value;
    resolved = value.replace(varRefRegex, (_match, varName: string, fallback: string) => {
      if (sourceMap.has(varName)) {
        return this.resolveValue(sourceMap.get(varName)!, sourceMap, new Set(visited));
      }
      if (this.allVars.has(varName)) {
        return this.resolveValue(this.allVars.get(varName)!, this.allVars, new Set(visited));
      }
      if (fallback) return this.resolveValue(fallback.trim(), sourceMap, new Set(visited));
      return _match;
    });
    return resolved;
  }

  parseLightDark(value: string): { light: string; dark: string } | null {
    if (!value?.includes('light-dark(')) return null;
    const lightDarkRegex = /light-dark\(\s*([^,]+),\s*([^)]+)\)/g;
    const light = value.replace(lightDarkRegex, (_: string, lightVal: string) => lightVal.trim());
    const dark = value.replace(lightDarkRegex, (_: string, _l: string, darkVal: string) => darkVal.trim());
    return { light, dark };
  }

  categorizeVariable(varName: string): VariableData['category'] {
    const name = varName.toLowerCase();
    if (/color|accent|brand|surface|border.*color|link-color|error|warning|success|neutral|palette/.test(name)) return 'color';
    if (/spacing|gap|margin|padding/.test(name)) return 'spacing';
    if (/sizing|width|height|content-sizing/.test(name)) return 'sizing';
    if (/font|scale|weight|line-height/.test(name)) return 'font';
    if (/radius/.test(name)) return 'radius';
    if (/shadow/.test(name)) return 'shadow';
    return 'other';
  }

  getCombinedData(): VariableData[] {
    const combined = new Map<string, VariableData>();

    for (const [name, value] of this.sldsVars) {
      const sldsRaw = this.resolveValue(value, this.sldsAllVars);
      const sldsLightDark = this.parseLightDark(sldsRaw);
      combined.set(name, {
        name,
        sldsRef: value,
        sldsRaw,
        sldsLight: sldsLightDark?.light ?? null,
        sldsDark: sldsLightDark?.dark ?? null,
        plusRef: null,
        plusRaw: null,
        plusLight: null,
        plusDark: null,
        category: this.categorizeVariable(name),
        type: name.includes('--slds-g-') ? 'global' : name.includes('--slds-s-') ? 'semantic' : 'reference',
      });
    }

    for (const [name, value] of this.plusVars) {
      const plusRaw = this.resolveValue(value, this.plusAllVars);
      const plusLightDark = this.parseLightDark(plusRaw);
      if (combined.has(name)) {
        const existing = combined.get(name)!;
        existing.plusRef = value;
        existing.plusRaw = plusRaw;
        existing.plusLight = plusLightDark?.light ?? null;
        existing.plusDark = plusLightDark?.dark ?? null;
      } else {
        combined.set(name, {
          name,
          sldsRef: null,
          sldsRaw: null,
          sldsLight: null,
          sldsDark: null,
          plusRef: value,
          plusRaw: plusRaw,
          plusLight: plusLightDark?.light ?? null,
          plusDark: plusLightDark?.dark ?? null,
          category: this.categorizeVariable(name),
          type: name.includes('--slds-g-') ? 'global' : 'semantic',
        });
      }
    }

    return Array.from(combined.values()).sort((a, b) => a.name.localeCompare(b.name));
  }
}
