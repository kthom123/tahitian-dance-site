import { useState } from 'react';
import './ClassDetails.css';

function ClassDetails() {
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = [
  {
    title: "≪初級マハナクラス≫",
    frontLabel: "大人クラス",
    details: (
      <>
        <p><strong>月2回　月謝 4,000円</strong></p>
        <p>高校生以上の女性向けで、タヒチアンダンスが初めての方のためのクラスです。</p>
        <p>筋力トレーニング、基礎ステップ、ハンドモーションを学びながら、アパリマやオテアの振り付けにも取り組みます。</p><br />
        <p><strong>レッスン日程</strong><br />木曜 9:30～10:30 ／ 金曜 9:30～10:30</p><br />
        <p><strong>スタジオ場所</strong><br />大泉町文化村 ／ 邑楽町中央公民館<br />※曜日・場所は月によって異なる場合があります。</p>
      </>
    )
  },
  {
    title: "≪キッズクラス≫",
    frontLabel: "キッズクラス",
    details: (
      <>
        <p><strong>月2回　月謝 4,000円</strong></p>
        <p>小学生を対象としたクラスです。リズム感や表現力を育みながら、タヒチアンダンスの基本ステップや振り付けを楽しく学びます。</p>
        <p>体を動かすことの楽しさを感じ、自信や集中力も自然と身につけていきます。</p><br />
        <p><strong>レッスン日程</strong><br />
        ・低学年クラス（1～3年生）木曜 16:00～17:00<br />
        ・中・高学年クラス（4～6年生）木曜 17:15～18:15</p><br />
        <p><strong>スタジオ場所</strong><br />
        大泉町文化村 ／ 邑楽町中央公民館<br />
        ※場所は月によって異なる場合があります。</p>
      </>
    )
  },
  {
    title: "🌸 家族割引について",
    frontLabel: "家族割引",
    details: (
      <>
        <p>ご家族で通われる方に以下の割引制度をご用意しています。</p>
        <ul style={{ paddingLeft: "1rem" }}>
          <li><strong>兄弟姉妹でご参加の場合：</strong>どちらかの月謝を500円引き</li>
          <li><strong>親子でご参加の場合：</strong>どちらかの月謝を500円引き</li>
        </ul>
        <p>※割引の適用にはお申し出が必要です。</p>
      </>
    )
  }
];

  return (
    <div className="flip-section">
      <h2 className="section-heading">各クラスのご案内</h2>
      <div className="flip-grid">
        {classes.map((item, index) => (
          <div
            className="popup-card"
            key={index}
            onClick={() => setSelectedClass(item)}
          >
            <h3>{item.frontLabel}</h3>
          </div>
        ))}
      </div>

      {selectedClass && (
        <div className="popup-overlay">
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={() => setSelectedClass(null)}>×</button>
            <h3>{selectedClass.title}</h3>
            <div className="popup-details">{selectedClass.details}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClassDetails;
