import Link from 'next/link';

export default function FeedPage() {
  const photos = [
    { id: '1', title: 'Hoàng hôn trên biển', bg: 'bg-orange-400', date: '10 Tháng 10' },
    { id: '2', title: 'Cà phê sáng sớm', bg: 'bg-brown-600', date: '15 Tháng 10' },
    { id: '3', title: 'Đỉnh núi sương mù', bg: 'bg-gray-500', date: '21 Tháng 10' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {photos.map(photo => (
        <Link 
          key={photo.id} 
          href={`/feed/photo/${photo.id}`}
          className={`block w-full h-48 rounded-lg ${photo.bg} bg-opacity-80 p-6 flex flex-col justify-end text-white shadow hover:scale-105 transition-transform`}
        >
          <div className="font-bold text-lg p-2 bg-black bg-opacity-30 rounded backdrop-blur-sm truncate">
            {photo.title}
          </div>
          <div className="mt-2 text-sm text-gray-200">{photo.date}</div>
        </Link>
      ))}
    </div>
  );
}
