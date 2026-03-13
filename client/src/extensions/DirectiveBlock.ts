import { Node, mergeAttributes } from '@tiptap/core';
import { ReactNodeViewRenderer } from '@tiptap/react';
import { DirectiveBlockView } from './DirectiveBlockView';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    directiveBlock: {
      insertDirective: (directiveType: string) => ReturnType;
    };
  }
}

export const DirectiveBlock = Node.create({
  name: 'directiveBlock',
  group: 'block',
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      directiveType: { default: '' },
      directiveAttrs: { default: {} },
      directiveChildren: { default: [] },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-directive-type]',
        getAttrs: (element) => {
          const el = element as HTMLElement;
          let attrs = {};
          let children: unknown[] = [];
          try { attrs = JSON.parse(el.getAttribute('data-directive-attrs')?.replace(/&#39;/g, "'") || '{}'); } catch { /* */ }
          try { children = JSON.parse(el.getAttribute('data-directive-children')?.replace(/&#39;/g, "'") || '[]'); } catch { /* */ }
          return {
            directiveType: el.getAttribute('data-directive-type') || '',
            directiveAttrs: attrs,
            directiveChildren: children,
          };
        },
      },
    ];
  },

  renderHTML({ node }) {
    return [
      'div',
      mergeAttributes({
        'data-directive-type': node.attrs.directiveType,
        'data-directive-attrs': JSON.stringify(node.attrs.directiveAttrs).replace(/'/g, '&#39;'),
        'data-directive-children': JSON.stringify(node.attrs.directiveChildren).replace(/'/g, '&#39;'),
      }),
    ];
  },

  addCommands() {
    return {
      insertDirective:
        (directiveType: string) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: {
              directiveType,
              directiveAttrs: {},
              directiveChildren: [],
            },
          });
        },
    };
  },

  addNodeView() {
    return ReactNodeViewRenderer(DirectiveBlockView);
  },
});
