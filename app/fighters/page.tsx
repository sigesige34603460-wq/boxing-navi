import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fighters from "./data";

export const metadata: Metadata = {
  title: "注目ボクサー選手一覧 | ボクシングナビ",
  description: "井上尚弥・那須川天心・カネロ・ウシクなど現役トップボクサーの詳細プロフィール。戦績・試合スタイル・キャリアを徹底解説。",
};

const colorMap = {
  red: { bg: "bg-red-100", text: "text-red-700", border: "border-red-200", btn: "bg-red-600 hover:bg-red-700" },
  blue: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200", btn: "bg-blue-600 hover:bg-blue-700" },
  green: { bg: "bg-green-100", text: "text-green-700", border: "border-green-200", btn: "bg-green-600 hover:bg-green-700" },
  yellow: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-200", btn: "bg-yellow-600 hover:bg-yellow-700" },
  purple: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200", btn: "bg-purple-600 hover:bg-purple-700" },
  orange: { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-200", btn: "bg-orange-600 hover:bg-orange-700" },
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
            {fighters.map((f) => {
              const c = colorMap[f.color];
              return (
                <Link
                  key={f.id}
                  href={`/fighters/${f.id}`}
                  className={`block border ${c.border} rounded-xl p-6 hover:shadow-lg transition-shadow bg-white`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${c.bg} ${c.text}`}>
                      {f.rankLabel}
                    </span>
                    <span className="text-2xl">{f.flag}</span>
                  </div>
                  <h2 className="text-xl font-black text-gray-900">{f.name}</h2>
                  <p className="text-sm text-gray-500 mb-1">{f.nameEn}</p>
                  <p className="text-xs font-medium text-gray-600 mb-2">「{f.nickname}」</p>
                  <p className="text-xs text-gray-600 mb-3">{f.weightClass}</p>
                  <p className="text-sm font-bold text-gray-800 mb-3">{f.record}</p>
                  <p className="text-sm text-gray-600 line-clamp-2">{f.tagline}</p>
                  <p className={`mt-4 text-sm font-bold text-white text-center py-2 rounded-lg ${c.btn} transition-colors`}>
                    詳細プロフィールを見る →
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
