import React from "react";
import "./Classes.css";

function Classes() {
  return (
    <section id="classes" className="classes-section">
      <h2 className="classes-title">クラス紹介</h2>
      <div className="classes-grid">
        {/* Card 1 */}
        <div className="class-card">
          <h3>レベル・年齢<br />問いません</h3>
          <p>ダンス未経験の方も、経験者の方も大歓迎です。
            お子様からマダムまで、それぞれのペースやレベルに合わせたレッスンを提供します。
            現在プレオープン中のため、ご希望に応じて新規クラスも開講予定です。</p>
        </div>

        {/* Card 2 */}
        <div className="class-card">
          <h3>イベント出演</h3>
          <p>ご希望のある全ての生徒様が、
            イベントやショーに出演いただけます。
            出演は強制ではありません。</p>
        </div>

        {/* Card 3 */}
        <div className="class-card">
          <h3>健康的で<br />内側から輝く身体へ</h3>
          <p>タヒチアンダンスは、シェイプアップや姿勢改善、
            心と体のリフレッシュにぴったり。
            普段あまり使わない筋肉を刺激することで、全身のバランスが整い、
            しなやかで引き締まった美しい身体へと導いてくれます。</p>
        </div>

        {/* Card 4 */}
        <div className="class-card">
          <h3>体験レッスン受付中</h3>
          <p>各クラスの体験レッスンにご参加いただけます。
            初めての方も大歓迎！お子様連れでのご参加も、
            どうぞお気軽にお越しください。</p>
        </div>

        
      </div>
    </section>
  );
}

export default Classes;
