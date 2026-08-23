"use client"

import JoditEditor from "jodit-react";
import Image from "next/image"
import { useMemo, useRef, useState } from "react"

interface FormState {
    title: string,
    category: string,
    content: string,
    status: "draft" | "published",
    image: null | File,
}

const categories = [
    { name: "Technology",  slug: "technology" },
    { name: "Startup",  slug: "startup" },
    { name: "Lifestyle",  slug: "lifestyle" },
    { name: "Finance",  slug: "finance" },
]

export default function CreatePostPage() {
     const editor = useRef(null);
    const fileInputRef = useRef<null | HTMLInputElement>(null)
    const [form, setForm] = useState<FormState>({
        title: "",
        category: "",
        content: "",
        status: "draft",
        image: null,
    })
    const [preview, setPreview] = useState<string | null>(null)

    const handleChange = (field: keyof FormState, value: string) => {
        setForm((prev) => ({...prev, [field]:value}))
    }
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const file = e.target.files?.[0]
        if (!file) return
        if(preview) URL.revokeObjectURL(preview);
        const url = URL.createObjectURL(file);
        setForm((prev) => ({...prev, image:file}))
        setPreview(url)
    }
    const removeImage = () => {
        if (preview) URL.revokeObjectURL(preview);
        setPreview(null)
        setForm((prev) => ({...prev, image: null}))
        if (fileInputRef.current) {
            fileInputRef.current.value = ""
        }
    }
    
    const config = useMemo(
    () => ({
      placeholder: 'Start typing your acticle...',
      theme: "dark",
      style: {
        background: "#121212",
        color: "#d1d5dc"
      }
    }),
    []
  );

  return (
    <main className="md:ml-64 p-6 min-h-screen">
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-text">Create Post</h2>
            <p className="text-sm text-gray-400 mt-1">
                Write and publish a new blog post.
            </p>
        </div>
        <form className="bg-card border border-border rounded-xl p-5 space-y-6 max-w-3xl">
            {/* title */}
            <div>
                <label className="block text-sm text-gray-400 mb-2">Title</label>
                <input 
                placeholder="Enter post title"
                className="w-full px-4 py-3 bg-surface border-border rounded-lg text-sm focus:border-primary" type="text" value={form.title} onChange={(e) => handleChange("title", e.target.value)}/>
            </div>
            {/* category */}
            <div>
                <label className="block text-sm text-gray-400 mb-2">Category</label>
               <select className="w-full px-4 py-3 bg-surface border-border rounded-lg text-sm focus:border-primary"  value={form.category}
               onChange={(e) => handleChange("category", e.target.value)}>
                {categories.map((category) => (
                    <option value={category.slug} key={category.slug}>
                        {category.name}
                    </option>
                ))}
               </select>
            </div>
            {/* status */}
            <div>
                <label className="block text-sm text-gray-400 mb-2">Status</label>
                <select className="w-full px-4 py-3 bg-surface border-border rounded-lg text-sm focus:border-primary"  value={form.status}
               onChange={(e) => handleChange("status", e.target.value)}>
               <option value="draft">Draft</option>  
               <option value="published">Published</option> 
               </select>
            </div>
            {/* image */}
            <div>
                <label className="block text-sm text-gray-400 mb-2">Cover Image</label>
                <input 
                onChange={handleImageChange}
                ref={fileInputRef} type="file" className="w-full px-4 py-3 bg-surface border-border rounded-lg text-sm focus:border-primary" />
                {preview && (
                    <div className="mt-3">
                        <div className="h-64 w-full relative">
                            <Image src={preview} alt="preview image" fill className="runded-lg object-cover border border-border" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                        </div>
                        <button onClick={removeImage} type="button"  className="text-xs text-red-500 mt-2">
                            Remove image
                        </button>
                    </div>
                )}
            </div>
            <div>
                 <label className="block text-sm text-gray-400 mb-2">Content</label>
                 <div className="rounded-lg bg-white overflow-hidden">
                    <JoditEditor ref={editor} value={form.content} config={config} onChange={(content) => handleChange("content", content)} />
                 </div>
            </div>
            <div className="flex items-center justify-end">
                <button className="px-5 py-2 bg-primary text-white text-sm rounded-lg hover:opacity-90 transition">
                    Publish
                </button>
            </div>
        </form>
    </main>
  )
}
