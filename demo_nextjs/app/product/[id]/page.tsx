import Link from 'next/link';

// Next.js 15+ quy định params là một Promise.
export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  // Giả lập danh sách sản phẩm lấy ID để show thông tin demo
  const mockProducts = [
    { id: '1', name: 'Giày Thể Thao Cao Cấp', price: '1,500,000 VND', desc: 'Sản phẩm siêu nhẹ, phù hợp chạy bộ.' },
    { id: '2', name: 'Áo Thun Cotton', price: '300,000 VND', desc: 'Thoáng mát, thấm hút mồ hôi tốt.' },
    { id: '3', name: 'Balo Du Lịch', price: '850,000 VND', desc: 'Chống nước, nhiều ngăn chứa tiện lợi.' },
  ];

  const product = mockProducts.find(p => p.id === id);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10 text-gray-800 dark:text-gray-100">
      <h2 className="text-2xl font-bold mb-4 border-b pb-2">3. Dynamic Routes (Trang Chi Tiết)</h2>
      
      {product ? (
        <div className="space-y-4">
          <p className="text-xl">Đang xem sản phẩm có ID: <strong className="text-blue-500">{id}</strong></p>
          <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded border-l-4 border-blue-500">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-red-500 font-semibold">{product.price}</p>
            <p className="mt-2 text-gray-600 dark:text-gray-300">{product.desc}</p>
          </div>
        </div>
      ) : (
        <p className="text-xl text-red-500">Không tìm thấy sản phẩm có ID: {id}</p>
      )}

      <div className="mt-8">
        <h4 className="font-semibold mb-2 text-sm text-gray-500 uppercase">Thử các Dynamic Route khác:</h4>
        <div className="flex gap-4 flex-wrap">
          <Link href="/product/1" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">ID: 1</Link>
          <Link href="/product/2" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">ID: 2</Link>
          <Link href="/product/3" className="bg-blue-100 text-blue-800 px-4 py-2 rounded hover:bg-blue-200">ID: 3</Link>
          <Link href="/product/99" className="bg-red-100 text-red-800 px-4 py-2 rounded hover:bg-red-200 border border-red-300">ID: 99 (Not Found)</Link>
        </div>
      </div>
    </div>
  );
}
