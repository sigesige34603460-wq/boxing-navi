import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fighters from "../data";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return fighters.map((f) => ({ id: f.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const f = fighters.find((x) => x.id === id);
  if (!f) return {};
  return {
    title: `${f.name}（${f.nameEn}）プロフィール・戦績 | ボクシングナビ`,
    description: `${f.name}の詳細プロフィール。${f.weightClass}・戦績${f.record}・${f.tagline}`,
  };
}

const colorMap = {
  red: { badge: "bg-red-100 text-red-700", accent: "text-red-600", border: "border-red-200", btn: "bg-red-600 hover:bg-red-700", header: "from-red-700 to-red-900" },
  blue: { badge: "bg-blue-100 text-blue-700", accent: "text-blue-600", border: "border-blue-200", btn: "bg-blue-600 hover:bg-blue-700", header: "from-blue-700 to-blue-900" },
  green: { badge: "bg-green-100 text-green-700", accent: "text-green-600", border: "border-green-200", btn: "bg-green-600 hover:bg-green-700", header: "from-green-700 to-green-900" },
  yellow: { badge: "bg-yellow-100 text-yellow-700", accent: "text-yellow-600", border: "border-yellow-200", btn: "bg-yellow-600 hover:bg-yellow-700", header: "from-yellow-700 to-yellow-900" },
  purple: { badge: "bg-purple-100 text-purple-700", accent: "text-purple-600", border: "border-purple-200", btn: "bg-purple-600 hover:bg-purple-700", header: "from-purple-700 to-purple-900" },
  orange: { badge: "bg-orange-100 text-orange-700", accent: "text-orange-600", border: "border-orange-200", btn: "bg-orange-600 hover:bg-orange-700", header: "from-orange-600 to-orange-800" },
};

export default async function FighterPage({ params }: Props) {
  const { id } = await params;
  const f = fighters.find((x) => x.id === id);
  if (!f) notFound();

  const c = colorMap[f.color];
  const ytUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(f.ytQuery)}`;

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ヒーローバナー */}
        <div className={`bg-gradient-to-br ${c.header} text-white py-12 px-4`}>
          <div className="max-w-4xl mx-auto">
            <Link href="/fighters" className="text-white/70 text-sm hover:text-white mb-4 inline-block">
              ← 選手一覧に戻る
            </Link>
            <div className="flex items-start gap-6">
              <div className="text-6xl">{f.flag}</div>
              <div>
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {f.rankLabel}
                </span>
                <h1 className="text-3xl md:text-4xl font-black">{f.name}</h1>
                <p className="text-white/80 text-lg">{f.nameEn}</p>
                <p className="text-white/70 text-sm mt-1">「{f.nickname}」</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {f.titles.map((t) => (
                    <span key={t} className="bg-white/20 text-white text-xs px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto py-10 px-4 space-y-10">
          {/* 基本データ */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              基本プロフィール
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "生年月日", value: f.born },
                { label: "出身地", value: f.birthplace },
                { label: "国籍", value: f.nationality },
                { label: "身長", value: f.height },
                { label: "リーチ", value: f.reach },
                { label: "スタンス", value: f.stance },
                { label: "階級", value: f.weightClass },
                { label: "戦績", value: f.record },
                { label: "トレーナー", value: f.trainer },
                { label: "所属ジム", value: f.gym },
              ].map((item) => (
                <div key={item.label} className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">{item.label}</p>
                  <p className="text-sm font-bold text-gray-900">{item.value}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 紹介文 */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              選手紹介
            </h2>
            <p className="text-gray-700 leading-relaxed">{f.desc}</p>
          </section>

          {/* ボクシングスタイル */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              ボクシングスタイル
            </h2>
            <p className="text-gray-700 leading-relaxed">{f.style}</p>
          </section>

          {/* キャリア年表 */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              キャリア年表
            </h2>
            <div className="space-y-3">
              {f.career.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className={`shrink-0 text-xs font-bold px-2 py-1 rounded h-fit mt-0.5 ${c.badge}`}>
                    {item.year}
                  </span>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{item.event}</p>
                    {item.detail && (
                      <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 主要試合 */}
          <section>
            <h2 className="text-xl font-black text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
              主要試合
            </h2>
            <div className="space-y-4">
              {f.keyFights.map((fight, i) => (
                <div key={i} className={`border ${c.border} rounded-xl p-5 bg-white`}>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <p className="font-black text-gray-900">vs {fight.opponent}</p>
                    <span className="text-xs text-gray-400 shrink-0">{fight.date}</span>
                  </div>
                  <p className={`text-sm font-bold ${c.accent} mb-2`}>{fight.result}</p>
                  <p className="text-sm text-gray-600">{fight.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* YouTube */}
          <section className="bg-gray-50 rounded-2xl p-6 text-center">
            <p className="text-2xl mb-2">▶</p>
            <h2 className="text-lg font-black text-gray-900 mb-2">
              {f.name}の試合をYouTubeで見る
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              ハイライト・KO集・名試合を無料で視聴できます
            </p>
            <a
              href={ytUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block text-white font-bold px-6 py-3 rounded-xl ${c.btn} transition-colors`}
            >
              YouTubeで「{f.ytQuery}」を検索する
            </a>
          </section>

          {/* ナビゲーション */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <Link href="/fighters" className={`${c.accent} hover:underline text-sm font-medium`}>
              ← 選手一覧に戻る
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/matches" className="text-gray-500 hover:text-gray-900">名試合</Link>
              <Link href="/champions" className="text-gray-500 hover:text-gray-900">歴代王者</Link>
              <Link href="/blog" className="text-gray-500 hover:text-gray-900">コラム</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
