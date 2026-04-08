"use client";

import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showUnread, setShowUnread] = useState(true);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  function togglePanel() {
    setIsOpen((prev) => {
      if (!prev) setShowUnread(false);
      return !prev;
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    data.set("form-name", "chat");
    try {
      const params = new URLSearchParams();
      data.forEach((value, key) => {
        params.append(key, String(value));
      });
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      setSubmitting(false);
      setSubmitted(true);
    } catch {
      setSubmitting(false);
      alert("Something went wrong — please email info@bridgepcb.com directly.");
    }
  }

  return (
    <>
      <style>{`
        #chat-widget {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 9999;
          font-family: var(--font-sans), ui-sans-serif, system-ui, sans-serif;
        }
        #chat-bubble {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #e8b84b 0%, #c8963c 100%);
          box-shadow: 0 4px 20px rgba(212,168,83,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease;
          border: none;
          outline: none;
        }
        #chat-bubble:hover {
          transform: scale(1.08);
          box-shadow: 0 6px 28px rgba(212,168,83,0.60);
        }
        #chat-unread {
          position: absolute;
          top: -3px;
          right: -3px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #ef4444;
          border: 2px solid #09090b;
          font-size: 10px;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        #chat-panel {
          position: absolute;
          bottom: 70px;
          right: 0;
          width: 340px;
          border-radius: 20px;
          background: #111113;
          border: 1px solid rgba(212,168,83,0.15);
          box-shadow: 0 20px 60px rgba(0,0,0,.6), 0 0 40px rgba(212,168,83,0.08);
          overflow: hidden;
          transform-origin: bottom right;
          transform: scale(.92) translateY(12px);
          opacity: 0;
          pointer-events: none;
          transition: transform .25s cubic-bezier(.34,1.56,.64,1), opacity .2s ease;
        }
        #chat-panel.open {
          transform: scale(1) translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        .chat-header {
          background: linear-gradient(to right, #1e1608, #2a1f08);
          padding: 16px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(212,168,83,0.12);
        }
        .chat-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(212,168,83,0.2);
          border: 1px solid rgba(212,168,83,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-size: 15px;
          color: #d4a853;
          flex-shrink: 0;
        }
        .chat-online-dot {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #22c55e;
          border: 2px solid #1e1608;
          position: absolute;
          bottom: 1px;
          right: 1px;
        }
        .chat-body {
          padding: 16px 18px 0;
          max-height: 320px;
          overflow-y: auto;
        }
        .chat-bubble-msg {
          background: #1c1c20;
          border-radius: 14px 14px 14px 4px;
          padding: 10px 13px;
          font-size: 13.5px;
          color: #a1a1aa;
          line-height: 1.5;
          margin-bottom: 8px;
          max-width: 90%;
          border: 1px solid rgba(212,168,83,0.06);
        }
        .chat-time {
          font-size: 11px;
          color: #52525b;
          margin-bottom: 14px;
          font-family: var(--font-mono), monospace;
        }
        .chat-form {
          padding: 12px 18px 18px;
        }
        .chat-form input,
        .chat-form textarea {
          width: 100%;
          border: 1.5px solid #27272a;
          border-radius: 10px;
          padding: 9px 12px;
          font-size: 13px;
          font-family: inherit;
          color: #f4f4f5;
          background: #0d0d10;
          margin-bottom: 8px;
          transition: border-color .15s, box-shadow .15s;
          outline: none;
          box-sizing: border-box;
        }
        .chat-form input::placeholder,
        .chat-form textarea::placeholder {
          color: #52525b;
        }
        .chat-form input:focus,
        .chat-form textarea:focus {
          border-color: rgba(212,168,83,0.45);
          box-shadow: 0 0 0 3px rgba(212,168,83,0.10);
        }
        .chat-form textarea {
          resize: none;
          height: 72px;
        }
        .chat-send-btn {
          width: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #e8b84b 0%, #c8963c 100%);
          color: #09090b;
          font-weight: 700;
          font-size: 14px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(212,168,83,0.32);
          transition: opacity .2s, transform .15s, box-shadow .2s;
        }
        .chat-send-btn:hover {
          opacity: .92;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(212,168,83,0.45);
        }
        .chat-send-btn:disabled {
          opacity: .6;
          cursor: not-allowed;
          transform: none;
        }
        .chat-success {
          padding: 28px 18px;
          text-align: center;
        }
        .chat-success-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(34,197,94,0.10);
          border: 1px solid rgba(34,197,94,0.25);
          margin: 0 auto 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <div id="chat-widget" ref={widgetRef}>
        {/* Unread badge */}
        {showUnread && !isOpen && (
          <div id="chat-unread">1</div>
        )}

        {/* Chat panel */}
        <div
          id="chat-panel"
          className={isOpen ? "open" : ""}
          role="dialog"
          aria-label="Live chat"
        >
          {/* Header */}
          <div className="chat-header">
            <div style={{ position: "relative" }}>
              <div className="chat-avatar">B</div>
              <div className="chat-online-dot"></div>
            </div>
            <div>
              <div style={{ fontWeight: 700, color: "#f4f4f5", fontSize: "14px" }}>Bridge PCB</div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(212,168,83,0.75)",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#22c55e",
                    display: "inline-block",
                  }}
                ></span>
                Online now · typically replies in minutes
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="chat-body">
            <div className="chat-bubble-msg">
              Hi there! 👋 Have a PCB or PCBA project in mind?
            </div>
            <div className="chat-bubble-msg">
              Drop your details below and we&apos;ll get back to you fast — usually within the
              hour during business hours.
            </div>
            <div className="chat-time">Bridge PCB · just now</div>
          </div>

          {/* Form */}
          <div className="chat-form">
            {submitted ? (
              <div className="chat-success">
                <div className="chat-success-icon">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#22c55e"
                    strokeWidth="2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div style={{ fontWeight: 700, color: "#f4f4f5", fontSize: "15px" }}>
                  Message sent!
                </div>
                <div style={{ fontSize: "13px", color: "#71717a", marginTop: "4px" }}>
                  We&apos;ll reply to your email shortly.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <input type="hidden" name="form-name" value="chat" />
                <p style={{ display: "none" }}>
                  <input name="bot-field" />
                </p>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  required
                  autoComplete="name"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  required
                  autoComplete="email"
                />
                <textarea
                  name="message"
                  placeholder="What are you working on? (board type, layers, quantity...)"
                  required
                ></textarea>
                <button type="submit" className="chat-send-btn" disabled={submitting}>
                  {submitting ? "Sending…" : "Send message →"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bubble toggle button */}
        <button
          id="chat-bubble"
          aria-label="Open live chat"
          aria-expanded={isOpen}
          onClick={togglePanel}
        >
          {isOpen ? (
            <svg
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#09090b"
              strokeWidth="2.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#09090b"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
}
