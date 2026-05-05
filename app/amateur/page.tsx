import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "高校・アマチュアボクシング完全ガイド | インターハイ・ジュニア大会",
  description: "高校ボクシングの全国大会・強豪校・注目選手を解説。中学生・小学生のジュニアボクシング始め方、アマチュアとプロの違いも紹介。",
  keywords: ["高校ボクシング", "インターハイ", "アマチュアボクシング", "ジュニアボクシング", "ボクシング強豪校"],
};

const TOURNAMENTS = [
  {
    name: "全国高等学校総合体育大会（インターハイ）",
    season: "毎年7〜8月",
    desc: "高校生の最高峰大会。全国各地の予選を勝ち抜いた精鋭が集う。",
    level: "高校生最高峰",
    color: "red",
  },
  {
    name: "全国高等学校ボクシング選抜大会",
    season: "毎年3月",
    desc: "春に開催される選抜大会。インターハイと並ぶ重要な全国大会。",
    level: "高校生",
    color: "blue",
  },
  {
    name: "国民体育大会（国体）",
    season: "毎年秋",
    desc: "少年の部・成年の部があり、都道府県対抗で競われる。",
    level: "少年〜一般",
    color: "green",
  },
  {
    name: "JOCジュニアオリンピックカップ",
    season: "毎年12月",
    desc: "中学生・高校生のジュニア選手が競う国内最高峰のジュニア大会。",
    level: "中学〜高校生",
    color: "purple",
  },
  {
    name: "全国中学生ボクシング大会",
    season: "毎年8月",
    desc: "中学生の全国大会。将来のプロ・アマの逸材たちが集う登竜門。",
    level: "中学生",
    color: "orange",
  },
];

const STRONG_SCHOOLS = [
  { name: "東農大二高（群馬）", note: "井上尚弥の出身校。全国屈指の強豪" },
  { name: "埼玉栄高校（埼玉）", note: "多くの全国優勝者を輩出する名門" },
  { name: "市立尼崎高校（兵庫）", note: "関西の雄。全国大会常連校" },
  { name: "駒大苫小牧高校（北海道）", note: "北海道の強豪。全国上位の常連" },
  { name: "中村学園三陽高校（福岡）", note: "九州を代表する強豪校" },
  { name: "花咲徳栄高校（埼玉）", note: "近年急成長の強豪校" },
];

const colorMap: Record<string, string> = {
  red: "bg-red-100 text-red-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  orange: "bg-orange-100 text-orange-700",
};

export default function AmateurPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ヒーロー */}
        <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-black mb-3">
              🥊 高校・アマチュアボクシング
            </h1>
            <p className="text-blue-200">インターハイ・ジュニア大会・強豪校情報を網羅</p>
          </div>
        </section>

        {/* 主要大会 */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8">主要大会・スケジュール</h2>
            <div className="space-y-4">
              {TOURNAMENTS.map((t) => (
                <div key={t.name} className="border border-gray-200 rounded-xl p-5 flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${colorMap[t.color]}`}>
                        {t.level}
                      </span>
                      <span className="text-xs text-gray-500">{t.season}</span>
                    </div>
                    <p className="font-black text-gray-900 mb-1">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 強豪校 */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8">ボクシング強豪高校</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STRONG_SCHOOLS.map((s) => (
                <div key={s.name} className="bg-white border border-gray-200 rounded-xl p-5">
                  <p className="font-black text-gray-900 mb-1">{s.name}</p>
                  <p className="text-sm text-gray-600">{s.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 始め方ガイド */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-8">
              ジュニアボクシングを始めるには
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: "👦",
                  title: "小学生から始める",
                  desc: "多くのジムは小学生（6歳〜）から入会可能。体力・礼儀・集中力が身につくスポーツとして人気。",
                },
                {
                  icon: "🎓",
                  title: "中学生から始める",
                  desc: "中学から始めて高校の全国大会を目指す選手も多い。地域のジュニア大会から経験を積める。",
                },
                {
                  icon: "🏫",
                  title: "高校の部活から始める",
                  desc: "ボクシング部のある高校に入学して始めるケースも。インターハイを目指す本格的な環境が整っている。",
                },
              ].map((item, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 text-center">
                  <p className="text-4xl mb-3">{item.icon}</p>
                  <p className="font-black text-gray-900 mb-2">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* アマ vs プロ */}
        <section className="py-12 px-4 bg-red-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">
              アマチュア vs プロの違い
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-xl overflow-hidden text-sm">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left">項目</th>
                    <th className="px-4 py-3 text-center">アマチュア</th>
                    <th className="px-4 py-3 text-center">プロ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["ヘッドギア", "着用（義務）", "なし"],
                    ["ラウンド数", "3〜4R（各3分）", "最大12R（各3分）"],
                    ["採点方式", "コンピューター採点", "10点満点方式"],
                    ["グローブ", "10〜12oz（大きめ）", "8〜10oz"],
                    ["目的", "オリンピック・国体", "世界タイトル・興行"],
                    ["報酬", "なし（アマチュア）", "ファイトマネー"],
                  ].map(([item, ama, pro], i) => (
                    <tr key={item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-3 font-medium">{item}</td>
                      <td className="px-4 py-3 text-center text-blue-600">{ama}</td>
                      <td className="px-4 py-3 text-center text-red-600">{pro}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 関連コラム */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-black text-gray-900 mb-6">📝 高校・アマチュア 関連コラム</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "高校ボクシング全国大会完全ガイド：インターハイ・選抜・国体の仕組み", tag: "高校・アマチュア" },
                { title: "ボクシングの強豪高校一覧：全国制覇を狙う名門校の特徴", tag: "高校・アマチュア" },
                { title: "小学生・ジュニアボクシング：子どもにボクシングを習わせるメリットと注意点", tag: "高校・アマチュア" },
                { title: "井上尚弥の高校時代：東農大二高での活躍とアマチュア戦績", tag: "高校・アマチュア" },
              ].map((a, i) => (
                <Link key={i} href="/blog" className="block bg-gray-50 border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded mb-2">{a.tag}</span>
                  <p className="text-sm font-bold text-gray-900">{a.title}</p>
                </Link>
              ))}
            </div>
            <div className="mt-4 bg-blue-50 rounded-xl p-4 text-center">
              <p className="text-sm text-gray-700 mb-3">高校ボクシングの試合動画もYouTubeで見られます</p>
              <a
                href="https://www.youtube.com/results?search_query=%E9%AB%98%E6%A0%A1%E3%83%9C%E3%82%AF%E3%82%B7%E3%83%B3%E3%82%B0+%E8%A9%A6%E5%90%88"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm mr-3"
              >
                ▶ YouTubeで高校ボクシングを見る
              </a>
              <Link href="/blog" className="inline-block border border-gray-300 text-gray-700 font-bold px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-sm">
                コラム一覧を見る →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
