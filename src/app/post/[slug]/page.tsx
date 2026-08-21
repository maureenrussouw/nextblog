import BackButton from "@/app/components/general/BackButton";
import ContainerLayout from "@/app/components/layouts/ContainerLayout";
import Image from "next/image";

export default function PostViewPage() {
  return (
    <ContainerLayout>
        <main className="max-w-2xl mx-auto">
            <BackButton />
            <br />
            <span className="text-sm text-primary font-medium ml-4">Technology</span>
            <h1 className="mt-3 texxt-3xl md:text-4xl font-bold text-text leading-tight">Building a Fullstack Blog with Next.js
            </h1>
        <div className="mt-3 text-sm text-gray-400 flex gap-3">
          <span>April 2026</span>
          <span>o</span>
          <span>5 min read</span>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="w-8 h-8 rounded-full relative overflkow-hidden">
            <Image src="/images/avatar.png" alt="author" fill  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
          
        </div>
        <span className="text-sm text-gray-400">By Emmanual</span>
          <div className="mt-8 rounded-xl overflow-hidden w-full h-100 relative">
            <Image src="/images/blog1.png" alt="Blog cover image" className="object-cover" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
          </div>
          <article className="mt-10 text-gray-400 space-y-6">
            <p>
              Building a fullstack blog with Next.js is one of the best ways to learn modern web development. It gives you the ability to handle both frontend and backend logic within a single framework.
            </p>
            <p>
              Next.js provides powerful features such as file-based routing, sever-side renedering, and API routes. These tools make it easier to create fast, scalable, and production-ready application. 
            </p>
          </article>
         </main>
    </ContainerLayout>
  )
}
