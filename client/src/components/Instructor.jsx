import React from "react";
import "./Instructor.css";

function Instructor() {
  return (
    <section className="instructor-section" id="instructor">
      <h2 className="instructor-heading">講師紹介</h2>
      <div className="instructor-container">
        <div className="instructor-image-group">
            <img src="/images/instructor.png" alt="Instructor" className="instructor-photo" />
            <p className="instructor-name">
                木月けい <br></br> 
                Kei Kizuki
            </p>
        </div>
        <div className="instructor-bio">
          <p>
            タヒチアンダンスの心揺さぶるドラムビート、人や自然への愛にあふれたタヒチ文化は、目に見えない大切なものに気づかせてくれました。
            現在は東京を拠点に活動していますが、2025年からは故郷・群馬県でも活動をスタートします。
            <br />
            千葉大学卒業。教育業、観光業（南太平洋諸島担当）での勤務を経て、タヒチアンダンスを学び続けています。
            TIARE VAREAU所属、野口みどり先生に師事。数々のショー、イベント出演歴あり。
            <br />
            ≪大会受賞歴≫
            ・2020年 Heiva i Japan Piti 3位
            ・2021年 Heiva i Tokyo Piti 優勝
            ・2022年 Heiva i Tokyo Championship Toru 準優勝
            <br />
            ≪資格≫
            ・温活士
            ・健康ソムリエ
          </p>
        </div>
      </div>
    </section>
  );
}

export default Instructor;
