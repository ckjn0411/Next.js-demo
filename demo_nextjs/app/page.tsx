export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">1. Hệ thống Routing dựa trên File-system</h1>
      <p>Chào mừng bạn đến với ứng dụng Demo hệ thống Routing trong Next.js App Router.</p>
      
      <div className="bg-gray-100 p-6 rounded-lg dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4">Các tính năng bạn có thể thử:</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>File-system Routing & Navigation:</strong> Bấm vào menu "Dashboard" để xem cách `layout.js` và `page.js` lồng nhau. Thử `useRouter` để chuyển hướng.
          </li>
          <li>
            <strong>Dynamic Routing:</strong> Bấm "Product" để xem route nhận parameter động `[id]`.
          </li>
          <li>
            <strong>Parallel & Intercepting Routes:</strong> Vào "Feed", bấm vào một ảnh để xem modal hiện ra trên cùng trang mà vẫn thay đổi URL, và thử Refresh lại để xem khác biệt.
          </li>
        </ul>
      </div>
    </div>
  );
}
