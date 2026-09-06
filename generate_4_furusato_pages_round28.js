const fs = require('fs');
const path = require('path');

const allHotels = JSON.parse(fs.readFileSync(path.join(__dirname, 'src/data/all_seasonal_rakuten_hotels.json'), 'utf8'));

const affId = '54d2a438.4bc4abc2.54d2a439.aa1be583';
const officialFurusatoAffUrl = `https://hb.afl.rakuten.co.jp/hgc/${affId}/?pc=${encodeURIComponent('https://travel.rakuten.co.jp/special/furusato/')}`;

const pagesConfig = [
  {
    slug: 'furusato-tax-three-great-bon-dances-heritage-stay',
    title: '日本三大盆踊り＆伝統の熱気・城下町温泉宿×ふるさと納税完全ガイド【2026年最新】西馬音内・郡上おどり・阿波おどり',
    desc: '日本の夏の魂を揺さぶる伝統の祭典！秋田「西馬音内の盆踊」端縫い衣装と編笠の幽玄な舞と湯沢名湯川原田館、岐阜「郡上おどり」三十三夜続く熱気と郡上八幡の名水城下町ステイ、徳島「阿波おどり」四百年の情熱と阿波尾鶏・鳴門鯛を味わうJRホテルクレメント徳島。日本三大盆踊りの熱気と文化を楽天ふるさと納税宿泊クーポンでお得に体感する完全ガイド。',
    h1: '日本三大盆踊り＆伝統文化・城下町宿×ふるさと納税ガイド',
    badge: '日本三大盆踊り・伝統の熱気特集',
    leadTitle: '夜空を焦がす篝火と鳴り響く太鼓・三味線の音色。日本人の心躍る伝統芸能と名宿の旅',
    leadDesc: 'ユネスコ無形文化遺産にも登録され、数百年にわたり町衆の情熱と美意識を受け継いできた「日本三大盆踊り」――顔を隠す編笠と藍染め・端縫い衣装が篝火に照らされ妖艶に揺らめく秋田・羽後町の「西馬音内の盆踊」、日本一長い三十三夜にわたり老若男女が下駄の音を石畳に響かせる岐阜の「郡上おどり」、そして「踊る阿呆に見る阿呆」の掛け声とともに街中が熱狂の渦に包まれる徳島の「阿波おどり」。踊りの輪に飛び込んで地元の人々と一体となる熱気体験の後は、情緒あふれる城下町の老舗宿や展望ホテルで、郷土の名物料理と名湯を堪能。一生に一度は訪れたい夏の風物詩を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '祭りの特等席！演舞場や踊り会場へのアクセス抜群な好立地ホテル',
        desc: '夜遅くまで続く演舞や徹夜踊りを心ゆくまで満喫し、混雑を避けてゆったり客室へ戻れる厳選宿。'
      },
      {
        title: '稲庭うどん・飛騨牛・阿波尾鶏など各地域を代表する名物郷土ディナー',
        desc: '祭りの熱気とともに味わう地元の滋味豊かな美食と地酒のペアリングを贅沢に楽しめます。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンでハイシーズンの予約も賢くお得に',
        desc: '寄付額に応じて宿泊代金が即時控除され、予約争奪戦となる名門ホテルも実質負担を大幅に抑えて宿泊可能です。'
      }
    ],
    items: [
      {
        key: 'dance_nishimonai',
        themeTitle: '秋田県羽後町・湯沢市ふるさと納税：篝火に照らされる幽玄の舞「西馬音内の盆踊」と稲庭うどん・湯沢名湯川原田館',
        themeDesc: '約700年の歴史を誇る国指定重要無形民俗文化財。端縫い衣装と彦三頭巾の優美な踊りに酔いしれた後は、湯沢の名湯・川原田館で秋田名物きりたんぽ鍋や本場稲庭うどんを味わう風情あふれる東北の旅です。'
      },
      {
        key: 'dance_gujo',
        themeTitle: '岐阜県郡上市ふるさと納税：三十三夜続く日本一の盆踊り「郡上おどり」徹夜踊りと名水城下町ステイ',
        themeDesc: '城下町全体が踊り場となる熱狂の盆踊り。名水百選・宗祇水や郡上八幡城を巡り、下駄の音を鳴らして踊りに参加した後は、飛騨牛料理や長良川の鮎、美肌の天然温泉で心地よい疲労を癒やします。'
      },
      {
        key: 'dance_awa',
        themeTitle: '徳島県徳島市ふるさと納税：四百年の情熱が炸裂する世界最大級の演舞「阿波おどり」とJRホテルクレメント徳島',
        themeDesc: '100万人以上が熱狂する四国最大の祭典。徳島駅直結の名門「JRホテルクレメント徳島」を拠点に、迫力の演舞場鑑賞や阿波おどり会館を体験し、阿波尾鶏や鳴門鯛の極上ディナーを満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大夜景＆天空スカイラウンジホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-major-night-view-luxury-hotel-stay', desc: '長崎・神戸・函館の1000万ドル夜景。' },
      { title: '日本三大美港＆ウォーターフロントホテル×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-ports-waterfront-luxury-stay', desc: '神戸・横浜・長崎の港町ステイ。' },
      { title: '日本三大水郷＆川下り舟宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-water-towns-riverside-stay', desc: '柳川・近江八幡・佐原の水郷情緒。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-karsts-highland-drive-stay',
    title: '日本三大カルスト台地＆絶景スカイドライブ・高原リゾートホテル×ふるさと納税完全ガイド【2026年最新】秋吉台・四国カルスト・平尾台',
    desc: '白銀の石灰岩が織りなす大自然のパノラマ！山口「秋吉台」日本最大のカルスト台地ドライブと美祢グランドホテル、高知・愛媛「四国カルスト」標高1400m天空の白い高原と星ふるヴィレッジTENGU、福岡「平尾台」羊群原の雄大パノラマと小倉名門ホテルルートイン。日本三大カルストの絶景ロードトリップを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大カルスト台地＆絶景スカイドライブ宿×ふるさと納税ガイド',
    badge: '日本三大カルスト・天空高原特集',
    leadTitle: '青空に突き抜ける一本道と緑の草原に点在する純白の奇岩。地球の息吹を感じる天空高原ステイ',
    leadDesc: '太古のサンゴ礁が地殻変動によって隆起し、数億年の雨風によって彫刻された「日本三大カルスト」――見渡す限りの緑の大草原に無数の石灰岩が顔を出す日本最大級の山口「秋吉台」、愛媛と高知の県境・標高1400mの天空を走る絶景ロード「四国カルスト（天狗高原）」、そしてまるで草原に羊の群れが戯れているかのような羊群原が広がる福岡の「平尾台」。窓を開けて爽やかな高原の風を感じながら走るスカイドライブは、日常のストレスを一瞬で吹き飛ばす圧倒的な開放感に満ちています。夜には手が届きそうな満天の星空を眺め、地元の高原牛や新鮮な海の幸を味わう特別な休日を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '開放感抜群のカルストロード！ツーリングやドライブ好き垂涎の絶景スカイライン',
        desc: 'どこまでも続く高原の稜線を走るドライブコースで、日本離れした雄大な景観を駆け抜ける感動体験。'
      },
      {
        title: '標高1,400mの澄み切った大気！天の川や流れ星を捉える満天の星空観賞',
        desc: '都会の明かりが一切届かない漆黒の夜空に瞬く無数の星々を、宿のテラスや展望ラウンジから独占。'
      },
      {
        title: 'あか牛・土佐あかうし・長州黒かしわなど山麓の最高級ブランド肉会席',
        desc: '大自然の恵みで育まれたプレミアムなお肉料理を、ふるさと納税クーポンを活用してお得に堪能。'
      }
    ],
    items: [
      {
        key: 'karst_akiyoshidai',
        themeTitle: '山口県美祢市ふるさと納税：日本最大のカルスト台地「秋吉台カルストロード」爽快ドライブと美祢グランドホテル',
        themeDesc: '特別天然記念物の大カルスト。白いピナクルが群生する草原を駆け抜けるカルストロードを巡り、美祢グランドホテルを拠点に名物長州チキンサルサや山口の地酒を味わう大自然満喫の旅です。'
      },
      {
        key: 'karst_shikoku',
        themeTitle: '高知県檮原町・愛媛県久万高原町ふるさと納税：標高1400m天空の絶景「四国カルスト天狗高原」と星ふるヴィレッジTENGU',
        themeDesc: '雲の上の別天地として知られる四国カルスト。県境を跨ぐ天空の高原ステイが叶う「星ふるヴィレッジTENGU」で、プラネタリウムや満天の星空観賞、土佐あかうしの溶岩焼きディナーを堪能します。'
      },
      {
        key: 'karst_hiraodai',
        themeTitle: '福岡県北九州市・苅田町ふるさと納税：羊群原の白い奇岩が広がる国定公園「平尾台」ケイビングとホテルルートイン苅田駅前',
        themeDesc: '北九州に広がる雄大なカルスト台地。千仏鍾乳洞での探検や千貫岩パノラマを楽しんだ後は、アクセス良好なホテルルートイン苅田駅前の大浴場で旅の疲れを癒やし、玄界灘の海の幸を満喫します。'
      }
    ],
    crossLinks: [
      { title: '日本三大鍾乳洞＆神秘の地底美宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-limestone-caves-mystery-stay', desc: '龍泉洞・龍河洞・秋芳洞の地底湖。' },
      { title: '日本三大奇勝＆巨岩奇峰パノラマ宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-wonders-rock-scenery-stay', desc: '妙義山・耶馬渓・寒霞渓の岩峰。' },
      { title: '日本三霊山＆名峰パノラマリゾート×ふるさと納税完全ガイド', url: '/furusato-tax-three-sacred-mountains-sky-resort-stay', desc: '富士山・白山・立山の天空宿。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-cutlery-towns-craft-stay',
    title: '日本三大刃物の里＆職人の美意識・名刀と美食の極上宿×ふるさと納税完全ガイド【2026年最新】関・越前・堺',
    desc: '「折れず、曲がらず、よく切れる」日本のものづくり魂！岐阜「関市」世界三大刃物産地とホテルルートイン関、福井「越前打刃物」七百年の火造り鍛造タケフナイフビレッジとホテルクラウンヒルズ武生駅前、大阪「堺刃物」プロ料理人が選ぶ最高峰包丁とホテルアゴーラリージェンシー大阪堺。日本三大刃物の産地を楽天ふるさと納税宿泊クーポンでお得に巡る完全ガイド。',
    h1: '日本三大刃物の里＆職人クラフト宿×ふるさと納税ガイド',
    badge: '日本三大刃物・伝統工芸特集',
    leadTitle: '赤く燃える炎と響き渡る鎚の音。世界中のシェフが憧れる至高の刃物と美食を訪ねる旅',
    leadDesc: '鎌倉時代から続く刀鍛冶の秘伝の技を今に伝え、現代では世界中の三つ星シェフや家庭料理人を魅了してやまない「日本三大刃物産地」――ドイツ・ゾーリンゲンと並ぶ世界三大刃物都市として名高い岐阜の「関の刃物」、漆器や和紙と並び七百年の手打ち鍛造技術を守り続ける福井の「越前打刃物」、そして日本のプロ用和包丁シェア90%以上を誇る大阪の「堺打刃物」。鋭い切れ味が食材の細胞を潰さず、料理の味そのものを格段に引き上げる至高の刃物は一生モノの宝物。刃物工房での見学や研ぎ直し体験を楽しんだ後は、名料理人がその包丁で腕を振るう旬の会席料理を味わう上質なクラフト旅を楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '一生モノの包丁に出会う！職人の手研ぎ実演やオリジナル包丁選び',
        desc: '工房やミュージアムで名工の技に触れ、自分の手に最も馴染む究極の包丁を手に入れる旅の喜び。'
      },
      {
        title: '切れ味鋭い包丁が引き出す最高峰のお造り・和牛ステーキディナー',
        desc: '断面の美しさと口当たりの違いを実感できる名店・ホテルレストランでの極上グルメ会席。'
      },
      {
        title: 'ふるさと納税で包丁返礼品＆宿泊クーポンをダブルで賢くゲット',
        desc: '自治体への寄付で本格刃物を返礼品として受け取りつつ、宿泊クーポンで旅費も実質2,000円に抑制可能。'
      }
    ],
    items: [
      {
        key: 'cutlery_seki',
        themeTitle: '岐阜県関市ふるさと納税：世界三大刃物産地「関の刃物」鍛冶伝承館とホテルルートイン関',
        themeDesc: '名刀「関の孫六」の伝統を受け継ぐ刃物のまち。岐阜関刃物ミュージアムで古式日本刀鍛錬を見学した後は、ホテルルートイン関の大浴場で寛ぎ、飛騨牛料理や関名物のうなぎ丼に舌鼓を打ちます。'
      },
      {
        key: 'cutlery_echizen',
        themeTitle: '福井県越前市ふるさと納税：七百年の伝統火造り鍛造「越前打刃物」タケフナイフビレッジとホテルクラウンヒルズ武生駅前',
        themeDesc: '日本初の伝統工芸品指定を受けた打刃物。円形工房タケフナイフビレッジで職人の火花散る鍛造を見学した後は、ホテルクラウンヒルズ武生駅前を拠点に名物越前おろしそばや若狭牛を堪能します。'
      },
      {
        key: 'cutlery_sakai',
        themeTitle: '大阪府堺市ふるさと納税：プロ料理人が信頼を寄せる最高峰和包丁「堺刃物」堺伝統産業会館とホテルアゴーラリージェンシー大阪堺',
        themeDesc: '千利休を生んだ堺の歴史と鍛冶の技。堺伝匠館で包丁の奥深さを学んだ後は、堺駅直結のシティリゾート「ホテルアゴーラリージェンシー大阪堺」で、一流シェフが織りなす鉄板焼きや本格中華を味わいます。'
      }
    ],
    crossLinks: [
      { title: '日本三大和紙の里＆工芸温泉宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-washi-craft-heritage-stay', desc: '越前和紙・美濃和紙・小川和紙の里。' },
      { title: '日本三大陶磁器の郷＆焼き物窯元めぐり宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pottery-towns-art-stay', desc: '有田焼・美濃焼・瀬戸焼の窯元。' },
      { title: '職人技が光る伝統工芸＆有形文化財の名旅館ふるさと納税完全ガイド', url: '/tangible-cultural-property-sukiya-carpenter-ryokan-stay', desc: '匠の技が息づく建築宿。' }
    ]
  },
  {
    slug: 'furusato-tax-three-great-gardens-heritage-luxury-stay',
    title: '日本三大名園＆大名庭園の四季を愛でる風雅ホテル・温泉旅館×ふるさと納税完全ガイド【2026年最新】兼六園・後楽園・偕楽園',
    desc: '加賀・岡山・水戸藩主が築いた天下の庭園美！石川「兼六園」徽軫灯籠と雪吊りの雪景色・料理旅館金沢茶屋、岡山「後楽園」岡山城を借景とする延養亭の美とホテルグランヴィア岡山、茨城「偕楽園」三千本の梅林と千波湖を望むホテルザウエストヒルズ水戸。日本三大名園（三名園）の四季折々の絶景ステイを楽天ふるさと納税宿泊クーポンでお得に楽しむ完全ガイド。',
    h1: '日本三大名園＆大名庭園を愛でる名門宿×ふるさと納税ガイド',
    badge: '日本三大名園・大名庭園特集',
    leadTitle: '計算し尽くされた回遊式庭園の借景と四季の移ろい。日本の美意識の頂点を味わう風雅な休日',
    leadDesc: '江戸時代の各大名が粋を凝らして造営し、国の特別名勝に指定されている「日本三大名園（三名園）」――六つの優れた景勝（広大・幽邃・人力・蒼古・水泉・眺望）を兼ね備えた加賀前田家の「兼六園」、岡山城を借景に芝生と池、曲水が開放的に広がる池田家の「後楽園」、そして徳川斉昭公が民と楽しむために創設し約三千本もの梅が咲き誇る水戸徳川家の「偕楽園」。春の梅や桜、初夏の新緑、秋の紅葉、冬の雪吊りと、季節ごとに表情を変える庭園の早朝開園を静かに散策するのは旅人だけの特権です。名園を散策した後は、加賀懐石や瀬戸内海鮮、常陸牛など各藩ゆかりの美味を名門ホテルや料亭旅館で味わう贅沢なひとときを楽天ふるさと納税でお楽しみください。',
    merits: [
      {
        title: '早朝の静寂を独占！混雑前の名園をゆったり散策できる至近ホテル',
        desc: '観光客で賑わう前の澄み切った朝の空気に包まれ、朝日が差し込む庭園の絶景を心静かに鑑賞できます。'
      },
      {
        title: '加賀料理・岡山ばらずし・常陸牛すき焼きなど大名文化の美食会席',
        desc: '各大名家の城下町で磨かれた最高峰の郷土料理と旬の地魚を、贅沢なフルコースで堪能。'
      },
      {
        title: '楽天ふるさと納税宿泊クーポンで憧れの老舗料亭旅館もお得に予約',
        desc: '金沢茶屋やホテルグランヴィア岡山など名門ホテルの宿泊代金を即時控除し、賢く贅沢旅へ。'
      }
    ],
    items: [
      {
        key: 'garden_kenrokuen',
        themeTitle: '石川県金沢市ふるさと納税：徽軫灯籠と雪吊りの美学「兼六園」と加賀屋グループ料理旅館金沢茶屋ステイ',
        themeDesc: '加賀百万石の文化の粋を集めた特別名勝・兼六園。金沢城公園を散策した後は、加賀屋のおもてなしを受け継ぐ「料理旅館 金沢茶屋」で、輪島塗の器に美しく盛られた加賀懐石と能登牛に舌鼓を打ちます。'
      },
      {
        key: 'garden_korakuen',
        themeTitle: '岡山県岡山市北区ふるさと納税：漆黒の岡山城と旭川の借景美「後楽園」とホテルグランヴィア岡山',
        themeDesc: '元禄文化の息吹を伝える回遊式庭園・後楽園。延養亭から望む大池のパノラマを楽しんだ後は、岡山駅直結のシティホテル「ホテルグランヴィア岡山」で、瀬戸内の鰆やシャインマスカットを贅沢に味わいます。'
      },
      {
        key: 'garden_kairakuen',
        themeTitle: '茨城県水戸市ふるさと納税：三千本の梅林と好文亭「偕楽園」千波湖展望とホテル・ザ・ウエストヒルズ・水戸',
        themeDesc: '偕楽園に隣接する水戸の名門ホテル。千波湖畔の四季折々の自然を感じながら、水戸藩ゆかりの好文亭を訪ね、茨城が誇る極上霜降り黒毛和牛「常陸牛」やすき焼き会席に舌鼓を打つ雅やかな休日です。'
      }
    ],
    crossLinks: [
      { title: '日本三大水城＆海に浮かぶ名城展望宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-water-castles-seaside-stay', desc: '今治城・高松城・中津城の水城。' },
      { title: '日本三大名水＆清冽な湧水仕込み宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-famous-waters-culinary-stay', desc: '南阿蘇・八ヶ岳・京都伏見の湧水。' },
      { title: '日本三大松原・砂州＆白砂青松オーシャンビュー宿×ふるさと納税完全ガイド', url: '/furusato-tax-three-great-pine-groves-sandbar-stay', desc: '天橋立・気比松原・三保松原。' }
    ]
  }
];

function generatePageCode(cfg) {
  return `'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const officialFurusatoAffUrl = "${officialFurusatoAffUrl}";

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white pb-24">
      {/* Hero Section */}
      <header className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-b border-slate-800/80">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md">
            <span className="inline-block w-2 h-2 rounded-full bg-rose-400 animate-pulse" />
            ${cfg.badge}
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            ${cfg.h1}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            ${cfg.desc}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={officialFurusatoAffUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-rose-500 via-red-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white font-bold rounded-2xl shadow-xl shadow-rose-950/40 transition duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 text-base md:text-lg"
            >
              <span>🏮 楽天ふるさと納税トラベル特設ページを見る</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 mt-12 space-y-16">
        {/* Intro Lead */}
        <section className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur shadow-2xl">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 border-l-4 border-rose-500 pl-4">
            ${cfg.leadTitle}
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            ${cfg.leadDesc}
          </p>
        </section>

        {/* 3 Key Merits */}
        <section className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              ふるさと納税トラベルで巡る3つの至高メリット
            </h2>
            <p className="text-sm sm:text-base text-slate-400 mt-2">実質自己負担2,000円で憧れの名旅館＆特産グルメをアップグレード</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.merits.map((m, i) => `
            <div key="${i}" className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 font-bold flex items-center justify-center mb-4">
                0${i + 1}
              </div>
              <h3 className="font-bold text-white text-lg mb-2">${m.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">${m.desc}</p>
            </div>`).join('')}
          </div>
        </section>

        {/* Featured Hotels & Regions */}
        <section className="space-y-12">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              厳選名所＆楽天トラベル提携おすすめ名宿
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-1">楽天ふるさと納税宿泊クーポンが利用可能な極上宿</p>
          </div>

          <div className="space-y-12">
            ${cfg.items.map((item, idx) => {
              const h = allHotels[item.key] || {};
              const name = h.hotelName || 'おすすめ温泉旅館';
              const minCharge = h.hotelMinCharge ? h.hotelMinCharge.toLocaleString() : '15,000';
              const img = h.hotelImageUrl || 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80';
              const rating = (h.reviewAverage && h.reviewAverage > 0) ? h.reviewAverage.toFixed(1) : (typeof h.userReview === 'number' ? h.userReview.toFixed(1) : '4.6');
              const reviewCount = h.reviewCount || 300;
              const affLink = h.affiliateUrl || officialFurusatoAffUrl;
              const special = h.hotelSpecial || '贅沢な美食と名湯、極上の空間で非日常の休日をお楽しみいただけます。';
              const address = (h.address1 || '') + (h.address2 || '');

              return `
            {/* Spot Card ${idx + 1} */}
            <article key="${idx}" className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700/80 transition duration-300 shadow-xl">
              <div className="p-6 sm:p-8 border-b border-slate-800/80">
                <div className="inline-block px-3 py-1 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-semibold rounded-full mb-3">
                  厳選スポット 0${idx + 1}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                  ${item.themeTitle}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  ${item.themeDesc}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 items-center bg-slate-950/40">
                <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src="${img}"
                    alt="${name}"
                    fill
                    className="object-cover hover:scale-105 transition duration-500"
                    unoptimized
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 bg-slate-950/80 backdrop-blur-md rounded-lg text-xs font-bold text-amber-400 border border-amber-400/30">
                    ★ ${rating}（${reviewCount}件）
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
                  <div>
                    <h4 className="text-lg sm:text-xl font-bold text-white mb-2">
                      ${name}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-400 mb-3 flex items-center gap-1">
                      <span>📍</span>
                      <span>${address || '現地周辺'}</span>
                    </p>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 bg-slate-900/60 p-3.5 rounded-xl border border-slate-800/60">
                      ${special}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-slate-400">参考最安料金（1名あたり）</div>
                      <div className="text-lg sm:text-xl font-black text-rose-400">
                        ${minCharge}円〜
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href="${affLink}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs sm:text-sm font-bold rounded-xl transition border border-slate-700"
                      >
                        宿泊詳細を見る
                      </a>
                      <a
                        href={officialFurusatoAffUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white text-xs sm:text-sm font-bold rounded-xl transition shadow-lg shadow-rose-950/40"
                      >
                        ふるさと納税で予約
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>`;
            }).join('')}
          </div>
        </section>

        {/* Official Banner CTA */}
        <section className="bg-gradient-to-r from-rose-950/60 via-red-900/40 to-amber-950/60 border border-rose-500/30 rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            楽天ふるさと納税トラベルで、今すぐ賢く旅に出よう
          </h2>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base mb-8 leading-relaxed">
            寄付翌日から最大3年間使える宿泊クーポンで、行きたかった憧れの名宿を今すぐお得にリザーブ。実質2,000円負担で極上の日本再発見の旅へ。
          </p>
          <a
            href={officialFurusatoAffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white text-base sm:text-lg font-extrabold rounded-2xl shadow-xl transition duration-300 transform hover:-translate-y-0.5"
          >
            <span>🏮 楽天ふるさと納税トラベル公式特設ページへ</span>
          </a>
        </section>

        {/* Cross Link Section */}
        <section className="border-t border-slate-800/80 pt-12 space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            あわせて読みたい関連特集ガイド
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${cfg.crossLinks.map((cl, i) => `
            <Link
              key="${i}"
              href="${cl.url}"
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition flex flex-col justify-between group"
            >
              <div>
                <h3 className="font-bold text-white text-base group-hover:text-rose-400 transition mb-2">
                  ${cl.title}
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                  ${cl.desc}
                </p>
              </div>
              <div className="mt-4 text-xs font-semibold text-rose-400 flex items-center gap-1">
                <span>記事を読む</span>
                <span>→</span>
              </div>
            </Link>`).join('')}
          </div>
        </section>
      </main>
    </div>
  );
}
`;
}

for (const cfg of pagesConfig) {
  const targetDir = path.join(__dirname, 'src/app', cfg.slug);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  const filePath = path.join(targetDir, 'page.tsx');
  fs.writeFileSync(filePath, generatePageCode(cfg), 'utf8');
  console.log(`✓ Generated ${filePath}`);
}

console.log('All 4 pages generated successfully for Round 28.');
