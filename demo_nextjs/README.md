# Dự Án HocTuThien (FE Architecture) - v1.0

**Created by:** NghiaDPTWork (Frontend Lead/Developer)

**Date:** March 19, 2026

Chào mừng bạn đến với HocTuThien. Hệ thống này được xây dựng dựa trên 3 trụ cột kỹ thuật: **Clean Architecture**, **Domain-Driven Design (DDD)**, và **SOLID**. Tài liệu này hướng dẫn bạn cách hiểu và đóng góp code cho dự án.

## 1. Triết Lý Kiến Trúc

### A. Clean Architecture

Chúng ta tuân thủ quy tắc **Dependency Rule**: Tầng ngoài phụ thuộc tầng trong. UI hay API chỉ là chi tiết, logic nghiệp vụ là trái tim.

- **Domain (Lõi):** Các định nghĩa thực thể, interface và logic thuần túy.
- **Application (Use Cases):** Chứa các Custom Hooks. Đây là nơi điều phối (Orchestration) dữ liệu.
- **Infrastructure (Adapter):** Nơi gọi API thực tế, cấu hình persistence.
- **Presentation (UI):** Các React Components (Next.js App Router).

### B. Domain-Driven Design (DDD)

Chia dự án theo **Bounded Contexts** (Ngữ cảnh nghiệp vụ). Thay vì chia theo loại file, chúng ta chia theo Module nghiệp vụ:

- `modules/booking`: Quản lý đặt lịch.
- `modules/charity`: Quản lý ủng hộ, đối soát ngân hàng.

---

## 2. Cấu Trúc Thư Mục Chuẩn

```text
src/
├── app/                  # Router & SEO (Server Components)
├── modules/              # Lõi nghiệp vụ (Domain-Driven)
    └── [module-name]/
        ├── domain/       # Types, Entities, Repository Interfaces
        ├── application/  # Custom Hooks (Lớp điều phối)
        ├── infrastructure/ # API Implementation
        └── presentation/ # Components đặc thù của module
```

---

## 3. Demo: Flow Đối Soát Ủng Hộ (Donation Sync)

Phần demo nằm tại `src/modules/charity/`. Đây là luồng đối soát tự động với API bên thứ 3.

---

HocTuThien Team - 2026
