import SettingsForm from './settings-form';

export default function SettingsPage() {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Cài đặt (Settings)</h3>
      <p className="mb-6 text-gray-700 dark:text-gray-300">
        Trang (Page) này là một <strong>Server Component</strong>. Chúng ta đã tách phần tương tác (chứa <code>useRouter</code> và các event onClick) thành một <strong>Client Component con</strong>. 
        <br/><br/>
        Việc này là một <em>Best Practice</em> trong Next.js (App Router): Giữ các Component cha chạy trên Server để SEO tốt và tối ưu hóa tải trang, chỉ đưa <code>"use client"</code> xuống tầng sâu nhất thực sự cần dùng tới các hook của React.
      </p>

      {/* Render Client Component cho những thành tố cần thiết */}
      <SettingsForm />
    </div>
  );
}
