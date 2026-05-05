import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ボクシング歴代名試合 | 永遠に語り継がれる伝説の一戦",
  description: "アリvsフォアマン、井上尚弥vsドネア、メイウェザーvsパッキャオなどボクシング史に残る名勝負を徹底解説。",
  keywords: ["ボクシング 名試合", "ボクシング 歴代名勝負", "井上尚弥 ドネア", "アリ フォアマン", "メイウェザー パッキャオ"],
};

const MATCHES = [
  {
    year: "2019",
    title: "井上尚弥 vs ノニト・ドネア",
    subtitle: "WBSSバンタム級決勝",
    desc: "「2019年最高試合」に選ばれた日本ボクシング史上最高の一戦。両者ともにダウンを奪い合う壮絶な打ち合いで、最後は判定で井上が制した。",
    result: "井上尚弥 判定勝利",
    tag: "日本",
    highlight: true,
  },
  {
    year: "1974",
    title: "モハメド・アリ vs ジョージ・フォアマン",
    subtitle: "「ジャングルの戦い」ザイール",
    desc: "最大の劣勢を覆したアリの頭脳的ボクシングが炸裂。「ロープ・ア・ドープ」戦術でフォアマンを疲弊させ8Rにダウンを奪いKO勝利。",
    result: "アリ 8RKO勝利",
    tag: "伝説",
    highlight: true,
  },
  {
    year: "1975",
    title: "モハメド・アリ vs ジョー・フレージャー",
    subtitle: "「スリラー・イン・マニラ」フィリピン",
    desc: "3度の対戦の最終決戦。灼熱の体育館で繰り広げられた死闘。14Rにフレージャーのコーナーがタオルを投入し、アリがTKO勝利。",
    result: "アリ 14RTKOで勝利",
    tag: "伝説",
    highlight: false,
  },
  {
    year: "2015",
    title: "フロイド・メイウェザー vs マニー・パッキャオ",
    subtitle: "「世紀の一戦」ラスベガス",
    desc: "史上最高額の興行収入を記録した世紀の対決。結果はメイウェザーの判定勝利。試合内容への批判もあったが歴史的一戦として語り継がれる。",
    result: "メイウェザー 判定勝利",
    tag: "世界",
    highlight: false,
  },
  {
    year: "2021",
    title: "オレクサンドル・ウシク vs アンソニー・ジョシュア",
    subtitle: "WBO/WBA/IBFヘビー級統一戦",
    desc: "クルーザー級の技術をヘビー級で体現。ウシクの圧倒的なテクニックとフットワークでジョシュアを判定で下し、2度目の対戦でも返り討ちに。",
    result: "ウシク 判定勝利",
    tag: "世界",
    highlight: false,
  },
  {
    year: "1996",
    title: "辰吉丈一郎 vs シリモンコン・ナコントンパークビュー",
    subtitle: "WBCバンタム級タイトルマッチ",
    desc: "網膜剥離を乗り越えた辰吉が世界王座奪還に挑んだ感動の試合。7RKOで世界王座奪還を達成し、日本中を熱狂させた。",
    result: "辰吉 7RKO勝利",
    tag: "日本",
    highlight: false,
  },
  {
    year: "1982",
    title: "具志堅用高 第13次防衛戦",
    subtitle: "WBAライトフライ級タイトルマッチ",
    desc: "10度以上のダウンを奪われながらも奇跡の逆転KO勝利。日本ボクシング史に残る不屈の精神を見せた試合として語り継がれる。",
    result: "具志堅 KO勝利",
    tag: "日本",
    highlight: false,
  },
  {
    year: "2023",
    title: "井上尚弥 vs スティーブン・フルトン",
    subtitle: "スーパーバンタム級4団体統一戦",
    desc: "バンタム級からスーパーバンタムに上げた井上が4団体統一を達成。フルトンを8Rでストップし圧倒的な強さを見せた。",
    result: "井上 8RTKOで勝利",
    tag: "日本",
    highlight: false,
  },
];

const tagColor: Record<string, string> = {
  "日本": "bg-red-100 text-red-700",
  "伝説": "bg-yellow-100 text-yellow-700",
  "世界": "bg-blue-100 text-blue-700",
};

export default function MatchesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ヒーロー */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-black mb-3">⚔️ 歴代名試合</h1>
            <p className="text-gray-300">ボクシング史に永遠に刻まれた伝説の一戦</p>
          </div>
        </section>

        {/* 試合一覧 */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto space-y-6">
            {MATCHES.map((m) => (
              <div
                key={m.title}
                className={`bg-white rounded-2xl p-6 border-2 ${m.highlight ? "border-red-300 shadow-md" : "border-gray-200"}`}
              >
                {m.highlight && (
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    殿堂入り名勝負
                  </span>
                )}
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400 text-sm font-bold">{m.year}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${tagColor[m.tag]}`}>
                      {m.tag}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{m.subtitle}</span>
                </div>
                <h2 className="text-xl font-black text-gray-900 mb-2">{m.title}</h2>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{m.desc}</p>
                <div className="bg-gray-50 rounded-lg px-4 py-2 inline-block">
                  <span className="text-xs text-gray-500">結果：</span>
                  <span className="text-sm font-bold text-gray-900 ml-1">{m.result}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 関連コラム */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-black text-gray-900 mb-6">📝 名試合 関連コラム</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "ボクシング史上最高の試合TOP10：専門家が選ぶ伝説の一戦", tag: "歴代名試合" },
                { title: "アリ vs フォアマン「ジャングルの戦い」：世紀の逆転劇を徹底解説", tag: "歴代名試合" },
                { title: "井上尚弥 vs ドネア第1戦：日本ボクシング史上最高試合と言われる理由", tag: "歴代名試合" },
                { title: "メイウェザー vs パッキャオ：世紀の一戦の内容と歴史的意義", tag: "歴代名試合" },
              ].map((a, i) => (
                <Link key={i} href="/blog" className="block bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <span className="inline-block bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded mb-2">{a.tag}</span>
                  <p className="text-sm font-bold text-gray-900">{a.title}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link href="/blog" className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors">
                コラム一覧をすべて見る →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
