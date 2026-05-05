import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* ナビゲーション */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-sm mb-3">選手・王者</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/fighters" className="hover:text-white transition-colors">注目選手</Link></li>
              <li><Link href="/fighters/naoya-inoue" className="hover:text-white transition-colors">井上尚弥</Link></li>
              <li><Link href="/fighters/tenshin-nasukawa" className="hover:text-white transition-colors">那須川天心</Link></li>
              <li><Link href="/champions" className="hover:text-white transition-colors">歴代王者特集</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-3">試合・動画</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/matches" className="hover:text-white transition-colors">歴代名試合</Link></li>
              <li><Link href="/youtube" className="hover:text-white transition-colors">YouTube動画</Link></li>
              <li><Link href="/watch" className="hover:text-white transition-colors">観戦方法（DAZN）</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-3">コラム・記事</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="hover:text-white transition-colors">コラム一覧</Link></li>
              <li><Link href="/blog/2026-05-04-inoue-naoya-monster" className="hover:text-white transition-colors">井上尚弥の強さの秘密</Link></li>
              <li><Link href="/blog/2026-05-04-mayweather-pacquiao" className="hover:text-white transition-colors">メイウェザーvsパッキャオ</Link></li>
              <li><Link href="/blog/2026-05-04-ali-foreman-rumble" className="hover:text-white transition-colors">アリvsフォアマン</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-white font-bold text-sm mb-3">ガイド</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/beginners" className="hover:text-white transition-colors">初心者ガイド</Link></li>
              <li><Link href="/amateur" className="hover:text-white transition-colors">高校・アマチュア</Link></li>
              <li><Link href="/blog/2026-05-04-boxing-rules-beginner" className="hover:text-white transition-colors">ルール解説</Link></li>
              <li><Link href="/blog/2026-05-04-junior-boxing-guide" className="hover:text-white transition-colors">ジュニア向けガイド</Link></li>
            </ul>
          </div>
        </div>

        {/* ブランド */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <Link href="/" className="text-white font-bold text-lg mb-2 inline-block hover:text-red-400 transition-colors">
            🥊 ボクシングナビ
          </Link>
          <p className="text-sm mb-3">国内外のボクシング情報を毎日更新</p>
          <p className="text-xs">
            当サイトはアフィリエイト広告を利用しています。
          </p>
          <p className="text-xs mt-2">© 2026 ボクシングナビ</p>
        </div>
      </div>
    </footer>
  );
}
