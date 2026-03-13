import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="border-t pt-8 pb-12 text-[12px] mt-16 transition-colors"
      style={{ borderColor: "var(--border)", color: "var(--slds-gray-text)", backgroundColor: "var(--footer-bg)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
          <Link href="/general/get-started" className="transition-colors" style={{ color: "var(--slds-gray-text)" }}>
            Get Started
          </Link>
          {[
            { href: "https://www.salesforce.com/company/legal/", text: "Terms of Service" },
            { href: "https://www.salesforce.com/company/privacy/", text: "Privacy" },
            { href: "https://www.salesforce.com/company/security/", text: "Responsible Disclosure" },
            { href: "https://trust.salesforce.com/", text: "Trust" },
            { href: "https://www.salesforce.com/company/privacy/full_privacy/", text: "Your Privacy Choices" },
            { href: "https://www.salesforce.com/company/legal/", text: "Salesforce Legal" },
          ].map(link => (
            <a
              key={link.text}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "var(--slds-gray-text)" }}
            >
              {link.text}
            </a>
          ))}
        </div>
        <p className="text-[11px]" style={{ color: "var(--slds-gray-text)", opacity: 0.7 }}>
          &copy; Copyright 2015-present Salesforce, Inc. All rights reserved. Various trademarks held by their
          respective owners. Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA
          94105, United States
        </p>
      </div>
    </footer>
  );
}

