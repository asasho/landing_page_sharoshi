import React, { useEffect, useState } from "react";
import "./App.css";
import styled from "styled-components";
import Slick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MediaQuery from "react-responsive";
import Benefits from "./molecules/Benefits";
import Matter from "./molecules/Matters";
import Merit from "./molecules/Merits";
import Profile from "./images/Profile.png";
import Client from "./molecules/Clients";
import Client1 from "./images/Client1.png";
import Client2 from "./images/Client2.jpg";
import Client3 from "./images/Client3.jpg";
import Feature from "./molecules/Features";
import Description from "./molecules/Descriptions";
import Work from "./molecules/Works";
import Black from "./molecules/TitleBlack";
import Orange from "./molecules/TitleOrange";
import TitleOrange from "./molecules/TitleOrange";
import Procedure from "./molecules/Procedures";
import InformationSession from "./molecules/InformationSession";
import Merit1 from "./images/client.webp";
import Merit2 from "./images/guide.webp";
import Merit3 from "./images/intro.webp";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import ComputerIcon from "@material-ui/icons/Computer";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import People from "./images/People.jpg";
import Arrow from "./images/Arrow.png";
import Matter1 from "./images/Matter1.png";
import Matter2 from "./images/Matter2.png";
import Partner1 from "./images/partner1.png";
import Partner2 from "./images/partner2.png";
import Partner3 from "./images/partner3.png";
import Partner4 from "./images/partner4.png";
import Partner5 from "./images/partner5.png";
import Partner6 from "./images/partner6.png";
import Partner7 from "./images/partner7.png";
import Partner8 from "./images/partner8.png";
import Partner9 from "./images/partner9.png";
import Partner10 from "./images/partner10.png";
import Partner11 from "./images/partner11.png";
import Partner12 from "./images/partner12.png";
import Partner13 from "./images/partner13.png";
import Partner14 from "./images/partner14.png";
import Partner15 from "./images/partner15.png";
import Partner16 from "./images/partner16.png";
import Partner17 from "./images/partner17.png";
import Partner18 from "./images/partner18.png";
import Partner19 from "./images/partner19.png";
import Partner20 from "./images/partner20.png";
import Partner21 from "./images/partner21.png";
import Partner22 from "./images/partner22.png";
import Partner23 from "./images/partner23.png";
import CCS1 from "./images/CCS1.jpg";
import CCS2 from "./images/CCS2.jpg";
import CCS3 from "./images/CCS3.jpg";
import CCS4 from "./images/CCS4.jpg";
import CCS5 from "./images/CCS5.jpg";
import CCS6 from "./images/CCS6.jpg";
import CCS7 from "./images/CCS7.jpg";
import Description1 from "./images/description1.jpeg";
import Description2 from "./images/description2.jpeg";
import Description3 from "./images/description3.jpeg";
import Description4 from "./images/description4.jpeg";
import President from "./images/president.png";
import BooksPc from "./images/BooksPc.png";
import { Layout } from "./organisms/Layout";
import { useDidMount } from "./hooks/useDidMount";
import PrevArrow from "./molecules/PrevArrow";
import NextArrow from "./molecules/NextArrow";
import Approach from "./molecules/Approach";
import Impact1 from "./images/Impact1.png";
import Impact2 from "./images/Impact2.png";
import Impact3 from "./images/Impact3.png";
import Supports from "./molecules/Supports";
import Approach1 from "./images/Approach1.jpeg";
import Approach3 from "./images/Approach3.jpeg";
import Support2 from "./images/Support2.jpeg";
import Support5 from "./images/Support5.jpeg";
import Support6 from "./images/Support6.jpeg";

const Fade = require("react-reveal/Fade");

function App() {
  const didMount = useDidMount();

  return (
    <Layout>
      <div className="wrapper-transfer">
        <div className="top-text">
          <div className="alert">
            <h2>社労士限定</h2>
          </div>
          <h3>―事業を拡大させたい社労士さんへ―</h3>
          <h1>
            <span>15,000社の社長</span>と繋がる
            <br />
            コンサルタントが
            <br />
            高単価案件を紹介します！
          </h1>
          <h2 className="sub-text">
            日給<span>35,000円～</span>の案件を紹介可！
          </h2>
          <MediaQuery minWidth={768}>
            <div className="items-benefits">
              {benefits.map((benefit) => (
                <Benefits key={benefit.id} text={benefit.text} />
              ))}
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <div className="items-benefits">
              {benefitSps.map((benefitSp) => (
                <Benefits key={benefitSp.id} text={benefitSp.text} />
              ))}
            </div>
          </MediaQuery>
        </div>
      </div>
      <div className="white-wrapper">
        <div className="CTA">
          <h1>
            事業を拡大させたい 社労士さんを
            <br />
            募集します！
          </h1>
          <button className="entry">説明会に参加する</button>
        </div>

        <div className="section section-matter">
          <Black title="社労士さんの新規顧客開拓でこんな悩みはありませんか？" />
          <div className="items">
            {matters.map((matter) => (
              <Matter key={matter.id} text={matter.text} image={matter.image} />
            ))}
          </div>
        </div>

        <div className="solution">
          <h1>そのお悩み解決します！</h1>
        </div>
        <div className="triangle"></div>
        <div className="recruit">
          <h2>
            組織コンサルティングの案件を代行して
            <br />
            いただける社労士さんを募集します！
          </h2>
        </div>

        <div className="scheme">
          <h3>ビジネススキーム</h3>
        </div>

        <div className="message">
          <h1>
            「15,000社の社長と繋がりのある
            <br />
            コンサルタント池本克之」
          </h1>
          <img src={People} />
          <h2>
            池本克之提携社労士になって
            <br />
            コンサルティング案件を代行しませんか？
          </h2>
        </div>

        <div className="section section-merit">
          <img className="arrow-img" src={Arrow} />
          <div className="merit">
            <h3>提携社労士になるメリット</h3>
          </div>
          <div className="items-merit items-ver2">
            {merits.map((merit) => (
              <Merit key={merit.id} text={merit.text} image={merit.image} />
            ))}
          </div>
        </div>

        <div className="section section-profile">
          <Orange title="コンサルタント池本克之紹介" />
          <div className="items profile-items">
            <div className="profile-left">
              <img src={Profile} />
              <h2>池本克之</h2>
            </div>
            <div className="profile-right">
              <h1 className="list">池本克之紹介</h1>
              <ul className="list">
                <li>400社以上のコンサルティング実績がある。</li>
                <li>15,000社以上の社長と繋がりがある</li>
                <li>元ドクターシーラボ社長</li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#395475", marginBottom: "150px" }}>
          <div className="approach-title">
            <h2>どのように案件を獲得できるのか</h2>
            <div className="approach">
              <h1>3つのアプローチ手法</h1>
            </div>
          </div>
          {approaches.map((approach) => (
            <Approach
              key={approach.id}
              id={approach.id}
              image={approach.image}
              impact={approach.impact}
              text={approach.text}
              content={approach.content}
            />
          ))}
        </div>

        <div
          style={{
            marginBottom: "150px",
            maxWidth: "1200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="support-title" style={{}}>
            <h2>社労士さんを徹底サポート</h2>
            <div className="support">
              <h1>充実したサポート体制</h1>
            </div>
            <h3 className="support-text">
              400社以上の企業をコンサルティングしてきた
              <br />
              コンサルティングのプロが独自のノウハウで
              <br />
              忙しい社労士さんを手厚く支援致します。
            </h3>
          </div>
          <div className="support-container">
            {supports.map((support) => (
              <Supports
                key={support.id}
                image={support.image}
                text={support.text}
                content={support.content}
              />
            ))}
          </div>
        </div>

        <div className="section section-description">
          <Black title="池本克之・提携社労士の業務イメージ" />
          <div>
            {descriptions.map((description) => (
              <Description
                key={description.id}
                id={description.id}
                image={description.image}
                text1={description.text1}
                text2={description.text2}
              />
            ))}
          </div>
        </div>
        {/* 
        <div className="section section-clients">
          <TitleOrange title="紹介できる案件の例" />
          <MediaQuery minWidth={768}>
            <WorkSlick {...settings3}>
              {works.map((work) => (
                <Work
                  key={work.id}
                  image={work.image}
                  category={work.category}
                  title={work.title}
                />
              ))}
            </WorkSlick>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <WorkSlick {...settings4}>
              {works.map((work) => (
                <Work
                  key={work.id}
                  image={work.image}
                  category={work.category}
                  title={work.title}
                />
              ))}
            </WorkSlick>
          </MediaQuery>
        </div> */}

        <div className="CTA-2">
          <div className="CTA-mid">
            <h1>まずはお気軽に無料説明会にご参加ください</h1>
            <h3>「興味があるので内容について詳しく知りたい」</h3>
            <h3>「どのようにして高単価案件を獲得できるか知りたい」</h3>
            <h2>説明会では案件紹介の流れを説明します</h2>
            <button className="entry">無料説明会に参加する</button>
            <p>※無理な勧誘は一切行いませんので、お気軽にお越しください</p>
          </div>
        </div>

        <div className="section section-clients">
          <TitleOrange title="池本克之から案件を紹介してもらった方の声" />
          <MediaQuery minWidth={768}>
            <div className="clients">
              {clients.map((client) => (
                <Client
                  key={client.id}
                  image={client.image}
                  company={client.company}
                  comment={client.comment}
                />
              ))}
            </div>
          </MediaQuery>
          <MediaQuery maxWidth={768}>
            <ClientSlick {...settings2} className="clients-slick">
              {clients.map((client) => (
                <Client
                  key={client.id}
                  image={client.image}
                  company={client.company}
                  comment={client.comment}
                />
              ))}
            </ClientSlick>
          </MediaQuery>
        </div>

        <div className="section-partner">
          <TitleOrange title="池本克之とつながりのある企業～累計15,000社以上～" />
          <PartnerSlick {...settings} className="partner-slick">
            {partners.map((partner) => (
              <div className="partner-item" key={partner.id}>
                <img
                  src={partner.logo}
                  style={{ height: "100%", width: "auto" }}
                />
              </div>
            ))}
          </PartnerSlick>
        </div>

        <div className="section section-feature">
          <TitleOrange title="池本克之・提携社労士制度の特徴" />
          <div className="feature">
            {features.map((feature) => (
              <Feature
                key={feature.id}
                id={feature.id}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </div>

        <div className="section section-procedure">
          <Black title="エントリーから登録までの流れ" />
          <div className="items items-ver2">
            {procedures.map((procedure) => (
              <Procedure
                key={procedure.id}
                id={procedure.id}
                title={procedure.title}
                image={procedure.image}
                text={procedure.text}
              />
            ))}
          </div>
        </div>
        <div className="section section-information">
          <Black title="説明会の内容" />
          <div className="items-information">
            {informations.map((information) => (
              <InformationSession
                key={information.id}
                id={information.id}
                text={information.text}
              />
            ))}
          </div>
        </div>

        <div className="regist_form"></div>
        <script src="https://myasp.pajaposs.com/js/jquery-1.7.1.min.js"></script>
        <script src="https://myasp.pajaposs.com/jss/dynamic_form/FKpmHTvJ/a.js"></script>

        <Page>
          <Right>
            <Photo src={President} alt="president" />
          </Right>
          <Left>
            <ProfileEng>PROFILE</ProfileEng>
            <ProfileJpn>池本克之社長プロフィール</ProfileJpn>
            <MainText>
              400社以上ものコンサルティングをしてきた
              <br />
              元ドクターシーラボ社長
            </MainText>
            <Content>
              ノンバンク、海外ホテル事業、生命保険代理店営業を経験。
              <br />
              財務、マーケティング、セールス、人材教育などを体得する。
              <br />
              <br />
              その後、通信販売のベンチャー企業の経営に参画。それまでのノウハウを実践する。
              <br />
              <br />
              株式会社ドクターシーラボ移籍後、代表取締役として2003年3月ジャスダック店頭公開に貢献。
              <br />
              <br />
              2003年11月ドクターシーラボを退任。
              <br />
              月商1億円に満たない時代から1年3ヶ月で月商7億円超に、さらに年商120億円企業へと成長させた。
              <br />
              <br />
              2004年3月　株式会社ネットプライス執行役員に就任。
              <br />
              公開企業のマネジメント経験を活かし、若いベンチャー企業の参謀役としてカスタマーサービス、
              <br />
              物流、CRM、仕入先開拓等の 機能を統括する。
              <br />
              <br />
              2004年7月にはマザーズ店頭公開。経営者として2度の株式公開を経験する。
              <br />
              その後、複数の企業経営を経て、現在は組織学習経営コンサルタントとして多くの企業の業績向上、
              <br />
              企業文化の発展をコンサルティングしている。
              <br />
            </Content>
          </Left>
        </Page>

        <PageBook>
          <RightBook>
            <Author>著者</Author>
            <Box>
              <Book>出社しなくても最高に評価される人がやっていること</Book>
              <Book>その「任せ方」、もう通用しなくて当然です。</Book>
              <Book>「すぐやるチーム」をつくるたった1つの考え方</Book>
              <Book>今いる仲間で「結果が出る会議」をつくる</Book>
              <Book>今いる仲間で「最強のチーム」をつくる</Book>
            </Box>
          </RightBook>
          <Img>
            <PhotoBook src={BooksPc} alt="BooksPc" />
          </Img>
        </PageBook>

        <Foot>
          <Row>
            <FooterItem>
              <Item href="https://www.ikemotokatsuyuki.net/law/">
                特定商取引法
              </Item>
            </FooterItem>
          </Row>
          <Row>
            <FooterItem>
              <Item href="https://www.ikemotokatsuyuki.net/pp/">
                プライバシーポリシー
              </Item>
            </FooterItem>
          </Row>
        </Foot>

        <MediaQuery minWidth={768}>
          <Fade bottom when={didMount}>
            <div id="CTA-button" className="CTA-button">
              <div className="tel">
                <p className="tel-text">
                  お電話受付時間
                  <br />
                  平日　10:00～17:00
                </p>
                <h2 className="tel-text">03-6450-4931</h2>
              </div>
              <div style={{ display: "flex" }}>
                <h2 className="free">
                  説明会には無料で
                  <br />
                  参加していただけます！
                </h2>
                <button className="entry entry-footer">説明会に参加する</button>
              </div>
            </div>
          </Fade>
        </MediaQuery>
        <MediaQuery maxWidth={768}>
          <Fade bottom when={didMount}>
            <div id="CTA-button" className="CTA-button">
              <div className="tel">
                <p className="tel-text">
                  お電話受付時間
                  <br />
                  平日　10:00～17:00
                </p>
                <h2 className="tel-text">03-6450-4931</h2>
              </div>
              <div style={{ display: "flex" }}>
                <button className="entry-footer">説明会に参加する</button>
              </div>
            </div>
          </Fade>
        </MediaQuery>
      </div>
    </Layout>
  );
}

export default App;

const settings = {
  dots: false,
  accessibility: false,
  infinate: true,
  slidesToScroll: 1,
  slideToShow: 4,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  pauseOnHover: false,
  cssEase: "linear",
  variableWidth: true,
};

const settings2 = {
  rows: 1,
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  swwipeToSlide: true,
};

const settings3 = {
  rows: 1,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  swwipeToSlide: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const settings4 = {
  rows: 1,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  swwipeToSlide: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const benefits = [
  { id: 1, text: "初期費用・月額費用0円" },
  { id: 2, text: "社労士限定" },
  { id: 3, text: "高報酬" },
];

const benefitSps = [
  { id: 1, text: "費用0円" },
  { id: 2, text: "社労士限定" },
  { id: 3, text: "高報酬" },
];

const matters = [
  {
    id: 1,
    text: "これまで知人の紹介のみで顧客を獲得していたが、紹介以外で獲得できるようになりたい",
    image: Matter1,
  },
  {
    id: 2,
    text: "HPを作ったが、反応がない",
    image: Matter2,
  },
];

const approaches = [
  {
    id: 1,
    image: Approach1,
    text: "組織コンサルティングの講師案件",
    impact: Impact1,
    content:
      "組織コンサルティング案件を社労士さんに紹介可能。日給35,000円～の案件を初期費用・月額費用0円で獲得することができます。",
  },
  {
    id: 2,
    image: Description4,
    text: "弊社がご紹介した顧客に自社サービスを提案",
    impact: Impact2,
    content:
      "弊社がご紹介したお客様に対して自社サービスを売っていただくことができます。その際、弊社に紹介料などを支払う必要はありません。",
  },
  {
    id: 3,
    image: Approach3,
    text: "経営者コミュニティに参加",
    impact: Impact3,
    content: "オンラインの経営者コミュニティサイトに参加することができます。",
  },
];

const supports = [
  {
    id: 1,
    image: Description4,
    text: "組織コンサルティングの講師案件を直接紹介",
    content:
      "15,000社以上の社長と繋がるコネクションを生かした弊社にしかできない案件を直接紹介",
  },
  {
    id: 2,
    image: Support2,
    text: "講師案件で使う資料の無料配布",
    content: "オーダーメイドのコンサルティング資料を無料配布",
  },
  {
    id: 3,
    image: Approach1,
    text: "講師案件の仕方を無料指導",
    content: "講師案件のやりかたを無料で教えます",
  },
  {
    id: 4,
    image: Approach3,
    text: "経営者コミュニティへの参加権利",
    content:
      "オンライン経営者コミュニティに無料招待します。人脈を作ることができます",
  },
  {
    id: 5,
    image: Support5,
    text: "ご紹介した顧客のカスタマーサポート",
    content:
      "ご紹介したお客様のカスタマーサポートを弊社で請け負うことで社労士さんの負担を減らします",
  },
  {
    id: 6,
    image: Support6,
    text: "案件日程調整のフォロー",
    content:
      "弊社担当が、日程調整までサポート致しますので、社労士さんは案件に集中することができます。",
  },
];

const merits = [
  {
    id: 1,
    image: Merit1,
    text: "高単価案件を紹介してもらえる",
  },
  {
    id: 2,
    image: Merit2,
    text: "紹介による案件獲得なので受注率が高い",
  },
  {
    id: 3,
    image: Merit3,
    text: "経営者コミュニティに参加できる",
  },
];

const clients = [
  {
    id: 1,
    image: Client1,
    company: "株式会社シナジスタ",
    comment:
      "池本さんは案件を大量に持っているのと同時に案件の内容も幅広いので自社にマッチした案件を紹介いただけます。",
  },
  {
    id: 2,
    image: Client2,
    company: "ネオプロモーション株式会社",
    comment:
      "池本さんを通じ十数社の方とお会いし、案件を獲得することができました。今までアプローチできなかった企業を紹介いただいたり、とても助かっています。",
  },
  {
    id: 3,
    image: Client3,
    company: "ユナイテッドフォトプレス",
    comment:
      "池本さんを通じ29社の方とお話しする機会を頂きました。そのうち5社とは今でも関係が続いております。",
  },
];

const features = [
  {
    id: 1,
    title: "自社で集客をしなくてよい",
    text: "社労士さんの集客は池本克之がするため、自社で集客をしなくてもコンサルティングの案件を受注することができる",
  },
  {
    id: 2,
    title: "池本克之の持つ経営者ネットワークに参加できる",
    text: "池本克之の持つ経営者コミュニティに参加できるのでそこで営業活動ができます。",
  },
  {
    id: 3,
    title: "初期費用・月額利用料0円",
    text: "初期費用や月額利用料は頂いていないので、リスク0で提携社労士になることができます。",
  },
];

const descriptions = [
  {
    id: 1,
    image: Description1,
    text1: "",
    text2: "池本克之に組織コンサルティングの講師案件を紹介してもらう",
  },
  {
    id: 2,
    image: Description2,
    text1: "",
    text2: "案件を代行していただく",
  },
  {
    id: 3,
    image: Description3,
    text1: "実働4日で報酬150,000円以上のフィーを獲得",
    text2: "",
  },
  {
    id: 4,
    image: Description4,
    text1: "自社の売上UP",
    text2: "その顧客に他の自社サービスを売る",
  },
];

const works = [
  {
    id: 1,
    image: CCS1,
    category: "組織コンサルティング",
    title: "トマト農園の組織コンサルティング",
  },
  {
    id: 2,
    image: CCS2,
    category: "組織コンサルティング",
    title: "接骨院の組織コンサルティング",
  },
  {
    id: 3,
    image: CCS3,
    category: "組織コンサルティング",
    title: "クリニックの組織コンサルティング",
  },
  {
    id: 4,
    image: CCS4,
    category: "組織コンサルティング",
    title: "製薬会社の組織コンサルティング",
  },
  {
    id: 5,
    image: CCS5,
    category: "組織コンサルティング",
    title: "米菓メーカーの組織コンサルティング",
  },
  {
    id: 6,
    image: CCS6,
    category: "組織コンサルティング",
    title: "コンサルティング会社の組織コンサルティング",
  },
  {
    id: 7,
    image: CCS7,
    category: "組織コンサルティング",
    title: "介護用品販売店",
  },
];

const procedures = [
  {
    id: 1,
    title: "エントリー",
    image: <BorderColorIcon style={{ fontSize: 80 }} />,
    text: "申し込みの際に入金が必要になります。こちらからお申し込みください",
  },
  {
    id: 2,
    title: "説明会",
    image: <ComputerIcon style={{ fontSize: 80 }} />,
    text: "指定の時間になったらZoomにつないで説明会に参加します。",
  },
  {
    id: 3,
    title: "登録",
    image: <GroupAddIcon style={{ fontSize: 80 }} />,
    text: "弊社の提携社労士グループに参加していただきます。",
  },
];

const informations = [
  { id: 1, text: "どういった顧客を紹介してもらえるかについて" },
  { id: 2, text: "どれくらい案件を紹介してもらえるのかについて" },
  { id: 3, text: "具体的な案件紹介のフロー" },
];

const partners = [
  { id: 1, logo: Partner1 },
  { id: 2, logo: Partner2 },
  { id: 3, logo: Partner3 },
  { id: 4, logo: Partner4 },
  { id: 5, logo: Partner5 },
  { id: 6, logo: Partner6 },
  { id: 7, logo: Partner7 },
  { id: 8, logo: Partner8 },
  { id: 9, logo: Partner9 },
  { id: 10, logo: Partner10 },
  { id: 11, logo: Partner11 },
  { id: 12, logo: Partner12 },
  { id: 13, logo: Partner13 },
  { id: 14, logo: Partner14 },
  { id: 15, logo: Partner15 },
  { id: 16, logo: Partner16 },
  { id: 17, logo: Partner17 },
  { id: 18, logo: Partner18 },
  { id: 19, logo: Partner19 },
  { id: 20, logo: Partner20 },
  { id: 21, logo: Partner21 },
  { id: 22, logo: Partner22 },
  { id: 23, logo: Partner23 },
];

const PartnerSlick = styled(Slick)`
  .slick-track {
    display: flex;
    padding-top: 200px;
  }

  .slick-slide {
    width: auto;
  }

  .slick-slide img {
    margin-left: 60px;
  }

  .slick-prev {
    display: none !important;
  }

  .slick-next {
    display: none !important;
  }
`;

const WorkSlick = styled(Slick)`
  .slick-list {
    width: 90%;
    margin: 0 !important;
    padding-left: 0;
  }

  .skick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    padding-top: 200px;
    width: 100vw;
    height: 500px;
  }
  .slick-slide {
    margin: 0;
  }
  .slick-prev {
    width: 40px;
    height: 40px;
    left: 25px !important;
    z-index: 5;
  }

  .slick-prev:before {
    font-size: 40px;
    color: black;
  }

  .slick-next {
    width: 40px;
    height: 40px;
    right: 25px !important;
  }
  .slick-next:before {
    font-size: 40px;
    color: black;
  }
`;

const ClientSlick = styled(Slick)`
  .slick-list {
    width: 90%;
    margin: 0 !important;
    padding-left: 0;
  }

  .skick-slider {
    display: flex;
  }

  .slick-track {
    display: flex;
    padding-top: 100px;
    width: 100vw;
    height: 500px;
  }
  .slick-slide {
    margin: 0;
  }

  .slick-prev {
    display: none !important;
  }

  .slick-next {
    display: none !important;
  }
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row-reverse;
  width: 100%;
  margin: 0 0 40px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  @media (max-width: 768px) {
    flex-flow: column;
    margin-top: 0;
  }
`;

const Left = styled.div`
  z-index: 2;
  width: 60%;
  padding-top: 20px;
  margin-bottom: 50px;
  margin-right: 50px;
  @media (max-width: 1280px) {
    margin-top: 20px;
  }
  @media (max-width: 768px) {
    width: 90%;
    margin: 0;
    margin: 0 5% 0 5%;
  }
`;

const ProfileEng = styled.p`
  font-weight: 700;
`;

const ProfileJpn = styled.p`
  border-top: solid 1px gray;
`;

const MainText = styled.h1`
  font-weight: 700;
  @media (max-width: 1280px) {
    width: 100%;
    margin: 0;
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Content = styled.p`
  margin: 20px 0 20px 0;
  @media (max-width: 1280px) {
    font-size: 14px;
  }
`;

const Right = styled.div`
  z-index: 1;
  width: 30%;
  margin-top: 30px;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0;
    border: none;
  }
`;

const Photo = styled.img`
  width: 100%;
  height: auto;
  border: none;
  @media (max-width: 768px) {
    width: 60%;
    height: auto;
    margin: 0 20%;
  }
`;

/*book*/
const PageBook = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row-reverse;
  width: 100%;
  margin: 0 0 40px 0;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  @media (max-width: 768px) {
    flex-flow: column;
    margin-top: 0;
  }
`;

const Img = styled.div`
  width: 50%;
  margin-right: 50px;
  @media (max-width: 768px) {
    width: 80%;
    margin: 20px 10%;
    border: none;
  }
`;

const PhotoBook = styled.img`
  width: 100%;
`;

const RightBook = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 90%;
    margin: 0 5%;
  }
`;

const Author = styled.h1`
  font-weight: 700;
  @media (max-width: 768px) {
    font-size: 24px;
    text-align: center;
  }
`;

const Box = styled.ul`
  padding-left: 50px;
  @media (max-width: 768px) {
    padding-left: 20px;
  }
`;

const Book = styled.li`
  font-size: 24px;
  font-weight: 600;
  text-align: left;
  @media (max-width: 768px) {
    font-size: 18px;
    padding-right: 20px;
  }
`;

/*footer*/
const Foot = styled.div`
  width: 100%;
  padding-bottom: 120px;
  display: flex;
  justify-content: center;
  border-top: 1px solid #c0c0c0;
  font-family: Inter, "Noto Sans JP", ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
    "Noto Color Emoji";
  @media (max-width: 768px) {
    padding-bottom: 80px;
  }
`;

const Row = styled.div`
  width: 40%;
`;

const FooterItem = styled.h4`
  cursor: pointer;
`;

const Item = styled.a`
  text-decoration: none;
  color: black;
`;
