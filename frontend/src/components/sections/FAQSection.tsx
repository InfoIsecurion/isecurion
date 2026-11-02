"use client";

import { ReactNode, useState } from "react";
import { Animation } from "../../components/ui/Animation";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: ReactNode;
  description: string;
  faqs: FAQItem[];
};

export default function FAQSection({
  title,
  description,
  faqs,
}: FAQSectionProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-[#050B18]">
      <div className="mx-auto max-w-7xl  px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
        {/* FAQ Header */}
        <Animation>
          <div className="text-center">
            <h2 className="mx-auto max-w-[700px] text-3xl font-normal sm:leading-14 text-white sm:text-4xl">
              {title}
            </h2>

            <p className="mx-auto mt-3 max-w-[670px] text-sm leading-7 text-white/65 sm:text-base">
              {description}
            </p>
          </div>
        </Animation>

        {/* FAQ List */}
        <Animation>
          <div className="mx-auto mt-12 max-w-[1020px] space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-md border border-[#162337] bg-[#070E1B]"
                >
                  {/* Question */}
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between text-left cursor-pointer"
                  >
                    <span className="px-4 py-4 text-sm text-white">
                      {faq.question}
                    </span>

                    <span className="flex h-[50px] w-[46px] shrink-0 items-center justify-center cursor-pointer bg-[#171E2A] text-xl font-light text-white">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div
                      id={`faq-answer-${index}`}
                      className="border-t border-[#162337] px-4 py-4"
                    >
                      <p className="text-sm leading-6 text-white/65">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Animation>
      </div>
    </section>
  );
}