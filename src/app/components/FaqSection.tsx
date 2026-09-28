"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import Reveal from "./ui/Reveal";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What is Git Pilot?",
    answer:
      "Git Pilot is an AI-powered assistant in your command line. It helps you run complex Git commands and write conventional commit messages using natural language.",
  },
  {
    question: "Does Git Pilot require internet access?",
    answer:
      "Yes. Git Pilot securely sends your request (like a code diff or a prompt) to a dedicated API that uses Google's Gemini models. Your code is never stored, and the API is only used to generate the suggestion.",
  },
  {
    question: "How do I install it?",
    answer:
      "You'll need Node.js (v20+) and Git installed. Then, simply run `npm install -g @abhaydesu/git-pilot` in your terminal to install it globally.",
  },
  {
    question: "Is it free to use?",
    answer:
      "Yes, the tool is completely free for all users. It's published on npm, and the backend API is publicly available for everyone to use.",
  },
  {
    question: "What if I don't like the AI's suggestion?",
    answer:
      "You are always in control. For both `commit` and `branch` commands, you can choose to 'Accept', 'Abort', or 'Edit' the AI's suggestion right in your terminal before any action is taken.",
  },
  {
    question: "What if I make a mistake?",
    answer:
      "We built a magic `git pilot undo` command for that. It analyzes your recent Git history and suggests the safest command to reverse your last major action, like a bad commit or merge.",
  }
];

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <section id="faq" aria-labelledby="faq-heading" className="px-5 pb-32 md:pb-44">
        <div className="mx-auto grid max-w-[1120px] gap-10 border-t border-ink/10 pt-24 md:grid-cols-[1fr_1.35fr] md:pt-32">
          <Reveal>
            <h2
              id="faq-heading"
              className="t-section text-[clamp(2.2rem,4vw,2.75rem)] text-ink md:sticky md:top-28"
            >
              Frequently asked
              <br />
              questions
            </h2>
          </Reveal>

          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="border-b border-ink/10 first:border-t md:first:border-t-0">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="focus-ring group flex w-full items-center gap-4 py-5 text-left text-[17px] font-medium tracking-tight text-ink"
                    >
                      <motion.span
                        aria-hidden
                        initial={false}
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.2, ease: EASE_OUT }}
                        className="select-none text-xl leading-none text-accent"
                      >
                        +
                      </motion.span>
                      <span className="transition-colors duration-150 ease-out-strong group-hover:text-ink/70">
                        {faq.question}
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-xl pb-6 pl-8 text-[16px] leading-relaxed text-ink/60">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
};

export default FaqSection;
