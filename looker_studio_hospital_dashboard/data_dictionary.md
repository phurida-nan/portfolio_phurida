# Data Dictionary สำหรับ Looker Studio

ใช้ไฟล์ `hospital_monthly_dashboard.csv` เป็น source หลัก โดยตั้ง `month_date` เป็น Date field และใช้ `month_label_th` เป็น label เดือนภาษาไทยบนกราฟ

| Field | ชื่อแสดงผลภาษาไทย | Type ใน Looker Studio | Aggregation | ความหมาย |
|---|---|---:|---:|---|
| `month_date` | เดือน | Date | None | วันที่ต้นเดือน ใช้เป็น date dimension |
| `month_label_th` | เดือนภาษาไทย | Text | None | ป้ายเดือน เช่น ต.ค. 2024 |
| `fiscal_year` | ปีงบประมาณ | Number | None | ปีงบประมาณไทย |
| `fiscal_month_order` | ลำดับเดือนงบประมาณ | Number | None | ใช้ sort เดือน ต.ค. ถึง ก.ย. |
| `days_in_month` | จำนวนวันในเดือน | Number | Sum | จำนวนวันตามปฏิทิน |
| `bed_count` | จำนวนเตียง | Number | Average | จำนวนเตียงที่ใช้คำนวณ |
| `bed_days_available` | จำนวนวันเตียงที่เปิดให้บริการ | Number | Sum | จำนวนเตียง x จำนวนวันในเดือน |
| `admitted_patients` | จำนวนผู้ป่วยที่รับไว้ (ราย) | Number | Sum | ผู้ป่วยรับไว้รายเดือน |
| `patient_days` | จำนวนวันนอน (วัน) | Number | Sum | จำนวนวันนอนรวม |
| `bed_occupancy_rate_pct` | อัตราครองเตียง | Number / Percent | Average หรือ Calculated | อัตราครองเตียงรายเดือน หน่วยเป็นเปอร์เซ็นต์ |
| `avg_patients_per_day` | จำนวนผู้ป่วยเฉลี่ยต่อวัน (ราย) | Number | Average หรือ Calculated | วันนอน / จำนวนวันในเดือน |
| `discharged_patients` | จำนวนผู้ป่วยจำหน่าย (ราย) | Number | Sum | ผู้ป่วยจำหน่ายรายเดือน |
| `adjrw` | sum adjrw | Number | Sum | Adjusted Relative Weight รวม |
| `cmi` | CMI | Number | Average | Case Mix Index |
| `target_bed_occupancy_rate_pct` | เป้าหมายอัตราครองเตียง | Number | Average | เส้นเป้าหมาย เช่น 80% |

## KPI ตัวอย่างจากข้อมูลชุดนี้

| KPI | ค่า |
|---|---:|
| จำนวนผู้ป่วยที่รับไว้ | 3,523 ราย |
| จำนวนวันนอน | 11,696 วัน |
| จำนวนผู้ป่วยเฉลี่ยต่อวัน | 32.04 ราย |
| จำนวนผู้ป่วยจำหน่าย | 3,167 ราย |
| sum adjrw | 7,334.79 |
| CMI เฉลี่ย | 1.29 |
| อัตราครองเตียงรวมจากวันนอน/วันเตียง | 89.67% |

