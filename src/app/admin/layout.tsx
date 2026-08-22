import Sidebar from "../components/admin/Sidebar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <Sidebar />
        {children}
        </div>
  )
}
