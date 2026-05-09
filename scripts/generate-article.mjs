/**
 * ボクシングコラム記事 自動生成スクリプト
 * - 1日3記事生成（カテゴリローテーション）
 * - 最新試合情報JSONも自動更新
 */

import Anthropic from '@anthropic-ai/sdk'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')
const OUTPUT_DIR = path.join(ROOT, 'content/blog')
const MATCHES_FILE = path.join(ROOT, 'content/latest-matches.json')

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })

// カテゴリごとにトピックを管理
const TOPICS_BY_CATEGORY = {
  '選手分析': [
    { title: '井上尚弥の強さの秘密：パンチ力・スピード・IQを徹底分析', tag: '選手分析' },
    { title: 'カネロ・アルバレスはなぜ最強と言われるのか？その戦術と実力', tag: '選手分析' },
    { title: '村田諒太の軌跡：オリンピック金から世界王者への道', tag: '選手分析' },
    { title: 'タイソン・フューリーのボクシングスタイル：なぜ倒せないのか', tag: '選手分析' },
    { title: 'オレクサンドル・ウシクはなぜヘビー級でも強いのか', tag: '選手分析' },
    { title: 'マニー・パッキャオ：8階級制覇の伝説とそのボクシングスタイル', tag: '選手分析' },
    { title: 'フロイド・メイウェザーJr.の無敗の秘密：ディフェンスの芸術', tag: '選手分析' },
    { title: '長谷川穂積の3階級制覇：日本ボクシングが誇るアウトボクサー', tag: '選手分析' },
    { title: 'ベテルビエフはなぜ全試合KOなのか：圧倒的破壊力の秘密', tag: '選手分析' },
    { title: 'テレンス・クロフォードのスイッチヒッティング：なぜ対処できないのか', tag: '選手分析' },
    { title: '那須川天心のボクシング転向：キックボクシング最強がプロボクサーに挑む', tag: '選手分析' },
  ],
  '歴代名試合': [
    { title: 'ボクシング史上最高の試合TOP10：専門家が選ぶ伝説の一戦', tag: '歴代名試合' },
    { title: 'アリ vs フォアマン「ジャングルの戦い」：世紀の逆転劇を徹底解説', tag: '歴代名試合' },
    { title: '井上尚弥 vs ドネア第1戦：日本ボクシング史上最高試合と言われる理由', tag: '歴代名試合' },
    { title: 'タイソン vs ルイス：最後の大一番、ヘビー級の歴史を変えた試合', tag: '歴代名試合' },
    { title: 'メイウェザー vs パッキャオ：世紀の一戦の内容と歴史的意義', tag: '歴代名試合' },
    { title: 'ウシク vs ジョシュア：クルーザー級の技術がヘビー級を制した名勝負', tag: '歴代名試合' },
    { title: '辰吉 vs シリモンコン：浪速のジョーの世界奪還劇を振り返る', tag: '歴代名試合' },
    { title: '具志堅用高の13度目の防衛戦：奇跡の逆転KOが生まれた名勝負', tag: '歴代名試合' },
    { title: 'カネロ vs GGG：3試合にわたる壮絶な名勝負の全記録', tag: '歴代名試合' },
    { title: 'アリ vs フレージャー「スリラー・イン・マニラ」：世紀の3部作を振り返る', tag: '歴代名試合' },
  ],
  '初心者向け': [
    { title: 'ボクシング初心者が最初に知るべき10のこと', tag: '初心者向け' },
    { title: 'WBC・WBA・IBF・WBOの違いとは？世界4団体をわかりやすく解説', tag: '初心者向け' },
    { title: 'ボクシングのルール完全ガイド：反則・ダウン・判定をわかりやすく解説', tag: '初心者向け' },
    { title: 'ボクシングの階級一覧：ミニマム級からヘビー級まで全解説', tag: '初心者向け' },
    { title: 'ボクシングジムの選び方：初心者が後悔しないための5つのポイント', tag: '初心者向け' },
    { title: 'ボクシング観戦をもっと楽しむための基礎知識：採点・判定・反則を理解する', tag: '初心者向け' },
  ],
  '歴代王者特集': [
    { title: '歴代ヘビー級王者列伝：アリからフューリーまでの最強ボクサーたち', tag: '歴代王者特集' },
    { title: '日本人歴代最強ボクサーランキング：世界を驚かせたチャンピオンたち', tag: '歴代王者特集' },
    { title: '具志堅用高：13度防衛の偉業と伝説のボクシング人生', tag: '歴代王者特集' },
    { title: 'モハメド・アリの軌跡：ボクシングを超えた20世紀最大のヒーロー', tag: '歴代王者特集' },
    { title: 'マイク・タイソンの全盛期：史上最恐ヘビー級王者の伝説', tag: '歴代王者特集' },
    { title: '辰吉丈一郎の伝説：浪速のジョーが刻んだ日本ボクシング史', tag: '歴代王者特集' },
    { title: 'ロベルト・デュラン：「ストーン・ハンズ」と呼ばれた4階級制覇王者', tag: '歴代王者特集' },
    { title: '歴代スーパーバンタム級王者列伝：井上尚弥が君臨する階級の歴史', tag: '歴代王者特集' },
    { title: '西岡利晃：WBCフェザー級王者として世界に認められた日本人ボクサー', tag: '歴代王者特集' },
    { title: '大場政夫：天才ボクサーの短くも輝かしいボクシング人生', tag: '歴代王者特集' },
  ],
  '高校・アマチュア': [
    { title: '高校ボクシング全国大会完全ガイド：インターハイ・選抜・国体の仕組み', tag: '高校・アマチュア' },
    { title: '高校ボクシング注目選手：将来のプロを目指す逸材たち', tag: '高校・アマチュア' },
    { title: 'ボクシングの強豪高校一覧：全国制覇を狙う名門校の特徴', tag: '高校・アマチュア' },
    { title: 'アマチュアボクシングとプロボクシングの違い：ルール・採点・装備を徹底比較', tag: '高校・アマチュア' },
    { title: 'JOCジュニアオリンピックボクシング：日本最高峰ジュニア大会の見どころ', tag: '高校・アマチュア' },
    { title: 'オリンピックボクシング：アマチュア最高峰の舞台で輝いた日本人選手たち', tag: '高校・アマチュア' },
    { title: '井上尚弥の高校時代：東農大二高での活躍とアマチュア戦績', tag: '高校・アマチュア' },
    { title: '村田諒太のアマチュア時代：オリンピック金メダルへの軌跡', tag: '高校・アマチュア' },
  ],
  '観戦ガイド': [
    { title: 'DAZNでボクシングを見る方法：登録から視聴まで完全ガイド', tag: '観戦ガイド' },
    { title: 'WOWOWのボクシング中継完全ガイド：視聴方法・料金・見どころ', tag: '観戦ガイド' },
    { title: 'ボクシング判定の見方：採点基準とジャッジの評価方法を解説', tag: '観戦ガイド' },
    { title: 'ボクシング生観戦の楽しみ方：チケット購入からマナーまで', tag: '観戦ガイド' },
    { title: 'YouTubeでボクシングを楽しむ方法：無料で見られるおすすめチャンネル', tag: '観戦ガイド' },
  ],
  '海外ボクシング': [
    { title: 'メキシコとボクシング：なぜメキシカンボクサーは強いのか', tag: '海外ボクシング' },
    { title: 'フィリピンのボクシング文化：マニー・パッキャオが国民的英雄になった理由', tag: '海外ボクシング' },
    { title: 'キューバボクシングの伝統：アマチュア最強国が生んだスタイル', tag: '海外ボクシング' },
    { title: 'イギリスボクシングの歴史：フューリー・ジョシュアが生まれた土壌', tag: '海外ボクシング' },
    { title: 'アメリカボクシングの黄金時代：アリ・フレージャー・フォアマンの時代', tag: '海外ボクシング' },
  ],
  'トレーニング': [
    { title: 'ボクシングが最強の有酸素運動である理由：カロリー消費と体への効果', tag: 'トレーニング' },
    { title: 'ボクシングジムに初めて行く前に知っておきたいこと', tag: 'トレーニング' },
    { title: 'ボクシンググローブの選び方：初心者に最適なサイズと素材', tag: 'トレーニング' },
    { title: 'サンドバッグの選び方と自宅トレーニングの始め方', tag: 'トレーニング' },
    { title: 'ボクシングで痩せる！ダイエット効果と正しいトレーニング方法', tag: 'トレーニング' },
  ],
}

// カテゴリローテーション順
const CATEGORY_ROTATION = [
  '選手分析',
  '歴代名試合',
  '初心者向け',
  '歴代王者特集',
  '高校・アマチュア',
  '観戦ガイド',
  '海外ボクシング',
  'トレーニング',
]

// タグ→関連ページのマッピング
const TAG_LINKS = {
  '歴代名試合': '歴代名試合一覧は[こちら](/matches)でもご覧いただけます。',
  '歴代王者特集': '歴代王者一覧は[こちら](/champions)でもご覧いただけます。',
  '高校・アマチュア': '高校・アマチュアボクシングの詳細は[こちら](/amateur)をご覧ください。',
  '観戦ガイド': 'ボクシングの観戦方法は[こちら](/watch)で詳しく解説しています。',
  '初心者向け': 'ボクシング初心者ガイドは[こちら](/beginners)もご参照ください。',
  'YouTube・動画': 'DAZNでの視聴方法は[こちら](/watch)をご覧ください。',
  '選手分析': '注目選手の詳細プロフィールは[こちら](/fighters)をご覧ください。',
}

// タグ→YouTubeキーワードのマッピング
const YOUTUBE_KEYWORDS = {
  '歴代名試合': '名試合 ボクシング ダイジェスト',
  '歴代王者特集': 'ボクシング 名王者 名試合',
  '選手分析': 'ボクシング 選手 試合',
  '試合解説': 'ボクシング 試合 ハイライト',
  '高校・アマチュア': '高校ボクシング 試合',
  'YouTube・動画': 'ボクシング YouTube おすすめ',
  '日本ボクシング': '日本ボクシング 名試合',
  '観戦ガイド': 'ボクシング 試合 観戦',
  '海外ボクシング': 'world boxing highlights',
  'トレーニング': 'ボクシング トレーニング 初心者',
  '初心者向け': 'ボクシング ルール 解説',
}

// 今日の日付から優先カテゴリを決定（ローテーション）
function getPriorityCategories() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000)
  const categories = []
  for (let i = 0; i < 3; i++) {
    categories.push(CATEGORY_ROTATION[(dayOfYear + i) % CATEGORY_ROTATION.length])
  }
  return categories
}

async function generateArticle(topic) {
  const relatedLink = TAG_LINKS[topic.tag] || ''
  const ytKeyword = YOUTUBE_KEYWORDS[topic.tag] || `${topic.title} ボクシング`
  const ytSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ytKeyword)}`

  const prompt = `ボクシングサイト「ボクシングナビ」向けのコラム記事を書いてください。

タイトル：${topic.title}
カテゴリ：${topic.tag}

必ず以下の形式でMarkdownをそのまま出力してください（\`\`\`markdown などのコードブロックは使わないこと）：

---
title: "${topic.title}"
date: "${new Date().toISOString().split('T')[0]}"
tag: "${topic.tag}"
description: "（100文字以内の記事概要）"
---

（記事本文：1500〜2000文字、## 見出しを3〜5個使用）

記事の末尾に必ず以下のセクションを追加してください：

## YouTubeで試合・動画を見る

この記事のテーマに関連する動画をYouTubeで検索できます。

[▶ YouTubeで「${ytKeyword}」を検索する](${ytSearchUrl})

${relatedLink ? `## 関連ページ\n\n${relatedLink}` : ''}

注意：
- コードブロック(\`\`\`)で囲まない。frontmatterから直接始める
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

// 最新試合情報を生成・更新
async function updateLatestMatches() {
  const prompt = `ボクシングの最新・注目試合情報を5件、JSON配列で出力してください。

2023年〜2025年の実際に行われた重要な世界タイトルマッチを選んでください。
井上尚弥・ウシク・カネロ・ベテルビエフ・クロフォードなど現役トップ選手の試合を含めてください。

必ず以下のJSON形式のみを出力してください（コードブロック不要）：

[
  {
    "date": "YYYY-MM-DD",
    "fighter1": "選手名1",
    "fighter2": "選手名2",
    "result": "勝者 結果の概要",
    "belt": "タイトル名",
    "note": "試合の見どころ・ポイント（50文字以内）"
  }
]

注意：JSONのみ出力。説明文不要。`

  try {
    const response = await client.messages.create({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 800,
      messages: [{ role: 'user', content: prompt }],
    })

    const text = response.content[0].text.trim()
    // JSON部分を抽出
    const jsonMatch = text.match(/\[[\s\S]*\]/)
    if (jsonMatch) {
      const matches = JSON.parse(jsonMatch[0])
      fs.writeFileSync(MATCHES_FILE, JSON.stringify(matches, null, 2), 'utf8')
      console.log('✅ 最新試合情報を更新しました')
    }
  } catch (err) {
    console.error('❌ 試合情報更新エラー:', err.message)
  }
}

function slugify(title) {
  let hash = 0
  for (let i = 0; i < title.length; i++) {
    hash = ((hash << 5) - hash) + title.charCodeAt(i)
    hash |= 0
  }
  const num = Math.abs(hash).toString(36).substring(0, 8)
  const ascii = title.match(/[a-zA-Z0-9]+/g)?.join('-').toLowerCase().substring(0, 20) || ''
  return ascii ? `${ascii}-${num}` : `post-${num}`
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const existing = fs.readdirSync(OUTPUT_DIR).map(f => f.replace('.md', ''))

  // 今日の優先カテゴリを取得（ローテーション）
  const priorityCategories = getPriorityCategories()
  console.log(`📅 今日の優先カテゴリ: ${priorityCategories.join(' / ')}`)

  // 各カテゴリから1記事ずつ選択（合計3記事）
  const selected = []
  for (const category of priorityCategories) {
    const topics = TOPICS_BY_CATEGORY[category] || []
    const available = topics.filter(t => {
      const slug = slugify(t.title)
      return !existing.some(e => e.includes(slug.substring(0, 20)))
    })
    if (available.length > 0) {
      const pick = available[Math.floor(Math.random() * available.length)]
      selected.push(pick)
    }
  }

  // 選択が3記事未満の場合は他カテゴリから補充
  if (selected.length < 3) {
    const allTopics = Object.values(TOPICS_BY_CATEGORY).flat()
    const remaining = allTopics.filter(t => {
      const slug = slugify(t.title)
      const alreadySelected = selected.some(s => s.title === t.title)
      const alreadyExist = existing.some(e => e.includes(slug.substring(0, 20)))
      return !alreadySelected && !alreadyExist
    })
    const extra = remaining.sort(() => Math.random() - 0.5).slice(0, 3 - selected.length)
    selected.push(...extra)
  }

  if (selected.length === 0) {
    console.log('全記事生成済みです')
  } else {
    // 記事生成
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

  // 最新試合情報を更新
  console.log('📊 最新試合情報を更新中...')
  await updateLatestMatches()
}

main()
