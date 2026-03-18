# HocTuThien (Học Từ Thiện) - Next.js Project Architecture

Dự án **Học Từ Thiện (HocTuThien)** là nền tảng kết nối Mentoring và Thiện nguyện, giúp Mentee tìm được Mentor chất lượng, đồng thời chuyển hóa giá trị buổi học thành các khoản đóng góp minh bạch cho cộng đồng.

---

## 🏛️ Kiến trúc Hệ thống (SOLID & DDD)

Dự án áp dụng mô hình chuyên nghiệp để đảm bảo tính mở rộng và dễ bảo trì cho các tính năng phức tạp như Đối soát thanh toán, Quản lý lịch dạy và Phê duyệt hồ sơ.

### 1. SOLID Principles Applied

- **Single Responsibility (S):** Tách biệt logic xử lý (Hooks), gọi API (Services), và Giao diện (Components).
- **Open/Closed (O):** Các thành phần như `Button`, `Input` trong `src/shared/components` cho phép mở rộng kiểu dáng qua props mà không cần thay đổi code lõi.
- **Dependency Inversion (D):** Các hooks trong `domains/` đóng vai trò trung gian cung cấp dữ liệu cho `app/` (vùng entry-point).

### 2. Domain-Driven Design (DDD)

Cấu trúc được tổ chức theo nghiệp vụ chính của Học Từ Thiện:

```text
src/
├── app/                    # Routing & Pages (Next.js App Router)
│   ├── (auth)/             # Route groups cho Login/Register
│   ├── (mentoring)/        # Trang Mentor, Booking, Review
│   ├── (charity)/          # Trang các chiến dịch gây quỹ
│   └── api/                # Backend internal logic (Next.js API Routes)
├── domains/                # CHỨA TOÀN BỘ LOGIC NGHIỆP VỤ (Core)
│   ├── auth/               # Xác thực người dùng (Google Login)
│   ├── user/               # Quản lý Profile (Mentee/Mentor) & Kích hoạt tài khoản
│   ├── mentoring/          # Quản lý Booking, Lịch rảnh, Đánh giá Mentor
│   └── charity/            # Đối soát donation, Quản lý quỹ/chiến dịch gây quỹ
├── shared/                 # Thành phần dùng chung toàn dự án
│   ├── components/         # Common UI (Button, Modal, Layout)
│   ├── hooks/              # useDebounce, useLocalStorage...
│   ├── libs/               # Axios instance, Prisma client, Google Auth lib
│   └── constants/          # Message constants, API routes, Configs
└── styles/                 # Global styles (Tailwind CSS)
```

---

## 🛡️ Luồng Nghiệp Vụ Chính (Business Flow)

### 1. Activation Flow (Kích hoạt tài khoản)

- Mentee đăng ký -> Chuyển khoản phí kích hoạt -> Hệ thống tự động kích hoạt để có quyền booking các buổi học có phí.

### 2. Mentoring & Booking Flow

- Mentee tìm Mentor -> Đặt lịch (chọn slot trống) -> Mentor nhận thông báo -> Thực hiện buổi học.
- Điều kiện booking: Buổi học 0đ (không cần kích hoạt), Buổi học có phí (phải đã kích hoạt tài khoản).

### 3. Donation & Payment Flow

- Sau buổi học, Mentee quyên góp vào Quỹ thiện nguyện -> Hệ thống đối soát giao dịch dựa trên cú pháp chuyển khoản -> Cập nhật trạng thái buổi học là "Hoàn tất".

---

## 🛠️ Hướng dẫn Setup & Quy tắc Code

### Quy tắc đặt tên và cấu trúc file trong Domain:

Mỗi folder trong `domains/` nên có:

- `components/`: UI đặc thù của domain (ví dụ: `MentorCard.tsx`).
- `hooks/`: Logic nghiệp vụ (ví dụ: `useBooking.ts`).
- `services/`: Nơi gọi API/DB (ví dụ: `bookingService.ts`).
- `models/`: Interface/Types (ví dụ: `booking.interface.ts`).
- `index.ts`: Export Public API cho domain đó.

### Chạy dự án:

```bash
npm install
npm run dev
```

---

_Dự án được khởi tạo và phát triển bởi NghiaDPTWork._
