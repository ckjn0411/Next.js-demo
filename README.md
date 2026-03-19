# Dự Án HocTuThien (FE Architecture) - v1.0

**Created by:** NghiaDPTWork (Frontend Lead/Developer)

**Date:** March 19, 2026

Chào mừng bạn đến với HocTuThien. Hệ thống này được xây dựng dựa trên 3 trụ cột kỹ thuật: **Clean Architecture**, **Domain-Driven Design (DDD)**, và **SOLID**. Tài liệu này hướng dẫn bạn cách hiểu và đóng góp code cho dự án.

## 1. Triết Lý Kiến Trúc

### A. Clean Architecture

Chúng ta tuân thủ quy tắc **Dependency Rule**: Tầng ngoài phụ thuộc tầng trong. UI hay API chỉ là chi tiết, logic nghiệp vụ là trái tim.

- **Domain (Lõi):** Các định nghĩa thực thể, interface và logic thuần túy. Không import `axios`, `react` hay bất kỳ thư viện ngoài nào ở đây.
- **Application (Use Cases):** Chứa các Custom Hooks. Đây là nơi điều phối (Orchestration) dữ liệu.
- **Infrastructure (Adapter):** Nơi gọi API thực tế, cấu hình persistence.
- **Presentation (UI):** Các React Components (Next.js App Router).

### B. Domain-Driven Design (DDD)

Chia dự án theo **Bounded Contexts** (Ngữ cảnh nghiệp vụ). Thay vì chia theo loại file (folder hooks riêng, folder components riêng), chúng ta chia theo Module nghiệp vụ:

- `modules/booking`: Quản lý đặt lịch.
- `modules/charity`: Quản lý ủng hộ, đối soát ngân hàng.
- `modules/mentor`: Quản lý hồ sơ mentor.

### C. Nguyên lý SOLID (Pragmatic)

- **S (Single Responsibility):** Mỗi Hook/Component chỉ làm một việc.
- **D (Dependency Inversion):** UI gọi Interface thông qua Hook, không gọi trực tiếp API.
- **O (Open/Closed):** Dùng React Composition để mở rộng UI thay vì dùng nhiều biến flag.

---

## 2. Cấu Trúc Thư Mục Chuẩn

```text
src/
├── app/                  # Router & SEO (Server Components)
├── core/                 # Shared Components (Button, Input, Layout)
└── modules/              # Lõi nghiệp vụ (Domain-Driven)
    └── [module-name]/
        ├── domain/       # Types, Entities, Repository Interfaces
        ├── application/  # Custom Hooks (Lớp điều phối)
        ├── infrastructure/ # API Implementation (Axios/Fetch)
        └── presentation/ # Components đặc thù của module
```

---

## 3. Quy Trình Phát Triển Một Feature

1.  **Bản vẽ:** Định nghĩa Types/Interfaces trong `domain/`.
2.  **Cung cấp dữ liệu:** Implement API call trong `infrastructure/`.
3.  **Xử lý logic:** Viết Custom Hook trong `application/`.
4.  **Hiển thị:** Tạo React Component trong `presentation/` và nhúng vào `app/`.

---

## 4. Demo: Flow Đối Soát Ủng Hộ (Donation Sync)

Đây là phần khó nhất: Liên kết giữa hệ thống Booking nội bộ và API của Tổ chức từ thiện bên ngoài để xác minh tiền đã về hay chưa. Xem chi tiết tại `src/modules/charity/`.

---
