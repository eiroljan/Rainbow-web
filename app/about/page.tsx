"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../components/LanguageContext";
import { translations } from "../translations";

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"mission" | "team" | "timeline">(
    "mission"
  );
  const { lang } = useLanguage();
  const t = translations.about[lang];

  const values = [
    {
      icon: "🔒",
      title: lang === "zh" ? "隐私至上" : "Privacy First",
      desc:
        lang === "zh"
          ? "我们坚信隐私是基本人权。我们构建的一切都将保护您的数据置于首位。"
          : "We believe privacy is a fundamental human right. Everything we build puts your data protection above all else.",
    },
    {
      icon: "🌍",
      title: lang === "zh" ? "开放互联网" : "Open Internet",
      desc:
        lang === "zh"
          ? "开放自由的互联网对创新至关重要。我们致力于消除地域限制与网络审查。"
          : "An open, free internet is essential for democracy and innovation. We fight censorship and geo-restrictions.",
    },
    {
      icon: "🤝",
      title: lang === "zh" ? "透明公开" : "Transparency",
      desc:
        lang === "zh"
          ? "我们发布年度透明度报告，并开源核心安全协议接受公众与专家审计。"
          : "We publish annual transparency reports and open-source our core security protocols for public audit.",
    },
    {
      icon: "⚡",
      title: lang === "zh" ? "技术创新" : "Innovation",
      desc:
        lang === "zh"
          ? "我们的研发团队不断开发下一代高速加密与隧道传输协议。"
          : "Our R&D team constantly develops next-generation encryption and tunneling protocols.",
    },
  ];

  const team = [
    {
      name: lang === "zh" ? "亚历克斯·里维拉" : "Alex Rivera",
      role: lang === "zh" ? "CEO 兼联合创始人" : "CEO & Co-Founder",
      initials: "AR",
      bio:
        lang === "zh"
          ? "前国家密码学者，拥有 15 年以上网络安全实战经验。"
          : "Former NSA cryptographer with 15+ years in cybersecurity.",
    },
    {
      name: lang === "zh" ? "田中幸" : "Yuki Tanaka",
      role: lang === "zh" ? "CTO 兼联合创始人" : "CTO & Co-Founder",
      initials: "YT",
      bio:
        lang === "zh"
          ? "前谷歌工程师，曾主导构建超大规模分布式高可用网络系统。"
          : "Ex-Google engineer who built distributed systems at massive scale.",
    },
    {
      name: lang === "zh" ? "索菲亚·穆勒" : "Sofia Müller",
      role: lang === "zh" ? "安全副总裁" : "VP of Security",
      initials: "SM",
      bio:
        lang === "zh"
          ? "计算机科学博士，专注于高强度网络端对端加密协议。"
          : "PhD in Computer Science, specializing in network encryption protocols.",
    },
    {
      name: lang === "zh" ? "詹姆斯·朴" : "James Park",
      role: lang === "zh" ? "基础设施负责人" : "Head of Infrastructure",
      initials: "JP",
      bio:
        lang === "zh"
          ? "负责管理服务于全球超 5 亿日常活跃用户的全球高算力数据中心。"
          : "Built and managed data centers serving 500M+ daily active users.",
    },
  ];

  const milestones = [
    {
      year: "2018",
      event: lang === "zh" ? "RainbowVPN 创立" : "RainbowVPN Founded",
      detail:
        lang === "zh"
          ? "怀着让每个人都能平等享受隐私保护的愿景启程。"
          : "Started with a mission to make privacy accessible to everyone.",
    },
    {
      year: "2019",
      event: lang === "zh" ? "突破 100 万用户" : "1M Users",
      detail:
        lang === "zh"
          ? "仅用 12 个月便突破了首个百万全球用户里程碑。"
          : "Reached our first million users in just 12 months.",
    },
    {
      year: "2020",
      event: lang === "zh" ? "全球节点扩张" : "Global Expansion",
      detail:
        lang === "zh"
          ? "网络拓展至 50 多个国家，上线超 3,000 台超高速服务器。"
          : "Expanded to 50+ countries with 3,000+ servers.",
    },
    {
      year: "2021",
      event: lang === "zh" ? "1000 万活跃用户" : "10M Users",
      detail:
        lang === "zh"
          ? "全球用户突破千万，全平台客户端全面升级支持。"
          : "Achieved 10 million users and launched our mobile apps.",
    },
    {
      year: "2022",
      event: lang === "zh" ? "权威安全审计" : "Security Audit",
      detail:
        lang === "zh"
          ? "首家通过全球独立安全审计机构 100% 零日志严格认证。"
          : "First independent security audit with 100% no-log certification.",
    },
    {
      year: "2023",
      event: lang === "zh" ? "5000 万全球用户" : "50M Users",
      detail:
        lang === "zh"
          ? "成为全球发展最快、最受信赖的 VPN 服务提供商之一。"
          : "Became the world's fastest-growing VPN provider.",
    },
  ];

  return (
    <div style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      <Navbar />

      {/* ===== PAGE HERO ===== */}
      <section
        id="about-hero"
        className="page-hero relative overflow-hidden"
        style={{ paddingTop: "140px", paddingBottom: "120px" }}
      >
        {/* Background glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(139,92,246,0.6) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div className="container relative z-10 text-center">
          <div className="section-label inline-flex mb-4">{t.heroLabel}</div>
          <h1
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ fontFamily: "var(--font-outfit)", letterSpacing: "-0.02em" }}
          >
            {t.heroTitle1}
            <br />
            <span className="gradient-text">{t.heroTitle2}</span>
          </h1>
          <p
            className="text-xl mx-auto mb-8"
            style={{
              color: "var(--text-secondary)",
              maxWidth: "640px",
              lineHeight: 1.8,
            }}
          >
            {t.heroDesc1}{" "}
            <strong style={{ color: "var(--text-primary)" }}>
              {t.heroDesc2}
            </strong>
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-12 mt-16">
            {[
              { val: "2018", label: t.founded },
              { val: "50M+", label: t.usersProtected },
              { val: "100+", label: t.countries },
              { val: "4.9★", label: t.appRating },
            ].map((s) => (
              <div
                key={s.label}
                className="text-center"
                id={`about-stat-${s.label.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div
                  className="text-3xl font-black"
                  style={{
                    background: "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {s.val}
                </div>
                <div
                  className="text-sm font-medium mt-1"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TABS ===== */}
      <div
        id="about-tabs"
        style={{
          position: "sticky",
          top: "72px",
          zIndex: 500,
          background: "rgba(5,9,21,0.96)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "14px 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "4px",
              padding: "4px",
              borderRadius: "50px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {(["mission", "team", "timeline"] as const).map((tab) => (
              <button
                key={tab}
                id={`about-tab-${tab}`}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "10px 24px",
                  borderRadius: "50px",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  background:
                    activeTab === tab
                      ? "linear-gradient(135deg, #00d4ff, #8b5cf6)"
                      : "transparent",
                  color: activeTab === tab ? "white" : "var(--text-secondary)",
                  border: "none",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {tab === "mission"
                  ? t.missionTab
                  : tab === "team"
                  ? t.teamTab
                  : t.timelineTab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== MISSION & VALUES ===== */}
      {activeTab === "mission" && (
        <section id="mission-values" className="py-32">
          <div className="container">
            {/* Mission statement */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
              <div>
                <div className="section-label inline-flex mb-4">
                  {t.missionLabel}
                </div>
                <h2
                  className="text-4xl font-black mb-8"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {t.missionTitle1}
                  <br />
                  <span className="gradient-text">{t.missionTitle2}</span>
                </h2>
                <p
                  className="text-lg mb-6"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
                >
                  {t.missionDesc1}
                </p>
                <p
                  className="text-lg mb-8"
                  style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}
                >
                  {t.missionDesc2}
                </p>
                <div className="flex gap-4 mt-10">
                  <Link
                    href="/download"
                    className="btn-primary"
                    id="about-download-btn"
                  >
                    <span>{t.getStartedFree}</span>
                  </Link>
                  <Link
                    href="/pricing"
                    className="btn-secondary"
                    id="about-pricing-btn"
                  >
                    <span>{t.viewPlans}</span>
                  </Link>
                </div>
              </div>

              {/* Visual side */}
              <div className="relative flex items-center justify-center">
                <div className="relative w-72 h-72">
                  {/* Shield with rings */}
                  <div
                    className="absolute inset-0 rounded-full animate-spin-slow"
                    style={{ border: "1px dashed rgba(0,212,255,0.2)" }}
                  />
                  <div
                    className="absolute inset-6 rounded-full animate-spin-slow"
                    style={{
                      border: "1px dashed rgba(139,92,246,0.2)",
                      animationDirection: "reverse",
                    }}
                  />
                  <div
                    className="absolute inset-12 rounded-full"
                    style={{
                      background: "rgba(0,212,255,0.05)",
                      border: "1px solid rgba(0,212,255,0.2)",
                    }}
                  />
                  <Image
                    src="/vpn_shield.jpg"
                    alt="RainbowVPN Shield"
                    width={200}
                    height={200}
                    className="absolute top-1/2 left-1/2 rounded-2xl glow-purple"
                    style={{
                      objectFit: "cover",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                </div>

                {/* Floating stat cards */}
                <div
                  className="absolute -top-4 -right-4 glass-card px-4 py-3"
                  style={{ border: "1px solid rgba(0,212,255,0.3)" }}
                >
                  <div className="text-xl font-black gradient-text">AES-256</div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {lang === "zh" ? "高阶加密" : "Encryption"}
                  </div>
                </div>
                <div
                  className="absolute -bottom-4 -left-4 glass-card px-4 py-3"
                  style={{ border: "1px solid rgba(139,92,246,0.3)" }}
                >
                  <div className="text-xl font-black gradient-text">
                    {lang === "zh" ? "零日志" : "Zero Logs"}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {lang === "zh" ? "权威认证" : "Verified"}
                  </div>
                </div>
              </div>
            </div>

            {/* Values */}
            <div className="text-center mb-16">
              <div className="section-label inline-flex mb-4">
                {t.valuesLabel}
              </div>
              <h2
                className="text-4xl font-black"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {t.valuesTitle1}{" "}
                <span className="gradient-text">{t.valuesTitle2}</span>
              </h2>
              <div className="divider mt-4" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="feature-card"
                  id={`value-${i}`}
                  style={{ padding: "40px 36px" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6"
                    style={{
                      background: "rgba(139,92,246,0.1)",
                      border: "1px solid rgba(139,92,246,0.2)",
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {v.title}
                  </h3>
                  <p
                    style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Audit badges */}
            <div className="mt-24 text-center">
              <h3
                className="text-2xl font-bold mb-8"
                style={{ color: "var(--text-primary)" }}
              >
                {t.auditTitle}
              </h3>
              <div className="flex flex-wrap justify-center gap-8">
                {[
                  {
                    label: "Cure53 Audit",
                    badge: lang === "zh" ? "✅ 2023 已通过" : "✅ Passed 2023",
                  },
                  {
                    label: "PwC Verified",
                    badge:
                      lang === "zh" ? "✅ 零日志认证" : "✅ No-Log Policy",
                  },
                  {
                    label: "ISO 27001",
                    badge: lang === "zh" ? "✅ 认证合规" : "✅ Certified",
                  },
                  {
                    label: "SOC 2 Type II",
                    badge: lang === "zh" ? "✅ 审计达标" : "✅ Compliant",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glass-card px-8 py-6 text-center"
                    id={`audit-${item.label.toLowerCase().replace(/\s/g, "")}`}
                  >
                    <div
                      className="font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-sm"
                      style={{ color: "var(--accent-cyan)" }}
                    >
                      {item.badge}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== TEAM ===== */}
      {activeTab === "team" && (
        <section id="team-section" className="py-32">
          <div className="container">
            <div className="text-center mb-20">
              <div className="section-label inline-flex mb-4">{t.teamLabel}</div>
              <h2
                className="text-4xl md:text-5xl font-black"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {t.teamTitle1}{" "}
                <span className="gradient-text">{t.teamTitle2}</span>
              </h2>
              <div className="divider mt-4" />
              <p
                className="mt-4 text-lg"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.teamDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, i) => (
                <div
                  key={member.name}
                  className="team-card"
                  id={`team-member-${i}`}
                >
                  {/* Avatar */}
                  <div
                    className="h-40 flex items-center justify-center"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(139,92,246,0.1))",
                    }}
                  >
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-black text-white"
                      style={{
                        background:
                          "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                      }}
                    >
                      {member.initials}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3
                      className="text-lg font-bold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {member.name}
                    </h3>
                    <div
                      className="text-sm font-medium mb-3"
                      style={{ color: "var(--accent-cyan)" }}
                    >
                      {member.role}
                    </div>
                    <p
                      className="text-sm"
                      style={{
                        color: "var(--text-secondary)",
                        lineHeight: 1.6,
                      }}
                    >
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Join the team */}
            <div
              className="mt-24 rounded-3xl p-16 text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(139,92,246,0.06))",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3
                className="text-3xl font-black mb-4"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {t.joinTitle}{" "}
                <span className="gradient-text">{t.joinHighlight}</span>
              </h3>
              <p className="mb-6" style={{ color: "var(--text-secondary)" }}>
                {t.joinDesc}
              </p>
              <a href="#" className="btn-primary" id="careers-btn">
                <span>{t.joinBtn}</span>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* ===== TIMELINE ===== */}
      {activeTab === "timeline" && (
        <section id="timeline-section" className="py-32">
          <div className="container">
            <div className="text-center mb-20">
              <div className="section-label inline-flex mb-4">
                {t.timelineLabel}
              </div>
              <h2
                className="text-4xl md:text-5xl font-black"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {t.timelineTitle1}
                <span className="gradient-text"> {t.timelineTitle2}</span>
              </h2>
              <div className="divider mt-4" />
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-px"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,212,255,0.6), rgba(139,92,246,0.6))",
                  transform: "translateX(-50%)",
                }}
              />

              {milestones.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative flex items-start gap-8 mb-16 ${
                    i % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                  id={`milestone-${i}`}
                >
                  {/* Content */}
                  <div
                    className={`w-5/12 ${
                      i % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className="glass-card p-8"
                      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="text-3xl font-black mb-2"
                        style={{
                          background:
                            "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      >
                        {m.year}
                      </div>
                      <div
                        className="font-bold text-lg mb-2"
                        style={{ color: "var(--text-primary)" }}
                      >
                        {m.event}
                      </div>
                      <p
                        className="text-sm"
                        style={{
                          color: "var(--text-secondary)",
                          lineHeight: 1.6,
                        }}
                      >
                        {m.detail}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="w-2/12 flex justify-center">
                    <div
                      className="w-5 h-5 rounded-full relative z-10"
                      style={{
                        background:
                          "linear-gradient(135deg, #00d4ff, #8b5cf6)",
                        boxShadow: "0 0 15px rgba(0,212,255,0.5)",
                        marginTop: "24px",
                      }}
                    />
                  </div>

                  {/* Empty side */}
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
