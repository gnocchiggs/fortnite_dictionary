//add etymology, example section

const dictionary = [
  {
    word: 'above',
    def1: '上',
    def2: '',
    example: `There's a full trio above us.`,
    exampleJp: '私達の上に敵のトリオが居る。',
    rel: ['shield', 'goat'],
  },
  {
    word: 'AK',
    def1: 'ヘビーアサルトライフル',
    def2: [''],
    etym: `実在している銃の"AK-47"から`,
    rel: ['AR'],
    example: 'There is a blue AK.',
    exampleJp: 'あそこに青ヘビアサが落ちているよ。',
    altMatch: ['ak', 'ヘビアサ'],
  },
  {
    word: 'AR',
    def1: `アサルトライフル`,
    def2: [''],
    example: 'What AR do you have?',
    exampleJp: '何のアサルト持ってる？',
    etym: `"assault rifle"の略`,
    rel: ['AK'],
    altMatch: ['ar', 'アサルト'],
  },
  {
    word: 'ammo',
    def1: '弾、弾薬',
    def2: [''],
    example: 'Can I have some sniper ammo?',
    exampleJp: 'スナイパーの弾貰える？',
    etym: `"ammunition"の略`,
    rel: ['bullet', 'shell'],
  },
  {
    word: 'beam',
    def1: '大ダメージを与える',
    def2: [''],
    example: 'I lasered Aura!',
    exampleJp: 'オーラに大ダメージ与えたよ！',
    rel: ['laser', 'hit'],
  },
  {
    word: 'below',
    def1: '下',
    def2: '',
    example: `Don't go down below.`,
    exampleJp: '下には行かないでおこうね。',
    rel: ['above', 'layer'],
  },
  {
    word: 'brick',
    def1: 'レンガ、石材',
    def2: '',
    rel: ['wood', 'metal', 'build'],
  },
  {
    word: 'blue',
    def1: 'レア、青武器',
    def2: [''],
    rel: ['rare', 'rarity'],
    etym: 'レアレアリティの青色から',
  },

  {
    word: 'box',
    def1: 'ボックス',
    def2: 'ボックスに閉じ込める',
    rel: ['1x1', '1x2', 'piece control'],
  },
  {
    word: 'bullet',
    def1: '弾',
    def2: [''],
    example: `I had no bullets.`,
    exampleJp: '弾が無かった。',
    rel: ['ammo', 'shell'],
  },
  {
    word: 'cap',
    def1: '上限に達する、カンストする',
    def2: '冗談、ジョーク',
    example: `I have capped mats.`,
    exampleJp: '資材全部カンストしてる。',
    rel: ['material', 'max'],
  },
  {
    word: 'cracked',
    def1: 'シールドを割った',
    def2: 'とても上手',
    example: 'I cracked all of them!',
    exampleJp: '全員シールド割った！',
    rel: ['shield', 'goat'],
  },
  {
    word: 'dead',
    def1: '（敵を）倒した',
    def2: '（敵に）倒された',
    rel: ['elimination', 'kill'],
  },
  {
    word: 'default',
    def1: '初期スキン',
    def2: [''],
    rel: ['skin'],
  },
  {
    word: 'drop',
    def1: '着地する',
    def2: '（アイテム等を）落とす',
    rel: ['land'],
  },
  {
    word: 'duo',
    def1: 'デュオ',
    def2: '2人チーム',
    example: `Duos get disabled after 10.`,
    exampleJp: '22時過ぎたらデュオのモード無くなるんだよね。',
    rel: ['shield', 'goat'],
  },
  {
    word: 'edit',
    def1: '編集',
    def2: [''],
    rel: ['edit course', 'wheel reset'],
  },
  {
    word: 'floor',
    def1: '床',
    def2: [''],
    rel: ['build', 'piece'],
  },
  {
    word: 'fragger',
    def1: 'リフレッシュ役',
    def2: '',
    rel: ['IGL', 'support'],
  },
  {
    word: 'GG',
    def1: '「良い戦いだった」と対戦相手を労う意味',
    def2: ['「対戦ありがとうございました」と同じ意味としても使われる'],
    rel: ['pop off'],
    etym: `"good game(s)"の略、直訳すると「良い試合」という意味`,
    altMatch: ['good game', 'good games', 'ggs', 'gg'],
  },
  {
    word: 'goat',
    def1: `とても上手`,
    def2: [''],
    rel: ['cracked'],
    etym: `"greatest of all time"の略、直訳すると「史上最高」という意味`,
    altMatch: ['goated'],
  },
  {
    word: 'gold',
    def1: 'レジェンダリー、金武器',
    def2: [''],
    rel: ['legendary', 'rarity'],
    etym: 'レジェンダリーレアリティの金色から',
  },
  {
    word: 'green',
    def1: 'アンコモン、緑武器',
    def2: [''],
    rel: ['uncommon', 'rarity'],
    etym: `アンコモンレアリティの緑色から`,
    altMatch: ['rarity'],
  },
  {
    word: 'grey',
    def1: 'コモン、白武器',
    def2: [''],
    rel: [''],
    etym: `コモンレアリティの灰色から`,
    altMatch: ['common', 'rarity'],
  },
  {
    word: 'hard mats',
    def1: 'レンガと鉄の資材のこと',
    def2: `'mats'が略されることもある`,
    example: 'I need hard (mats)!',
    exampleJp: 'レンガか鉄渡して！',
    rel: ['brick', 'metal', 'build'],
    altMatch: ['hard'],
  },
  {
    word: 'health',
    def1: '体力',
    def2: [''],
    rel: ['shield', 'heal'],
  },
  {
    word: 'height',
    def1: 'ハイグラ、高地',
    def2: [''],
    rel: ['low ground'],
  },
  {
    word: 'hit',
    def1: '（攻撃を）当てる',
    def2: ['撃つ'],
    rel: ['tag', 'laser', 'beam'],
  },
  {
    word: 'hot drop',
    def1: '激戦区',
    def2: '',
    rel: ['POI'],
  },
  {
    word: 'IGL',
    def1: 'リーダー',
    def2: '',
    etym: `'in-game leader'の略`,
    rel: ['fragger', 'support'],
  },
  {
    word: 'laser',
    def1: '大ダメージを与える',
    def2: [''],
    rel: ['beam', 'hit'],
  },
  {
    word: 'kid',
    def1: '敵',
    def2: '',
    etym: `フォートナイトのプレイヤーの多くが子供であることから`,
    example: `There's a kid on the zip line!`,
    exampleJp: 'ジップラインに敵が乗っているよ！',
  },
  {
    word: 'land',
    def1: '降りる',
    def2: '',
    example: `'I'm gonna land on that roof.'`,
    exampleJp: 'あの屋根に降りるね。',
    rel: ['drop'],
  },
  {
    word: 'layer',
    def1: '段',
    def2: '',
    example: ``,
    exampleJp: '',
    rel: [''],
  },
  {
    word: 'lobby',
    def1: 'ロビー、待機場',
    def2: '同じゲームに参加しているプレイヤー達',
  },
  {
    word: 'mats',
    def1: '資材',
    def2: '',
    etym: `'materials'の略`,
    example: 'You have good mats.',
    exampleJp: '（味方の資材状況を見ながら）資材まだまだあるよ。',
    rel: ['build'],
    altMatch: ['materials', 'mat', 'material'],
  },
  {
    word: 'meta',
    def1: 'メタ',
    def2: '現環境における最適な戦術',
    rel: ['strat'],
  },
  {
    word: 'metal',
    def1: '鉄',
    def2: '鉄の建築',
    rel: ['wood', 'brick', 'build'],
  },
  {
    word: 'mini',
    def1: 'ミニポ',
    def2: '',
    rel: ['big', 'shield'],
  },
  {
    word: 'on me',
    def1: '（敵が）自分の所に居る',
    def2: [''],
    rel: ['here'],
  },
  {
    word: 'piece control',
    def1: 'ピースコントロール',
    def2: ['敵よりも先に建築を立て、その建築を有利に使って戦うこと'],
    rel: ['build', 'piece'],
  },
  {
    word: 'POI',
    def1: '地名付きの場所',
    def2: [''],
    rel: ['hot drop'],
    altMatch: ['point of interest', 'poi'],
  },
  {
    word: 'purple',
    def1: 'エピック、紫武器',
    def2: [''],
    rel: ['epic', 'rarity'],
    etym: 'エピックレアリティの紫色から',
  },
  {
    word: 'ramp',
    def1: '階段',
    def2: [''],
    rel: ['stair', 'build'],
  },
  {
    word: 'rarity',
    def1: '武器のレアリティ',
    def2: [''],
    rel: '',
  },

  {
    word: 'res',
    def1: '蘇生',
    def2: [''],
    rel: ['ressurect', 'revive'],
  },
  {
    word: 'rotate',
    def1: '移動する',
    def2: '',
    rel: ['move', 'storm'],
    example: 'We gotta rotate to zone.',
    exampleJp: '安地に行こう。',
  },
  {
    word: 'roof',
    def1: '屋根',
    def2: [''],
    rel: ['cone', 'build'],
  },
  {
    word: 'scrim',
    def1: '練習試合、スクリム',
    def2: [''],
    etym: `"scrimmage"の略`,
    rel: ['comp', 'match'],
  },
  {
    word: 'shell',
    def1: 'ショットガンの弾',
    def2: '',
    example: 'Do you have shotgun shells?',
    exampleJp: 'ショットガンの弾持ってる？',
    rel: ['ammo', 'bullet', 'shotty'],
    altMatch: ['shells'],
  },

  {
    word: 'shield',
    def1: 'シールド',
    def2: [''],
    rel: ['mini', 'big'],
    altMatch: ['シールド'],
  },
  {
    word: 'shotty',
    def1: 'ショットガン',
    def2: '',
    example: 'Let me know if you see a shotty.',
    exampleJp: 'ショットガン見つけたら教えて。',
    rel: ['pump', 'SPAS'],
  },
  {
    word: 'stair',
    def1: '階段',
    def2: [''],
    rel: ['ramp', 'build', 'piece'],
    altMatch: ['stairs'],
  },
  {
    word: 'solo',
    def1: 'ソロ',
    def2: '1人',
    example: `He's a solo!`,
    exampleJp: 'あの敵、1人だよ！',
    rel: ['shield', 'goat'],
  },
  {
    word: 'SPAS',
    def1: '紫以上のポンプショットガン',
    def2: '',
    example: 'I found a SPAS!',
    exampleJp: '',
    etym: `実在する銃の"SPAS-12'から`,
    rel: ['pump', 'shotty'],
  },
  {
    word: 'spray',
    def1: '撃ちまくる',
    def2: [''],
    rel: ['beam', 'laser', 'hit'],
  },
  {
    word: 'squad',
    def1: 'スクワッド',
    def2: '4人チーム',
    example: `I'm trying a solo squad right now.`,
    exampleJp: '今ソロスクに挑戦してるところ。',
    rel: ['shield', 'goat'],
  },
  {
    word: 'strat',
    def1: '戦術',
    def2: [''],
    rel: ['ressurect', 'revive'],
    example: `We lost to Qrei strat.`,
    exampleJp: `Qreiムーブに負けた。<br>（回復アイテムを集めまくってひたすら安地外耐久する戦術）`,
    etym: `"strategy"の略`,
    altMatch: ['strategy'],
  },
  {
    word: 'support',
    def1: 'サポートする',
    def2: 'サポート役',
    rel: ['IGL', 'fragger'],
  },
  {
    word: 'sweat',
    def1: '（皮肉を込めて）ガチ勢',
    def2: '',
    etym: `汗をかく程必死にプレイしているという皮肉から`,
    example: `I hope we don't run into sweats.`,
    exampleJp: 'ガチ勢と当たらないといいけど。',
    altMatch: ['sweats'],
  },
  {
    word: 'tac',
    def1: 'タクティカルショットガン、タクショ',
    def2: 'とても上手',
    example: 'I prefer tac to pump.',
    exampleJp: 'ポンプよりタクショの方が好きだ。',
    rel: ['shotty', 'pump'],
  },
  {
    word: 'tarp',
    def1: '移動安地の時に建築で安全な道筋を作ること',
    def2: [''],
    rel: ['tunnel'],
    altMatch: ['tarping'],
  },
  {
    word: 'tunnel',
    def1: 'トンネル建築',
    def2: '',
    example: `I gotta practice tunnelling.`,
    exampleJp: 'トンネルの練習しないと。',
    rel: ['tarp', 'build'],
  },
  {
    word: 'trio',
    def1: 'トリオ',
    def2: '3人チーム',
    example: 'Shall we play trios?',
    exampleJp: 'トリオしない？',
    rel: ['solo', 'duo', 'squad'],
  },
  {
    word: 'wall',
    def1: '壁',
    def2: [''],
    rel: [''],
  },
  {
    word: 'wood',
    def1: '木、木材',
    def2: '',
    rel: ['brick', 'metal', 'build'],
  },
  {
    word: '1x1',
    def1: '(1x1タイルの)ボックス',
    def2: [''],
    rel: ['box', '2x2'],
    altMatch: ['one by one'],
  },
  {
    word: '1x2',
    def1: '(1x2タイルの)ボックス',
    def2: [''],
    rel: ['1x1', 'box'],
    altMatch: ['two by two'],
  },
  {
    word: '90s',
    def1: '縦積み',
    def2: [''],
    etym: '1回の縦積みで90°進行方向が変わることから',
    rel: ['cranking', 'build'],
  },
];
