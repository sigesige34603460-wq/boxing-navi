import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ボクシング初心者ガイド | ルール・観戦方法・ジム選び",
  description: "ボクシング初心者向けに、基本ルール・試合の見方・世界タイトルの仕組み・ジム選びを徹底解説。",
};

export default function BeginnersPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 mb-2">ボクシング初心者ガイド</h1>
          <p className="text-gray-600 mb-10">ボクシングを初めて観る方・始める方向けの完全ガイド</p>

          {/* ルール */}
          <section className="mb-10">
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
              🥊 基本ルール
            </h2>
            <div className="space-y-4">
              {[
                { term: "ラウンド", desc: "1ラウンドは3分間。世界タイトルマッチは最大12ラウンド。" },
                { term: "KO（ノックアウト）", desc: "相手をダウンさせ、レフェリーが10カウントを数える前に立ち上がれなかった場合。" },
                { term: "TKO（テクニカルKO）", desc: "レフェリーや選手のコーナーが試合続行不可能と判断した場合。ストップとも呼ばれる。" },
                { term: "判定", desc: "12ラウンド終了後、3人のジャッジのポイントで勝敗を決める。全員一致・分割・引き分けがある。" },
                { term: "ダウン", desc: "パンチを受けてグローブ以外の体の部位が床に触れた状態。8カウント後に試合再開。" },
              ].map((item) => (
                <div key={item.term} className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className="font-bold text-red-700 mb-1">{item.term}</p>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 世界タイトル */}
          <section className="mb-10">
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
              🏆 世界タイトルの仕組み
            </h2>
            <p className="text-gray-700 mb-4">
              ボクシングには4つの主要団体があり、それぞれが世界王者を認定しています。
              4団体すべてのベルトを持つことを「4団体統一王者」と呼び、井上尚弥はスーパーバンタム級で達成しています。
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { org: "WBC", color: "green", desc: "世界ボクシング評議会。緑のベルトが象徴。" },
                { org: "WBA", color: "blue", desc: "世界ボクシング協会。最も歴史ある団体。" },
                { org: "IBF", color: "purple", desc: "国際ボクシング連盟。アメリカ発祥の団体。" },
                { org: "WBO", color: "red", desc: "世界ボクシング機構。比較的新しい団体。" },
              ].map((org) => (
                <div key={org.org} className="bg-white border border-gray-200 rounded-xl p-4">
                  <p className={`font-black text-lg mb-1 ${
                    org.color === "green" ? "text-green-600" :
                    org.color === "blue" ? "text-blue-600" :
                    org.color === "purple" ? "text-purple-600" :
                    "text-red-600"
                  }`}>{org.org}</p>
                  <p className="text-xs text-gray-600">{org.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 体重区分 */}
          <section className="mb-10">
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
              ⚖️ 主な体重区分
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="px-4 py-2 text-left">階級名</th>
                    <th className="px-4 py-2 text-right">体重上限</th>
                    <th className="px-4 py-2 text-left">代表選手</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "ミニマム級", weight: "47.6kg", player: "—" },
                    { name: "ライトフライ級", weight: "48.9kg", player: "—" },
                    { name: "フライ級", weight: "50.8kg", player: "田中恒成" },
                    { name: "スーパーバンタム級", weight: "55.3kg", player: "井上尚弥" },
                    { name: "フェザー級", weight: "57.1kg", player: "—" },
                    { name: "ミドル級", weight: "72.6kg", player: "カネロ" },
                    { name: "ヘビー級", weight: "無制限", player: "フューリー" },
                  ].map((row, i) => (
                    <tr key={row.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-4 py-2 font-medium">{row.name}</td>
                      <td className="px-4 py-2 text-right">{row.weight}</td>
                      <td className="px-4 py-2 text-gray-600">{row.player}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ジム */}
          <section className="mb-10">
            <h2 className="text-xl font-black text-gray-900 mb-4 pb-2 border-b-2 border-red-600">
              🏋️ ジムを始める方へ
            </h2>
            <div className="bg-red-50 rounded-xl p-6">
              <p className="text-gray-700 mb-4">
                ボクシングを実際にやってみたい方は、まずジムの体験入会がおすすめです。
                ほとんどのジムでは初回無料・低価格で体験できます。
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-red-600 font-bold">◆</span>「フィットネス目的」か「試合に出たい」かを事前に決めておく</li>
                <li className="flex items-start gap-2"><span className="text-red-600 font-bold">◆</span>月謝の相場は8,000〜15,000円程度</li>
                <li className="flex items-start gap-2"><span className="text-red-600 font-bold">◆</span>初心者歓迎のジムを選ぶ（ホームページで確認）</li>
                <li className="flex items-start gap-2"><span className="text-red-600 font-bold">◆</span>まずは体験入会で雰囲気を確認</li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
