"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const plans = [
  {
    id: "free",
    name: "Free",
    price: { monthly: 0, yearly: 0 },
    desc: "Perfect for getting started",
    color: "rgba(255,255,255,0.08)",
    border: "rgba(255,255,255,0.08)",
    featured: false,
    cta: "Get Started Free",
    ctaHref: "/download",
    features: [
      { text: "1 Device", included: true },
      { text: "10 GB / Month", included: true },
      { text: "5 Server Locations", included: true },
      { text: "Standard Encryption", included: true },
      { text: "Ad Blocker", included: false },
      { text: "Kill Switch", included: false },
      { text: "Multi-Hop VPN", included: false },
      { text: "Dedicated IP", included: false },
      { text: "24/7 Priority Support", included: false },
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: { monthly: 9.99, yearly: 4.99 },
    desc: "Most popular for individuals",
    color: "rgba(0,212,255,0.06)",
    border: "rgba(0,212,255,0.35)",
    featured: true,
    cta: "Start 30-Day Free Trial",
    ctaHref: "/download",
    badge: "MOST POPULAR",
    features: [
      { text: "10 Devices", included: true },
      { text: "Unlimited Bandwidth", included: true },
      { text: "10,000+ Server Locations", included: true },
      { text: "Military-Grade AES-256", included: true },
      { text: "Ad & Malware Blocker", included: true },
      { text: "Kill Switch", included: true },
      { text: "Multi-Hop VPN", included: false },
      { text: "Dedicated IP", included: false },
      { text: "24/7 Priority Support", included: false },
    ],
  },
  {
    id: "business",
    name: "Business",
    price: { monthly: 19.99, yearly: 9.99 },
    desc: "For teams and enterprises",
    color: "rgba(139,92,246,0.06)",
    border: "rgba(139,92,246,0.2)",
    featured: false,
    cta: "Start Business Trial",
    ctaHref: "/download",
    features: [
      { text: "Unlimited Devices", included: true },
      { text: "Unlimited Bandwidth", included: true },
      { text: "10,000+ Server Locations", included: true },
      { text: "Military-Grade AES-256", included: true },
      { text: "Ad & Malware Blocker", included: true },
      { text: "Kill Switch", included: true },
      { text: "Multi-Hop VPN", included: true },
      { text: "Dedicated IP", included: true },
      { text: "24/7 Priority Support", included: true },
    ],
  },
];

const faqs = [
  {
    q: "What is a VPN and why do I need one?",
    a: "A VPN (Virtual Private Network) encrypts your internet connection and hides your IP address, protecting you from hackers, surveillance, and geo-restrictions. It's essential for privacy and security on public Wi-Fi and at home.",
  },
  {
    q: "Is RainbowVPN truly zero-log?",
    a: "Yes. We have a strict zero-log policy verified by multiple independent audits by Cure53 and PwC. We never store your browsing history, connection timestamps, DNS queries, or IP addresses.",
  },
  {
    q: "How many devices can I use simultaneously?",
    a: "Free plan supports 1 device, Pro supports up to 10 devices simultaneously, and Business supports unlimited devices under one account.",
  },
  {
    q: "Can I get a refund?",
    a: "Absolutely. We offer a 30-day money-back guarantee with no questions asked. Simply contact our support team and we'll process your refund within 24 hours.",
  },
  {
    q: "Does RainbowVPN work with streaming services?",
    a: "Yes! RainbowVPN is optimized for streaming Netflix, Disney+, Hulu, BBC iPlayer, and 100+ other services. Our servers are constantly updated to bypass geo-blocks.",
  },
  {
    q: "What protocols does RainbowVPN use?",
    a: "We support OpenVPN, WireGuard, IKEv2/IPSec, and our proprietary RainbowTunnel protocol — giving you the best mix of speed and security for every situation.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const savings = 50; // percent savings on yearly

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />

      {/* ===== HERO ===== */}
      <section
        id="pricing-hero"
        className="page-hero text-center overflow-hidden relative"
        style={{ paddingTop: "140px", paddingBottom: "70px" }}
      >
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(0,212,255,0.6), transparent)",
            filter: "blur(60px)",
          }}
        />
        <div className="container relative z-10">
          <div className="section-label inline-flex mb-4">💳 Pricing</div>
          <h1
            className="text-5xl md:text-7xl font-black mb-4"
            style={{ fontFamily: "var(--font-outfit)", letterSpacing: "-0.02em" }}
          >
            Simple, Transparent
            <br />
            <span className="gradient-text">Pricing</span>
          </h1>
          <p
            className="text-xl mb-10"
            style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto 40px" }}
          >
            No hidden fees. No surprises. Just powerful privacy protection at a price that makes sense.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className="font-medium text-sm"
              style={{ color: billing === "monthly" ? "var(--text-primary)" : "var(--text-secondary)" }}
            >
              Monthly
            </span>
            <button
              id="billing-toggle"
              className={`toggle ${billing === "yearly" ? "active" : ""}`}
              onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
              aria-label="Toggle billing period"
            />
            <span
              className="font-medium text-sm"
              style={{ color: billing === "yearly" ? "var(--text-primary)" : "var(--text-secondary)" }}
            >
              Yearly
            </span>
            {billing === "yearly" && (
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
              >
                Save {savings}%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      <section id="pricing-plans" className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <div
                key={plan.id}
                className="pricing-card"
                id={`plan-${plan.id}`}
                style={{
                  background: plan.color,
                  borderColor: plan.border,
                  ...(plan.featured ? { transform: "scale(1.04)" } : {}),
                }}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="flex justify-center mb-4">
                    <span className="badge badge-popular">{plan.badge}</span>
                  </div>
                )}

                <h2
                  className="text-2xl font-black mb-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {plan.name}
                </h2>
                <p className="text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span
                      className="text-5xl font-black"
                      style={{ color: "var(--text-primary)", fontFamily: "var(--font-outfit)" }}
                    >
                      ${plan.price[billing] === 0 ? "0" : plan.price[billing].toFixed(2)}
                    </span>
                    {plan.price[billing] > 0 && (
                      <span className="mb-2" style={{ color: "var(--text-secondary)" }}>/mo</span>
                    )}
                  </div>
                  {billing === "yearly" && plan.price.monthly > 0 && (
                    <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                      Billed ${(plan.price.yearly * 12).toFixed(2)}/year
                      <span className="ml-2 line-through opacity-60">${(plan.price.monthly * 12).toFixed(2)}</span>
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={plan.ctaHref}
                  id={`plan-${plan.id}-cta`}
                  className={plan.featured ? "btn-primary" : "btn-secondary"}
                  style={{ width: "100%", justifyContent: "center", marginBottom: "32px" }}
                >
                  <span>{plan.cta}</span>
                </Link>

                {/* Divider */}
                <div
                  className="mb-6"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                />

                {/* Features */}
                <ul className="flex flex-col gap-4">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-center gap-3">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{
                          background: f.included
                            ? "rgba(34,197,94,0.2)"
                            : "rgba(239,68,68,0.15)",
                          color: f.included ? "#22c55e" : "#ef4444",
                        }}
                      >
                        {f.included ? "✓" : "✕"}
                      </span>
                      <span
                        className="text-sm"
                        style={{ color: f.included ? "var(--text-primary)" : "var(--text-secondary)", opacity: f.included ? 1 : 0.5 }}
                      >
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap justify-center gap-8 mt-16">
            {[
              { icon: "✅", text: "30-Day Money-Back Guarantee" },
              { icon: "🔒", text: "256-bit AES Encryption" },
              { icon: "📵", text: "Strict No-Log Policy" },
              { icon: "💳", text: "No Credit Card for Free Plan" },
            ].map((g) => (
              <div key={g.text} className="flex items-center gap-2">
                <span>{g.icon}</span>
                <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section
        id="comparison-table"
        className="py-24"
        style={{ background: "rgba(255,255,255,0.02)" }}
      >
        <div className="container">
          <div className="text-center mb-16">
            <div className="section-label inline-flex mb-4">📊 Compare Plans</div>
            <h2
              className="text-4xl font-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Choose the Right Plan for
              <span className="gradient-text"> You</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          <div
            className="rounded-2xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Table header */}
            <div
              className="grid grid-cols-4 p-4"
              style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="font-semibold" style={{ color: "var(--text-secondary)" }}>Feature</div>
              {plans.map((p) => (
                <div key={p.id} className="text-center font-bold" style={{ color: p.featured ? "var(--accent-cyan)" : "var(--text-primary)" }}>
                  {p.name}
                </div>
              ))}
            </div>

            {[
              ["Devices", "1", "10", "Unlimited"],
              ["Bandwidth", "10 GB/mo", "Unlimited", "Unlimited"],
              ["Servers", "5 locations", "10,000+", "10,000+"],
              ["Encryption", "Standard", "AES-256", "AES-256"],
              ["Kill Switch", "—", "✅", "✅"],
              ["Ad Blocker", "—", "✅", "✅"],
              ["Multi-Hop", "—", "—", "✅"],
              ["Dedicated IP", "—", "—", "✅"],
              ["Support", "Community", "Email", "24/7 Priority"],
              ["Price/mo", "Free", "$4.99", "$9.99"],
            ].map(([feature, ...vals], rowIdx) => (
              <div
                key={feature}
                className="grid grid-cols-4 p-4 transition-colors"
                style={{
                  borderBottom: rowIdx < 9 ? "1px solid rgba(255,255,255,0.04)" : "none",
                  background: rowIdx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)",
                }}
                id={`compare-row-${rowIdx}`}
              >
                <div className="text-sm" style={{ color: "var(--text-secondary)" }}>{feature}</div>
                {vals.map((val, vi) => (
                  <div key={vi} className="text-center text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {val}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="pricing-faq" className="py-24">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <div className="section-label inline-flex mb-4">❓ FAQ</div>
            <h2 className="text-4xl font-black" style={{ fontFamily: "var(--font-outfit)" }}>
              Frequently Asked
              <span className="gradient-text"> Questions</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" id={`faq-${i}`}>
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-primary)", fontWeight: 600 }}
                >
                  <span>{faq.q}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-all duration-300"
                    style={{
                      background: openFaq === i ? "linear-gradient(135deg, #00d4ff, #8b5cf6)" : "rgba(255,255,255,0.08)",
                      color: "white",
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5" style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
