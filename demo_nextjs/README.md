# Tài liệu Dự án Next.js Routing Demo

Dự án mẫu nhằm trình bày và minh họa các kỹ thuật định tuyến (Routing) nâng cao trong môi trường **Next.js App Router**. Đây là tài liệu tóm lược cấu trúc và các thành phần cốt lõi của ứng dụng.

## Mục tiêu Dự án

Ứng dụng được thiết kế để cung cấp cái nhìn thực tiễn về cách tổ chức mã nguồn và quản lý điều hướng trong các ứng dụng web phức tạp, tập trung vào các khái niệm chính sau:

1. **File-system Based Routing**: Cơ chế tự động khởi tạo URL dựa trên cấu trúc thư mục chứa các tệp `page.js` và `layout.js`.
2. **Cơ chế Điều hướng (Navigation)**: Sử dụng thành phần `Link` và hook `useRouter` để tối ưu hóa việc chuyển đổi trang tại máy khách (Client-side).
3. **Định tuyến Động (Dynamic Routing)**: Phương pháp xử lý tham số trên URL thông qua tệp tin `[id]`, phục vụ cho các trang chi tiết sản phẩm hoặc bài viết.
4. **Định tuyến Song song và Chặn (Parallel & Intercepting Routes)**: Kỹ thuật hiển thị nhiều trang cùng lúc hoặc tạo các modal overlay mà vẫn bảo toàn ngữ cảnh của trang hiện tại.
5. **Nhóm Định tuyến (Route Groups)**: Quản lý logic mã nguồn bằng cách sử dụng thư mục đóng ngoặc đơn `(auth)` mà không làm thay đổi cấu trúc URL.

## Công nghệ Tích hợp

- **Framework**: Next.js 16 (App Router & Turbopack)
- **Thư viện Giao diện**: React 19
- **Công cụ Styling**: Tailwind CSS v4
- **Ngôn ngữ**: TypeScript

## Hướng dẫn Khởi chạy

Để chạy dự án này trên môi trường cục bộ, vui lòng thực hiện các bước sau:

1. **Cài đặt các gói phụ thuộc:**
   ```bash
   npm install
   ```

2. **Chạy môi trường phát triển (Development Mode):**
   ```bash
   npm run dev
   ```

3. **Truy cập ứng dụng:**
   Mở trình duyệt và truy cập liên kết [http://localhost:3000](http://localhost:3000).

## Phân tích Cấu trúc Thư mục

```text
app/
├── layout.tsx     # Định nghĩa khung giao diện chung của ứng dụng
├── page.tsx       # Trang chủ chính của ứng dụng (Root Page)
├── (auth)/        # Nhóm quản lý logic xác thực (Đăng nhập/Đăng ký)
├── dashboard/     # Ví dụ minh họa về lồng ghép Layout và Page
├── product/       # Minh họa về kỹ thuật Dynamic Route [id]
└── feed/          # Minh họa về Parallel & Intercepting Routes
```

---
*Tài liệu này được biên soạn cho mục đích đào tạo và trình bày kỹ thuật.*
