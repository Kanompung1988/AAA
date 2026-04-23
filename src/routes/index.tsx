import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ประกาศผลสอบ A-Level TCAS69 - mytcas.com" },
      {
        name: "description",
        content: "หน้ารายละเอียดผลสอบ A-Level TCAS69 พร้อมคะแนนรายวิชาทั้ง 9 วิชา",
      },
    ],
  }),
  component: Index,
});

const subjects = [
  { no: 1, name: "Math1 คณิตศาสตร์ประยุกต์ 1", code: "61", score: "83.000" },
  { no: 2, name: "Math2 คณิตศาสตร์ประยุกต์ 2", code: "62", score: "ขาดสอบ" },
  { no: 3, name: "Sci วิทยาศาสตร์ประยุกต์", code: "63", score: "ขาดสอบ" },
  { no: 4, name: "Phy ฟิสิกส์", code: "64", score: "46.000" },
  { no: 5, name: "Chem เคมี", code: "65", score: "42.500" },
  { no: 6, name: "Bio ชีววิทยา", code: "66", score: "72.000" },
  { no: 7, name: "Soc สังคมศึกษา", code: "70", score: "46.000" },
  { no: 8, name: "Thai ภาษาไทย", code: "81", score: "60.000" },
  { no: 9, name: "Eng ภาษาอังกฤษ", code: "82", score: "85.000" },
];

const NAV_ITEMS = [
  {
    label: "หน้าแรก",
    title: "TCAS69",
    href: "https://student.mytcas.com/",
    icon: (
      <img
        src="https://student.mytcas.com/assets/img/icon.svg"
        alt="TCAS69"
        width={32}
        height={32}
      />
    ),
    hasBg: false,
    isLogo: true,
  },
  {
    label: "เข้าสู่ระบบ",
    title: "เข้าสู่ระบบ",
    href: "https://student.mytcas.com/login",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2zm0 12c-5.33 0-8 2.67-8 4v2h16v-2c0-1.33-2.67-4-8-4z"/>
      </svg>
    ),
    hasBg: true,
    isLogo: false,
  },
  {
    label: "ข้อมูลหลักสูตร",
    title: "ข้อมูลหลักสูตร",
    href: "https://student.mytcas.com/courses",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path d="M 24 6.0117188 C 22.96575 6.0117188 21.932156 6.2355937 20.972656 6.6835938 L 2.8652344 15.138672 C 2.3372344 15.384672 2 15.916047 2 16.498047 C 2 17.080047 2.3372344 17.611422 2.8652344 17.857422 L 20.972656 26.3125 C 21.949656 26.7685 22.974 26.996094 24 26.996094 C 25.026 26.996094 26.051344 26.7685 27.027344 26.3125 L 34 23.056641 L 34 35.503906 A 2.5 2.5 0 0 0 35.5 40 A 2.5 2.5 0 0 0 37 35.501953 L 37 21.835938 A 1.50015 1.50015 0 0 0 36.759766 20.765625 A 1.50015 1.50015 0 0 0 36.685547 20.664062 A 1.50015 1.50015 0 0 0 35.914062 20.138672 A 1.50015 1.50015 0 0 0 35.910156 20.136719 L 26.267578 15.666016 C 26.100483 15.481771 26 15.245683 26 14.998047 C 26 14.857047 26.03075 14.715078 26.09375 14.580078 C 26.32475 14.078078 26.921875 13.86175 27.421875 14.09375 L 37.857422 18.931641 C 38.554422 19.254641 39 19.953656 39 20.722656 L 45.134766 17.857422 C 45.154766 17.848422 45.160734 17.839078 45.177734 17.830078 C 45.465734 17.683078 45.712375 17.448813 45.859375 17.132812 C 46.209375 16.381813 45.884766 15.488672 45.134766 15.138672 L 27.027344 6.6835938 C 26.067844 6.2355937 25.03425 6.0117187 24 6.0117188 z M 10 24.396484 L 10 34.529297 C 10 36.678297 11.243969 38.636625 13.167969 39.515625 C 16.826969 41.186625 20.345875 42 23.921875 42 L 24 42 L 24.005859 42 C 26.723859 41.99 29.523422 41.503125 32.232422 40.578125 C 31.473422 39.773125 31 38.694 31 37.5 C 31 36.437 31.384 35.473125 32 34.703125 L 32 27.197266 L 27.873047 29.123047 C 26.635047 29.702047 25.332 29.996094 24 29.996094 C 22.668 29.996094 21.365953 29.702047 20.126953 29.123047 L 10 24.396484 z" fill="currentColor"></path>
      </svg>
    ),
    hasBg: false,
    isLogo: false,
  },
  {
    label: "คู่มือการใช้งาน",
    title: "คู่มือการใช้งาน",
    href: "https://student.mytcas.com/manual",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
        <path d="M 13.5 4 C 10.467 4 8 6.467 8 9.5 L 8 36 L 8 37.5 L 8 38.5 C 8 41.519774 10.480226 44 13.5 44 L 39.5 44 A 1.50015 1.50015 0 1 0 39.5 41 L 13.5 41 C 12.273237 41 11.277238 40.152347 11.050781 39 L 39.5 39 C 40.329 39 41 38.329 41 37.5 L 41 9.5 C 41 6.467 38.533 4 35.5 4 L 35 4 L 35 20.5 C 35 21.029 34.720625 21.519062 34.265625 21.789062 C 34.029625 21.929063 33.765 22 33.5 22 C 33.253 22 33.00525 21.938406 32.78125 21.816406 L 28 19.207031 L 23.21875 21.816406 C 22.75475 22.070406 22.191375 22.060063 21.734375 21.789062 C 21.279375 21.520063 21 21.029 21 20.5 L 21 4 L 13.5 4 z M 24 4 L 24 17.972656 L 27.28125 16.183594 C 27.50425 16.061594 27.753 16 28 16 C 28.247 16 28.49575 16.061594 28.71875 16.183594 L 32 17.972656 L 32 4 L 24 4 z" fill="currentColor"></path>
      </svg>
    ),
    hasBg: false,
    isLogo: false,
  },
];

/* ── Top Navbar ───────────────────────────────────── */
function TopNav() {
  return (
    <nav
      aria-label="เมนูหลัก"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
        zIndex: 30,
      }}
    >
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
        alignItems: "center",
        justifyItems: "stretch",
        padding: "6px 0",
      }}>
        {NAV_ITEMS.map((item, index) => (
          <div
            key={item.label}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              borderRight: index < NAV_ITEMS.length - 1 ? "1px solid #e0e0e0" : "none",
            }}
          >
            <a
              href={item.href}
              title={item.title}
              target={item.isLogo ? undefined : "_blank"}
              rel={item.isLogo ? undefined : "noopener noreferrer"}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "6px 12px",
                textDecoration: "none",
                transition: "opacity 0.2s ease",
                cursor: "pointer",
              }}
            >
              {/* Icon container */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 24,
                  height: 24,
                  borderRadius: item.hasBg ? 6 : 0,
                  backgroundColor: item.hasBg ? "#00A0A9" : "transparent",
                  color: item.hasBg ? "#fff" : "#006B80",
                  marginBottom: 2,
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              {/* Label */}
              <span
                style={{
                  fontSize: "9px",
                  fontWeight: 500,
                  color: "#003D52",
                  textAlign: "center",
                  lineHeight: 1.1,
                  maxWidth: "60px",
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                {item.label}
              </span>
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
}

/* ── Subject card ──────────────────────────────── */
function SubjectCard({ subject }: { subject: (typeof subjects)[number] }) {
  const isAbsent = subject.score === "ขาดสอบ";

  return (
    <div className="xm-box" style={{
      position: "relative",
      border: "1px solid #5b87d6",
      borderRadius: 8,
      backgroundColor: "#fff",
      overflow: "hidden",
      marginBottom: 0,
    }}>
      {/* Triangle number badge — top-left CSS triangle */}
      <div
        className="num"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "32px 32px 0 0",
          borderColor: "#5b87d6 transparent transparent transparent",
        }}
      />
      <b style={{
        position: "absolute",
        left: 4,
        top: 3,
        fontSize: 11,
        fontWeight: 700,
        color: "#fff",
        lineHeight: 1,
        zIndex: 1,
      }}>
        {subject.no}
      </b>

      {/* Content list matching real site structure */}
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        <li style={{ padding: "10px 12px 4px 40px" }}>
          <span style={{ color: "#191e23", fontSize: "clamp(12px, 3vw, 14px)" }}>ชื่อวิชา </span>
          <b style={{ color: "#191e23", fontSize: "clamp(12px, 3vw, 14px)" }}>{subject.name}</b>
        </li>
        <li style={{ padding: "0 12px 10px 40px" }}>
          <span style={{ color: "#191e23", fontSize: "clamp(12px, 3vw, 14px)" }}>รหัสวิชา </span>
          <b style={{ color: "#191e23", fontSize: "clamp(12px, 3vw, 14px)" }}>{subject.code}</b>
        </li>
        <li className="score" style={{
          borderTop: "1px solid #5b87d6",
          display: "grid",
          gridTemplateColumns: "1fr auto",
        }}>
          <dl style={{ margin: 0, padding: 0, display: "contents" }}>
            <dt style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 12px",
              fontSize: "clamp(11px, 2.5vw, 13px)",
              color: "#191e23",
              margin: 0,
            }}>
              คะแนนที่ได้ / คะแนนเต็ม
            </dt>
            <dd style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 100,
              padding: "8px 12px",
              backgroundColor: isAbsent ? "#eef2f9" : "#eef2f9",
              margin: 0,
            }}>
              <strong style={{
                fontSize: "clamp(11px, 2.5vw, 13px)",
                fontWeight: 600,
                color: "#556eda",
              }}>
                {subject.score}
              </strong>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  );
}

/* ── Page ──────────────────────────────────────── */
function Index() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <TopNav />

      <main style={{ minHeight: "100vh", paddingTop: 50 }}>
        {/* Header */}
        <section style={{ textAlign: "center", padding: "24px 12px 12px", position: "relative" }}>
          {/* Decorative wave */}
          <svg
            viewBox="0 0 1200 40"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: -40,
              left: 0,
              right: 0,
              width: "100%",
              height: "40px",
              display: "block",
            }}
          >
            {/* Main wave path */}
            <path
              d="M0,15 Q150,5 300,15 T600,15 T900,15 T1200,15 L1200,40 L0,40 Z"
              fill="#0088AA"
            />

            {/* Second wave layer */}
            <path
              d="M0,20 Q200,10 400,20 T800,20 T1200,20 L1200,40 L0,40 Z"
              fill="#0066BB"
              opacity="0.8"
            />

            {/* Third wave layer */}
            <path
              d="M0,25 Q250,15 500,25 T1000,25 T1200,25 L1200,40 L0,40 Z"
              fill="#6633FF"
              opacity="0.6"
            />

            {/* Accent dots */}
            <circle cx="300" cy="18" r="2" fill="#00FFCC" opacity="0.7" />
            <circle cx="600" cy="22" r="1.5" fill="#FF00FF" opacity="0.6" />
            <circle cx="900" cy="20" r="2" fill="#00FF99" opacity="0.5" />
          </svg>

          <img
            src="/tcas69-logo.svg"
            alt="mytcas.com TCAS69"
            style={{ margin: "0 auto", width: "clamp(140px, 50vw, 200px)", height: "auto", display: "block" }}
          />
          <h1 style={{
            marginTop: 12,
            fontSize: "clamp(20px, 6vw, 26px)",
            fontWeight: 700,
            color: "#191e23",
          }}>
            ประกาศผลสอบ A-Level
          </h1>
        </section>

        {/* Card */}
        <section style={{ maxWidth: 780, margin: "0 auto", padding: "0 12px 20px" }}>
          <div style={{
            borderRadius: 8,
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}>
            {/* Blue header */}
            <h2 style={{
              backgroundColor: "#5b87d6",
              color: "#fff",
              textAlign: "center",
              margin: 0,
              padding: "12px 16px",
              fontSize: "clamp(14px, 4vw, 16px)",
              fontWeight: 600,
            }}>
              รายละเอียดผลสอบ
            </h2>

            {/* ID + count */}
            <div style={{ textAlign: "center", padding: "16px 12px 12px" }}>
              <p style={{ margin: 0, fontSize: "clamp(13px, 3vw, 15px)", fontWeight: 500, color: "#191e23" }}>
                เลขประจำตัวประชาชน&nbsp;&nbsp;••••••••5147
              </p>
              <p style={{ margin: "6px 0 0", fontSize: "clamp(13px, 3vw, 15px)", fontWeight: 500, color: "#191e23" }}>
                ผลสอบจำนวน 9 วิชา
              </p>
            </div>

            {/* Subject list */}
            <div style={{ padding: "0 12px 20px", display: "flex", flexDirection: "column", gap: 12 }}>
              {subjects.map((subject) => (
                <SubjectCard key={subject.code} subject={subject} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
