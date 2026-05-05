import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ボクシングの観戦方法 | DAZN・WOWOWで見る方法",
  description: "ボクシングをDAZNやWOWOWで観戦する方法を解説。井上尚弥の試合もライブで楽しめます。",
};

export default function WatchPage() {
  return (
    <>
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-black text-gray-900 mb-2">ボクシングの観戦方法</h1>
          <p className="text-gray-600 mb-10">DAZNやWOWOWで試合をライブ観戦する方法をご紹介</p>

          {/* DAZN */}
          <div className="bg-white border-2 border-red-200 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">おすすめ</span>
              <h2 className="text-2xl font-black text-gray-900">DAZN（ダゾーン）</h2>
            </div>
            <p className="text-gray-700 mb-6">
              国内外のボクシング主要試合を幅広く配信。井上尚弥の世界タイトルマッチもDAZNで生中継されることが多く、
              ボクシングファンには必須のサービスです。
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">月額料金</p>
                <p className="font-black text-xl text-red-600">3,000円〜</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">特徴</p>
                <p className="font-bold text-sm">スポーツ総合配信</p>
              </div>
            </div>
            <div className="mb-6">
              <p className="font-bold text-gray-900 mb-2">DAZNでボクシングを見るメリット</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span>井上尚弥など国内外の主要試合を生中継</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span>見逃し配信で後から視聴可能</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span>スマホ・タブレット・TVなど複数端末対応</li>
                <li className="flex items-start gap-2"><span className="text-green-500 font-bold">✓</span>ボクシング以外のスポーツも楽しめる</li>
              </ul>
            </div>
            <a
              href="https://www.dazn.com/ja-JP/welcome"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors text-lg"
            >
              DAZNに登録する →
            </a>
            <p className="text-xs text-gray-400 text-center mt-2">※料金・プランは変更になる場合があります</p>
          </div>

          {/* WOWOW */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">WOWOW</h2>
            <p className="text-gray-700 mb-6">
              世界ボクシング主要試合を長年配信してきた実績のある有料放送。
              特にWBC・WBA認定試合の中継に強く、海外ビッグマッチはWOWOWで観戦できることも多い。
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">月額料金</p>
                <p className="font-black text-xl text-gray-800">2,530円</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-xs text-gray-500 mb-1">特徴</p>
                <p className="font-bold text-sm">映画・スポーツ総合</p>
              </div>
            </div>
          </div>

          {/* 地上波 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-gray-900 mb-4">地上波・無料放送</h2>
            <p className="text-gray-700">
              井上尚弥の試合など注目度の高い試合はフジテレビ・テレビ朝日などで無料放送されることがあります。
              ただし放送されない試合も多いため、確実に観戦したい場合はDAZNやWOWOWの加入がおすすめです。
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
