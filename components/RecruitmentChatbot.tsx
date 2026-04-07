'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

type ChatRole = 'bot' | 'user';

type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
};

const initialMessage =
  "Hi! I'm the UA Talent AI. Looking to join our Lahore outbound team? Let's get you pre-qualified. First, what's your current English fluency level?";

const genericReplies = [
  'Great. Are you comfortable working the US Night Shift (7 PM - 5 AM PKT)?',
  'Understood. How many months of outbound calling or customer support experience do you currently have?',
  'Perfect. Are you able to commute to our DHA / Gulberg office for in-house work?',
  'That sounds promising. Final step: what kind of role are you targeting right now: SDR, appointment setting, or customer support?',
];

const bubbleMotion = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: 'easeOut' } },
};

function SendIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      className="h-4 w-4"
    >
      <path d="m3 20 18-8L3 4v6l12 2-12 2v6Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function RecruitmentChatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'bot-initial',
      role: 'bot',
      text: initialMessage,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);
  const replyIndex = useMemo(() => Math.max(messages.filter((msg) => msg.role === 'user').length - 1, 0), [messages]);

  useEffect(() => {
    if (!chatScrollRef.current) {
      return;
    }

    chatScrollRef.current.scrollTo({
      top: chatScrollRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!isTyping) {
      return;
    }

    const timeout = window.setTimeout(() => {
      const response = genericReplies[Math.min(replyIndex, genericReplies.length - 1)];

      setMessages((current) => [
        ...current,
        {
          id: `bot-${Date.now()}`,
          role: 'bot',
          text: response,
        },
      ]);
      setIsTyping(false);
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [isTyping, replyIndex]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmed = input.trim();

    if (!trimmed || isTyping) {
      return;
    }

    setMessages((current) => [
      ...current,
      {
        id: `user-${Date.now()}`,
        role: 'user',
        text: trimmed,
      },
    ]);
    setInput('');
    setIsTyping(true);
  };

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/50 shadow-2xl backdrop-blur-md">
      <div className="border-b border-slate-800 px-5 py-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-red-500">
              AI Recruitment Chatbot
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white">UA Talent AI Screening</h3>
          </div>
          <div className="rounded-full border border-red-500/20 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-200">
            Live Demo
          </div>
        </div>
      </div>

      <div ref={chatScrollRef} className="h-[26rem] space-y-4 overflow-y-auto px-5 py-5">
        <AnimatePresence initial={false}>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              variants={bubbleMotion}
              initial="hidden"
              animate="show"
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-lg ${
                  message.role === 'user'
                    ? 'rounded-br-md bg-red-600 text-white'
                    : 'rounded-bl-md bg-slate-800 text-slate-200'
                }`}
              >
                {message.text}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        <AnimatePresence>
          {isTyping ? (
            <motion.div
              key="typing"
              variants={bubbleMotion}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -6 }}
              className="flex justify-start"
            >
              <div className="rounded-2xl rounded-bl-md bg-slate-800 px-4 py-3 text-sm text-slate-300 shadow-lg">
                <span className="inline-flex items-center gap-1">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400 [animation-delay:120ms]" />
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-400 [animation-delay:240ms]" />
                </span>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      <form onSubmit={handleSubmit} className="border-t border-slate-800 px-5 py-4">
        <div className="flex items-center gap-3">
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type your answer..."
            className="h-12 flex-1 rounded-xl border border-slate-700 bg-slate-950/80 px-4 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-red-500"
          />
          <button
            type="submit"
            aria-label="Send message"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg hover:shadow-red-500/30 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={!input.trim() || isTyping}
          >
            <SendIcon />
            <span className="hidden sm:inline">Send</span>
          </button>
        </div>
      </form>
    </div>
  );
}
