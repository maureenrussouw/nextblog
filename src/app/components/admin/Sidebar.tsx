"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"
import { FiFileText, FiHome, FiMenu, FiUsers } from "react-icons/fi"
import Logo from "../nabar/Logo"

const links = [
    { name: "Dashboard", href: "/admin", icon: FiHome},
    { name: "Authors", href: "/admin/authors", icon: FiUsers},
    { name: "Posts", href: "/admin/posts", icon: FiFileText},
]

export default function Sidebar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

  return (
    <>
    {/* top bar(mobile device) */}
    <div className="md:hidden flex iems-center justify-between p-4 border-b border-border bg-background">
        <Logo />
        <button>
            <FiMenu size={22} className="text-text z-100 " />
        </button>
    </div>
    {/* overlay */}
    <div className="fixed inset-0 bg-black/50 z-40 md:hidden"/>
    {/* sidebar */}
    <aside className={`fixed top-0 left-0 h-screen w-64 bg-card border-r border-border p-5 flex flex-col z-50 transform transition-transform duration-300 md:translate-x-0 ${open ? "translate-x-0" : "-translate-x-full"}`} >
        <div className="flex items-center justify-betweeb mb-8">
            <Logo />
        </div>
    </aside>
    </>
  )
}
