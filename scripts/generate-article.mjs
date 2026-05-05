/**
 * ボクシングコラム記事 自動生成スクリプト
 */

import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUTPUT_DIR = path.join(ROOT, 'content/blog')

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

const TOPICS = [
  // 選手分析
  { title: '井上尚弥の強さの秘密：パンチ力・スピード・IQを徹底分析', tag: '選手分析' },
  { title: 'カネロ・アルバレスはなぜ最強と言われるのか？その戦術と実力', tag: '選手分析' },
  { title: '田中恒成が3階級制覇できた理由：天才ボクサーの戦い方', tag: '選手分析' },
  { title: '村田諒太の軌跡：オリンピック金から世界王者への道', tag: '選手分析' },
  { title: 'タイソン・フューリーのボクシングスタイル：なぜ倒せないのか', tag: '選手分析' },
  { title: 'オレクサンドル・ウシクはなぜヘビー級でも強いのか', tag: '選手分析' },
  { title: 'マニー・パッキャオ：8階級制覇の伝説とそのボクシングスタイル', tag: '選手分析' },
  { title: 'フロイド・メイウェザーJr.の無敗の秘密：ディフェンスの芸術', tag: '選手分析' },
  { title: '長谷川穂積の3階級制覇：日本ボクシングが誇るアウトボクサー', tag: '選手分析' },
  { title: '亀田興毅・大毅・和毅：亀田三兄弟のボクシング人生を振り返る', tag: '選手分析' },
  // 観戦ガイド
  { title: 'DAZNでボクシングを見る方法：登録から視聴まで完全ガイド', tag: '観戦ガイド' },
  { title: 'WOWOWのボクシング中継完全ガイド：視聴方法・料金・見どころ', tag: '観戦ガイド' },
  { title: 'ボクシング判定の見方：採点基準とジャッジの評価方法を解説', tag: '観戦ガイド' },
  { title: 'ボクシング生観戦の楽しみ方：チケット購入からマナーまで', tag: '観戦ガイド' },
  { title: 'Amazonプライムでボクシングを見る方法：配信試合一覧と視聴手順', tag: '観戦ガイド' },
  { title: 'YouTubeでボクシングを楽しむ方法：無料で見られるおすすめチャンネル', tag: '観戦ガイド' },
  // YouTube・動画
  { title: 'ボクシング解説YouTubeチャンネルおすすめ5選：初心者から上級者まで', tag: 'YouTube・動画' },
  { title: '井上尚弥の試合ダイジェスト動画まとめ：YouTubeで見られる名シーン', tag: 'YouTube・動画' },
  { title: 'ボクシングトレーニング動画おすすめ：自宅でできるシャドウ練習', tag: 'YouTube・動画' },
  { title: '海外ボクシング解説チャンネルの楽しみ方：英語でも楽しめるコンテンツ', tag: 'YouTube・動画' },
  { title: 'ボクシング名試合アーカイブ：YouTubeで無料で見られる伝説の一戦', tag: 'YouTube・動画' },
  { title: 'ボクシングジム公式YouTubeチャンネル：プロの練習風景が見られる', tag: 'YouTube・動画' },
  // 歴代王者特集
  { title: '歴代ヘビー級王者列伝：アリからフューリーまでの最強ボクサーたち', tag: '歴代王者特集' },
  { title: '日本人歴代最強ボクサーランキング：世界を驚かせたチャンピオンたち', tag: '歴代王者特集' },
  { title: '具志堅用高：13度防衛の偉業と伝説のボクシング人生', tag: '歴代王者特集' },
  { title: 'モハメド・アリの軌跡：ボクシングを超えた20世紀最大のヒーロー', tag: '歴代王者特集' },
  { title: 'マイク・タイソンの全盛期：史上最恐ヘビー級王者の伝説', tag: '歴代王者特集' },
  { title: '辰吉丈一郎の伝説：浪速のジョーが刻んだ日本ボクシング史', tag: '歴代王者特集' },
  { title: 'シュガー・レイ・レナードとロベルト・デュランの名勝負：伝説の3部作', tag: '歴代王者特集' },
  { title: 'マルコス・マイダナ：アルゼンチンが生んだ激闘王の生涯', tag: '歴代王者特集' },
  { title: '西岡利晃：WBCフェザー級王者として世界に認められた日本人ボクサー', tag: '歴代王者特集' },
  { title: '歴代スーパーバンタム級王者列伝：井上尚弥が君臨する階級の歴史', tag: '歴代王者特集' },
  { title: 'ホセ・ナポレス：キューバが生んだウェルター級の帝王', tag: '歴代王者特集' },
  { title: 'ロベルト・デュラン：「ストーン・ハンズ」と呼ばれた4階級制覇王者', tag: '歴代王者特集' },
  // 初心者向け
  { title: 'ボクシング初心者が最初に知るべき10のこと', tag: '初心者向け' },
  { title: 'WBC・WBA・IBF・WBOの違いとは？世界4団体をわかりやすく解説', tag: '初心者向け' },
  { title: 'ボクシングのルール完全ガイド：反則・ダウン・判定をわかりやすく解説', tag: '初心者向け' },
  { title: 'ボクシングの階級一覧：ミニマム級からヘビー級まで全解説', tag: '初心者向け' },
  { title: 'ボクシングジムの選び方：初心者が後悔しないための5つのポイント', tag: '初心者向け' },
  // 試合解説
  { title: '歴史に残るボクシング名勝負10選：語り継がれる伝説の試合', tag: '試合解説' },
  { title: '井上尚弥 vs ノニト・ドネア：日本ボクシング史上最高試合を振り返る', tag: '試合解説' },
  { title: '日本ボクシング史上最大の番狂わせ：衝撃のアップセット5選', tag: '試合解説' },
  { title: 'アリ vs フレージャー「スリラー・イン・マニラ」：世紀の3部作を振り返る', tag: '試合解説' },
  { title: 'カネロ vs GGG：3試合にわたる壮絶な名勝負の全記録', tag: '試合解説' },
  // 海外ボクシング
  { title: 'メキシコとボクシング：なぜメキシカンボクサーは強いのか', tag: '海外ボクシング' },
  { title: 'フィリピンのボクシング文化：マニー・パッキャオが国民的英雄になった理由', tag: '海外ボクシング' },
  { title: 'キューバボクシングの伝統：アマチュア最強国が生んだスタイル', tag: '海外ボクシング' },
  { title: 'イギリスボクシングの歴史：フューリー・ジョシュアが生まれた土壌', tag: '海外ボクシング' },
  { title: 'アメリカボクシングの黄金時代：アリ・フレージャー・フォアマンの時代', tag: '海外ボクシング' },
  // トレーニング
  { title: 'ボクシングが最強の有酸素運動である理由：カロリー消費と体への効果', tag: 'トレーニング' },
  { title: 'ボクシングジムに初めて行く前に知っておきたいこと', tag: 'トレーニング' },
  { title: 'ボクシンググローブの選び方：初心者に最適なサイズと素材', tag: 'トレーニング' },
  { title: 'サンドバッグの選び方と自宅トレーニングの始め方', tag: 'トレーニング' },
  { title: 'ボクシングで痩せる！ダイエット効果と正しいトレーニング方法', tag: 'トレーニング' },
  // 日本ボクシング
  { title: '日本人世界王者一覧：戦後から現在までの歴代チャンピオン', tag: '日本ボクシング' },
  { title: '日本のボクシングジム有名どころ：名門ジムと輩出したチャンピオン', tag: '日本ボクシング' },
  { title: '大場政夫：天才ボクサーの短くも輝かしいボクシング人生', tag: '日本ボクシング' },
  // 高校・アマチュアボクシング
  { title: '高校ボクシング全国大会完全ガイド：インターハイ・選抜・国体の仕組み', tag: '高校・アマチュア' },
  { title: '高校ボクシング注目選手2024：将来のプロを目指す逸材たち', tag: '高校・アマチュア' },
  { title: 'ボクシングの強豪高校一覧：全国制覇を狙う名門校の特徴', tag: '高校・アマチュア' },
  { title: 'アマチュアボクシングとプロボクシングの違い：ルール・採点・装備を徹底比較', tag: '高校・アマチュア' },
  { title: '中学生からボクシングを始めるには：ジュニアボクシングの始め方ガイド', tag: '高校・アマチュア' },
  { title: '小学生・ジュニアボクシング：子どもにボクシングを習わせるメリットと注意点', tag: '高校・アマチュア' },
  { title: 'JOCジュニアオリンピックボクシング：日本最高峰ジュニア大会の見どころ', tag: '高校・アマチュア' },
  { title: 'オリンピックボクシング：アマチュア最高峰の舞台で輝いた日本人選手たち', tag: '高校・アマチュア' },
  { title: '井上尚弥の高校時代：東農大二高での活躍とアマチュア戦績', tag: '高校・アマチュア' },
  { title: '村田諒太のアマチュア時代：オリンピック金メダルへの軌跡', tag: '高校・アマチュア' },
  // 歴代名試合
  { title: 'ボクシング史上最高の試合TOP10：専門家が選ぶ伝説の一戦', tag: '歴代名試合' },
  { title: 'アリ vs フォアマン「ジャングルの戦い」：世紀の逆転劇を徹底解説', tag: '歴代名試合' },
  { title: '井上尚弥 vs ドネア第1戦：日本ボクシング史上最高試合と言われる理由', tag: '歴代名試合' },
  { title: 'タイソン vs ルイス：最後の大一番、ヘビー級の歴史を変えた試合', tag: '歴代名試合' },
  { title: 'メイウェザー vs パッキャオ：世紀の一戦の内容と歴史的意義', tag: '歴代名試合' },
  { title: 'ウシク vs ジョシュア：クルーザー級の技術がヘビー級を制した名勝負', tag: '歴代名試合' },
  { title: '辰吉 vs シリモンコン：浪速のジョーの世界奪還劇を振り返る', tag: '歴代名試合' },
  { title: '具志堅用高の13度目の防衛戦：奇跡の逆転KOが生まれた名勝負', tag: '歴代名試合' },
  { title: 'カネロ vs コバレフ：2階級制覇を達成した衝撃の試合を解説', tag: '歴代名試合' },
  { title: '日本人同士の世界タイトルマッチ名勝負5選：国内で盛り上がった歴史的一戦', tag: '歴代名試合' },
]

async function generateArticle(topic) {
  const prompt = `ボクシングサイト「ボクシングナビ」向けのコラム記事を書いてください。

タイトル：${topic.title}
カテゴリ：${topic.tag}

以下の形式でMarkdownを出力してください：

---
title: "${topic.title}"
date: "${new Date().toISOString().split('T')[0]}"
tag: "${topic.tag}"
description: "（100文字以内の記事概要）"
---

（記事本文：1500〜2000文字、## 見出しを3〜5個使用、ボクシングファンが楽しめる内容）

注意：
- 読みやすい日本語で書く
- 具体的な数字・事実を交える
- 初心者にも分かりやすく説明する
- SEOを意識したキーワードを自然に使用`

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 2000,
    messages: [{ role: 'user', content: prompt }],
  })

  return response.content[0].text
}

function slugify(title) {
  return title
    .replace(/[^\w\u3040-\u30FF\u4E00-\u9FFF\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .substring(0, 60)
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  // ランダムに1〜2記事選択
  const existing = fs.readdirSync(OUTPUT_DIR).map(f => f.replace('.md', ''))
  const available = TOPICS.filter(t => {
    const slug = slugify(t.title)
    return !existing.some(e => e.includes(slug.substring(0, 20)))
  })

  if (available.length === 0) {
    console.log('全記事生成済みです')
    return
  }

  const count = Math.min(2, available.length)
  const selected = available.sort(() => Math.random() - 0.5).slice(0, count)

  for (const topic of selected) {
    try {
      console.log(`生成中: ${topic.title}`)
      const content = await generateArticle(topic)
      const slug = slugify(topic.title)
      const date = new Date().toISOString().split('T')[0]
      const filename = `${date}-${slug}.md`
      fs.writeFileSync(path.join(OUTPUT_DIR, filename), content, 'utf8')
      console.log(`✅ 保存: ${filename}`)
      await new Promise(r => setTimeout(r, 2000))
    } catch (err) {
      console.error(`❌ エラー: ${topic.title}`, err.message)
    }
  }
}

main()
