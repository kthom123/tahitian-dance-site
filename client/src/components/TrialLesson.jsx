import React from "react";
import "./TrialLesson.css";

function TrialLesson() {
  return (
    <section id="trial-lesson" className="trial-section">
      <h2 className="trial-title">体験レッスン</h2>

      <p className="trial-description">
        体験レッスンご希望の方は、お問合せフォームよりご連絡をお待ちしております。<br />
        経験・未経験問わず、新規生徒募集中です。プレオープン中のため、現在開講していないクラスのご相談も可能です。
      </p>

      <div className="trial-items">
        <h3 className="trial-subtitle">体験レッスンお持ち物</h3>
        <ul>
          <li>パレオ（お持ちでない方は無料で貸し出しいたします。お気軽にお申し出ください）</li>
          <li>飲み物</li>
          <li>Ｔシャツなど汗をかいても構わない服、気になる方はパレオの下に履くレギンス</li>
          <li>タオル</li>
        </ul>
        <p className="trial-fee">
          体験レッスン費用：<strong>1,000円</strong><br />
          ※体験レッスン当日のご入会で<strong>全額返金</strong>
        </p>
      </div>
    </section>
  );
}

export default TrialLesson;
