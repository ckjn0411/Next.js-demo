import StudyButton from "./StudyButton";

/* 
  Server Component (Phân cấp con):
  - Next.js sẽ render khung HTML này trên server.
  - Sau đó gộp Payload của các Client Components (như StudyButton) để gửi xuống trình duyệt.
  - Đây là sự kết hợp (Hybrid Rendering) giữa Server và Client.
*/

interface Course {
  id: number;
  title: string;
  mentor: string;
  category: string;
  donation: string;
  description: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Lập trình React nâng cao với Next.js",
    mentor: "Thang PVN",
    category: "Development",
    donation: "200,000đ",
    description:
      "Làm chủ App Router, Server Components và các kỹ thuật tối ưu hoá hiện đại.",
  },
  {
    id: 2,
    title: "Thiết kế UI/UX theo phong cách Glassmorphism",
    mentor: "Nghia DPT",
    category: "Design",
    donation: "150,000đ",
    description:
      "Xây dựng các giao diện web ấn tượng, hiện đại với hiệu ứng mờ ảo cao cấp.",
  },
  {
    id: 3,
    title: "Định hướng nghề nghiệp Front-end trong kỷ nguyên AI",
    mentor: "Trinh DTU",
    category: "Career",
    donation: "0đ (Hoàn toàn miễn phí)",
    description:
      "Cách tận dụng AI để tăng năng suất và xây dựng lộ trình sự nghiệp vững chắc.",
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-extrabold text-slate-800">
            Khóa học Mentoring
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            Lựa chọn khóa học phù hợp với bạn. Mọi khoản đóng góp sẽ được chuyển
            trực tiếp vào các quỹ thiện nguyện liên kết.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white p-2 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all hover:scale-[1.02] flex flex-col"
            >
              <div className="bg-mint-light h-48 rounded-[1.8rem] mb-6 flex items-center justify-center p-6 text-center">
                <span className="text-mint-dark font-black tracking-widest uppercase opacity-20 text-4xl select-none">
                  {course.category}
                </span>
              </div>
              <div className="px-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-blue-50 text-blue-primary text-xs font-bold rounded-lg uppercase tracking-tight">
                    {course.category}
                  </span>
                  <span className="font-bold text-mint-dark">
                    {course.donation}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-3 text-slate-800 group-hover:text-blue-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-xs text-slate-400 mb-4 flex items-center gap-1 font-medium">
                  Mentor:
                  <span className="text-slate-700 font-bold underline underline-offset-4 decoration-mint-primary">
                    {course.mentor}
                  </span>
                </p>
                <p className="text-sm text-slate-500 mb-8 line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-auto pb-4">
                  <StudyButton courseName={course.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
