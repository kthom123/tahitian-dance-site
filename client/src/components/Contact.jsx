import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [status, setStatus] = useState("送信");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;

    // Custom Japanese validation
    if (!name.value.trim()) {
      alert("お名前を入力してください。");
      name.focus();
      return;
    }
    if (!email.value.trim()) {
      alert("メールアドレスを入力してください。");
      email.focus();
      return;
    }
    if (!message.value.trim()) {
      alert("メッセージを入力してください。");
      message.focus();
      return;
    }

    setStatus("送信中…");

    const details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    try {
      const response = await fetch("http://localhost:8000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(details),
      });

      setStatus("送信");

      if (response.ok) {
        alert("メッセージが送信されました。ありがとうございます！");
        e.target.reset();
      } else {
        alert("送信に失敗しました。後でもう一度お試しください。");
      }
    } catch (error) {
      console.error(error);
      setStatus("送信");
      alert("送信中にエラーが発生しました。後でもう一度お試しください。");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">お問合せ</h2>
      <p className="contact-description">
        ご質問や体験レッスンのご希望がございましたら、
        <br />
        下記フォームよりご連絡ください。
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="お名前" />
        <input type="email" name="email" placeholder="メールアドレス" />
        <textarea name="message" placeholder="メッセージ内容" rows="5" />
        <button type="submit">{status}</button>
      </form>
    </section>
  );
}

export default Contact;
