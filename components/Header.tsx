import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-red-700 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight">🥊 ボクシングナビ</span>
          </Link>
          <nav className="hidden md:flex items-center gap-5 text-sm font-medium">
            <Link href="/fighters" className="hover:text-red-200 transition-colors">選手</Link>
            <Link href="/blog" className="hover:text-red-200 transition-colors">コラム</Link>
            <Link href="/youtube" className="hover:text-red-200 transition-colors">▶ 動画</Link>
            <Link href="/champions" className="hover:text-red-200 transition-colors">歴代王者</Link>
            <Link href="/matches" className="hover:text-red-200 transition-colors">名試合</Link>
            <Link href="/amateur" className="hover:text-red-200 transition-colors">高校・アマチュア</Link>
            <Link href="/watch" className="hover:text-red-200 transition-colors">観戦方法</Link>
            <Link href="/beginners" className="hover:text-red-200 transition-colors">初心者</Link>
          </nav>
          <nav className="flex md:hidden items-center gap-2 text-xs">
            <Link href="/fighters" className="hover:text-red-200">選手</Link>
            <Link href="/blog" className="hover:text-red-200">コラム</Link>
            <Link href="/youtube" className="hover:text-red-200">▶動画</Link>
            <Link href="/matches" className="hover:text-red-200">名試合</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
