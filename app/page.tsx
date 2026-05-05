import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ヒーロー */}
        <section className="bg-gradient-to-br from-red-700 to-red-900 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight">
              🥊 ボクシングの<br className="md:hidden" />すべてがわかる
            </h1>
            <p className="text-lg md:text-xl text-red-100 mb-8">
              試合情報・選手プロフィール・観戦ガイドを毎日更新
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/watch"
                className="bg-white text-red-700 font-bold px-6 py-3 rounded-full hover:bg-red-50 transition-colors"
              >
                DAZNで観戦する
              </Link>
              <Link
                href="/beginners"
                className="border-2 border-white text-white font-bold px-6 py-3 rounded-full hover:bg-white hover:text-red-700 transition-colors"
              >
                初心者ガイド
              </Link>
            </div>
          </div>
        </section>

        {/* 注目選手 */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
              注目選手
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "井上尚弥",
                  nameEn: "Naoya Inoue",
                  title: "WBO・WBC・IBF・WBA スーパーバンタム級王者",
                  desc: "「モンスター」の異名を持つ日本最強ボクサー。4団体統一王者として世界に君臨。",
                  rank: "世界ランク #1",
                  color: "red",
                },
                {
                  name: "田中恒成",
                  nameEn: "Kosei Tanaka",
                  title: "元3階級世界王者",
                  desc: "史上最年少・最速で3階級制覇を達成した日本ボクシング界のレジェンド。",
                  rank: "元3階級王者",
                  color: "blue",
                },
                {
                  name: "カネロ・アルバレス",
                  nameEn: "Canelo Alvarez",
                  title: "スーパーミドル級4団体統一王者",
                  desc: "現代ボクシング最高峰と称されるメキシコの英雄。圧倒的な実力でスーパーミドルを制覇。",
                  rank: "世界ランク #1",
                  color: "green",
                },
              ].map((f) => (
                <div key={f.name} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-3 ${
                    f.color === "red" ? "bg-red-100 text-red-700" :
                    f.color === "blue" ? "bg-blue-100 text-blue-700" :
                    "bg-green-100 text-green-700"
                  }`}>
                    {f.rank}
                  </div>
                  <h3 className="text-xl font-black text-gray-900">{f.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{f.nameEn}</p>
                  <p className="text-xs font-medium text-gray-600 mb-3">{f.title}</p>
                  <p className="text-sm text-gray-700">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DAZNバナー */}
        <section className="py-10 px-4 bg-red-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-black text-gray-900 mb-3">
              ボクシングはDAZNで観よう
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              井上尚弥の試合をはじめ、国内外の主要ボクシング試合をライブ配信。<br />
              月額3,000円〜でボクシングが見放題！
            </p>
            <Link
              href="/watch"
              className="inline-block bg-red-600 text-white font-bold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg"
            >
              DAZNの詳細・登録方法を見る →
            </Link>
          </div>
        </section>

        {/* コラムリンク */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-gray-900">最新コラム</h2>
              <Link href="/blog" className="text-red-600 text-sm font-medium hover:underline">
                すべて見る →
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "井上尚弥の強さの秘密：なぜ「モンスター」と呼ばれるのか", tag: "選手分析" },
                { title: "ボクシング初心者が最初に知るべき試合の見方・楽しみ方", tag: "初心者向け" },
                { title: "DAZNでボクシングを見る方法：登録から視聴まで完全ガイド", tag: "観戦ガイド" },
              ].map((a, i) => (
                <Link key={i} href="/blog" className="block border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded mb-3">
                    {a.tag}
                  </span>
                  <p className="font-bold text-gray-900 text-sm leading-relaxed">{a.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 歴代王者特集 */}
        <section className="py-12 px-4 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black">🏆 歴代王者特集</h2>
              <Link href="/champions" className="text-red-400 text-sm font-medium hover:underline">
                すべて見る →
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "モハメド・アリ", title: "元ヘビー級3度王者", flag: "🇺🇸" },
                { name: "マイク・タイソン", title: "史上最年少ヘビー級王者", flag: "🇺🇸" },
                { name: "具志堅用高", title: "13度防衛の日本の伝説", flag: "🇯🇵" },
                { name: "マニー・パッキャオ", title: "史上唯一の8階級制覇", flag: "🇵🇭" },
              ].map((c) => (
                <Link key={c.name} href="/champions" className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition-colors text-center">
                  <p className="text-2xl mb-2">{c.flag}</p>
                  <p className="font-black text-sm mb-1">{c.name}</p>
                  <p className="text-xs text-gray-400">{c.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* YouTube動画ガイド */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">📺 YouTubeでボクシングを楽しもう</h2>
            <p className="text-center text-gray-500 text-sm mb-8">無料で見られるボクシング動画・解説チャンネルをご紹介</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "🥊",
                  title: "試合ダイジェスト",
                  desc: "井上尚弥など注目試合のハイライトがYouTubeで無料公開。試合前の予習にも最適。",
                  link: "/blog",
                },
                {
                  icon: "🎙️",
                  title: "ボクシング解説動画",
                  desc: "元プロボクサーや専門家によるわかりやすい試合解説・選手分析が充実。",
                  link: "/blog",
                },
                {
                  icon: "🏋️",
                  title: "トレーニング動画",
                  desc: "ジムに行く前に自宅でできるシャドウ練習・フットワーク練習を動画で学べる。",
                  link: "/blog",
                },
              ].map((item, i) => (
                <Link key={i} href={item.link} className="block bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <p className="text-4xl mb-3">{item.icon}</p>
                  <p className="font-black text-gray-900 mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                  <p className="text-red-600 text-sm font-medium mt-3">詳しく読む →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 初心者ガイドリンク */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
              ボクシングを始める方へ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: "📺", title: "ボクシングの観戦方法", desc: "DAZNやWOWOWでの視聴方法をわかりやすく解説" },
                { icon: "🥊", title: "ルール完全ガイド", desc: "判定・KO・反則など基本ルールを初心者向けに解説" },
                { icon: "🏋️", title: "ジム選びのポイント", desc: "初心者でも安心して通えるジムの選び方" },
                { icon: "📖", title: "世界タイトルの仕組み", desc: "WBC・WBA・IBF・WBOの違いをわかりやすく解説" },
              ].map((item, i) => (
                <Link key={i} href="/beginners" className="flex items-start gap-4 bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
