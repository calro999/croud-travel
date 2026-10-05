import HubRelatedPosts from "@/app/components/HubRelatedPosts";
import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
  Star, MapPin, CheckCircle2, Sparkles, 
  Calendar, Utensils, Compass, HelpCircle, ExternalLink, Snowflake, Waves, Sun, Flame, Mountain, Building, Coffee, ShoppingBag, ThermometerSun
} from 'lucide-react';

export const metadata: Metadata = {
  title: "【11・12・1月茨城】日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈温泉郷・名物奥久慈軍鶏鍋＆常陸牛を堪能する冬の名宿5選",
  description: "11月から1月、茨城県北部の奥久慈大子町は凛冽な冷気に包まれ、日本三名瀑「袋田の滝」が純白の氷壁へと変貌を遂げる「氷瀑（ひょうばく）」のシーズンを迎えます。冬の光を受けてダイヤモンドのように輝く巨大な氷のカーテン、夜間を幻想的に照らし出すライトアップ「大子来人」、そして寒さを忘れさせる名物「奥久慈軍鶏鍋」やとろける霜降り「常陸牛」。弱アルカリ性の柔らかな美肌の湯が湧く奥久慈温泉郷の厳選名宿5選と、冬の絶景ドライブ＆美食モデルコースを詳しくお届けします。",
  keywords: '袋田の滝 氷瀑, 袋田の滝 冬, 奥久慈軍鶏 鍋, 常陸牛 ステーキ, 袋田温泉 思い出浪漫館, 悠久の宿 滝美館, 大子温泉 やみぞ, 元祖しゃも弁当の宿 玉屋旅館, 四季の湯宿 梅屋山荘, 大子来人 ライトアップ, 常陸秋そば, 11月 12月 1月 茨城旅行',
  alternates: {
    canonical: "https://croud-travel.pages.dev/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay/"
  },
  openGraph: {
    title: "【11・12・1月茨城】日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈温泉郷・名物奥久慈軍鶏鍋＆常陸牛を堪能する冬の名宿5選",
    description: "11月から1月、茨城県北部の奥久慈大子町は凛冽な冷気に包まれ、日本三名瀑「袋田の滝」が純白の氷壁へと変貌を遂げる「氷瀑（ひょうばく）」のシーズンを迎えます。冬の光を受けてダイヤモンドのように輝く巨大な氷のカーテン、夜間を幻想的に照らし出すライトアップ「大子来人」、そして寒さを忘れさせる名物「奥久慈軍鶏鍋」やとろける霜降り「常陸牛」。弱アルカリ性の柔らかな美肌の湯が湧く奥久慈温泉郷の厳選名宿5選と、冬の絶景ドライブ＆美食モデルコースを詳しくお届けします。",
    url: 'https://croud-travel.com/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay',
    siteName: 'クラドトラベル',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
        width: 1200,
        height: 630,
        alt: '冬の茨城県袋田の滝と奥久慈の山里風景'
      }
    ],
    locale: 'ja_JP',
    type: 'article'
  },
  twitter: {
    card: 'summary_large_image',
    title: "【11・12・1月茨城】日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈温泉郷・名物奥久慈軍鶏鍋＆常陸牛を堪能する冬の名宿5選",
    description: "11月から1月、茨城県北部の奥久慈大子町は凛冽な冷気に包まれ、日本三名瀑「袋田の滝」が純白の氷壁へと変貌を遂げる「氷瀑（ひょうばく）」のシーズンを迎えます。冬の光を受けてダイヤモンドのように輝く巨大な氷のカーテン、夜間を幻想的に照らし出すライトアップ「大子来人」、そして寒さを忘れさせる名物「奥久慈軍鶏鍋」やとろける霜降り「常陸牛」。弱アルカリ性の柔らかな美肌の湯が湧く奥久慈温泉郷の厳選名宿5選と、冬の絶景ドライブ＆美食モデルコースを詳しくお届けします。",
    images: ['https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80']
  }
};

export default function IbarakiFukurodaIceWinterPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: "【11・12・1月茨城】日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈温泉郷・名物奥久慈軍鶏鍋＆常陸牛を堪能する冬の名宿5選",
    description: "11月から1月、茨城県北部の奥久慈大子町は凛冽な冷気に包まれ、日本三名瀑「袋田の滝」が純白の氷壁へと変貌を遂げる「氷瀑（ひょうばく）」のシーズンを迎えます。冬の光を受けてダイヤモンドのように輝く巨大な氷のカーテン、夜間を幻想的に照らし出すライトアップ「大子来人」、そして寒さを忘れさせる名物「奥久慈軍鶏鍋」やとろける霜降り「常陸牛」。弱アルカリ性の柔らかな美肌の湯が湧く奥久慈温泉郷の厳選名宿5選と、冬の絶景ドライブ＆美食モデルコースを詳しくお届けします。",
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80',
    datePublished: '2026-10-02',
    dateModified: '2026-10-02',
    author: {
      '@type': 'Organization',
      name: 'クラドトラベル編集部',
      url: 'https://croud-travel.com'
    },
    publisher: {
      '@type': 'Organization',
      name: 'クラドトラベル',
      logo: {
        '@type': 'ImageObject',
        url: 'https://croud-travel.com/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://croud-travel.com/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay'
    }
  };

  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://croud-travel.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '冬の特集一覧',
        item: 'https://croud-travel.com/features'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: '袋田の滝氷瀑＆奥久慈温泉郷特集',
        item: 'https://croud-travel.com/winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay'
      }
    ]
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "冬（11月・12月・1月）の袋田の滝で「氷瀑」が見られる時期や凍結の条件は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "袋田の滝（高さ120m・幅73m）の氷瀑は、例年12月下旬から冷え込みが厳しくなるにつれて滝の岩肌を流れる水が凍り始め、最も完全凍結（全面結氷）に近い状態が期待できるのは1月中旬から2月上旬にかけてです。氷点下の日が数日続くと滝全体が純白の氷壁と化し、自然が創り出す巨大な氷の彫刻となります。11月中旬から12月上旬は晩秋の名残と冬の訪れを感じる時期で、冷涼で澄み切った大気の中、力強い滝の瀑布と紅葉のコントラスト、そして夜間のライトアップイベント「大子来人〜ダイゴライト〜」が開催されます。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の袋田の滝ライトアップイベント「大子来人（ダイゴライト）」の開催期間と見どころは？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "「大子来人〜ダイゴライト〜」は例年10月下旬〜翌年1月下旬にかけて開催される袋田の滝の冬の風物詩です。観瀑施設へと続くトンネル内が数万球のLEDによる光の回廊「光のトンネル」として美しく装飾され、トンネルを抜けた先の観瀑台からは、漆黒の夜空に白く浮かび上がる袋田の滝が幻想的にライトアップされます。昼間のダイナミックな滝の姿とは一変し、青や白の光に照らされた氷と水煙が幽玄な世界を演出します。観瀑台は冷え込むため、防寒対策を万全にして訪れるのが必須です。"
        }
      },
      {
        '@type': 'Question',
        name: "奥久慈を代表する冬の二大味覚「奥久慈軍鶏（しゃも）」と「常陸牛」の特徴とおすすめの食べ方は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "奥久慈軍鶏は、奥久慈の豊かな自然の中で通常のブロイラーの約3倍（130〜150日以上）の時間をかけてじっくり平飼い放し飼いで育てられる全国屈指の地鶏です。脂肪分が少なく、噛めば噛むほど溢れ出る力強い旨味と弾力のある歯ごたえが特徴。冬は骨から取った濃厚な出汁で野菜や軍鶏肉、つみれを煮込む「奥久慈軍鶏鍋」やすき焼きが最高の食べ方です。また茨城県の指定生産者が肥育する最高品質の黒毛和牛「常陸牛」は、きめ細かな霜降りと口溶けの良い脂が魅力で、冬は陶板ステーキかすき焼きで奥久慈軍鶏と贅沢に食べ比べるのが旅の醍醐味です。"
        }
      },
      {
        '@type': 'Question',
        name: "奥久慈温泉郷（袋田温泉・大子温泉）の泉質と冬の効能について教えてください。",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "奥久慈温泉郷の主たる泉質は「弱アルカリ性単純温泉」や「ナトリウム-硫酸塩・塩化物泉」です。無色透明で刺激が少なく、トロリとした柔らかな肌触りが特徴。アルカリ性の成分が古い角質をやさしく洗い流し、入浴後はお肌がしっとりと潤うことから「美肌の湯」として古くから親しまれています。塩化物泉の保温効果により湯冷めしにくく、真冬の散策で冷えた体を芯からじんわりと温め、神経痛や筋肉痛、疲労回復に優れた効果を発揮します。"
        }
      },
      {
        '@type': 'Question',
        name: "冬の奥久慈大子町へのアクセス、道路の凍結状況やスタッドレスタイヤの必要性は？",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "車の場合は常磐自動車道の那珂ICより国道118号を経由して約50分です。奥久慈地域は茨城県内でも特に朝晩の冷え込みが厳しく、12月中旬から1月にかけては氷点下5度前後まで下がる日があります。トンネルの出入口や久慈川沿いの橋の上、日陰のカーブなどは路面凍結（ブラックアイスバーン）が発生しやすいため、12月〜1月に車で訪れる際はスタッドレスタイヤの装着またはタイヤチェーンの携行が必須です。公共交通機関の場合は、JR水戸駅からJR水郡線に乗り、袋田駅または常陸大子駅を利用します。ローカル列車の車窓から冬の久慈川渓谷の長閑な景色を眺める鉄道旅もおすすめです。"
        }
      }
    ]
  };

  const hotelsData = [
            {
              id: 1,
              name: "袋田温泉　思い出浪漫館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/37878/37878.jpg",
              rating: 4.47,
              reviews: 2028,
              price: "¥9,000〜",
              access: "車：常磐自動車道　那珂ＩＣより国道１１８号で約５０分",
              special: "【オールインクルーシブ】日本三名瀑・袋田の滝まで車で5分。奥久慈さとやまバイキングと天然温泉の宿。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F37878%2F37878.html",
              story: "袋田の滝から車で約5分、久慈川の清らかな支流・滝川のほとりに佇む奥久慈屈指の温泉リゾート旅館「袋田温泉 思い出浪漫館」。大正ロマンの情緒漂うクラシカルな館内と、四季の自然を間近に感じる開放的な渓流露天風呂が自慢です。冬の澄んだ空気の中、川のせせらぎと野鳥のさえずりに耳を澄ませながら浸かる弱アルカリ性単純温泉は、湯上がりに肌が滑らかになると評判の「美肌の湯」。夕食には奥久慈の大自然で健やかに育った弾力ある「奥久慈軍鶏」のつみれ鍋や、茨城が誇る極上黒毛和牛「常陸牛」のステーキを盛り込んだ山里会席を堪能できます。大正レトロなラウンジでの生演奏や地酒バーなど、大人の冬旅を優雅に演出する仕掛けが随所に散りばめられています。",
              roomTip: "源泉露天風呂付き和洋室。渓流の冬木立を眺めながら、客室で心ゆくまで名湯独り占めの贅沢な時間を過ごせます。",
              gourmetTip: "「奥久慈軍鶏と常陸牛の極味会席」。引き締まった軍鶏肉の濃厚な旨味が溶け出す鍋と、とろける脂の甘みが絶妙な常陸牛を一度に楽しめます。",
              highlights: [
                "滝川の清流を望む絶景渓流露天風呂と肌を潤す弱アルカリ性美肌の湯",
                "奥久慈軍鶏のつみれ鍋とA5ランク常陸牛ステーキの贅沢な饗宴",
                "大正ロマン漂う吹き抜けラウンジや地酒バーなど洗練された館内空間"
              ]
            },
            {
              id: 2,
              name: "悠久の宿　滝美館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/76851/76851.jpg",
              rating: 4.43,
              reviews: 309,
              price: "¥6,300〜",
              access: "ＪＲ　袋田駅よりお車にて５分　2010年3月茨城総合ランキング第1位！",
              special: "袋田の滝に最も近く、袋田湯泉の中で最新の宿。「古代檜風呂」にイオンの湯（人工ラジウム泉）を導入。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F76851%2F76851.html",
              story: "袋田の滝まで徒歩わずか10分という絶好のロケーションを誇る、純和風情あふれる隠れ宿「悠久の宿 滝美館」。観光客が押し寄せる前の澄み切った早朝や、夜の氷瀑ライトアップへ歩いて向かうことができる唯一無二の立地が最大の魅力です。全客室がわずか数室という贅沢なプライベート空間で、静寂の中で自分だけの時間に浸ることができます。宿の主人が自ら打つ挽きたて・打ちたての「常陸秋そば」は、香り高くのど越し抜群で全国の蕎麦通を唸らせる逸品。冬の夕食には、滋味豊かな奥久慈軍鶏の塩焼きやすき焼き、地元で収穫された新鮮な冬野菜をふんだんに使った手作り料理が並び、心も体も芯から温まります。",
              roomTip: "奥久慈の山並みを望む純和室10畳。窓から雪化粧した山肌を眺め、静寂と畳の温もりに包まれてゆったりと寛げます。",
              gourmetTip: "「奥久慈軍鶏づくしと手打ち常陸秋そば会席」。軍鶏のガラからじっくり出汁をとったスープと、香り高い手打ち十割蕎麦の組み合わせが絶品です。",
              highlights: [
                "袋田の滝まで徒歩10分・早朝の静寂な氷瀑と夜間ライトアップ散策に最適",
                "主人が打つ香り高き常陸秋そば十割手打ちと奥久慈軍鶏の郷土料理",
                "わずか数室のアットホームなプライベート感と清らかな山の空気"
              ]
            },
            {
              id: 3,
              name: "大子温泉　やみぞ",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/142195/142195.jpg",
              rating: 4.40,
              reviews: 381,
              price: "¥16,500〜",
              access: "常磐道那珂I.Cより約６０分　東北道矢板I.Cより約７０分　水郡線常陸大子駅より車で約５分　高速バスやみぞ前徒歩約１分",
              special: "袋田の滝まで車で約１５分。綺麗な客室と美味しい水が自慢の宿。温泉そして地元食材料理でおもてなし",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F142195%2F142195.html",
              story: "清流久慈川の河畔に位置し、大子温泉の豊かな源泉を贅沢に引き込んだ公共の宿「大子温泉 やみぞ」。広々とした大浴場では、毎月替わりの果実湯（冬期はりんご湯など）が楽しめ、甘酸っぱい香りに包まれながら奥久慈の名湯を満喫できます。泉質はナトリウム・ナトリウム-硫酸塩・塩化物泉で、入浴後も体がぽかぽかと温まり冷え性に効果的。夕食には茨城県の最高級ブランド牛「常陸牛」のすき焼きや陶板焼き、奥久慈軍鶏の陶板焼きなど、地元の特産品をリーズナブルに味わえる宿泊プランが充実しています。清潔感あふれる近代的な設備と親しみやすいおもてなしで、家族旅行からシニア旅まで幅広い層に厚い支持を受けています。",
              roomTip: "リバービュー和洋室。ゆったりとしたツインベッドと畳スペースを備え、冬の久慈川の流れを眺めながら快適に滞在できます。",
              gourmetTip: "「常陸牛陶板焼き会席」。美しいサシが入った常陸牛の赤身と脂のバランスが素晴らしく、特製タレとおろしポン酢でさっぱりといただけます。",
              highlights: [
                "久慈川沿いの開放的な大浴場・冬限定のりんご風呂と充実の常陸牛会席",
                "リーズナブルな価格設定で家族連れやグループ旅行にも抜群の満足度",
                "広々とした客室と川のせせらぎに包まれるリフレッシュ空間"
              ]
            },
            {
              id: 4,
              name: "元祖しゃも弁当の宿　玉屋旅館",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/183542/183542.jpg",
              rating: 3.47,
              reviews: 52,
              price: "¥4,850〜",
              access: "ＪＲ　常陸大子駅目の前 徒歩1分",
              special: "【明治から続く創業110年の旅館】駅より徒歩1分！大子名物「奥久慈しゃも」料理がおすすめ",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F183542%2F183542.html",
              story: "JR水郡線常陸大子駅から徒歩わずか1分、大子町で100年以上の歴史を刻む名物「奥久慈しゃも弁当」の発祥元として名高い老舗料理旅館「元祖しゃも弁当の宿 玉屋旅館」。明治期創業の趣ある佇まいと、奥久慈軍鶏の旨味を知り尽くした料理人が腕を振るう本格軍鶏料理が全国から食通を引き寄せます。駅弁コンテストでも数々の栄冠に輝いた特製軍鶏弁当は、秘伝のタレでじっくり煮込んだ軍鶏肉と出汁で炊き上げたご飯の調和が驚異的。冬の宿泊では、熱々の「奥久慈軍鶏鍋」を中心に、軍鶏の刺身や炭火焼きなど、余すところなく軍鶏の魅力を引き出したフルコースを提供。アットホームで温かい家族経営の温もりが旅人の心を優しく解きほぐします。",
              roomTip: "歴史を感じる落ち着いた和室。古き良き日本の旅館情緒が色濃く残り、静かな駅前通りの夜を穏やかに過ごせます。",
              gourmetTip: "「名物・奥久慈軍鶏フルコース」。軍鶏の歯ごたえと深いコクを堪能できる特製鍋に加え、朝食には名物の軍鶏炊き込みご飯が振る舞われます。",
              highlights: [
                "常陸大子駅徒歩1分・元祖しゃも弁当の味を受け継ぐ奥久慈軍鶏料理の老舗",
                "明治創業の歴史が息づく温かなもてなしと軍鶏のフルコース膳",
                "駅前立地で電車旅にも抜群のアクセス・お土産に名物軍鶏弁当を予約可能"
              ]
            },
            {
              id: 5,
              name: "四季の湯宿　梅屋山荘",
              img: "https://img.travel.rakuten.co.jp/share/HOTEL/149460/149460.jpg",
              rating: 4.47,
              reviews: 51,
              price: "¥8,850〜",
              access: "山方宿駅より車で15分／常磐道・那珂ICより国道118号を大子方面へ車で約40分",
              special: "山間に佇む一軒宿。当宿は、お客様に「安らぎと静けさ」を感じていただきたいと考えています。",
              url: "https://hb.afl.rakuten.co.jp/hgc/54d2a438.4bc4abc2.54d2a439.aa1be583/?pc=https%3A%2F%2Ftravel.rakuten.co.jp%2FHOTEL%2F149460%2F149460.html",
              story: "奥久慈の山懐深く、静寂な里山風景に溶け込むように佇む一軒宿「四季の湯宿 梅屋山荘」。全6室の小さな宿だからこそ行き届く細やかな心配りと、地場産の食材を一品一品丁寧に仕上げる里山料理が評判です。敷地内から湧き出る天然温泉は、肌に吸い付くようなとろみのあるアルカリ性単純温泉で、湯船に浸かると日頃の疲れが溶け出していくような極上のリラックス感を味わえます。冬の膳を彩るのは、大子の清らかな地下水で仕込まれた蒟蒻料理や自家製味噌の味噌田楽、そして奥久慈軍鶏と地元産根菜がたっぷり入った郷土鍋。都会の喧騒を完全に離れ、本物の静寂と滋味に出逢いたい大人の一人旅やご夫婦旅に最適な隠れ家です。",
              roomTip: "山庭を望む静寂の和室。夜には満天の星空が広がり、澄み渡る奥久慈の冬夜の静けさを心ゆくまで堪能できます。",
              gourmetTip: "「里山の手作り冬会席」。奥久慈軍鶏鍋とともに、手作りの刺身蒟蒻や大子名産の生芋こんにゃくの田楽など、素朴で贅沢な山里の味を満喫できます。",
              highlights: [
                "全6室の隠れ宿・里山の静寂と源泉とろとろ美肌温泉で心身を再生",
                "自家製手作り蒟蒻田楽と奥久慈の採れたて冬野菜が織りなす素朴な美食",
                "夜には満天の星空観賞・都会の喧騒を忘れる奥久慈の静謐な山あいの時間"
              ]
            }
  ];

  const faqListItems = [
  {
    "q": "冬（11月・12月・1月）の袋田の滝で「氷瀑」が見られる時期や凍結の条件は？",
    "a": "袋田の滝（高さ120m・幅73m）の氷瀑は、例年12月下旬から冷え込みが厳しくなるにつれて滝の岩肌を流れる水が凍り始め、最も完全凍結（全面結氷）に近い状態が期待できるのは1月中旬から2月上旬にかけてです。氷点下の日が数日続くと滝全体が純白の氷壁と化し、自然が創り出す巨大な氷の彫刻となります。11月中旬から12月上旬は晩秋の名残と冬の訪れを感じる時期で、冷涼で澄み切った大気の中、力強い滝の瀑布と紅葉のコントラスト、そして夜間のライトアップイベント「大子来人〜ダイゴライト〜」が開催されます。"
  },
  {
    "q": "冬の袋田の滝ライトアップイベント「大子来人（ダイゴライト）」の開催期間と見どころは？",
    "a": "「大子来人〜ダイゴライト〜」は例年10月下旬〜翌年1月下旬にかけて開催される袋田の滝の冬の風物詩です。観瀑施設へと続くトンネル内が数万球のLEDによる光の回廊「光のトンネル」として美しく装飾され、トンネルを抜けた先の観瀑台からは、漆黒の夜空に白く浮かび上がる袋田の滝が幻想的にライトアップされます。昼間のダイナミックな滝の姿とは一変し、青や白の光に照らされた氷と水煙が幽玄な世界を演出します。観瀑台は冷え込むため、防寒対策を万全にして訪れるのが必須です。"
  },
  {
    "q": "奥久慈を代表する冬の二大味覚「奥久慈軍鶏（しゃも）」と「常陸牛」の特徴とおすすめの食べ方は？",
    "a": "奥久慈軍鶏は、奥久慈の豊かな自然の中で通常のブロイラーの約3倍（130〜150日以上）の時間をかけてじっくり平飼い放し飼いで育てられる全国屈指の地鶏です。脂肪分が少なく、噛めば噛むほど溢れ出る力強い旨味と弾力のある歯ごたえが特徴。冬は骨から取った濃厚な出汁で野菜や軍鶏肉、つみれを煮込む「奥久慈軍鶏鍋」やすき焼きが最高の食べ方です。また茨城県の指定生産者が肥育する最高品質の黒毛和牛「常陸牛」は、きめ細かな霜降りと口溶けの良い脂が魅力で、冬は陶板ステーキかすき焼きで奥久慈軍鶏と贅沢に食べ比べるのが旅の醍醐味です。"
  },
  {
    "q": "奥久慈温泉郷（袋田温泉・大子温泉）の泉質と冬の効能について教えてください。",
    "a": "奥久慈温泉郷の主たる泉質は「弱アルカリ性単純温泉」や「ナトリウム-硫酸塩・塩化物泉」です。無色透明で刺激が少なく、トロリとした柔らかな肌触りが特徴。アルカリ性の成分が古い角質をやさしく洗い流し、入浴後はお肌がしっとりと潤うことから「美肌の湯」として古くから親しまれています。塩化物泉の保温効果により湯冷めしにくく、真冬の散策で冷えた体を芯からじんわりと温め、神経痛や筋肉痛、疲労回復に優れた効果を発揮します。"
  },
  {
    "q": "冬の奥久慈大子町へのアクセス、道路の凍結状況やスタッドレスタイヤの必要性は？",
    "a": "車の場合は常磐自動車道の那珂ICより国道118号を経由して約50分です。奥久慈地域は茨城県内でも特に朝晩の冷え込みが厳しく、12月中旬から1月にかけては氷点下5度前後まで下がる日があります。トンネルの出入口や久慈川沿いの橋の上、日陰のカーブなどは路面凍結（ブラックアイスバーン）が発生しやすいため、12月〜1月に車で訪れる際はスタッドレスタイヤの装着またはタイヤチェーンの携行が必須です。公共交通機関の場合は、JR水戸駅からJR水郡線に乗り、袋田駅または常陸大子駅を利用します。ローカル列車の車窓から冬の久慈川渓谷の長閑な景色を眺める鉄道旅もおすすめです。"
  }
];


  return (
    <article className="min-h-screen bg-stone-50 text-stone-800 antialiased selection:bg-cyan-100 selection:text-cyan-900 pb-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Hero Header */}
      <header className="relative bg-slate-950 text-white overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 opacity-35 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1800&q=80" 
            alt="冬の袋田の滝氷瀑と奥久慈の山里風景" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="inline-flex items-center gap-2 bg-cyan-900/80 backdrop-blur-md text-cyan-100 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-4 border border-cyan-400/30">
            <Snowflake className="w-4 h-4 text-cyan-300" />
            11月・12月・1月 冬の茨城・日本三名瀑「袋田の滝」氷瀑＆極上奥久慈温泉特集
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-6">
            【11・12・1月茨城】日本三名瀑・袋田の滝の完全凍結「氷瀑」と奥久慈温泉郷・名物奥久慈軍鶏鍋＆常陸牛を堪能する冬の名宿5選
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed">
            四段の巨岩を流れ落ちる水流が、厳冬の冷気によって白銀の氷壁へと姿を変える奇蹟の絶景「氷瀑」。夜間には幻想的な光の祭典「大子来人〜ダイゴライト〜」が岩壁と観瀑トンネルを神秘的に照らします。散策の後は、とろりとした弱アルカリ性の美肌温泉に浸かり、芳醇な出汁が香る熱々の「奥久慈軍鶏鍋」と、とろける霜降り「常陸牛」の極上会席に舌鼓。都心から車で約2時間の山里で、五感が研ぎ澄まされる冬の旅をご案内します。
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-6 text-xs sm:text-sm text-slate-300">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-cyan-400" /> 最適時期：11月中旬〜1月下旬（ライトアップ・結氷・初詣）</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> エリア：茨城県久慈郡大子町（袋田温泉・大子温泉）</span>
            <span className="flex items-center gap-1.5"><Utensils className="w-4 h-4 text-cyan-400" /> 名物：奥久慈軍鶏鍋・常陸牛・常陸秋そば・大子りんご</span>
          </div>
        </div>
      </header>

      {/* Main Content Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-12 space-y-16">

        {/* Introduction Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 shadow-xs border border-stone-200/80 space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Winter Overview</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              白銀の氷壁が織りなす大自然の造形美と、山里に息づく極上のぬくもり
            </h2>
          </div>
          
          <div className="space-y-4 text-stone-700 leading-relaxed text-sm sm:text-base">
            <p>
              栃木県や福島県との県境に位置し、八溝山系の豊かな山々に囲まれた茨城県大子町。かつて西行法師が「花もみち 経緯にして 山姫の 錦織りなす 滝のしら糸」と詠み、四季に一度ずつ訪れなければ本当の風情は味わえないと称えたことから「四度の滝」とも呼ばれる日本三名瀑「袋田の滝」は、冬を迎えると息をのむ変貌を遂げます。
            </p>
            <p>
              11月から1月、朝晩の気温が氷点下へと急降下すると、高さ120メートル、幅73メートルの巨大な滝を流れる奔流が、外側から少しずつ凍り始めます。厳しい寒波が続くと、轟音を響かせていた水流が一瞬にして時を止めたかのように完全結氷し、巨大な純白の氷壁「氷瀑（ひょうばく）」が出現。朝日を浴びて青白く輝くその姿は、まるで天から降り注ぐクリスタルのカーテンのような崇高な美しさを湛えます。
            </p>
            <p>
              冬季限定で開催されるライトアップイベント「大子来人〜ダイゴライト〜」も見逃せません。滝へと続く観瀑トンネルが光の回廊に彩られ、漆黒の闇に浮かび上がる袋田の滝は、昼の雄々しさとは打って変わって幽玄で幻想的な別世界を現出させます。冬の清澄な大気の中で見上げる夜の滝は、訪れる者の心を強く揺さぶります。
            </p>
            <p>
              そして、寒さで冷えた体を芯から温めてくれるのが、袋田温泉や大子温泉に湧き出る美肌の名湯と、山里の恵みを凝縮した滋味豊かなご当地グルメです。平飼いでじっくり育ったブランド地鶏「奥久慈軍鶏」は、噛み締めるほどに深いコクが溢れ出す冬鍋の主役。さらに茨城が誇る極上黒毛和牛「常陸牛」、豊かな香りと喉越しを誇る「常陸秋そば」の手打ち蕎麦が膳を彩ります。名瀑の迫力に圧倒され、名湯に癒やされ、絶品グルメに満たされる、これ以上ない充実した冬の休日がここにあります。
            </p>
          </div>
        </section>

        {/* 3 Key Highlights Section */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Highlights</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の奥久慈・袋田で体感すべき3つのプレミアムな魅力
            </h2>
            <p className="text-stone-600 text-sm sm:text-base">
              11月〜1月だからこそ出逢える、息をのむ奇蹟の冬景色と温かな郷土の味。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-700 font-bold">
                <Snowflake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                1. 日本三名瀑「袋田の滝」の完全結氷・氷瀑
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                四段の巨岩を覆い尽くす巨大な氷壁。自然の厳冬が生み出す芸術作品「氷瀑」は、間近で見上げると圧倒的な迫力と神秘的な静寂に包まれます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700 font-bold">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                2. 冬を彩る光の祭典「大子来人〜ダイゴライト〜」
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                観瀑トンネルを煌びやかに照らすイルミネーションと、暗闇の中に青白く浮かび上がる夜間ライトアップの滝。昼夜で異なる二面性の美しさに息をのみます。
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center text-red-700 font-bold">
                <Utensils className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-stone-900">
                3. 本場奥久慈軍鶏鍋と極上常陸牛の山里会席
              </h3>
              <p className="text-stone-600 text-sm leading-relaxed">
                引き締まった肉質と濃密な旨味を誇る奥久慈軍鶏の熱々鍋と、きめ細やかな霜降り常陸牛。冬の寒さに染み渡る極上の郷土美味を名宿で堪能できます。
              </p>
            </div>
          </div>
        </section>

        {/* Model Course Section */}
        <section className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 space-y-8">
          <div className="border-b border-slate-800 pb-4">
            <span className="text-cyan-400 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Model Itinerary</span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              【1泊2日】氷瀑ライトアップと奥久慈軍鶏・常陸秋そばを巡る冬の王道モデルコース
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              昼と夜で表情を変える袋田の滝をじっくり堪能し、奥久慈の温泉とグルメを満喫するドライブ旅。
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative pl-6 sm:pl-8 border-l-2 border-cyan-500/40 space-y-6">
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  12:30 常陸大子に到着 ➔ 香り高い「常陸秋そば」の十割手打ちで腹ごしらえ
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  常磐道那珂ICから国道118号を北上し、奥久慈の玄関口・大子町へ。まずは全国の蕎麦職人から最高峰の評価を受ける「常陸秋そば」の手打ち蕎麦店へ。冬ならではの鴨南蛮や、奥久慈軍鶏の天ぷらとともに、豊かな穀物の香りとコシを堪能します。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 午後</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  14:30 「道の駅 奥久慈だいご」で名産品チェック ➔ 奥久慈の温泉宿へチェックイン
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  道の駅で奥久慈りんごや特産こんにゃく、大子漆の工芸品を鑑賞。15時半頃に宿へチェックイン。弱アルカリ性の柔らかな美肌温泉に浸かり、長時間のドライブで強張った体をほぐして夕暮れのひとときをのんびりと寛ぎます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 夕刻〜夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  17:30 冬の袋田の滝ライトアップ「大子来人〜ダイゴライト〜」を観賞
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  夕食前に防寒着を整えて夜の袋田の滝へ。色鮮やかに照らし出された観瀑トンネルを抜け、観瀑台へ出ると、闇夜に白く浮かび上がる巨大な滝の光景に圧倒されます。凍り始めた氷柱がLEDの光を浴びて神秘的な輝きを放ち、旅のハイライトを鮮烈に刻みます。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 1 夜</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  19:30 宿へ戻り、熱々の「奥久慈軍鶏鍋」と「常陸牛ステーキ」に舌鼓
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  ライトアップ観賞で冷えた体に、宿の夕食が幸せを満たします。軍鶏のガラから丁寧に引いた濃厚出汁で味わう軍鶏鍋は、噛み締めるほどに深い旨味が溢れ、地酒「森嶋」や「大子」が進みます。食後は再び温泉の湯船に身を沈め、安らかな眠りへ。
                </p>
              </div>

              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-900" />
                <span className="text-xs font-bold text-cyan-400 tracking-wider uppercase">DAY 2 朝〜昼</span>
                <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                  09:00 朝の清澄な空気の中、陽光に輝く昼の「袋田の滝」氷瀑を再訪
                </h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                  朝食後、宿を出発して朝の袋田の滝へ。朝の澄み切った太陽光が差し込む時間帯は、氷瀑がダイヤモンドのように白く煌めき、夜とは全く異なる壮麗な美しさを鑑賞できます。滝川沿いのお土産屋街で焼き立ての串団子や名物「ゆず味噌こんにゃく」を食べ歩き、大満足で帰路へ。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel Cards Section */}
        <section className="space-y-8">
          <div className="border-b border-stone-200 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Featured Accommodations</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-stone-900">
              冬の袋田氷瀑と奥久慈の味覚を堪能する厳選名宿5選
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-1">
              滝至近の老舗旅館から、渓流美を愛でる露天風呂リゾート、奥久慈軍鶏の料理旅館まで厳選。
            </p>
          </div>

          <div className="space-y-10">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white rounded-3xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-auto min-h-[260px]">
                    <img 
                      src={h.img} 
                      alt={h.name} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                      厳選第 {h.id} 位
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-cyan-900 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200/60">
                          {h.access}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-stone-600">
                          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                          <span className="font-bold text-stone-900 text-sm">{h.rating}</span>
                          <span>({h.reviews}件のクチコミ)</span>
                        </div>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-900 leading-snug">
                        {h.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-500 font-medium">
                        {h.special}
                      </p>

                      <p className="text-sm text-stone-700 leading-relaxed pt-2">
                        {h.story}
                      </p>
                    </div>

                    <div className="space-y-3 bg-stone-50 rounded-2xl p-4 border border-stone-200/70 text-xs sm:text-sm text-stone-700">
                      <div className="font-bold text-stone-900 mb-1 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-cyan-600" />
                        この宿の注目ポイント
                      </div>
                      <ul className="space-y-1.5 list-disc list-inside text-stone-600">
                        {h.highlights.map((hl: string, idx: number) => (
                          <li key={idx} className="leading-relaxed">{hl}</li>
                        ))}
                      </ul>
                      <div className="pt-2 border-t border-stone-200/60 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="font-bold text-stone-900">客室の提案：</span>
                          <span className="text-stone-600">{h.roomTip}</span>
                        </div>
                        <div>
                          <span className="font-bold text-stone-900">料理の提案：</span>
                          <span className="text-stone-600">{h.gourmetTip}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2 border-t border-stone-100">
                      <div>
                        <span className="text-xs text-stone-500 block">参考宿泊料金（1名あたり）</span>
                        <span className="text-xl sm:text-2xl font-black text-cyan-950">{h.price}</span>
                      </div>

                      <a 
                        href={h.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-800 to-slate-900 hover:from-cyan-900 hover:to-slate-950 text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm group"
                      >
                        <span>楽天トラベルで空室・プランを見る</span>
                        <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Local Gourmet & Culture Guide */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Local Gastronomy & Culture</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              奥久慈の風土が育んだ極上の味覚と冬の手仕事
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-stone-700 text-sm leading-relaxed">
            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <Utensils className="w-4 h-4 text-cyan-700" />
                全国の料理人を魅了する「奥久慈軍鶏」の真髄
              </h3>
              <p>
                奥久慈軍鶏の美味しさの秘密は、徹底した平飼い環境と長い飼育期間にあります。山あいの広大な鶏舎でストレスなく運動して育つため、筋肉質で脂肪分が極めて少なく、鶏肉本来の野性味あふれる芳醇な香りと弾力が生まれます。冬の鍋料理では、肉の身崩れが一切なく、骨から抽出されるコラーゲンたっぷりの黄金出汁が野菜の甘みを極限まで引き出します。
              </p>
            </div>

            <div className="space-y-3 bg-stone-50 p-5 rounded-2xl border border-stone-200/60">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <ShoppingBag className="w-4 h-4 text-cyan-700" />
                伝統の寒ざらし「凍み豆腐」と香り高き奥久慈茶
              </h3>
              <p>
                奥久慈大子町の冬の風物詩である「凍み豆腐（しみどうふ）」は、寒風の中で豆腐を天日干しと夜間の凍結を繰り返して仕上げる伝統保存食。煮込むと出汁をたっぷり含んでふっくらと戻り、滋味豊かな風味が口いっぱいに広がります。また、寒冷地ならではの深い渋みとまろやかな甘みが特徴の「奥久慈茶」や、樹上完熟させて蜜を閉じ込めた「奥久慈りんご」のアップルパイなど、心温まるお土産が揃っています。
              </p>
            </div>
          </div>
        </section>

        {/* Practical Tips Section */}
        <section className="bg-cyan-50/60 rounded-3xl p-6 sm:p-10 border border-cyan-200/60 space-y-6">
          <div className="border-b border-cyan-200/80 pb-4">
            <span className="text-cyan-900 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Traveler Tips</span>
            <h2 className="text-xl sm:text-2xl font-bold text-cyan-950">
              冬の袋田・奥久慈を安全に楽しむための装備とアクセス指南
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm text-cyan-950">
            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <ThermometerSun className="w-4 h-4 text-cyan-700" />
                足元の滑り止めと防寒具
              </div>
              <p className="leading-relaxed text-stone-700">
                袋田の滝周辺や観瀑デッキ、吊り橋は、水煙が凍結して滑りやすくなっています。滑り止めの効いたトレッキングシューズや防寒ブーツが必須です。風を通さないダウンジャケット、ニット帽、厚手の手袋を着用して鑑賞に臨みましょう。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <Compass className="w-4 h-4 text-cyan-700" />
                冬用タイヤ・路面凍結対策
              </div>
              <p className="leading-relaxed text-stone-700">
                12月中旬〜1月は国道118号や山間部の県道で早朝・夜間に路面凍結が発生します。マイカー利用の場合は必ずスタッドレスタイヤを装着し、急ハンドル・急ブレーキを避けた慎重な運転を心がけてください。
              </p>
            </div>

            <div className="space-y-2">
              <div className="font-bold flex items-center gap-2 text-stone-900 text-sm">
                <CheckCircle2 className="w-4 h-4 text-cyan-700" />
                混雑回避と早朝観瀑のすすめ
              </div>
              <p className="leading-relaxed text-stone-700">
                氷瀑が見頃となる1月の土日は町営駐車場が混み合います。袋田温泉の宿に前泊し、午前8時〜9時の開場直後に観瀑施設を訪れると、人影の少ない清閑な雰囲気の中で朝日を浴びる美しい氷瀑を独占鑑賞できます。
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/80 shadow-xs space-y-6">
          <div className="border-b border-stone-100 pb-4">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block mb-1">Frequently Asked Questions</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              冬の袋田の滝・奥久慈温泉郷に関するよくある質問
            </h2>
          </div>

          <div className="space-y-4">
            {faqListItems.map((faq: { q: string; a: string }, idx: number) => (
              <div key={idx} className="border border-stone-200/70 rounded-2xl p-5 hover:border-cyan-300 transition-colors bg-stone-50/50">
                <h3 className="font-bold text-stone-900 text-sm sm:text-base flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-cyan-800 text-white flex items-center justify-center text-xs shrink-0 mt-0.5 font-bold">
                    Q
                  </span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mt-3 pl-9">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Features & Internal Links Section */}
        <section className="border-t border-stone-200 pt-10 space-y-6">
          <div className="space-y-1">
            <span className="text-cyan-800 font-bold text-xs sm:text-sm tracking-wider uppercase block">Explore More Winter Features</span>
            <h2 className="text-xl sm:text-2xl font-bold text-stone-900">
              あわせて読みたい東日本の冬景色・温泉グルメ特集
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs sm:text-sm">
            <Link 
              href="/winter-tochigi-ashikaga-flowerpark-sano-yakuyoke-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">栃木・足利＆佐野</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                あしかがフラワーパーク光の花の庭と佐野厄除け大師初詣・佐野ラーメン名宿
              </span>
            </Link>

            <Link 
              href="/winter-fukushima-dake-onsen-adatara-milky-bath-fukushimagyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">福島・岳温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                冬の安達太良山雪景色と全国屈指の酸性白濁湯・福島牛すき焼きを味わう岳名宿
              </span>
            </Link>

            <Link 
              href="/winter-saitama-chichibu-onsen-yomatsuri-nagatoro-bushugyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">埼玉・秩父温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                冬の秩父夜祭と三十槌の氷柱・長瀞こたつ舟と武州牛を堪能する秩父名宿
              </span>
            </Link>

            <Link 
              href="/winter-tochigi-nasu-itamuro-onsen-toji-tochigigyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">栃木・那須板室</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                那須板室温泉の冬湯治・那須連山雪景色ととちぎ和牛を堪能する静寂名宿
              </span>
            </Link>

            <Link 
              href="/winter-gunma-kusatsu-onsen-yubatake-yukimi-joshugyu-stay" 
              className="p-4 rounded-2xl bg-white border border-stone-200 hover:border-cyan-400 hover:shadow-xs transition-all group block"
            >
              <span className="text-cyan-800 font-bold text-xs block mb-1">群馬・草津温泉</span>
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors line-clamp-2">
                冬の湯畑ライトアップと雪見露天風呂・上州牛すき焼きを味わう草津名宿
              </span>
            </Link>

            <Link 
              href="/features" 
              className="p-4 rounded-2xl bg-stone-100 border border-stone-200 hover:border-cyan-400 transition-all group flex flex-col justify-center text-center"
            >
              <span className="text-stone-900 font-bold group-hover:text-cyan-900 transition-colors">
                冬の特集記事一覧をすべて見る ➔
              </span>
            </Link>
          
      <HubRelatedPosts currentSlug="winter-ibaraki-fukuroda-waterfall-ice-onsen-shamo-stay" />
</div>
        </section>

      </main>
    </article>
  );
}
