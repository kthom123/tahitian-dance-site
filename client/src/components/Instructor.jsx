import React from "react";
import "./Instructor.css";

function Instructor() {
  return (
    <section id="instructor" className="instructor-section">
      <h2 className="instructor-heading">講師紹介</h2>
      <div className="instructor-container">
        <div className="instructor-image-group">
            <img src="/images/instructor.png" alt="Instructor" className="instructor-photo" />
        </div>
        <div className="instructor-bio">
          <h3 className="instructor-name">Kei Kizuki</h3>
          <br />
          <p>
            タヒチアンダンスの心揺さぶるドラムビート、人や自然への愛にあふれたタヒチ文化は、目に見えない大切なものに気づかせてくれました。
            現在は東京を拠点に活動していますが、2025年からは故郷・群馬県でも活動をスタートします。
            <br />
            TIARE VAREAU所属、野口みどり先生に師事。数々のショー、イベント出演歴あり。
            千葉大学卒業。教育業、観光業（南太平洋諸島担当）に従事。
            <br />
            <br />
            ≪大会受賞歴≫
            <br />2020年 Heiva i Japan Piti 3位
            <br />2021年 Heiva i Tokyo Piti 優勝
            <br />2022年 Heiva i Tokyo Championship Toru 準優勝
            <br />
            <br />
            ≪資格≫
            <br />温活士
            <br />健康ソムリエ
          </p>
        </div>
      </div>
    </section>
  );
}

export default Instructor;
