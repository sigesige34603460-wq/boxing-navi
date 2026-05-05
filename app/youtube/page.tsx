import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ボクシング動画・YouTube | 名試合・選手ハイライト",
  description: "井上尚弥、アリ、タイソンなど名試合のYouTube動画をカテゴリ別に紹介。ボクシングの試合ダイジェスト・ハイライトをまとめて検索。",
  keywords: ["ボクシング YouTube", "ボクシング 動画", "名試合 動画", "井上尚弥 YouTube", "ボクシング ハイライト"],
};

function ytUrl(q: string) {
  return `https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`;
}

const SECTIONS = [
  {
    title: "🥊 井上尚弥 試合動画",
    color: "red",
    videos: [
      { label: "井上尚弥 vs ドネア 第1戦（2019）", q: "井上尚弥 ドネア 2019 試合" },
      { label: "井上尚弥 vs ドネア 第2戦（2022）", q: "井上尚弥 ドネア 2022 試合" },
      { label: "井上尚弥 vs フルトン（2023）", q: "井上尚弥 フルトン 試合" },
      { label: "井上尚弥 ハイライト集", q: "井上尚弥 ハイライト KO集" },
      { label: "井上尚弥 最新試合", q: "井上尚弥 最新 試合" },
    ],
  },
  {
    title: "🏆 歴代名試合・伝説の一戦",
    color: "yellow",
    videos: [
      { label: "アリ vs フォアマン「ジャングルの戦い」", q: "アリ フォアマン ジャングルの戦い" },
      { label: "アリ vs フレージャー「スリラー・イン・マニラ」", q: "アリ フレージャー スリラーインマニラ" },
      { label: "メイウェザー vs パッキャオ（2015）", q: "メイウェザー パッキャオ 2015 試合" },
      { label: "タイソン 最強時代 ハイライト", q: "マイクタイソン 全盛期 KO集" },
      { label: "カネロ vs GGG 名勝負", q: "カネロ ゴロフキン 試合" },
    ],
  },
  {
    title: "🇯🇵 日本人ボクサー名試合",
    color: "blue",
    videos: [
      { label: "辰吉丈一郎 伝説の試合", q: "辰吉丈一郎 試合 ダイジェスト" },
      { label: "具志堅用高 13度防衛の軌跡", q: "具志堅用高 試合" },
      { label: "村田諒太 vs ゴロフキン", q: "村田諒太 ゴロフキン 試合" },
      { label: "田中恒成 3階級制覇の試合", q: "田中恒成 試合 ハイライト" },
      { label: "日本人ボクサー 名試合集", q: "日本人ボクサー 世界戦 名試合" },
    ],
  },
  {
    title: "🌍 海外ボクシング最新試合",
    color: "green",
    videos: [
      { label: "カネロ・アルバレス 最新試合", q: "カネロ 最新 試合 2024" },
      { label: "ウシク vs フューリー ヘビー級統一戦", q: "ウシク フューリー 試合" },
      { label: "テレンス・クロフォード 試合", q: "テレンスクロフォード 試合" },
      { label: "エロール・スペンスJr 試合", q: "エロールスペンス 試合" },
      { label: "ライアン・ガルシア ハイライト", q: "ライアンガルシア 試合 ハイライト" },
    ],
  },
  {
    title: "🏫 高校・アマチュアボクシング",
    color: "purple",
    videos: [
      { label: "インターハイ ボクシング 試合", q: "インターハイ ボクシング 試合" },
      { label: "高校ボクシング 全国大会", q: "高校ボクシング 全国大会 試合" },
      { label: "JOCジュニアオリンピック ボクシング", q: "JOC ジュニアオリンピック ボクシング" },
      { label: "アマチュアボクシング 全日本選手権", q: "全日本アマチュアボクシング選手権" },
      { label: "オリンピック ボクシング 日本代表", q: "オリンピック ボクシング 日本" },
    ],
  },
  {
    title: "🏋️ トレーニング・解説動画",
    color: "orange",
    videos: [
      { label: "ボクシング 基礎トレーニング 初心者", q: "ボクシング 基礎 トレーニング 初心者" },
      { label: "シャドーボクシング 自宅 練習", q: "シャドーボクシング 自宅 練習" },
      { label: "ボクシング パンチの打ち方 解説", q: "ボクシング パンチ 打ち方 解説" },
      { label: "ボクシング フットワーク 練習", q: "ボクシング フットワーク 練習" },
      { label: "プロボクサー 練習風景", q: "プロボクサー トレーニング 練習風景" },
    ],
  },
];

const colorMap: Record<string, { bg: string; text: string; btn: string }> = {
  red:    { bg: "bg-red-50",    text: "text-red-700",    btn: "bg-red-600 hover:bg-red-700" },
  yellow: { bg: "bg-yellow-50", text: "text-yellow-700", btn: "bg-yellow-600 hover:bg-yellow-700" },
  blue:   { bg: "bg-blue-50",   text: "text-blue-700",   btn: "bg-blue-600 hover:bg-blue-700" },
  green:  { bg: "bg-green-50",  text: "text-green-700",  btn: "bg-green-600 hover:bg-green-700" },
  purple: { bg: "bg-purple-50", text: "text-purple-700", btn: "bg-purple-600 hover:bg-purple-700" },
  orange: { bg: "bg-orange-50", text: "text-orange-700", btn: "bg-orange-600 hover:bg-orange-700" },
};

export default function YoutubePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ヒーロー */}
        <section className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-black mb-3">▶ ボクシング動画・YouTube</h1>
            <p className="text-gray-300">名試合・選手ハイライト・トレーニング動画をYouTubeで検索</p>
          </div>
        </section>

        {/* 動画セクション */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            {SECTIONS.map((section) => {
              const c = colorMap[section.color];
              return (
                <div key={section.title}>
                  <h2 className={`text-xl font-black mb-5 ${c.text}`}>{section.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {section.videos.map((v) => (
                      <a
                        key={v.label}
                        href={ytUrl(v.q)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 ${c.bg} border border-gray-200 rounded-xl px-4 py-3 hover:shadow-md transition-all group`}
                      >
                        <span className="text-red-600 text-xl shrink-0">▶</span>
                        <span className="text-sm font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                          {v.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 関連ページリンク */}
        <section className="py-10 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg font-black text-gray-900 mb-4 text-center">関連ページ</h2>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/matches" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-colors">⚔️ 歴代名試合</Link>
              <Link href="/champions" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-colors">🏆 歴代王者特集</Link>
              <Link href="/amateur" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-colors">🏫 高校・アマチュア</Link>
              <Link href="/blog" className="bg-white border border-gray-200 rounded-full px-5 py-2 text-sm font-medium hover:bg-red-50 hover:border-red-300 transition-colors">📝 コラム一覧</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
