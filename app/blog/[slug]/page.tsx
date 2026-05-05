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

const CONTENT_DIR = path.join(process.cwd(), "content/blog");

function getAllSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => encodeURIComponent(f.replace(".md", "")));
}

function getArticle(slug: string) {
  const decoded = decodeURIComponent(slug);
  const filePath = path.join(CONTENT_DIR, `${decoded}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return { data, content };
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
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
            className="prose prose-sm max-w-none
              prose-headings:font-black prose-headings:text-gray-900
              prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
              prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-4
              prose-li:text-gray-700 prose-li:my-1
              prose-strong:text-gray-900 prose-strong:font-bold
              prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline
              prose-ul:my-4 prose-ol:my-4"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
            <Link href="/blog" className="text-red-600 hover:underline text-sm">
              ← コラム一覧に戻る
            </Link>
            <div className="flex gap-3 text-sm">
              <Link href="/matches" className="text-gray-500 hover:text-red-600">名試合</Link>
              <Link href="/champions" className="text-gray-500 hover:text-red-600">歴代王者</Link>
              <Link href="/youtube" className="text-gray-500 hover:text-red-600">▶ 動画</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
