import Link from 'next/link';
import DashboardStats from '../components/admin/DashboardStats';

export default function DashboardPage() {
  return (
    <main className="md:ml-64 p-4 sm:p-6 min-h-screen">
      {/* header   */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-text">
          Dashboard
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Welocome back, Here's what's happening with your blog.
        </p>
      </div>
      {/* stats */}
      <DashboardStats />
      {/* Recent Posts */}
      <div className="bg-card border border-border rounded-xl p-4 sm:p-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-base sm:text-lg font-semibold text-text">
            Recent Posts
          </h2>
          <Link
            href="/admin/posts"
            className="text-sm text-primary hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="space-y-4">
          <div className="py-4 sm:py-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-text font-medium">
                Building a Fullstack Blog with Next.js
              </p>
              <p className="text-gray-400 text-xs">Technolog o 5 min read</p>
            </div>
            <span className="text-xs text-gray-500">Draft</span>
          </div>
          <div className="py-4 sm:py-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-text font-medium">
                Building a Fullstack Blog with Next.js
              </p>
              <p className="text-gray-400 text-xs">Technolog o 5 min read</p>
            </div>
            <span className="text-xs text-green-400">Published</span>
          </div>
        </div>
      </div>
    </main>
  );
}
