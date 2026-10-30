"use client";
import Link from "next/link";
import { useLanguage } from "./LanguageContext";
import { translations } from "../translations";

export default function Footer() {
  const currentYear = 2026;
  const { lang } = useLanguage();
  const t = translations.footer[lang];

  const footerCategories = [
    {
      title: t.product,
      links: [
        { label: t.features, href: "/" },
        { label: t.pricing, href: "/pricing" },
        { label: t.download, href: "/download" },
        { label: t.changelog, href: "/" },
      ],
    },
    {
      title: t.company,
      links: [
        { label: t.aboutUs, href: "/about" },
        { label: t.blog, href: "/" },
        { label: t.careers, href: "/" },
        { label: t.pressKit, href: "/" },
      ],
    },
    {
      title: t.support,
      links: [
        { label: t.helpCenter, href: "/" },
        { label: t.contactUs, href: "/" },
        { label: t.status, href: "/" },
        { label: t.community, href: "/" },
      ],
    },
    {
      title: t.legal,
      links: [
        { label: t.privacyPolicy, href: "/" },
        { label: t.termsOfService, href: "/" },
        { label: t.cookiePolicy, href: "/" },
        { label: t.dmca, href: "/" },
      ],
    },
  ];

  return (
    <footer
      style={{
        background: "rgba(5, 9, 21, 0.95)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "72px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-12 mb-16 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 no-underline mb-6 inline-flex"
              id="footer-logo"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-xl"
                style={{
                  background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                }}
              >
                R
              </div>
              <span
                className="text-2xl font-black tracking-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span className="gradient-text">Rainbow</span>
                <span style={{ color: "#f0f4ff" }}>VPN</span>
              </span>
            </Link>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                maxWidth: "320px",
                fontSize: "0.95rem",
              }}
            >
              {t.description}
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {[
                { icon: "𝕏", label: "Twitter", id: "footer-twitter" },
                { icon: "in", label: "LinkedIn", id: "footer-linkedin" },
                { icon: "f", label: "Facebook", id: "footer-facebook" },
                { icon: "📡", label: "Reddit", id: "footer-reddit" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  id={social.id}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-200 no-underline"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(0,212,255,0.15)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(0,212,255,0.4)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--accent-cyan)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color =
                      "var(--text-secondary)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerCategories.map((col) => (
            <div key={col.title}>
              <h3
                className="font-semibold mb-5 text-sm uppercase tracking-widest"
                style={{ color: "var(--text-primary)" }}
              >
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}>
            © {currentYear} RainbowVPN. {t.allRightsReserved}
          </p>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse-glow"
              style={{ background: "#22c55e" }}
            />
            <span
              style={{ color: "var(--text-secondary)", fontSize: "0.875rem" }}
            >
              {t.allSystemsOperational}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
