'use client';
import { Post } from '@/custom-hooks/usePost';
import { createClient } from '@/lib/supabase/client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import PostCardSkeleton from '../skeletons/loading/skeletons/PostCardSkeleton';

//const tabs = ['All', 'Technology', 'Startup', 'Lifestyle', 'Finance'];
/* 
const posts = [
  {
    id: 1,
    title: 'Building a Fullstack Blog with Next.js',
    category: 'Technology',
    readTime: '5 min read',
    image: '/images/blog1.png',
  },
  {
    id: 2,
    title: 'How to Validate Your Startup Idea',
    category: 'Startup',
    readTime: '4 min read',
    image: '/images/blog2.png',
  },
  {
    id: 3,
    title: 'Work-Life Balance for Developers',
    category: 'Lifestyle',
    readTime: '3 min read',
    image: '/images/blog3.png',
  },
  {
    id: 4,
    title: 'Managing Money as a Developer',
    category: 'Finance',
    readTime: '5 min read',
    image: '/images/blog4.png',
  },
  {
    id: 5,
    title: 'Top 10 Tools Every Developer',
    category: 'Technology',
    readTime: '5 min read',
    image: '/images/blog5.png',
  },
  {
    id: 6,
    title: 'Building Passive Income Streams in 2025',
    category: 'Finance',
    readTime: '5 min read',
    image: '/images/blog6.png',
  },
];
 */
const supabase = createClient();

export default function BlogSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // fetch published posts
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', {
          ascending: false,
        });
      if (error) {
        console.log(error);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const tabs = useMemo(() => {
    const categories = posts.map((post) => post.category);
    return ['All', ...new Set(categories)];
  }, [posts]);

  const filteredPosts =
    activeTab === 'All'
      ? posts
      : posts.filter((post) => post.category === activeTab);

  return (
    <div className="max-w-6xl mx-auto mt-16 pb-16">
      {/* tabs */}
      <div className="flex gap-2 flex-wrap justify-center mb-10">
        {tabs.map((tab) => (
          <button
            className={`px-4 py-2 cursor-pointer rounded-full text-sm ransition  border ${activeTab === tab ? 'bg-primary text-white border-primary' : 'text-gray-400 border-border hover:text-white'}`}
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {loading && <PostCardSkeleton />}

      {!loading && filteredPosts.length === 0 && (
        <div className="text-center text-gray-400">No Posts found</div>
      )}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link
            href={`/post/${post.slug}`}
            key={post.id}
            className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition cursor-pointer"
          >
            <div className="h-44 w-full overflow-hidden relative">
              <Image
                src={post.cover_image}
                fill
                loading="eager"
                alt={post.title}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-5">
              <span className="text-xs text-primary font-medium">
                {post.category}
              </span>
            </div>
            <h3 className="text-text mt-2 text-lg font-semibold">
              {post.title}
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              {post.mins_read} min read
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
