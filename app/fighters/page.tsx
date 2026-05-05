import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FighterImage from "@/components/FighterImage";
import fighters from "./data";

export const metadata: Metadata = {
  title: "注目ボクサー選手一覧 | ボクシングナビ",
  description: "井上尚弥・那須川天心・カネロ・ウシクなど現役トップボクサーの詳細プロフィール。戦績・試合スタイル・キャリアを徹底解説。",
};

const borderMap: Record<string, string> = {
  red: "border-red-200",
  blue: "border-blue-200",
  green: "border-green-200",
  yellow: "border-yellow-200",
  purple: "border-purple-200",
  orange: "border-orange-200",
};

const badgeMap: Record<string, string> = {
  red: "bg-red-100 text-red-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  yellow: "bg-yellow-100 text-yellow-700",
  purple: "bg-purple-100 text-purple-700",
  orange: "bg-orange-100 text-orange-700",
};

const btnMap: Record<string, string> = {
  red: "bg-red-600 hover:bg-red-700",
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  yellow: "bg-yellow-600 hover:bg-yellow-700",
  purple: "bg-purple-600 hover:bg-purple-700",
  orange: "bg-orange-600 hover:bg-orange-700",
};

export default function FightersPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 mb-2">注目ボクサー</h1>
          <p className="text-gray-600 mb-10">現役トップボクサーの詳細プロフィール・戦績・キャリア解説</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fighters.map((f) => (
              <Link
                key={f.id}
                href={`/fighters/${f.id}`}
                className={`block border ${borderMap[f.color]} rounded-xl overflow-hidden hover:shadow-lg transition-shadow bg-white`}
              >
                {/* サムネ画像エリア */}
                <div className="relative w-full h-52">
                  <FighterImage
                    src={f.image}
                    name={f.name}
                    flag={f.flag}
                    color={f.color}
                    size="sm"
                  />
                  {/* 国旗バッジ */}
                  <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm rounded-full px-2 py-1 text-sm">
                    {f.flag}
                  </div>
                </div>

                {/* テキスト情報 */}
                <div className="p-5">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${badgeMap[f.color]}`}>
                    {f.rankLabel}
                  </span>
                  <h2 className="text-xl font-black text-gray-900">{f.name}</h2>
                  <p className="text-sm text-gray-500 mb-1">{f.nameEn}</p>
                  <p className="text-xs text-gray-500 mb-1">「{f.nickname}」</p>
                  <p className="text-xs text-gray-600 mb-3">{f.weightClass}</p>
                  <p className="text-sm font-bold text-gray-800 mb-3">{f.record}</p>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">{f.tagline}</p>
                  <p className={`text-sm font-bold text-white text-center py-2 rounded-lg ${btnMap[f.color]} transition-colors`}>
                    詳細プロフィールを見る →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
