// ─────────────────────────────────────────────
//  문제를 여기에 추가하세요
//
//  id       : 겹치지 않는 아무 값
//  level    : "N5" / "N4" / "N3" / "N2" / "N1"  ← 탭이 이걸로 나뉩니다
//  sentence : 일본어 문장. 빈칸은 반드시 ＿＿ (전각 밑줄 2개) 로 표시
//  meaning  : 한국어 뜻 (빈칸 위치에 ___ 표시), 처음부터 같이 보여줘요
//  options  : [{text: "한자", reading: "히라가나 읽기"}, ...] 4개
//             배열 순서가 화면에 보이는 순서예요 — 정답을 항상 앞쪽에
//             두지 말고 섞어서 넣어주세요
//  answer   : 정답 인덱스 (0~3, options 배열에서 정답의 위치)
//  note     : 정답 공개 후 보여줄 짧은 해설
// ─────────────────────────────────────────────

const QUESTIONS = [
  {
    id: "01",
    level: "N5",
    sentence: "空が＿＿ています。",
    meaning: "하늘이 ___어 있어요. (맑다)",
    options: [{ text: "情れ", reading: "じょうれ" }, { text: "清れ", reading: "きよれ" }, { text: "晴れ", reading: "はれ" }, { text: "精れ", reading: "せいれ" }],
    answer: 2,
    note: "晴れる(날씨 청, 해 일)만 진짜 단어예요 — 清(맑을 청, 물수변)·精(정할 정, 쌀미)·情(뜻 정, 마음심)은 여기 안 어울려요"
  },
  {
    id: "02",
    level: "N5",
    sentence: "明日、＿＿へ行きます。",
    meaning: "내일 ___에 가요. (학교)",
    options: [{ text: "学較", reading: "がくかく" }, { text: "学絞", reading: "がっこう" }, { text: "学郊", reading: "がっこう" }, { text: "学校", reading: "がっこう" }],
    answer: 3,
    note: "校(학교 교, 나무목)만 맞아요 — 較(비교할 교)·絞(짤 교)·郊(들 교)는 발음은 비슷해도 뜻이 완전 달라요"
  },
  {
    id: "03",
    level: "N5",
    sentence: "ちょっと＿＿ってください。",
    meaning: "잠깐 ___주세요. (기다려)",
    options: [{ text: "持", reading: "も" }, { text: "待", reading: "ま" }, { text: "侍", reading: "じ" }, { text: "特", reading: "とく" }],
    answer: 1,
    note: "待つ(기다릴 대, 두인변)가 정답이에요 — 持つ(가질 지, 손수변)도 진짜 단어지만 '가지다'라는 뜻이에요"
  },
  {
    id: "04",
    level: "N5",
    sentence: "彼女は＿＿るい性格です。",
    meaning: "그녀는 ___성격이에요. (밝은)",
    options: [{ text: "盟", reading: "めい" }, { text: "萌", reading: "ほう" }, { text: "明", reading: "あか" }, { text: "朋", reading: "ほう" }],
    answer: 2,
    note: "明るい(밝을 명, 날일)만 실제 단어예요 — 朋(벗 붕)·萌(싹틀 맹)·盟(맹세 맹)은 るい가 안 붙어요"
  },
  {
    id: "05",
    level: "N4",
    sentence: "駅まで＿＿いて行きます。",
    meaning: "역까지 ___가요. (걸어서)",
    options: [{ text: "陟", reading: "ちょく" }, { text: "歩", reading: "ある" }, { text: "捗", reading: "ちょく" }, { text: "渉", reading: "しょう" }],
    answer: 1,
    note: "歩く(걸을 보, 그칠지)가 맞아요 — 捗(칠 척)·陟(오를 척)·渉(건널 섭)은 비슷하게 생겼지만 안 쓰는 조합이에요"
  },
  {
    id: "06",
    level: "N4",
    sentence: "この本はとても＿＿白いです。",
    meaning: "이 책은 정말 ___요. (재미있어)",
    options: [{ text: "自", reading: "じ" }, { text: "日", reading: "にち" }, { text: "面", reading: "めん" }, { text: "百", reading: "ひゃく" }],
    answer: 2,
    note: "面白い(낯 면 + 흰 백)가 정답이에요 — 百(일백 백)·自(스스로 자)·日(날 일)은 白이랑 비슷하게 생겼지만 틀려요"
  },
  {
    id: "07",
    level: "N4",
    sentence: "電車が＿＿雑しています。",
    meaning: "전철이 ___해요. (혼잡)",
    options: [{ text: "困", reading: "こん" }, { text: "梱", reading: "こん" }, { text: "捆", reading: "こん" }, { text: "混", reading: "こん" }],
    answer: 3,
    note: "混む(섞일 혼, 삼수변)가 맞아요 — 困(곤란할 곤)·捆(두드릴 곤)·梱(문지방 곤)은 발음은 같아도 다른 뜻이에요"
  },
  {
    id: "08",
    level: "N4",
    sentence: "明日の会議に＿＿加してください。",
    meaning: "내일 회의에 ___해주세요. (참석)",
    options: [{ text: "蚕", reading: "さん" }, { text: "参", reading: "さん" }, { text: "傪", reading: "さん" }, { text: "惨", reading: "さん" }],
    answer: 1,
    note: "参加(참여할 참)가 정답이에요 — 惨(참혹할 참)·傪(사람인변)·蚕(누에 잠)은 加랑 안 어울려요"
  },
  {
    id: "09",
    level: "N3",
    sentence: "彼の話は納＿＿を得ない。",
    meaning: "그의 이야기는 ___할 수밖에 없어요. (납득)",
    options: [{ text: "徳", reading: "とく" }, { text: "特", reading: "とく" }, { text: "得", reading: "とく" }, { text: "侍", reading: "じ" }],
    answer: 2,
    note: "納得(납득)의 得(얻을 득, 두인변)이 맞아요 — 徳(덕 덕)·特(특별할 특)·侍(모실 시)는 비슷하지만 틀려요"
  },
  {
    id: "10",
    level: "N3",
    sentence: "環境問題は緊＿＿な課題です。",
    meaning: "환경 문제는 ___한 과제예요. (긴급)",
    options: [{ text: "念", reading: "ねん" }, { text: "悠", reading: "ゆう" }, { text: "怠", reading: "たい" }, { text: "急", reading: "きゅう" }],
    answer: 3,
    note: "緊急(긴급)의 急(급할 급)이 맞아요 — 念(생각 념)·怠(게으를 태)·悠(멀 유)는 문맥에 안 맞아요"
  },
  {
    id: "11",
    level: "N3",
    sentence: "その決定は道＿＿に反する。",
    meaning: "그 결정은 ___에 반해요. (도리)",
    options: [{ text: "狸", reading: "り" }, { text: "理", reading: "り" }, { text: "裏", reading: "り" }, { text: "埋", reading: "まい" }],
    answer: 1,
    note: "道理(도리)의 理(다스릴 리, 구슬옥변)가 맞아요 — 裏(속 리, 옷의)·埋(묻을 매)·狸(너구리 리, 개견)는 모양이 비슷해서 헷갈려요"
  },
  {
    id: "12",
    level: "N3",
    sentence: "彼女の演技は＿＿を打った。",
    meaning: "그녀의 연기는 ___을 울렸어요. (심금)",
    options: [{ text: "忻", reading: "きん" }, { text: "芯", reading: "しん" }, { text: "沁", reading: "しん" }, { text: "心", reading: "しん" }],
    answer: 3,
    note: "心を打つ(마음을 울리다)의 心(마음 심)이 맞아요 — 芯(심지 심)·沁(스밀 심)·忻(기뻐할 흔)은 다른 글자예요"
  },
  {
    id: "13",
    level: "N2",
    sentence: "彼は自分の信＿＿を貫いた。",
    meaning: "그는 자신의 ___을 관철했어요. (신념)",
    options: [{ text: "恬", reading: "てん" }, { text: "稔", reading: "ねん" }, { text: "念", reading: "ねん" }, { text: "捻", reading: "ねん" }],
    answer: 2,
    note: "信念(신념)의 念(생각 념, 마음심)이 맞아요 — 捻(비틀 념)·稔(여물 념)·恬(편안할 념)은 소리는 같지만 다른 뜻이에요"
  },
  {
    id: "14",
    level: "N2",
    sentence: "会社の業績が＿＿調に回復した。",
    meaning: "회사 실적이 ___로 회복됐어요. (순조롭게)",
    options: [{ text: "循", reading: "じゅん" }, { text: "盾", reading: "じゅん" }, { text: "順", reading: "じゅん" }, { text: "楯", reading: "じゅん" }],
    answer: 2,
    note: "順調(순조)의 順(순할 순)이 맞아요 — 循(돌 순)·楯(방패 순)·盾(방패 순)은 문맥에 안 맞아요"
  },
  {
    id: "15",
    level: "N2",
    sentence: "この意見には＿＿討の余地がある。",
    meaning: "이 의견에는 ___의 여지가 있어요. (검토)",
    options: [{ text: "険", reading: "けん" }, { text: "剣", reading: "けん" }, { text: "験", reading: "けん" }, { text: "検", reading: "けん" }],
    answer: 3,
    note: "検討(검토)의 検(검사할 검)이 맞아요 — 険(험할 험)·験(시험 험)·剣(칼 검)은 모양은 비슷해도 뜻이 완전 달라요"
  },
  {
    id: "16",
    level: "N2",
    sentence: "彼の主張には＿＿盾がある。",
    meaning: "그의 주장에는 ___이 있어요. (모순)",
    options: [{ text: "矛", reading: "む" }, { text: "予", reading: "よ" }, { text: "柔", reading: "じゅう" }, { text: "矜", reading: "きん" }],
    answer: 0,
    note: "矛盾(모순)의 矛(창 모)가 맞아요 — 予(줄 여)·柔(부드러울 유)·矜(자랑할 긍)은 모양은 비슷해도 여기 안 어울려요"
  },
  {
    id: "17",
    level: "N1",
    sentence: "その理論はいまだ仮＿＿の域を出ない。",
    meaning: "그 이론은 아직 ___의 영역을 벗어나지 못해요. (가설)",
    options: [{ text: "説", reading: "せつ" }, { text: "拙", reading: "せつ" }, { text: "設", reading: "せつ" }, { text: "訥", reading: "とつ" }],
    answer: 0,
    note: "仮説(가설:학문적 가설)의 説이 맞아요 — 仮設(가설:임시로 설치)은 실제로 존재하는 다른 단어라 더 헷갈리고, 訥·拙은 아예 안 쓰는 조합이에요"
  },
  {
    id: "18",
    level: "N1",
    sentence: "彼の発言は物議を＿＿した。",
    meaning: "그의 발언은 물의를 ___어요. (일으켰)",
    options: [{ text: "嬢", reading: "じょう" }, { text: "醸", reading: "じょう" }, { text: "譲", reading: "じょう" }, { text: "壌", reading: "じょう" }],
    answer: 1,
    note: "物議を醸す(물의를 빚다)의 醸(빚을 양)이 맞아요 — 譲(양보할 양)·壌(흙 양)·嬢(아가씨 양)은 소리(じょう)는 같지만 전혀 다른 뜻이에요"
  },
  {
    id: "19",
    level: "N1",
    sentence: "長年の努力がついに結＿＿した。",
    meaning: "오랜 노력이 드디어 ___했어요. (결실)",
    options: [{ text: "宗", reading: "しゅう" }, { text: "実", reading: "じつ" }, { text: "字", reading: "じ" }, { text: "宝", reading: "ほう" }],
    answer: 1,
    note: "結実(결실)의 実(열매 실)이 맞아요 — 宝(보배 보)·字(글자 자)·宗(마루 종)은 갓머리(宀)까진 같지만 다른 글자라 結와 안 어울려요"
  },
  {
    id: "20",
    level: "N1",
    sentence: "彼女はその話を＿＿摯に受け止めた。",
    meaning: "그녀는 그 이야기를 ___로 받아들였어요. (진지하게)",
    options: [{ text: "耆", reading: "き" }, { text: "慎", reading: "しん" }, { text: "嗜", reading: "し" }, { text: "真", reading: "しん" }],
    answer: 3,
    note: "真摯(진지)의 真(참 진)이 맞아요 — 慎(삼갈 신)은 소리가 비슷해서 넣은 함정이고, 嗜(즐길 기)·耆(늙을 기)는 摯랑 헷갈리기 쉬운 모양이에요"
  },

];
