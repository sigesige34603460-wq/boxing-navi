export type Fighter = {
  id: string;
  name: string;
  nameEn: string;
  flag: string;
  nationality: string;
  nickname: string;
  image: string | null;  // Wikimedia Commons URL or null for styled avatar
  born: string;
  birthplace: string;
  height: string;
  reach: string;
  stance: string;
  weightClass: string;
  record: string;
  trainer: string;
  gym: string;
  titles: string[];
  rankLabel: string;
  tagline: string;
  desc: string;
  color: "red" | "blue" | "green" | "yellow" | "purple" | "orange";
  career: {
    year: string;
    event: string;
    detail?: string;
  }[];
  style: string;
  keyFights: {
    date: string;
    opponent: string;
    result: string;
    note: string;
  }[];
  ytQuery: string;
};

const fighters: Fighter[] = [
  {
    id: "naoya-inoue",
    name: "井上尚弥",
    nameEn: "Naoya Inoue",
    flag: "🇯🇵",
    nationality: "日本",
    nickname: "モンスター",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Naoya_Inoue_%2821990059374%29_%28cropped%29.jpg/480px-Naoya_Inoue_%2821990059374%29_%28cropped%29.jpg",
    born: "1993年4月10日",
    birthplace: "神奈川県座間市",
    height: "165cm",
    reach: "170cm",
    stance: "オーソドックス",
    weightClass: "スーパーバンタム級（122ポンド）",
    record: "28戦28勝（25KO）0敗",
    trainer: "井上真吾（父）",
    gym: "大橋ボクシングジム（神奈川）",
    titles: [
      "WBO世界スーパーバンタム級王者",
      "WBC世界スーパーバンタム級王者",
      "IBF世界スーパーバンタム級王者",
      "WBA世界スーパーバンタム級スーパー王者",
    ],
    rankLabel: "世界4団体統一王者",
    tagline: "「モンスター」の異名を持つ日本最強ボクサー。4団体統一王者として世界に君臨。",
    desc: "井上尚弥は現役最強の日本人ボクサーであり、世界でもP4P（パウンド・フォー・パウンド）トップに位置する選手です。圧倒的なパンチ力と精密なディフェンス、高度なボクシングIQを兼ね備え、「モンスター」のニックネームをほしいままにしています。",
    color: "red",
    career: [
      { year: "1993", event: "神奈川県座間市に生まれる" },
      { year: "2006", event: "父・真吾の指導のもとボクシングを本格開始（小学6年）" },
      { year: "2009", event: "全国高校ボクシング選抜大会 優勝（1年時）" },
      { year: "2010", event: "インターハイ ライトフライ級 優勝" },
      { year: "2011", event: "インターハイ 連覇・アマ通算75勝6敗" },
      { year: "2012", event: "プロデビュー（10月2日）1R KO勝利" },
      { year: "2014", event: "WBC世界ライトフライ級王座 獲得（最速・最年少記録）", detail: "当時20歳10ヶ月、日本人最年少世界王者タイ記録" },
      { year: "2016", event: "WBO世界スーパーフライ級王座 獲得（2階級制覇）" },
      { year: "2018", event: "WBA世界バンタム級王座 獲得（3階級制覇）" },
      { year: "2019", event: "WBSSバンタム級決勝 vs ノニト・ドネア①（12R 判定勝利）", detail: "年間最高試合賞受賞。試合中に眼窩底骨折・副鼻腔骨折を負いながら激戦を制す" },
      { year: "2022", event: "vs ノニト・ドネア②（2R KO勝利）バンタム4団体統一" },
      { year: "2023", event: "スーパーバンタム級へ転向・スティーブン・フルトンを8R TKOでスーパーバンタム4団体統一" },
      { year: "2023", event: "マルロン・タパレスを10R KOで防衛" },
      { year: "2024", event: "ルイス・ネリを6R KOで圧倒、ブランドン・カルデナスを2R TKO", detail: "2024年も2連続KO防衛" },
    ],
    style:
      "コンパクトで正確なジャブからコンビネーションへ繋げるスタイル。右ストレートの威力は世界トップクラス。ガードを固めながら相手のパンチをスリップ・ロールで回避する防御技術も卓越。スピード・パワー・技術を高次元で兼ね備えた「オールラウンダー」。",
    keyFights: [
      { date: "2019-11-07", opponent: "ノニト・ドネア（フィリピン）", result: "12R 判定勝利（WBSSバンタム級決勝）", note: "年間最高試合。眼窩底骨折を負いながら勝利した壮絶な名勝負" },
      { date: "2022-06-07", opponent: "ノニト・ドネア（フィリピン）", result: "2R KO勝利（バンタム4団体統一）", note: "リマッチを2RでKO。バンタム級4団体統一を達成" },
      { date: "2023-07-26", opponent: "スティーブン・フルトン（米国）", result: "8R TKO勝利（スーパーバンタム4団体統一）", note: "スーパーバンタムに転向し即座に4団体統一。井上の「階級上げても最強」を証明" },
      { date: "2024-05-06", opponent: "ルイス・ネリ（メキシコ）", result: "6R KO勝利", note: "初回ダウンを奪われながら逆転KO。ドラマチックな防衛" },
    ],
    ytQuery: "井上尚弥 試合 ハイライト",
  },

  {
    id: "tenshin-nasukawa",
    name: "那須川天心",
    nameEn: "Tenshin Nasukawa",
    flag: "🇯🇵",
    nationality: "日本",
    nickname: "天才・神童",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tenshin_Nasukawa_2019.jpg/480px-Tenshin_Nasukawa_2019.jpg",
    born: "2000年8月18日",
    birthplace: "千葉県松戸市",
    height: "163cm",
    reach: "170cm",
    stance: "オーソドックス",
    weightClass: "フェザー級（126ポンド）",
    record: "プロボクシング 7戦7勝（4KO）0敗（2025年時点）",
    trainer: "夛田悟",
    gym: "帝拳ボクシングジム（東京）",
    titles: [
      "元Krush（K-1）スーパーフェザー級王者",
      "元ONE世界キックボクシング・フェザー級王者",
    ],
    rankLabel: "注目のプロボクサー",
    tagline: "元格闘技界の頂点に立ったキックボクシング最強王者が、本場ボクシングの世界で新たな挑戦。",
    desc: "那須川天心は、キックボクシング界で183戦171勝（107KO）という圧倒的な戦績を残した天才格闘家。日本が世界に誇るファイターで、その神業のようなスピードとコンビネーション技術は他の追随を許さない。2022年からプロボクシングに転向し、新たな世界制覇を目指している。",
    color: "blue",
    career: [
      { year: "2000", event: "千葉県松戸市に生まれる" },
      { year: "2008", event: "父の影響でキックボクシングを始める（8歳）" },
      { year: "2013", event: "Krush スーパーフェザー級王座 獲得（13歳）", detail: "史上最年少Krushチャンピオン" },
      { year: "2017", event: "K-1 WORLD GP スーパーフェザー級 優勝" },
      { year: "2018", event: "フロイド・メイウェザーとのエキシビションマッチ（大晦日）", detail: "当時18歳でメイウェザーと対戦。プロボクシングの世界の高さを実感" },
      { year: "2019", event: "ONE Championshipと契約。ONE世界フェザー級王座 獲得" },
      { year: "2021", event: "キックボクシング引退（通算183勝）" },
      { year: "2022", event: "帝拳ボクシングジム入会・プロボクシングデビュー（6月）" },
      { year: "2023", event: "プロボクシング連勝を重ね、日本国内ランキング上位へ" },
      { year: "2024", event: "東洋太平洋タイトル挑戦・世界ランキング入りを目指し活動中" },
      { year: "2025", event: "世界タイトル挑戦を射程に入れた強豪選手との対戦が続く" },
    ],
    style:
      "キックボクシングで磨いた圧倒的なスピードと距離感が最大の武器。コンパクトなコンビネーションと巧みなフットワークで相手を翻弄する。ボクシング転向後もその天性の感覚で急速に成長中。攻撃のタイミングと多彩さは日本人ボクサー随一。",
    keyFights: [
      { date: "2018-12-31", opponent: "フロイド・メイウェザー（米国）エキシビション", result: "TKO負け（エキシビション）", note: "18歳でレジェンドと対戦。大晦日の伝説の一戦。ボクシングへの転向を志すきっかけに" },
      { date: "2022-06-06", opponent: "竹内悠介", result: "2R KO勝利（プロボクシングデビュー戦）", note: "プロボクシングデビューを2RのKOで飾る" },
      { date: "2023-06", opponent: "河野春樹", result: "判定勝利", note: "着実にボクシング技術を積み上げての勝利" },
    ],
    ytQuery: "那須川天心 ボクシング 試合",
  },

  {
    id: "canelo-alvarez",
    name: "カネロ・アルバレス",
    nameEn: "Saúl 'Canelo' Alvarez",
    flag: "🇲🇽",
    nationality: "メキシコ",
    nickname: "カネロ（Cinnamon＝シナモン、赤毛から）",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Canelo_Alvarez_%2849012977928%29.jpg/480px-Canelo_Alvarez_%2849012977928%29.jpg",
    born: "1990年7月18日",
    birthplace: "グアダラハラ、ハリスコ州、メキシコ",
    height: "173cm",
    reach: "179cm",
    stance: "オーソドックス",
    weightClass: "スーパーミドル級（168ポンド）",
    record: "62戦60勝（39KO）2敗2分",
    trainer: "エディ・レイノソ",
    gym: "Canelo Promotions",
    titles: [
      "WBO世界スーパーミドル級王者",
      "WBC世界スーパーミドル級王者",
      "IBF世界スーパーミドル級王者",
      "WBA世界スーパーミドル級スーパー王者",
    ],
    rankLabel: "P4P世界最強級",
    tagline: "現代ボクシング最高峰と称されるメキシコの英雄。スーパーミドル4団体統一王者。",
    desc: "カネロ・アルバレスは、スーパーミドル級4団体統一王者として現役最強ボクサーの一人に数えられるメキシコの英雄。天才的なカウンターパンチとボディーワーク、そして豊富な試合経験から生まれる老練な試合運びで多くの強豪を退けてきた。",
    color: "green",
    career: [
      { year: "1990", event: "メキシコ・グアダラハラに生まれる。6人兄弟全員がボクサー" },
      { year: "2005", event: "プロデビュー（15歳）。6年でメキシコ国内トップに" },
      { year: "2011", event: "WBC世界スーパーウェルター級王座 獲得（1階級目）" },
      { year: "2013", event: "vs フロイド・メイウェザー（判定負け）", detail: "世紀の対決でメイウェザーに敗れるも、その後急成長" },
      { year: "2015", event: "WBC・WBA世界ミドル級王座 獲得" },
      { year: "2017", event: "vs ゲンナジー・ゴロフキン①（12R 引き分け）", detail: "世紀の名勝負・世界中が息をのんだ" },
      { year: "2018", event: "vs ゴロフキン②（判定勝利）ミドル級4団体統一" },
      { year: "2019", event: "スーパーミドル（168ポンド）に主戦場を移す" },
      { year: "2021", event: "WBO・WBC・IBF・WBAスーパーミドル4団体統一を達成" },
      { year: "2022", event: "vs ドミトリー・ビボル（判定負け）ライトヘビー級挑戦で敗北", detail: "ビボルの巧みなアウトボクシングに完敗。唯一の本格的な敗戦" },
      { year: "2023", event: "vs ジャーメル・チャーロ（判定勝利）スーパーミドル防衛" },
      { year: "2024", event: "スーパーミドルで連続防衛を継続中" },
    ],
    style:
      "高精度のカウンターパンチと柔軟なボディーワークが最大の武器。相手のパンチを小さくかわしながら鋭いカウンターで反撃する。ボディーへの攻撃と顔面への攻撃を巧みに組み合わせ、どのレンジでも戦える万能スタイル。試合巧者でプレッシャーに強いメンタルも特長。",
    keyFights: [
      { date: "2013-09-14", opponent: "フロイド・メイウェザー（米国）", result: "12R 判定負け", note: "当時の最高試合。メイウェザーのディフェンスに苦しむも互角以上の場面も" },
      { date: "2017-09-16", opponent: "ゲンナジー・ゴロフキン（カザフスタン）", result: "12R 引き分け", note: "「世紀の一戦」。歴史に残る壮絶な打ち合い" },
      { date: "2021-11-06", opponent: "カラム・スミス（英国）", result: "8R TKO勝利（スーパーミドル4団体統一）", note: "スーパーミドル4団体統一達成。歴史に名を刻む" },
      { date: "2022-05-07", opponent: "ドミトリー・ビボル（ロシア）", result: "12R 判定負け", note: "ライトヘビー挑戦で珍しい完敗。ビボルの技術に脱帽" },
    ],
    ytQuery: "カネロ アルバレス 試合 ハイライト",
  },

  {
    id: "oleksandr-usyk",
    name: "オレクサンドル・ウシク",
    nameEn: "Oleksandr Usyk",
    flag: "🇺🇦",
    nationality: "ウクライナ",
    nickname: "キャット（Cat）",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Oleksandr_Usyk_2019_%28cropped%29.jpg/480px-Oleksandr_Usyk_2019_%28cropped%29.jpg",
    born: "1987年1月17日",
    birthplace: "サイミー、ウクライナ（旧ソ連）",
    height: "191cm",
    reach: "198cm",
    stance: "サウスポー",
    weightClass: "ヘビー級",
    record: "22戦22勝（14KO）0敗",
    trainer: "アナトリー・ローマニー",
    gym: "K2 Promotions",
    titles: [
      "WBO世界ヘビー級王者",
      "WBC世界ヘビー級王者",
      "IBF世界ヘビー級王者",
      "WBA世界ヘビー級スーパー王者",
    ],
    rankLabel: "ヘビー級4団体統一王者",
    tagline: "技術派サウスポーがヘビー級を制圧。現代ボクシング史上最高のテクニシャン。",
    desc: "オレクサンドル・ウシクは、元クルーザー級4団体統一王者からヘビー級に転向し、そのまま4団体統一を達成した希代のテクニシャン。ロンドン五輪金メダリストであり、アマチュアでも世界トップを経験。サウスポーから繰り出す高度なボクシングで大型ヘビー級選手を連続して撃破している。",
    color: "yellow",
    career: [
      { year: "1987", event: "ウクライナ・サイミーに生まれる" },
      { year: "2008", event: "北京五輪ボクシング代表（ウクライナ）" },
      { year: "2012", event: "ロンドン五輪ボクシング スーパーヘビー級 金メダル" },
      { year: "2013", event: "プロデビュー（クルーザー級）" },
      { year: "2018", event: "クルーザー級4団体統一（WBSSトーナメント優勝）", detail: "史上初のクルーザー級4団体同時統一" },
      { year: "2019", event: "ヘビー級に転向・アンソニー・ジョシュアに挑戦" },
      { year: "2021", event: "vs アンソニー・ジョシュア①（判定勝利）WBO・IBF・WBAヘビー級王座奪取" },
      { year: "2022", event: "vs アンソニー・ジョシュア②（判定勝利）防衛成功" },
      { year: "2024", event: "vs タイソン・フューリー①（判定勝利）WBCヘビー級王座奪取・4団体統一", detail: "長年の夢だったヘビー級4団体統一。歴史的快挙" },
      { year: "2024", event: "vs タイソン・フューリー②（判定勝利）4団体統一防衛" },
    ],
    style:
      "サウスポーからの鋭いレフトストレートと高速コンビネーションが主武器。足を使ったアウトボクシングと接近戦をシームレスに切り替える戦術眼が際立つ。クルーザー級出身のため動きのキレとスピードがヘビー級水準を大きく上回る。フィジカル強者を技術で制圧する現代最高峰のテクニシャン。",
    keyFights: [
      { date: "2021-09-25", opponent: "アンソニー・ジョシュア（英国）", result: "12R 判定勝利（ヘビー級3冠奪取）", note: "ヘビー級転向初の世界タイトル戦。技術差を見せつけ判定勝利" },
      { date: "2022-08-20", opponent: "アンソニー・ジョシュア（英国）②", result: "12R 判定勝利（防衛）", note: "リマッチも技術で完封。ジョシュアとの因縁に終止符" },
      { date: "2024-05-18", opponent: "タイソン・フューリー（英国）①", result: "12R 判定勝利（ヘビー級4団体統一）", note: "最大の強敵フューリーを制し4団体統一。現役最強ヘビー級の証明" },
      { date: "2024-12", opponent: "タイソン・フューリー（英国）②", result: "12R 判定勝利（4団体統一防衛）", note: "リマッチでも完勝。ヘビー級最強王者として君臨" },
    ],
    ytQuery: "ウシク フューリー 試合 ハイライト",
  },

  {
    id: "artur-beterbiev",
    name: "アルツール・ベテルビエフ",
    nameEn: "Artur Beterbiev",
    flag: "🇷🇺",
    nationality: "ロシア（チェチェン系カナダ国籍）",
    nickname: "Aртур",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Artur_Beterbiev_%2849012978918%29.jpg/480px-Artur_Beterbiev_%2849012978918%29.jpg",
    born: "1985年1月22日",
    birthplace: "ハサビュルト、ダゲスタン、ロシア",
    height: "183cm",
    reach: "185cm",
    stance: "オーソドックス",
    weightClass: "ライトヘビー級（175ポンド）",
    record: "21戦21勝（21KO）0敗",
    trainer: "マルク・ラメー",
    gym: "Eye of the Tiger Management（モントリオール）",
    titles: [
      "WBO世界ライトヘビー級王者",
      "WBC世界ライトヘビー級王者",
      "IBF世界ライトヘビー級王者",
    ],
    rankLabel: "ライトヘビー級4団体王者",
    tagline: "プロ戦全試合KO勝利という前人未踏の記録を持つ破壊力の王者。",
    desc: "アルツール・ベテルビエフはプロキャリア全戦全KO勝利という前人未踏の記録を持つライトヘビー級の支配者。ロシア・ダゲスタン出身のアマチュアエリートで、2012年ロンドン五輪にも出場。圧倒的なパンチ力と不屈のプレッシャーで相手を完膚なきまでに叩きのめすスタイルは、現在のボクシング界最大の脅威とも評される。",
    color: "purple",
    career: [
      { year: "1985", event: "ロシア・ダゲスタン共和国ハサビュルトに生まれる" },
      { year: "2003", event: "ロシアナショナルチームとしてアマチュア活動開始" },
      { year: "2009", event: "世界アマチュアボクシング選手権 準優勝" },
      { year: "2012", event: "ロンドン五輪ボクシング ライトヘビー級 ベスト8" },
      { year: "2013", event: "プロデビュー（カナダ・モントリオール）" },
      { year: "2017", event: "IBF世界ライトヘビー級王座 獲得（プロ13戦全KO）" },
      { year: "2019", event: "WBC世界ライトヘビー級王座を追加（2冠統一）" },
      { year: "2022", event: "WBO世界ライトヘビー級王座も追加（3冠統一）" },
      { year: "2024", event: "vs ドミトリー・ビボル（判定勝利）ライトヘビー4団体統一（WBA追加）", detail: "プロ全試合KOのベテルビエフが唯一の高壁ビボルを攻略" },
    ],
    style:
      "強烈なプレッシャーをかけながら全弾フルパワーで振り続けるスタイル。特に右フックとボディーへの攻撃が強力で、一発一発に必倒の意志が込められている。守備は決して洗練されていないが、圧倒的なタフネスと前進力でカバー。プロ全試合KOという記録が物語る純粋な破壊力。",
    keyFights: [
      { date: "2019-10-18", opponent: "マーカス・ブラウン（米国）", result: "2R TKO勝利（WBC・IBF2冠統一）", note: "元王者ブラウンを2Rで粉砕。2冠統一を圧倒的な内容で達成" },
      { date: "2022-12-17", opponent: "アンソニー・ヤード（英国）", result: "8R TKO勝利（WBO王座追加）", note: "3団体統一。全試合KOの記録を継続" },
      { date: "2024-10-12", opponent: "ドミトリー・ビボル（ロシア）", result: "12R 判定勝利（4団体統一）", note: "カネロを破った最強挑戦者ビボルに判定勝利。ライトヘビー完全統一" },
    ],
    ytQuery: "ベテルビエフ 試合 KO ハイライト",
  },

  {
    id: "terence-crawford",
    name: "テレンス・クロフォード",
    nameEn: "Terence Crawford",
    flag: "🇺🇸",
    nationality: "アメリカ",
    nickname: "Bud（バッド）",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Terence_Crawford_%2849012977543%29.jpg/480px-Terence_Crawford_%2849012977543%29.jpg",
    born: "1987年9月28日",
    birthplace: "ネブラスカ州オマハ",
    height: "170cm",
    reach: "174cm",
    stance: "スイッチヒッター（オーソドックス＆サウスポー両構え）",
    weightClass: "スーパーウェルター級（154ポンド）",
    record: "41戦41勝（31KO）0敗",
    trainer: "ブライアン・マッキンタイア",
    gym: "Top Rank（旧）→ Matchroom（現）",
    titles: [
      "WBO世界スーパーウェルター級王者",
      "元WBO世界ウェルター級王者（4団体統一）",
    ],
    rankLabel: "P4P世界トップクラス",
    tagline: "スイッチヒッティングの天才。3階級制覇を達成したアメリカのP4P最強候補。",
    desc: "テレンス・クロフォードは、左右どちらの構えでも高いレベルで戦えるスイッチヒッターとして知られる天才ボクサー。ライト級・スーパーライト級・ウェルター級と3階級で世界王座を獲得し、ウェルター級では4団体統一を達成。全試合無敗の記録を保ち、P4Pランキング上位に常時ランクインしている。",
    color: "orange",
    career: [
      { year: "1987", event: "ネブラスカ州オマハに生まれる" },
      { year: "2008", event: "プロデビュー（21歳）" },
      { year: "2014", event: "WBO世界ライト級王座 獲得（1階級目）" },
      { year: "2015", event: "WBC・WBA・IBF・WBOライト級4団体統一" },
      { year: "2016", event: "スーパーライト級に転向・WBO王座獲得（2階級目）" },
      { year: "2018", event: "ウェルター級に転向・WBO王座獲得（3階級目）", detail: "vs ジェフ・ホーン KO9R" },
      { year: "2023", event: "vs エロール・スペンスJr.（9R TKO勝利）ウェルター級4団体統一", detail: "最大のライバル対決。9RのTKOでスペンスを仕留め、長年待望の4団体統一" },
      { year: "2024", event: "スーパーウェルター級（154ポンド）に転向・新たな挑戦へ" },
    ],
    style:
      "最大の武器はスイッチヒッティング能力。試合中に左右の構えを自在に切り替えることで相手に対応を許さない。各構えから放つジャブとコンビネーションの精度が極めて高く、スピードとパンチの切れも世界最高水準。頭の良いボクシングIQでどんな選手にも対応できる万能ファイター。",
    keyFights: [
      { date: "2023-07-29", opponent: "エロール・スペンスJr.（米国）", result: "9R TKO勝利（ウェルター級4団体統一）", note: "長年のライバル対決でスペンスを9RでTKO。4団体統一の偉業達成" },
      { date: "2021-11-20", opponent: "シャーン・ポーター（米国）", result: "10R TKO勝利（WBO王座防衛）", note: "接戦をTKOで制す。ウェルター級最強を証明" },
      { date: "2018-09-01", opponent: "ジェフ・ホーン（オーストラリア）", result: "9R KO勝利（WBO王座奪取）", note: "ウェルター転向初戦でKO。3階級制覇達成" },
    ],
    ytQuery: "テレンス クロフォード 試合 ハイライト",
  },
];

export default fighters;
export const featuredFighters = ["naoya-inoue", "tenshin-nasukawa", "oleksandr-usyk"];
