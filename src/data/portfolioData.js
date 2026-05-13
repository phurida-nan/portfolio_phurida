// src/data/portfolioData.js
// ข้อมูลทั้งหมดของ Portfolio — อ้างอิงจากข้อมูลเดิม

export const personalInfo = {
  name: "Phurida Nanthaphakphong",
  nameEn: "Phurida Nanthaphakphong",
  title: "นักศึกษาวิศวกรรมชีวการแพทย์",
  titleEn: "Biomedical Engineering Student",
  university: "มหาวิทยาลัยรังสิต",
  universityEn: "Rangsit University",
  faculty: "วิทยาลัยวิศวกรรมชีวการแพทย์",
  year: "นักศึกษาชั้นปีที่ 4",
  email: "phurida.np@gmail.com",
  github: "https://github.com/phurida-nan",
  bio: "Final-year Biomedical Engineering student focused on medical devices, clinical evidence, and hospital-ready systems.",
  aboutText1: "Biomedical Engineering student at Rangsit University, graduating in 2026.",
  aboutText2: "Hands-on experience in device prototyping, IRB preparation, competition pitching, and hospital deployment.",
  aboutText3: "Seeking an internship in medical technology, clinical product development, or healthcare innovation.",
  resumeUrl: "./Phurida_CV.pdf",
  avatarUrl: "./assets/images/profile.jpg"
};

export const skills = {
  technical: [
    { name: "Arduino / ESP32", level: 85, icon: "⚡" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "PHP / MySQL", level: 75, icon: "💻" },
    { name: "PWM Control", level: 80, icon: "⚙️" },
  ],
  clinical: [
    { name: "Study Design", level: 85, icon: "📋" },
    { name: "IRB Proposal", level: 80, icon: "📝" },
    { name: "Signal Processing", level: 75, icon: "📈" },
    { name: "Device Calibration", level: 85, icon: "🔧" },
    { name: "Communication", level: 90, icon: "🗣️" },
  ],
  commercial: [
    { name: "Value Proposition", level: 80, icon: "💡" },
    { name: "Market Sizing", level: 75, icon: "📊" },
    { name: "Pitch Presentation", level: 85, icon: "🎤" },
    { name: "Stakeholder Comms", level: 85, icon: "🤝" },
  ],
  therapeutics: [
    "Type 2 Diabetes", "Wound Care", "Cardiovascular Risk", "Photobiomodulation"
  ]
};

export const projects = [
  {
    id: 1,
    title: "Photobiomodulation for Blood Glucose Management",
    titleTh: "อุปกรณ์ลดระดับน้ำตาลในเลือดด้วยแสง PBM",
    category: "Device · Diabetes",
    description: "660 nm PBM wearable for non-invasive glucose management. Built PWM control, clinical protocol, and IRB proposal.",
    tags: ["PWM Control", "LED", "IRB Proposal", "Clinical Protocol"],
    color: "cyan",
    icon: "⚡",
    year: "2026",
    image: "./assets/images/project_pbm.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Chronic Wound Care Control Device",
    titleTh: "อุปกรณ์ควบคุมการดูแลรักษาแผลเรื้อรัง",
    category: "Device · Wound Care",
    description: "Therapeutic control device for chronic wound care. Recognized by clinical and industry judging panels.",
    tags: ["Therapeutic Device", "Hardware", "Wound Care"],
    color: "emerald",
    icon: "🩹",
    year: "2024",
    image: "./assets/images/project_wound.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "HRV-Based Stress Analysis System",
    titleTh: "ระบบวิเคราะห์ความเครียดจาก HRV",
    category: "Analytics · Mental Health",
    description: "Real-time HRV signal processing and ML classification for objective stress analysis.",
    tags: ["Signal Processing", "Machine Learning", "HRV"],
    color: "indigo",
    icon: "🧠",
    year: "2024",
    image: "./assets/images/project_hrv.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Cardiac Risk Prediction System",
    titleTh: "ระบบทำนายความเสี่ยงโรคหัวใจ",
    category: "Analytics · Cardiology",
    description: "Predictive risk platform for early cardiac risk screening and clinical pathway support.",
    tags: ["Risk Prediction", "Data Analysis", "Cardiology"],
    color: "rose",
    icon: "🫀",
    year: "2024",
    image: "./assets/images/project_cardiac.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Medical Equipment Management System (MEMS)",
    titleTh: "ระบบจัดการอุปกรณ์ทางการแพทย์",
    category: "System · Hospital Ops",
    description: "PHP/MySQL platform for equipment borrowing, inventory, and audit trails in hospital operations.",
    tags: ["PHP", "MySQL", "Web App", "Hospital Operations"],
    color: "sky",
    icon: "💻",
    year: "2024",
    image: "./assets/images/project_mems.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Medical Inventory & Calibration Management",
    titleTh: "ระบบจัดการคลังและสอบเทียบอุปกรณ์ทางการแพทย์",
    category: "System · Calibration",
    description: "Calibration inventory and Masterlist system for safer equipment records during hospital deployment.",
    tags: ["Calibration", "Inventory System", "Masterlist"],
    color: "amber",
    icon: "🔧",
    year: "2025",
    image: "./assets/images/project_inventory.jpg",
    featured: false,
  },
];

export const experience = [
  {
    year: "April 2026",
    title: "STL Boost Camp 2026 — 2nd Runner-Up",
    org: "Startup Thailand League",
    desc: "Blood glucose reduction via photobiomodulation wearable device. (Also Demo Days qualified for Central & Eastern region)",
    type: "award",
    image: "./assets/images/award_stlboost2026.jpg",
    badge: "🥈 2nd Runner-Up"
  },
  {
    year: "November 2025",
    title: "Medical Device Calibration Service",
    org: "Samkoke Hospital",
    desc: "Academic calibration service; served as primary Masterlist officer.",
    type: "work",
    image: "./assets/images/award_calib_samkoke.jpg",
    badge: "🔧 Primary Masterlist Officer"
  },
  {
    year: "August 2025",
    title: "Medical Device Association Scholarship",
    org: "35th Medical Equipment Academic Conference",
    desc: "Selected as a scholarship recipient at the national conference.",
    type: "award",
    image: "./assets/images/award_scholarship2025.jpg",
    badge: "🎓 Scholarship"
  },
  {
    year: "July 2025",
    title: "Medical Device Calibration Service",
    org: "Pradhipat Hospital",
    desc: "Provided academic calibration service for medical instruments.",
    type: "work",
    image: "./assets/images/award_calib_pradhipat.jpg",
    badge: "🔧 Calibration Service"
  },
  {
    year: "February 2025",
    title: "I-New Gen Award 2025",
    org: "National Research Council of Thailand (NRCT)",
    desc: "Silver Medal for Chronic wound care control device.",
    type: "award",
    image: "./assets/images/award_inewgen2025.jpg",
    badge: "🥈 Silver Medal"
  },
  {
    year: "June 2024",
    title: "TED Fund 2024 & Smart Start Idea by GSB Startup",
    org: "Funding Bodies",
    desc: "Received ฿100,000 grant from TED Fund for Chronic wound care control device, and ฿50,000 grant from GSB for Non-invasive sugar level measurement cup.",
    type: "award",
    image: "./assets/images/award_tedfund2024.jpg",
    badge: "💰 ฿150K Total Grants"
  },
  {
    year: "February 2024",
    title: "I-New Gen Award 2024 & JIP A Award",
    org: "National Research Council of Thailand (NRCT)",
    desc: "Gold Medal & Best Innovation for ICT for Fingertip blood pressure monitor.",
    type: "award",
    image: "./assets/images/award_inewgen2024.jpg",
    badge: "🥇 Gold Medal"
  },
];

export const stats = [
  { label: "National Awards", value: 6, suffix: "+" },
  { label: "Competition Wins", value: 3, suffix: "" },
  { label: "Hospital Deployments", value: 2, suffix: "" },
  { label: "Key Projects", value: 6, suffix: "" },
];

export const gallery = [
  { img: "./assets/images/award_inewgen2024.jpg", caption: "I-New Gen Award 2024 — Gold Medal" },
  { img: "./assets/images/award_jipa2024.jpg", caption: "JIP A Award — Best Innovation for ICT" },
  { img: "./assets/images/award_tedfund2024.jpg", caption: "TED Fund 2024 — ฿100,000 Grant" },
  { img: "./assets/images/award_smartstart2024.jpg", caption: "Smart Start Idea by GSB — ฿50,000" },
  { img: "./assets/images/award_stl2024.jpg", caption: "Startup Thailand League 2024" },
  { img: "./assets/images/award_inewgen2025.jpg", caption: "I-New Gen Award 2025 — Silver Medal" },
  { img: "./assets/images/award_stlboost2025.jpg", caption: "STL Boost Camp 2025" },
  { img: "./assets/images/award_stl2025.jpg", caption: "Startup Thailand League 2025" },
  { img: "./assets/images/award_scholarship2025.jpg", caption: "Medical Device Association Scholarship 2025" },
  { img: "./assets/images/award_calib_pradhipat.jpg", caption: "Calibration Service — Pradhipat Hospital" },
  { img: "./assets/images/award_calib_samkoke.jpg", caption: "Calibration Service — Samkoke Hospital" },
  { img: "./assets/images/award_stlboost2026.jpg", caption: "STL Boost Camp 2026 — 2nd Runner-Up" },
  { img: "./assets/images/award_stl2026.jpg", caption: "Startup Thailand League 2026 — Demo Days" }
];
