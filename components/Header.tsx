import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">🥊 ボクシングナビ</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/blog" className="hover:text-red-200 transition-colors">コラム</Link>
            <Link href="/watch" className="hover:text-red-200 transition-colors">観戦方法</Link>
            <Link href="/beginners" className="hover:text-red-200 transition-colors">初心者ガイド</Link>
          </nav>
          <nav className="flex md:hidden items-center gap-4 text-xs">
            <Link href="/blog" className="hover:text-red-200">コラム</Link>
            <Link href="/watch" className="hover:text-red-200">観戦</Link>
            <Link href="/beginners" className="hover:text-red-200">初心者</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
