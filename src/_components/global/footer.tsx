import React from "react";
import Link from "next/link";
import TwitterIcon from "../svgs/twitter";
import FacebookIcon from "../svgs/facebook";
import InstagramIcon from "../svgs/instagram";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white mt-10">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Section - Logo & Newsletter */}
          <div className="lg:col-span-5">
            {/* Logo */}
            <div className="flex items-center gap-1 mb-4">
              <img
                src="/logo.png"
                alt="Fryslan+co Logo"
                className="w-24 md:w-32"
              />
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mb-5">
              Blijf op de hoogte van lokale bedrijven in Friesland
            </p>

            {/* Newsletter Form */}
            <div className="flex gap-2 mb-3">
              <input
                type="email"
                placeholder="Emailadres"
                className="flex-1 max-w-50 px-4 py-2.5 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-gray-200"
              />
              <button className="px-5 py-2.5 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors">
                Gratis abonneren
              </button>
            </div>

            {/* Privacy Policy */}
            <p className="text-gray-400 text-xs">
              By subscribing, you agree to our{" "}
              <Link
                href="/privacy-policy"
                className="underline hover:text-gray-600"
              >
                privacy policy
              </Link>
              .
            </p>
          </div>

          {/* Right Section - Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-8">
              {/* Directory Column */}
              <div>
                <h3 className="text-gray-900 font-semibold text-sm mb-4">
                  Directory
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/blader-door-bedrijven"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Blader door bedrijven
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/categorieen"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Categorieën
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/locaties"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Locaties
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/onlangs-toegevoegd"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Onlangs toegevoegd
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Hulpmiddelen Column */}
              <div>
                <h3 className="text-gray-900 font-semibold text-sm mb-4">
                  Hulpmiddelen
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/claim-bedrijf"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Claim bedrijf
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/voeg-bedrijf-toe"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Voeg bedrijf toe
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/hulp-voor-bedrijven"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Hulp voor bedrijven
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Bedrijf Column */}
              <div>
                <h3 className="text-gray-900 font-semibold text-sm mb-4">
                  Bedrijf
                </h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/over"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Over
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/richtlijnen"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Richtlijnen
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacybeleid"
                      className="text-gray-500 text-sm hover:text-gray-700"
                    >
                      Privacybeleid
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Copyright */}
          <p className="text-gray-400 text-xs">
            ©2024 fryslan+co Alle Rechten Voorbehouden.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <Link
              href="https://instagram.com"
              className="text-gray-700 hover:text-gray-900"
            >
                <InstagramIcon />
            </Link>

            {/* Facebook */}
            <Link
              href="https://facebook.com"
              className="text-gray-700 hover:text-gray-900"
            >
                <FacebookIcon />
            </Link>

            {/* X (Twitter) */}
            <Link
              href="https://x.com"
              className="text-gray-700 hover:text-gray-900"
            >
                <TwitterIcon />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
