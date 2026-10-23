"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/pricing", label: "Pricing" },
    { href: "/download", label: "Download" },
  ];

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline" id="nav-logo">
            <div className="relative w-9 h-9">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-lg"
                style={{ background: "linear-gradient(135deg, #00d4ff, #8b5cf6)" }}
              >
                R
              </div>
              <div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse-glow"
                style={{ background: "#00d4ff" }}
              />
            </div>
            <span
              className="text-xl font-black tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span className="gradient-text">Rainbow</span>
              <span style={{ color: "#f0f4ff" }}>VPN</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className="no-underline transition-all duration-200"
                style={{
                  color:
                    pathname === link.href
                      ? "var(--accent-cyan)"
                      : "var(--text-secondary)",
                  fontWeight: pathname === link.href ? 600 : 400,
                  fontSize: "0.95rem",
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/pricing" className="btn-secondary" style={{ padding: "10px 22px", fontSize: "0.9rem" }} id="nav-get-started">
              <span>Get Started</span>
            </Link>
            <Link href="/download" className="btn-primary" style={{ padding: "10px 22px", fontSize: "0.9rem" }} id="nav-download">
              <span>Download Free</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            id="nav-mobile-toggle"
            aria-label="Toggle navigation"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block w-6 h-0.5 transition-all duration-300"
                style={{
                  background: "var(--text-secondary)",
                  transform:
                    mobileOpen && i === 0
                      ? "rotate(45deg) translateY(8px)"
                      : mobileOpen && i === 2
                      ? "rotate(-45deg) translateY(-8px)"
                      : mobileOpen && i === 1
                      ? "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="md:hidden mt-4 pb-4 border-t"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="no-underline"
                  style={{
                    color:
                      pathname === link.href
                        ? "var(--accent-cyan)"
                        : "var(--text-secondary)",
                    fontWeight: pathname === link.href ? 600 : 400,
                  }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Link href="/pricing" className="btn-secondary text-center" onClick={() => setMobileOpen(false)}>
                  <span>Get Started</span>
                </Link>
                <Link href="/download" className="btn-primary text-center" onClick={() => setMobileOpen(false)}>
                  <span>Download Free</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
