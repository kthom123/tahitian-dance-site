import './ClassDetails.css';

function ClassDetails() {
  const classes = [
    {
      title: "≪大人初級クラスA≫",
      frontLabel: "大人初級クラスA",
      details: `
月2回　月謝 4,000円
高校生以上の女性向けで、タヒチアンダンスが初めての方におすすめのクラスです。
筋力トレーニング、基礎ステップ、ハンドモーションを学びながら、アパリマやオテアの振り付けにも取り組みます。

【レッスン日程】
木曜 9:30～10:30 ／ 金曜 9:30～10:30

【スタジオ場所】
大泉町文化村 ／ 邑楽町中央公民館
※曜日・場所は月によって異なる場合があります。
      `,
    },
    {
      title: "≪キッズクラス≫",
      frontLabel: "キッズクラス",
      details: `
月2回　月謝 4,000円
小学生を対象としたクラスです。リズム感や表現力を育みながら、タヒチアンダンスの基本ステップや振り付けを楽しく学びます。

【レッスン日程】
低学年（1～3年生）木曜 16:00～17:00
高学年（4～6年生）木曜 17:15～18:15

【スタジオ場所】
大泉町文化村 ／ 邑楽町中央公民館
※場所は月によって異なる場合があります。
      `,
    },
    {
      title: "🌸 家族割引について",
      frontLabel: "家族割引",
      details: `
【兄弟姉妹】
2人目以降、月謝500円引き

【親子】
どちらかの月謝を500円引き

※割引の適用にはお申し出が必要です。
      `,
    },
  ];

  return (
    <div className="flip-section">
      <h2 className="section-heading">各クラスのご案内</h2>
      <div className="flip-grid">
        {classes.map((item, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-inner">
              <div className="flip-front">
                <h3>{item.frontLabel}</h3>
              </div>
              <div className="flip-back">
                <pre>{item.details}</pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassDetails;
