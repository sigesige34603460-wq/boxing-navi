import { Metadata } from "next";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ボクシングコラム一覧",
  description: "ボクシングに関するコラム・解説記事を毎日更新。選手分析・試合解説・初心者向け情報まで。",
};

function getArticles() {
  const dir = path.join(process.cwd(), "content/blog");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dir, f), "utf8");
      const { data } = matter(raw);
      return {
        slug: f.replace(".md", ""),
        title: data.title || f,
        date: data.date || "",
        tag: data.tag || "コラム",
        description: data.description || "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export default function BlogPage() {
  const articles = getArticles();

  return (
    <>
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 mb-2">ボクシングコラム</h1>
          <p className="text-gray-600 mb-10">ボクシングに関する情報を毎日更新</p>

          {articles.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-4xl mb-4">🥊</p>
              <p>記事を準備中です。しばらくお待ちください。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/blog/${a.slug}`}
                  className="block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">
                      {a.tag}
                    </span>
                    {a.date && (
                      <span className="text-xs text-gray-400">{a.date}</span>
                    )}
                  </div>
                  <p className="font-bold text-gray-900 leading-relaxed mb-2">{a.title}</p>
                  {a.description && (
                    <p className="text-sm text-gray-600 line-clamp-2">{a.description}</p>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
