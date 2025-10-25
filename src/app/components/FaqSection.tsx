"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingCorners from "./ui/FlaotingCorners";

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
      "You'll need Node.js (v18+) and Git installed. Then, simply run `npm install -g @abhaydesu/git-pilot` in your terminal to install it globally.",
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
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      // Removed px-6, letting the inner container handle horizontal spacing
      className="relative w-full py-10 border-y border-neutral-800 mt-10"
      aria-labelledby="faq-heading"
    >
      {/* Changed mx-4 to responsive mx-4 md:mx-10 */}
      <div className=" border border-dashed border-neutral-800 mx-4 md:mx-10 py-20 relative">
        <FloatingCorners />
        <div className="max-w-4xl mx-auto px-4"> {/* Added px-4 for small screen gutter */}
          {/* Heading */}
          <div className="text-center mb-12">
            <h2
              id="faq-heading"
              // This is already responsive
              className="font-mono text-3xl md:text-4xl font-extrabold text-neutral-100 tracking-tight"
            >
              Frequently Asked <span className="font-array">Questions</span>
            </h2>
            <p className="mt-3 text-neutral-400 font-mono text-xs sm:text-sm"> {/* Tweaked text size */}
              Common queries about Git Pilot and how it works
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-neutral-800 rounded-xl bg-neutral-900/70 backdrop-blur-sm 
                             overflow-hidden transition-colors duration-200 hover:border-neutral-700"
                >
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-mono 
                                 text-sm md:text-base text-neutral-200" // This is already responsive
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <motion.span
                      initial={false}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-neutral-500 text-xl select-none"
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-5 pb-5 pt-0 text-neutral-400 font-mono text-sm leading-relaxed border-t border-neutral-800/70">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;