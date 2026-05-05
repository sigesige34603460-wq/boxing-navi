import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type Props = { params: Promise<{ slug: string }> };

function getArticle(slug: string) {
  const filePath = path.join(process.cwd(), "content/blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: article.data.title,
    description: article.data.description || "",
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const processed = await remark().use(remarkHtml).process(article.content);
  const html = processed.toString();

  return (
    <>
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="text-red-600 text-sm hover:underline mb-6 inline-block">
            ← コラム一覧に戻る
          </Link>
          {article.data.tag && (
            <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded mb-4">
              {article.data.tag}
            </span>
          )}
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 leading-tight">
            {article.data.title}
          </h1>
          {article.data.date && (
            <p className="text-sm text-gray-400 mb-8">{article.data.date}</p>
          )}
          <article
            className="prose prose-sm max-w-none prose-headings:font-black prose-h2:text-xl prose-h2:mt-8 prose-h2:mb-4 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link href="/blog" className="text-red-600 hover:underline">
              ← コラム一覧に戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
