"use client"

import { usePosts } from "@/custom-hooks/usePost"
import Image from "next/image"
import Link from "next/link"

const initialPosts = [
    {
        id: 1,
        title: "Building a Fullstack Blog with Next.js",
        category: "Technology",
        status: "Published",
    },
    {
        id: 2,
        title: "How to Validate Your Startup Idea",
        category: "Startup",
        status: "Draft",
    },
    {
        id: 3,
        title: "Work-Life Balance for Developers",
        category: "Lifestyle",
        status: "Published",
    },
]

export default function PostsPage() {
    const {posts, loading} = usePosts()
  return (
     <main className="md:ml-64 p-6 min-h-screen">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h2 className="text-=2xl font-semibold text-text">posts</h2>
                    <p className="text-sm text-gray-400 mt-1">
                        Manage all your blog posts                    </p>
                </div>
                <Link href="/admin/create-post" className="px-4 py-2 bg-primary text-white text-sm rounded-lg hove:opacity-90 transition"> + Add Post</Link>
            </div>
            {/* table */}
            <div className="bg-card border border-border rounded-xl">
                <div className="overflow-x-scrol no-scrollbar">
                    <table className="min-w-150 w-full text-sm">
                        <thead className="bg-surface text-gray-400">
                            <tr>
                                <th className="text-left px-4 py-3">Title</th>
                                <th className="text-left px-4 py-3">Category</th>
                                <th className="text-left px-4 py-3">Image</th>
                                <th className="text-left px-4 py-3">Status</th>
                                 <th className="text-left px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                          {loading ? (
                            <tr>
                              <td colSpan={4} className="py-10 text-center text-gray-400">
                                Loading posts...
                              </td>
                            </tr>
                          ) : posts.length === 0 ? (
                            <tr>
                              <td colSpan={4} className="py-10 text-center text-gray-400">
                                No posts found!
                              </td>
                            </tr>
                          ) : (
                            posts.map((post) => (
                              <tr className="border-t border-border hover:bg-surface transition" key={post.id}>
                                <td className="px-4 py-6 text-text whitespace-nowrap">{post.title}</td>
                                <td className="px-4 py-6 text-text whitespace-nowrap">{post.category}</td>
                                 <td className="px-4 py-6"><Image 
                                 unoptimized src={post.cover_image || ""} alt="post-image" width={56} height={56} className="w-14 h-14 rounded-lg object-cover border border-border min-w-14"/></td>
                                <td className="px-4 py-6 text-text whitespace-nowrap"><span className={`text-xs px-2 py-1 rounded-full ${post.status === 'published' ? "bg-green-500/10 text-green-400" : "bg-yellow-500/10 text-yellow-400"}`}>{post.status}</span></td>
                                <td className="px-4 py-6 text-text whitespace-nowrap">
                                <div className="flex items-center justify-end gap-3 whitespace-nowrap">
                                  <Link className="text-primary hover:underline text-sm" href={`/admin/posts/${post.id}`}>Edit</Link>
                                    <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                                </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
  )
}
