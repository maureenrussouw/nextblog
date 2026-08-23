import Link from "next/link"


const initialAuthors = [
    {
    id: 1,
    name: "Emmanual Egbon",
    email: "emmanuel@example.com",
    role: "Admin",
    },
    {
    id: 2,
    name: "John Doe",
    email: "john@example.com",
    role: "Author",
    },
    {
    id: 3,
    name: "Jane  Smith",
    email: "janbe@example.com",
    role: "Author",
    },
]

export default function AuthorsPage() {
  return (
    <main className="md:ml-64 p-6 min-h-screen">
        <div className="mb-6 flex items-center justify-between">
            <div>
                <h2 className="text-=2xl font-semibold text-text">Authors</h2>
                <p className="text-sm text-gray-400 mt-1">
                    Manage all authors and admins on your platform
                </p>
            </div>
            <Link href="/admin/register" className="px-4 py-2 bg-primary text-white text-sm rounded-lg hove:opacity-90 transition"> + Add Author</Link>
        </div>
        {/* table */}
        <div className="bg-card border border-border rounded-xl">
            <div className="overflow-x-scrol no-scrollbar">
                <table className="min-w-150 w-full text-sm">
                    <thead className="bg-surface text-gray-400">
                        <tr>
                            <th className="text-left px-4 py-3">Name</th>
                            <th className="text-left px-4 py-3">Email</th>
                            <th className="text-left px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialAuthors.map((author) => (
                            <tr className="bordet-t border-border hove:bg-surface transition" key={author.id}>
                                <td className="px-4 py-6 text-text whitespace-nowrap">{author.name}</td>
                                 <td className="px-4 py-6 text-text whitespace-nowrap">{author.email}</td>
                                  <td className="px-4 py-6 text-text whitespace-nowrap">
                                    <button className="text-red-400 hover:text-red-300 text-sm">Delete</button>
                                  </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </main>
  )
}
