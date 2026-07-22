import Link from 'next/link';

export interface PostSummary {
  id: string;
  title: string;
  hotel_name: string;
  prefecture: string;
  area: string;
  image: string;
  price?: string | number;
  rating?: string | number;
}

interface RelatedPostsProps {
  currentPostId: string;
  prefecture: string;
  allPosts: PostSummary[];
}

export default function RelatedPosts({ currentPostId, prefecture, allPosts }: RelatedPostsProps) {
  // Filter out current post
  const otherPosts = allPosts.filter(p => p.id !== currentPostId);
  
  // Prefer same prefecture, then fallback to others
  const samePrefPosts = otherPosts.filter(p => p.prefecture === prefecture);
  const diffPrefPosts = otherPosts.filter(p => p.prefecture !== prefecture);

  // Pick up to 3 posts
  const selectedPosts = [...samePrefPosts, ...diffPrefPosts].slice(0, 3);

  if (selectedPosts.length === 0) return null;

  return (
    <div className="pt-10 border-t border-emerald-950/10 space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg md:text-xl font-bold font-journal-serif text-emerald-950 flex items-center gap-2">
          <span>🧭</span> <span>あわせて読みたい【{prefecture}＆近隣エリア】厳選宿マガジン</span>
        </h3>
        <Link href="/" className="text-xs font-bold text-teal-800 hover:underline">
          すべての記事を見る →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedPosts.map((post) => (
          <Link
            key={post.id}
            href={`/posts/${post.id}`}
            className="group border border-emerald-950/10 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col"
          >
            <div className="aspect-video relative overflow-hidden bg-emerald-50">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.hotel_name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-emerald-950/30 text-xs font-semibold">
                  No Image
                </div>
              )}
              <span className="absolute top-2 left-2 bg-emerald-900/80 text-white text-[9px] font-bold px-2 py-0.5 rounded-full backdrop-blur-sm">
                {post.prefecture}
              </span>
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
              <h4 className="text-xs font-bold text-emerald-950 line-clamp-2 group-hover:text-teal-800 transition">
                {post.title}
              </h4>
              <div className="flex items-center justify-between text-[10px] text-teal-900/60 font-semibold pt-2 border-t border-emerald-950/5">
                <span>{post.hotel_name}</span>
                {post.rating && <span className="text-amber-600 font-bold">⭐ {post.rating}</span>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
