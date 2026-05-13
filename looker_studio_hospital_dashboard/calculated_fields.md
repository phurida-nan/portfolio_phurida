# Calculated Fields ใน Looker Studio

สร้าง field เหล่านี้ใน Data Source หรือใน Chart ตามต้องการ

## 1. อัตราครองเตียงรวม

ชื่อ field:

```text
Bed Occupancy Rate
```

สูตร:

```text
SUM(patient_days) / SUM(bed_days_available)
```

ตั้ง Type เป็น `Percent` และ Decimal places เป็น `2`

## 2. อัตราครองเตียงสำหรับแสดงเป็นตัวเลข 0-100

ใช้เมื่ออยากให้กราฟแกน Y เป็น 80, 90, 100 แบบในภาพตัวอย่าง

ชื่อ field:

```text
Bed Occupancy Rate %
```

สูตร:

```text
(SUM(patient_days) / SUM(bed_days_available)) * 100
```

ตั้ง Type เป็น `Number` และ Decimal places เป็น `2`

## 3. จำนวนผู้ป่วยเฉลี่ยต่อวัน

ชื่อ field:

```text
Average Patients per Day
```

สูตร:

```text
SUM(patient_days) / SUM(days_in_month)
```

ตั้ง Type เป็น `Number` และ Decimal places เป็น `0` หรือ `2`

## 4. CMI เฉลี่ย

ชื่อ field:

```text
Average CMI
```

สูตร:

```text
AVG(cmi)
```

ตั้ง Type เป็น `Number` และ Decimal places เป็น `2`

## 5. สีสถานะอัตราครองเตียง

ชื่อ field:

```text
Bed Occupancy Status
```

สูตร:

```text
CASE
  WHEN (SUM(patient_days) / SUM(bed_days_available)) >= 0.9 THEN "สูง"
  WHEN (SUM(patient_days) / SUM(bed_days_available)) >= 0.8 THEN "ตามเป้า"
  ELSE "ต่ำกว่าเป้า"
END
```

ใช้กับ filter, table, หรือ conditional formatting ได้

