import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("送信");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(details),
    });

    setStatus("送信");
    if (response.ok) {
      alert("メッセージが送信されました。ありがとうございます！");
      e.target.reset();
    } else {
      alert("送信に失敗しました。後でもう一度お試しください。");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">お問合せ</h2>
      <p className="contact-description">
        ご質問や体験レッスンのご希望がございましたら、下記フォームよりご連絡ください。
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="お名前" required />
        <input type="email" name="email" placeholder="メールアドレス" required />
        <textarea name="message" placeholder="メッセージ内容" rows="5" required />
        <button type="submit">{status}</button>
      </form>
    </section>
  );
}

export default Contact;
