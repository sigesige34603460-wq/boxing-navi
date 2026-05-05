import { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "歴代王者特集 | 伝説のボクシングチャンピオンたち",
  description: "モハメド・アリ、マイク・タイソン、井上尚弥など歴代ボクシング王者の記録と伝説をまとめて紹介。",
};

const CHAMPIONS = [
  {
    name: "井上尚弥",
    nameEn: "Naoya Inoue",
    era: "2010年代〜現在",
    title: "4団体統一スーパーバンタム級王者",
    record: "27戦27勝（24KO）",
    nationality: "🇯🇵 日本",
    highlight: "スーパーバンタム級4団体統一。「モンスター」の異名を持ち、パウンド・フォー・パウンド世界1位に君臨。",
    color: "red",
  },
  {
    name: "モハメド・アリ",
    nameEn: "Muhammad Ali",
    era: "1960〜1980年代",
    title: "元ヘビー級世界王者（3度）",
    record: "61戦56勝（37KO）5敗",
    nationality: "🇺🇸 アメリカ",
    highlight: "「蝶のように舞い、蜂のように刺す」。3度のヘビー級王座獲得。ボクシングを超えた20世紀最大のスポーツアイコン。",
    color: "yellow",
  },
  {
    name: "マイク・タイソン",
    nameEn: "Mike Tyson",
    era: "1980〜2000年代",
    title: "元ヘビー級世界王者",
    record: "58戦50勝（44KO）6敗",
    nationality: "🇺🇸 アメリカ",
    highlight: "史上最年少ヘビー級世界王者（20歳）。圧倒的なKO率と破壊的なパンチで「史上最恐ボクサー」と呼ばれた。",
    color: "gray",
  },
  {
    name: "フロイド・メイウェザーJr.",
    nameEn: "Floyd Mayweather Jr.",
    era: "1990〜2010年代",
    title: "元5階級世界王者・無敗",
    record: "50戦50勝（27KO）無敗",
    nationality: "🇺🇸 アメリカ",
    highlight: "プロ50戦無敗のまま引退。「マネー」の異名通り史上最高額の稼ぎを誇る。ディフェンスの芸術家。",
    color: "green",
  },
  {
    name: "マニー・パッキャオ",
    nameEn: "Manny Pacquiao",
    era: "1990〜2010年代",
    title: "元8階級世界王者",
    record: "72戦62勝（39KO）8敗2分",
    nationality: "🇵🇭 フィリピン",
    highlight: "史上唯一の8階級制覇王者。貧困から世界王者へ。フィリピンの国民的英雄であり、後に上院議員・大統領候補に。",
    color: "blue",
  },
  {
    name: "具志堅用高",
    nameEn: "Yoko Gushiken",
    era: "1970〜1980年代",
    title: "元WBA世界ライトフライ級王者",
    record: "35戦34勝（22KO）1敗",
    nationality: "🇯🇵 日本",
    highlight: "13度の世界王座防衛は日本記録。沖縄出身の英雄として今なお語り継がれる日本ボクシングの伝説。",
    color: "orange",
  },
  {
    name: "カネロ・アルバレス",
    nameEn: "Canelo Alvarez",
    era: "2000年代〜現在",
    title: "4団体統一スーパーミドル級王者",
    record: "65戦61勝（39KO）2敗2分",
    nationality: "🇲🇽 メキシコ",
    highlight: "現代ボクシング最高峰。スーパーミドル級4団体統一を達成。メキシコが誇る世界最強ボクサー。",
    color: "red",
  },
  {
    name: "オレクサンドル・ウシク",
    nameEn: "Oleksandr Usyk",
    era: "2010年代〜現在",
    title: "4団体統一ヘビー級王者",
    record: "22戦21勝（14KO）1敗",
    nationality: "🇺🇦 ウクライナ",
    highlight: "クルーザー級4団体統一後ヘビー級へ転向し再び4団体統一。圧倒的なテクニックでアンソニー・ジョシュアを2度撃破。",
    color: "blue",
  },
  {
    name: "辰吉丈一郎",
    nameEn: "Joichiro Tatsuyoshi",
    era: "1990年代",
    title: "元WBCバンタム級王者",
    record: "34戦29勝（20KO）5敗",
    nationality: "🇯🇵 日本",
    highlight: "「浪速のジョー」として社会現象を巻き起こした90年代最大のボクシングスター。網膜剥離を乗り越えた不屈の闘志。",
    color: "purple",
  },
  {
    name: "村田諒太",
    nameEn: "Ryota Murata",
    era: "2010年代",
    title: "元WBA世界ミドル級王者",
    record: "16戦14勝（12KO）2敗",
    nationality: "🇯🇵 日本",
    highlight: "ロンドン五輪金メダリスト。日本人初のWBAミドル級王座を獲得。ゴロフキン戦では世界を沸かせた。",
    color: "green",
  },
];

const colorMap: Record<string, string> = {
  red: "bg-red-100 text-red-700 border-red-200",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200",
  gray: "bg-gray-100 text-gray-700 border-gray-200",
  green: "bg-green-100 text-green-700 border-green-200",
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  orange: "bg-orange-100 text-orange-700 border-orange-200",
  purple: "bg-purple-100 text-purple-700 border-purple-200",
};

export default function ChampionsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* ヒーロー */}
        <section className="bg-gradient-to-br from-gray-900 to-red-900 text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-black mb-3">🏆 歴代王者特集</h1>
            <p className="text-gray-300">ボクシング史を彩った伝説のチャンピオンたち</p>
          </div>
        </section>

        {/* 王者一覧 */}
        <section className="py-12 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CHAMPIONS.map((c) => (
                <div key={c.name} className={`bg-white border-2 rounded-2xl p-6 ${colorMap[c.color]}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-xs font-bold mb-1">{c.nationality} | {c.era}</p>
                      <h2 className="text-2xl font-black text-gray-900">{c.name}</h2>
                      <p className="text-sm text-gray-500">{c.nameEn}</p>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-gray-600 mb-1">{c.title}</p>
                  <p className="text-xs text-gray-500 mb-4">戦績：{c.record}</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{c.highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* コラムへ誘導 */}
        <section className="py-10 px-4 bg-red-50">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-bold text-gray-900 mb-3">歴代王者の詳細はコラムで！</p>
            <Link
              href="/blog"
              className="inline-block bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
            >
              コラム一覧を見る →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
