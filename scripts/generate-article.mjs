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
  // 観戦ガイド
  { title: 'DAZNでボクシングを見る方法：登録から視聴まで完全ガイド', tag: '観戦ガイド' },
  { title: 'WOWOWのボクシング中継完全ガイド：視聴方法・料金・見どころ', tag: '観戦ガイド' },
  { title: 'ボクシング判定の見方：採点基準とジャッジの評価方法を解説', tag: '観戦ガイド' },
  { title: 'ボクシング生観戦の楽しみ方：チケット購入からマナーまで', tag: '観戦ガイド' },
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
  // 海外ボクシング
  { title: 'メキシコとボクシング：なぜメキシカンボクサーは強いのか', tag: '海外ボクシング' },
  { title: 'フィリピンのボクシング文化：マニー・パッキャオが国民的英雄になった理由', tag: '海外ボクシング' },
  { title: 'キューバボクシングの伝統：アマチュア最強国が生んだスタイル', tag: '海外ボクシング' },
  { title: 'イギリスボクシングの歴史：フューリー・ジョシュアが生まれた土壌', tag: '海外ボクシング' },
  // トレーニング
  { title: 'ボクシングが最強の有酸素運動である理由：カロリー消費と体への効果', tag: 'トレーニング' },
  { title: 'ボクシングジムに初めて行く前に知っておきたいこと', tag: 'トレーニング' },
  { title: 'ボクシンググローブの選び方：初心者に最適なサイズと素材', tag: 'トレーニング' },
  // 日本ボクシング
  { title: '日本人世界王者一覧：戦後から現在までの歴代チャンピオン', tag: '日本ボクシング' },
  { title: '具志堅用高はなぜ伝説なのか：13度防衛の偉業を振り返る', tag: '日本ボクシング' },
  { title: '辰吉丈一郎の伝説：波乱万丈のボクシング人生', tag: '日本ボクシング' },
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
