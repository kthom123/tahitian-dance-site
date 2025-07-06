import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
        <h2 className="about-heading">
            アヴァエアピ タヒチアンダンス教室へようこそ
        </h2>
        <div className="about-content">
            <img src="/images/about.png" alt="about-pic" className="about-img" />
        </div>
        <p className="about-description">
            アヴァエアピ タヒチアンダンス教室は、2025年4月にプレオープンした、群馬県邑楽町・大泉町を拠点とするタヒチアンダンススクールです。
            「ʻAvae ʻApi（アヴァエアピ）」は、タヒチ語で「新月」を意味します。
            “自分を大切にし、目標を持って日々を大事に生きる”――
            そんな想いを込めて、この教室名を名づけました。
            新しい月のはじまりのように、希望を胸に、一人ひとりが新たな一歩を踏み出せる場所を目指しています。
            タヒチアンダンスは、力強いドラムのリズムとともに、自然や人とのつながりを感じながら、感謝や思いを表現できる踊りです。
            体を動かしながら心を解放し、日々の中で自分自身と向き合う時間を大切にしていきます。
            タヒチアンダンスを通して、自分らしく輝きながら、仲間とともに笑顔あふれる時間を過ごしましょう。
        </p>
    </section>
  );
}

export default About;
