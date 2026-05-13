# Looker Studio Hospital Dashboard Template

ชุดไฟล์นี้เป็น template สำหรับ dashboard แนวเดียวกับภาพตัวอย่าง โดยเน้น KPI ผู้ป่วยในรายเดือน อัตราครองเตียง วันนอน adjrw และ CMI

## ไฟล์ในชุดนี้

- `hospital_monthly_dashboard.csv` - ไฟล์ข้อมูลตัวอย่างสำหรับ import เข้า Google Sheets หรือ Looker Studio
- `data_dictionary.md` - ความหมายของแต่ละ field และค่า KPI ตัวอย่าง
- `calculated_fields.md` - สูตร calculated fields ที่ต้องสร้างใน Looker Studio
- `dashboard_blueprint.md` - โครงหน้า dashboard, chart, metric, สี และ layout
- `looker_studio_build_guide.md` - ขั้นตอนสร้าง dashboard ใน Looker Studio

## วิธีใช้เร็วที่สุด

1. Import `hospital_monthly_dashboard.csv` เข้า Google Sheets
2. ต่อ Google Sheets เข้ากับ Looker Studio
3. สร้าง calculated fields ตาม `calculated_fields.md`
4. วาง KPI cards และ charts ตาม `dashboard_blueprint.md`

