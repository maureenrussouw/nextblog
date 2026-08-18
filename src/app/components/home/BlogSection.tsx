"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const tabs = ["All", "Technology", "Startup", "Lifestyle", "Finance"]

const posts = [
    {
        id: 1,
        title: "Building a Fullstack Blog with Next.js",
        category: "Technology",
        readTime: "5 min read",
        image: "/images/blog1.png"
    },
    {
        id: 2,
        title: "How to Validate Your Startup Idea",
        category: "Startup",
        readTime: "4 min read",
        image: "/images/blog2.png"
    },
    {
        id: 3,
        title: "Work-Life Balance for Developers",
        category: "Lifestyle",
        readTime: "3 min read",
        image: "/images/blog3.png"
    },
    {
        id: 4,
        title: "Managing Money as a Developer",
        category: "Finance",
        readTime: "5 min read",
        image: "/images/blog4.png"
    },
    {
        id: 5,
        title: "Building a Supabase App with Next.js",
        category: "Technology",
        readTime: "5 min read",
        image: "/images/blog5.png"
    },{
        id: 6,
        title: "Building Passive Income Streams in 2025",
        category: "Finance",
        readTime: "5 min read",
        image: "/images/blog6.png"
    },
]
export default function BlogSection() {
    const [activeTab, setActiveTab] = useState("All")
    const filteredPosts = activeTab === "All" ? posts : posts.filter((post) => post.category === activeTab)

  return (
    <div className="max-w-6xl mx-auto mt-16 pb-16">
        {/* tabs */}
        <div className="flex gap-2 flex-wrap justify-center mb-10">
            {tabs.map((tab) => (
                <button className={`px-4 py-2 cursor-pointer rounded-full text-sm ransition  border ${activeTab === tab ? "bg-primary text-white border-primary" : "text-gray-400 border-border hover:text-white"}`} key={tab} onClick={() => setActiveTab(tab)}>
                    {tab}
                </button>
            ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => (
                <Link href="/post/post" key={post.id} className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition cursor-pointer">
                    <div className="h-44 w-full overflow-hidden relative">
                        <Image src={post.image} fill alt={post.title} className="object-cover hover:scale-105 transition duration-300" />
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}
