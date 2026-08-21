import Logo from "@/app/components/nabar/Logo"

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-card border border-border rounded-xl p-6">
            <div className="flex flex-col items-center gap-3">
              <Logo />
            <h3 className="text-xl font-semibold text-text text-center">Login to NextBlog</h3>
            </div>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input type="text" placeholder="you@example.com" className="w-full px-3 py-2 bg-surface border border-border rounded-lg outline-none text-sm text-text placeholder-gray-500 focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-1">
                  Password
                </label>
                <input type="password" placeholder="********" className="w-full px-3 py-2 bg-surface border border-border rounded-lg outline-none text-sm text-text placeholder-gray-500 focus:border-primary" />
              </div>
              <button className="w-full py-2.5 bg-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition">
                Login
              </button>
            </form>
        </div>
    </main>
  )
}
