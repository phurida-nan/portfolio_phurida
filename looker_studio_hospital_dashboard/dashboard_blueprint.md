# Blueprint: Hospital IPD Dashboard

แนวทางนี้ออกแบบให้ใกล้กับภาพตัวอย่าง: KPI cards ด้านบน และกราฟรายเดือน 2 กล่องด้านล่าง

## Page 1: ภาพรวมผู้ป่วยใน

Canvas:

- ขนาดแนะนำ: 1366 x 768 หรือ 16:9
- พื้นหลัง: `#E6E4D9`
- Header bar สีฟ้า: `#42C7D6`
- KPI card สีฟ้าเข้ม: `#1E73E8`
- KPI card สีฟ้าอ่อน: `#AEEAF0`
- Bar chart สีเขียว: `#B9CF7A`
- Line chart สีน้ำตาล: `#8A6A5A`
- Target line สีส้ม: `#F28C28`

## KPI Cards ด้านบน

1. จำนวนผู้ป่วยที่รับไว้ (ราย)
   - Metric: `SUM(admitted_patients)`
   - Format: Number, 0 decimals

2. จำนวนวันนอน (วัน)
   - Metric: `SUM(patient_days)`
   - Format: Number, 0 decimals

3. อัตราครองเตียง
   - Metric: `Bed Occupancy Rate %`
   - Format: Number, 2 decimals

4. sum adjrw
   - Metric: `SUM(adjrw)`
   - Format: Number, 2 decimals

5. CMI
   - Metric: `Average CMI`
   - Format: Number, 2 decimals

6. จำนวนผู้ป่วยเฉลี่ยต่อวัน (ราย)
   - Metric: `Average Patients per Day`
   - Format: Number, 0 decimals

7. จำนวนผู้ป่วยจำหน่าย (ราย)
   - Metric: `SUM(discharged_patients)`
   - Format: Number, 0 decimals

## Chart 1: อัตราการครองเตียง รายเดือน

Chart type:

```text
Time series หรือ Line chart
```

Dimension:

```text
month_date
```

Metrics:

```text
Bed Occupancy Rate %
target_bed_occupancy_rate_pct
```

Sorting:

```text
month_date Ascending
```

Style:

- เปิด Data labels
- เส้นอัตราครองเตียง: สีน้ำตาล
- เส้นเป้าหมาย: สีส้ม และตั้ง label เป็น `เป้าหมาย (80)`
- Y-axis เริ่มที่ 0 และตั้ง max ประมาณ 150 เพื่อรองรับเดือนที่เกิน 100%

## Chart 2: วันนอนและผู้ป่วยเฉลี่ย รายเดือน

Chart type:

```text
Combo chart
```

Dimension:

```text
month_date
```

Metrics:

```text
SUM(patient_days)
Average Patients per Day
```

Style:

- `SUM(patient_days)` เป็น Bar สีเขียว
- `Average Patients per Day` เป็น Line สีน้ำตาล
- เปิด Data labels ของแท่ง
- เปิด Legend ด้านบน

## Controls

เพิ่ม filter controls:

- Date range control: ใช้ `month_date`
- Drop-down list: `fiscal_year`

