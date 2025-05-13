import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          My Blog
        </Link>
        <nav className="space-x-4">
          <Link href="/posts" className="hover:underline">
            Posts
          </Link>
          <Link href="#" className="hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
