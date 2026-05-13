# วิธีนำเข้า Looker Studio

## 1. เตรียมข้อมูลใน Google Sheets

1. เปิด Google Sheets
2. สร้างชีตใหม่
3. Import ไฟล์ `hospital_monthly_dashboard.csv`
4. ตรวจสอบว่า `month_date` ถูกอ่านเป็น Date
5. ตั้งชื่อชีต เช่น `hospital_monthly_dashboard`

## 2. ต่อข้อมูลเข้า Looker Studio

1. เปิด Looker Studio
2. Create > Report
3. Add data > Google Sheets
4. เลือกไฟล์ Google Sheets ที่ import ไว้
5. เลือก worksheet `hospital_monthly_dashboard`
6. กด Add

## 3. ตั้งค่า field

ในหน้า Data Source:

- `month_date`: Type = Date
- `month_label_th`: Type = Text
- `fiscal_year`: Type = Number
- `patient_days`, `admitted_patients`, `discharged_patients`, `adjrw`: Aggregation = Sum
- `cmi`: Aggregation = Average
- `target_bed_occupancy_rate_pct`: Aggregation = Average

จากนั้นสร้าง calculated fields ตามไฟล์ `calculated_fields.md`

## 4. สร้าง KPI Cards

ใช้ Scorecard ทั้งหมด 7 ใบ:

- `SUM(admitted_patients)`
- `SUM(patient_days)`
- `Bed Occupancy Rate %`
- `SUM(adjrw)`
- `Average CMI`
- `Average Patients per Day`
- `SUM(discharged_patients)`

ตั้งสีพื้นหลังของ card หลักเป็นน้ำเงินเข้ม และ card `adjrw`, `CMI` เป็นฟ้าอ่อนเพื่อให้เหมือนภาพตัวอย่าง

## 5. สร้างกราฟซ้าย

ใช้ Line chart:

- Dimension: `month_date`
- Metrics: `Bed Occupancy Rate %`, `target_bed_occupancy_rate_pct`
- เปิด Data labels
- ตั้งเส้นเป้าหมายเป็นสีส้ม

## 6. สร้างกราฟขวา

ใช้ Combo chart:

- Dimension: `month_date`
- Bar metric: `SUM(patient_days)`
- Line metric: `Average Patients per Day`
- เปิด Data labels
- ตั้งแท่งเป็นสีเขียว และเส้นเป็นสีน้ำตาล

## 7. การแก้ข้อมูลจริง

ถ้าจะใช้ข้อมูลจริง ให้แก้เฉพาะไฟล์ CSV หรือ Google Sheets โดยคงชื่อ column เดิมไว้:

```text
month_date
month_label_th
fiscal_year
fiscal_month_order
days_in_month
bed_count
bed_days_available
admitted_patients
patient_days
bed_occupancy_rate_pct
avg_patients_per_day
discharged_patients
adjrw
cmi
target_bed_occupancy_rate_pct
```

ถ้าเปลี่ยนชื่อ column ต้องกลับไปแก้ calculated fields ใน Looker Studio ด้วย

