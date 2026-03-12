import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] pt-8 pb-12 text-[12px] text-[#706E6B] bg-white mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4">
          <Link href="/general/get-started" className="hover:text-[#0176D3] transition-colors">
            Get Started
          </Link>
          <a
            href="https://www.salesforce.com/company/legal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0176D3] transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="https://www.salesforce.com/company/privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0176D3] transition-colors"
          >
            Privacy
          </a>
          <a
            href="https://www.salesforce.com/company/security/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0176D3] transition-colors"
          >
            Responsible Disclosure
          </a>
          <a
            href="https://trust.salesforce.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0176D3] transition-colors"
          >
            Trust
          </a>
          <a
            href="https://www.salesforce.com/company/privacy/full_privacy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0176D3] transition-colors"
          >
            Your Privacy Choices
          </a>
          <a
            href="https://www.salesforce.com/company/legal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0176D3] transition-colors"
          >
            Salesforce Legal
          </a>
        </div>
        <p className="text-[11px] text-[#939393]">
          &copy; Copyright 2015-present Salesforce, Inc. All rights reserved. Various trademarks held by their
          respective owners. Salesforce, Inc. Salesforce Tower, 415 Mission Street, 3rd Floor, San Francisco, CA
          94105, United States
        </p>
      </div>
    </footer>
  );
}

