"use client";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../components/LanguageContext";
import { translations } from "../translations";

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = translations.pricing[lang];

  const savings = 50;

  const plans = [
    {
      id: "free",
      name: lang === "zh" ? "免费版" : "Free",
      price: { monthly: 0, yearly: 0 },
      desc: lang === "zh" ? "适合日常轻量使用" : "Perfect for getting started",
      color: "rgba(255,255,255,0.08)",
      border: "rgba(255,255,255,0.08)",
      featured: false,
      cta: lang === "zh" ? "免费开始" : "Get Started Free",
      ctaHref: "/download",
      features: [
        { text: lang === "zh" ? "1 台设备" : "1 Device", included: true },
        { text: lang === "zh" ? "10 GB / 月" : "10 GB / Month", included: true },
        { text: lang === "zh" ? "5 个服务器位置" : "5 Server Locations", included: true },
        { text: lang === "zh" ? "标准加密" : "Standard Encryption", included: true },
        { text: lang === "zh" ? "广告拦截" : "Ad Blocker", included: false },
        { text: lang === "zh" ? "断网保护 (Kill Switch)" : "Kill Switch", included: false },
        { text: lang === "zh" ? "双重跳跃 VPN" : "Multi-Hop VPN", included: false },
        { text: lang === "zh" ? "专属独立 IP" : "Dedicated IP", included: false },
        { text: lang === "zh" ? "24/7 优先客服" : "24/7 Priority Support", included: false },
      ],
    },
    {
      id: "pro",
      name: lang === "zh" ? "专业版" : "Pro",
      price: { monthly: 9.99, yearly: 4.99 },
      desc: lang === "zh" ? "个人与家庭最热门选择" : "Most popular for individuals",
      color: "rgba(0,212,255,0.06)",
      border: "rgba(0,212,255,0.35)",
      featured: true,
      cta: lang === "zh" ? "开启30天免费试用" : "Start 30-Day Free Trial",
      ctaHref: "/download",
      badge: lang === "zh" ? "最受欢迎" : "MOST POPULAR",
      features: [
        { text: lang === "zh" ? "10 台设备" : "10 Devices", included: true },
        { text: lang === "zh" ? "无限制流量" : "Unlimited Bandwidth", included: true },
        { text: lang === "zh" ? "10,000+ 服务器节点" : "10,000+ Server Locations", included: true },
        { text: lang === "zh" ? "军事级 AES-256 加密" : "Military-Grade AES-256", included: true },
        { text: lang === "zh" ? "广告与恶意软件拦截" : "Ad & Malware Blocker", included: true },
        { text: lang === "zh" ? "断网保护 (Kill Switch)" : "Kill Switch", included: true },
        { text: lang === "zh" ? "双重跳跃 VPN" : "Multi-Hop VPN", included: false },
        { text: lang === "zh" ? "专属独立 IP" : "Dedicated IP", included: false },
        { text: lang === "zh" ? "24/7 优先客服" : "24/7 Priority Support", included: false },
      ],
    },
    {
      id: "business",
      name: lang === "zh" ? "企业版" : "Business",
      price: { monthly: 19.99, yearly: 9.99 },
      desc: lang === "zh" ? "适合团队与企业组织" : "For teams and enterprises",
      color: "rgba(139,92,246,0.06)",
      border: "rgba(139,92,246,0.2)",
      featured: false,
      cta: lang === "zh" ? "开启企业试用" : "Start Business Trial",
      ctaHref: "/download",
      features: [
        { text: lang === "zh" ? "不限设备数量" : "Unlimited Devices", included: true },
        { text: lang === "zh" ? "无限制流量" : "Unlimited Bandwidth", included: true },
        { text: lang === "zh" ? "10,000+ 服务器节点" : "10,000+ Server Locations", included: true },
        { text: lang === "zh" ? "军事级 AES-256 加密" : "Military-Grade AES-256", included: true },
        { text: lang === "zh" ? "广告与恶意软件拦截" : "Ad & Malware Blocker", included: true },
        { text: lang === "zh" ? "断网保护 (Kill Switch)" : "Kill Switch", included: true },
        { text: lang === "zh" ? "双重跳跃 VPN" : "Multi-Hop VPN", included: true },
        { text: lang === "zh" ? "专属独立 IP" : "Dedicated IP", included: true },
        { text: lang === "zh" ? "24/7 专属优先支持" : "24/7 Priority Support", included: true },
      ],
    },
  ];

  const faqs = [
    {
      q:
        lang === "zh"
          ? "什么是 VPN，为什么我需要它？"
          : "What is a VPN and why do I need one?",
      a:
        lang === "zh"
          ? "VPN（虚拟专用网络）可以加密您的互联网连接并隐藏您的真实 IP 地址，保护您免受黑客、追踪和地域封锁的困扰。无论是在公共 Wi-Fi 还是家中，它都是保护隐私和安全的必备工具。"
          : "A VPN (Virtual Private Network) encrypts your internet connection and hides your IP address, protecting you from hackers, surveillance, and geo-restrictions. It's essential for privacy and security on public Wi-Fi and at home.",
    },
    {
      q:
        lang === "zh"
          ? "RainbowVPN 真的完全零日志吗？"
          : "Is RainbowVPN truly zero-log?",
      a:
        lang === "zh"
          ? "是的。我们执行严格的零日志政策，已通过 Cure53 和普华永道 (PwC) 的多次独立安全审计。我们绝不记录或存储您的浏览历史、连接时间、DNS 查询或 IP 地址。"
          : "Yes. We have a strict zero-log policy verified by multiple independent audits by Cure53 and PwC. We never store your browsing history, connection timestamps, DNS queries, or IP addresses.",
    },
    {
      q:
        lang === "zh"
          ? "我可以同时在多少台设备上使用？"
          : "How many devices can I use simultaneously?",
      a:
        lang === "zh"
          ? "免费版支持 1 台设备，专业版支持最多 10 台设备同时在线，企业版支持单个账户下无限制设备。"
          : "Free plan supports 1 device, Pro supports up to 10 devices simultaneously, and Business supports unlimited devices under one account.",
    },
    {
      q: lang === "zh" ? "如果不满意可以退款吗？" : "Can I get a refund?",
      a:
        lang === "zh"
          ? "当然可以。我们提供 30 天无理由退款保证。只需联系客服，我们将在 24 小时内为您办理全额退款。"
          : "Absolutely. We offer a 30-day money-back guarantee with no questions asked. Simply contact our support team and we'll process your refund within 24 hours.",
    },
    {
      q:
        lang === "zh"
          ? "RainbowVPN 支持流媒体平台吗？"
          : "Does RainbowVPN work with streaming services?",
      a:
        lang === "zh"
          ? "支持！RainbowVPN 针对 Netflix、Disney+、YouTube、Hulu、BBC iPlayer 等 100 多种流媒体服务进行了深度优化，服务器实时更新以确保持续畅享。"
          : "Yes! RainbowVPN is optimized for streaming Netflix, Disney+, Hulu, BBC iPlayer, and 100+ other services. Our servers are constantly updated to bypass geo-blocks.",
    },
    {
      q:
        lang === "zh"
          ? "RainbowVPN 使用哪些协议？"
          : "What protocols does RainbowVPN use?",
      a:
        lang === "zh"
          ? "我们支持 WireGuard、OpenVPN、IKEv2/IPSec 以及自主研发的 RainbowTunnel 协议，在任何网络环境下均能提供绝佳的速度与安全平衡。"
          : "We support OpenVPN, WireGuard, IKEv2/IPSec, and our proprietary RainbowTunnel protocol — giving you the best mix of speed and security for every situation.",
    },
  ];

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
          <div className="section-label inline-flex mb-4">{t.heroLabel}</div>
          <h1
            className="text-5xl md:text-7xl font-black mb-4"
            style={{ fontFamily: "var(--font-outfit)", letterSpacing: "-0.02em" }}
          >
            {t.heroTitle1}
            <br />
            <span className="gradient-text">{t.heroTitle2}</span>
          </h1>
          <p
            className="text-xl mb-10"
            style={{ color: "var(--text-secondary)", maxWidth: "500px", margin: "0 auto 40px" }}
          >
            {t.heroDesc}
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className="font-medium text-sm"
              style={{
                color: billing === "monthly" ? "var(--text-primary)" : "var(--text-secondary)",
              }}
            >
              {t.monthly}
            </span>
            <button
              id="billing-toggle"
              className={`toggle ${billing === "yearly" ? "active" : ""}`}
              onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
              aria-label="Toggle billing period"
            />
            <span
              className="font-medium text-sm"
              style={{
                color: billing === "yearly" ? "var(--text-primary)" : "var(--text-secondary)",
              }}
            >
              {t.yearly}
            </span>
            {billing === "yearly" && (
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg, #22c55e, #16a34a)" }}
              >
                {t.save} {savings}%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* ===== PLANS ===== */}
      <section id="pricing-plans" className="pb-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan) => (
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
                      <span className="mb-2" style={{ color: "var(--text-secondary)" }}>
                        {t.perMonth}
                      </span>
                    )}
                  </div>
                  {billing === "yearly" && plan.price.monthly > 0 && (
                    <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                      {t.billedYearly} ${(plan.price.yearly * 12).toFixed(2)}{t.perYear}
                      <span className="ml-2 line-through opacity-60">
                        ${(plan.price.monthly * 12).toFixed(2)}
                      </span>
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
                        style={{
                          color: f.included ? "var(--text-primary)" : "var(--text-secondary)",
                          opacity: f.included ? 1 : 0.5,
                        }}
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
              { icon: "✅", text: t.guarantee1 },
              { icon: "🔒", text: t.guarantee2 },
              { icon: "📵", text: t.guarantee3 },
              { icon: "💳", text: t.guarantee4 },
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
            <div className="section-label inline-flex mb-4">{t.compareLabel}</div>
            <h2
              className="text-4xl font-black"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              {t.compareTitle1}
              <span className="gradient-text"> {t.compareTitle2}</span>
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
              <div className="font-semibold" style={{ color: "var(--text-secondary)" }}>
                {t.feature}
              </div>
              {plans.map((p) => (
                <div
                  key={p.id}
                  className="text-center font-bold"
                  style={{ color: p.featured ? "var(--accent-cyan)" : "var(--text-primary)" }}
                >
                  {p.name}
                </div>
              ))}
            </div>

            {[
              [lang === "zh" ? "支持设备" : "Devices", "1", "10", lang === "zh" ? "不限" : "Unlimited"],
              [lang === "zh" ? "流量配额" : "Bandwidth", "10 GB/mo", lang === "zh" ? "无限制" : "Unlimited", lang === "zh" ? "无限制" : "Unlimited"],
              [lang === "zh" ? "服务器数量" : "Servers", lang === "zh" ? "5 个地区" : "5 locations", "10,000+", "10,000+"],
              [lang === "zh" ? "加密标准" : "Encryption", lang === "zh" ? "标准加密" : "Standard", "AES-256", "AES-256"],
              [lang === "zh" ? "断网保护" : "Kill Switch", "—", "✅", "✅"],
              [lang === "zh" ? "广告拦截" : "Ad Blocker", "—", "✅", "✅"],
              [lang === "zh" ? "双重跳跃" : "Multi-Hop", "—", "—", "✅"],
              [lang === "zh" ? "独立 IP" : "Dedicated IP", "—", "—", "✅"],
              [lang === "zh" ? "技术支持" : "Support", lang === "zh" ? "社区论坛" : "Community", lang === "zh" ? "邮件客服" : "Email", lang === "zh" ? "24/7 专属优先" : "24/7 Priority"],
              [lang === "zh" ? "月均费用" : "Price/mo", lang === "zh" ? "免费" : "Free", "$4.99", "$9.99"],
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
                  <div
                    key={vi}
                    className="text-center text-sm font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
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
            <div className="section-label inline-flex mb-4">{t.faqLabel}</div>
            <h2 className="text-4xl font-black" style={{ fontFamily: "var(--font-outfit)" }}>
              {t.faqTitle1}
              <span className="gradient-text"> {t.faqTitle2}</span>
            </h2>
            <div className="divider mt-4" />
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div key={i} className="faq-item" id={`faq-${i}`}>
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "var(--text-primary)",
                    fontWeight: 600,
                  }}
                >
                  <span>{faq.q}</span>
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-sm transition-all duration-300"
                    style={{
                      background:
                        openFaq === i
                          ? "linear-gradient(135deg, #00d4ff, #8b5cf6)"
                          : "rgba(255,255,255,0.08)",
                      color: "white",
                      transform: openFaq === i ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    className="px-6 pb-5"
                    style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
                  >
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
