// src/data/portfolioData.js
// ข้อมูลทั้งหมดของ Portfolio — แก้ไขข้อมูลส่วนตัวได้ที่นี่

export const personalInfo = {
  name: "Phurida Nanthaphakphong",
  nameEn: "Your Name",
  title: "นักศึกษาวิศวกรรมชีวการแพทย์",
  titleEn: "Biomedical Engineering Student",
  university: "มหาวิทยาลัยรังสิต",
  universityEn: "Rangsit University",
  faculty: "คณะวิศวกรรมชีวการแพทย์",
  year: "ชั้นปีที่ 3",
  email: "your.email@example.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  bio: "นักศึกษาวิศวกรรมชีวการแพทย์ที่มีความหลงใหลในการพัฒนาเทคโนโลยีทางการแพทย์ เชื่อมโยงระหว่างวิศวกรรมศาสตร์และชีววิทยา เพื่อสร้างนวัตกรรมที่ช่วยชีวิตมนุษย์",
};

export const skills = {
  technical: [
    { name: "MATLAB", level: 80, icon: "🔬" },
    { name: "Python", level: 75, icon: "🐍" },
    { name: "Arduino / IoT", level: 85, icon: "⚡" },
    { name: "Medical Imaging", level: 70, icon: "🧠" },
    { name: "CAD / SolidWorks", level: 65, icon: "⚙️" },
    { name: "Signal Processing", level: 72, icon: "📊" },
  ],
  lab: [
    { name: "Cell Culture", level: 78, icon: "🧫" },
    { name: "PCR / qPCR", level: 70, icon: "🧬" },
    { name: "Microscopy", level: 75, icon: "🔭" },
    { name: "Biosensor Design", level: 68, icon: "📡" },
  ],
  soft: [
    "Critical Thinking", "Teamwork", "Research", "Presentation",
    "Problem Solving", "Scientific Writing",
  ],
};

export const projects = [
  {
    id: 1,
    title: "ECG Signal Monitor",
    titleTh: "เครื่องวัดสัญญาณหัวใจ IoT",
    category: "Hardware",
    description: "อุปกรณ์ตรวจสอบสัญญาณ ECG แบบ real-time ผ่าน Arduino และ Raspberry Pi ส่งข้อมูลผ่าน WiFi ไปยัง dashboard",
    tags: ["Arduino", "Python", "IoT", "Signal Processing"],
    color: "cyan",
    icon: "🫀",
    year: "2024",
    featured: true,
  },
  {
    id: 2,
    title: "MRI Brain Segmentation",
    titleTh: "การแบ่งส่วนภาพ MRI สมอง",
    category: "AI/ML",
    description: "โมเดล Deep Learning สำหรับ segmentation เนื้อสมองจากภาพ MRI โดยใช้ U-Net architecture",
    tags: ["Python", "TensorFlow", "Medical Imaging", "Deep Learning"],
    color: "teal",
    icon: "🧠",
    year: "2024",
    featured: true,
  },
  {
    id: 3,
    title: "Biosensor Platform",
    titleTh: "แพลตฟอร์มไบโอเซนเซอร์",
    category: "Research",
    description: "การออกแบบและทดสอบ electrochemical biosensor สำหรับตรวจวัด glucose ในเลือด",
    tags: ["Electrochemistry", "MATLAB", "Lab Research"],
    color: "emerald",
    icon: "🧪",
    year: "2023",
    featured: false,
  },
  {
    id: 4,
    title: "Patient Data Dashboard",
    titleTh: "แดชบอร์ดข้อมูลผู้ป่วย",
    category: "Software",
    description: "Web application สำหรับแสดงผลและวิเคราะห์ข้อมูลผู้ป่วยในรูปแบบ real-time visualization",
    tags: ["React", "Node.js", "Chart.js", "Healthcare"],
    color: "cyan",
    icon: "📊",
    year: "2023",
    featured: false,
  },
];

export const experience = [
  {
    year: "2024 - ปัจจุบัน",
    title: "นักศึกษาวิจัย",
    org: "ห้องปฏิบัติการชีวการแพทย์ มหาวิทยาลัยรังสิต",
    desc: "วิจัยเกี่ยวกับ biosensor และการประมวลผลสัญญาณชีวภาพ",
    type: "research",
  },
  {
    year: "2024",
    title: "ฝึกงาน",
    org: "โรงพยาบาล / บริษัทเทคโนโลยีทางการแพทย์",
    desc: "ฝึกปฏิบัติด้านวิศวกรรมการแพทย์และการบำรุงรักษาอุปกรณ์",
    type: "work",
  },
  {
    year: "2022 - ปัจจุบัน",
    title: "สมาชิกชมรม",
    org: "ชมรมวิศวกรรมชีวการแพทย์ RSU",
    desc: "จัดกิจกรรมเผยแพร่ความรู้ด้านเทคโนโลยีทางการแพทย์",
    type: "activity",
  },
  {
    year: "2021",
    title: "เข้าศึกษา",
    org: "คณะวิศวกรรมชีวการแพทย์ มหาวิทยาลัยรังสิต",
    desc: "เริ่มต้นการศึกษาด้านวิศวกรรมชีวการแพทย์",
    type: "education",
  },
];

export const stats = [
  { label: "Projects", value: 12, suffix: "+" },
  { label: "Research Papers", value: 3, suffix: "" },
  { label: "Awards", value: 5, suffix: "" },
  { label: "GPA", value: 3.8, suffix: "" },
];
