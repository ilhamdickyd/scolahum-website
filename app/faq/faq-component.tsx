"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Search,
  BookOpen,
  School,
  Users,
  Gift,
} from "lucide-react";

// Define
interface FAQ {
  question: string;
  answer: string;
}

interface CategoryData {
  category: string;
  icon: React.ReactNode;
  questions: FAQ[];
}

// Updated FAQ data structure
const faqData: CategoryData[] = [
  {
    category: "Program Information",
    icon: <BookOpen size={24} className="text-white" />,
    questions: [
      {
        question: "What is SCOLAH-UNAIR Mengajar?",
        answer:
          "SCOLAH-UNAIR Mengajar is a student organization within Airlangga University that focuses on education and humanitarian efforts. SCOLAH stands for School of Airlangga in Harmony, emphasizing that this movement was born at Airlangga University with the aim of harmonizing the value of Excellence With Morality to create harmony between education and humanitarian work.",
      },
      {
        question: "When was SCOLAH-UNAIR Mengajar established?",
        answer:
          "SCOLAH-UNAIR Mengajar was founded on December 24, 2011, by Royan Dawud Alidan, a Biomedical Engineering student who was moved by the fact that many schools in East Java had minimal infrastructure. On October 17, 2012, SCOLAH officially became a Semi-Autonomous Body (BSO) under the supervision of BEM UNAIR, and in 2014 it attained the status of an Autonomous Body with the authority to regulate all its activities independently.",
      },
      {
        question: "What are the vision and mission of SCOLAH-UNAIR Mengajar?",
        answer:
          "Vision: To become a role model for student movements and a platform to synergize all Airlangga University academic community members who care about primary education. Mission: (1) Form a movement that cares about primary education, (2) Facilitate and coordinate Airlangga University academic community members who want to dedicate themselves to primary education, (3) Create synergy between SCOLAH-UNAIR Mengajar, Airlangga University, and the government in the field of primary education, (4) Build character in Airlangga University students who love their alma mater through the SCOLAH-UNAIR Mengajar movement.",
      },
    ],
  },
  {
    category: "Membership",
    icon: <School size={24} className="text-white" />,
    questions: [
      {
        question: "How can I join SCOLAH-UNAIR Mengajar?",
        answer:
          "In one full period, we open recruitment twice. The first recruitment is for SCOLAH-UNAIR Mengajar staff, which is intended for students from the two most recent active batches. The second recruitment is for 'Sahabat SCOLAH' (SCOLAH Friends), which is specifically for new students.",
      },
      {
        question:
          "What is the difference between SCOLAH-UNAIR Mengajar Staff and Sahabat SCOLAH?",
        answer:
          "SCOLAH-UNAIR Mengajar Staff positions are only for students from the two most recent batches and run from the beginning of the management for one active period. Meanwhile, Sahabat SCOLAH lasts for approximately half a period and can only be joined by new students.",
      },
      {
        question:
          "Will SCOLAH-UNAIR Mengajar be time-consuming? Can I join other organizations?",
        answer:
          "SCOLAH-UNAIR Mengajar does not limit someone from participating in other organizations. However, it&apos;s important to remember your responsibilities and commitment to complete the work programs in your respective departments. Whether it will be busy or not depends on the timeline of each department, so it&apos;s necessary to carefully understand the contents of the registration booklet.",
      },
      {
        question: "What departments exist in SCOLAH-UNAIR Mengajar?",
        answer:
          "SCOLAH-UNAIR Mengajar has 6 departments: (1) Public Relations (PR), (2) Teaching, (3) Human Resource Development (HRD), (4) Program, (5) Research and Development (RnD), and (6) Sponsorship & Fundraising (SFr).",
      },
    ],
  },
  {
    category: "Programs & Activities",
    icon: <Users size={24} className="text-white" />,
    questions: [
      {
        question: "Is teaching limited to members of the Teaching Department?",
        answer:
          "No. All active staff members have the opportunity to teach, but the main responsibility lies with the Teaching Department.",
      },
      {
        question:
          "How many Learning Houses does UNAIR Mengajar have and where are they located?",
        answer:
          "SCOLAH-UNAIR Mengajar has 2 Learning Houses (Rumah Belajar or Rubel): Panjang Jiwo Learning House and Sukomanunggal Learning House.",
      },
      {
        question: "What are the flagship programs from each department?",
        answer:
          "Public Relations: SCOLFEST, Digital Campaign, Community Safari. Teaching: FOKAS (Foster Siblings Forum), BERLIAN, Literacy Festival. HRD: Up-Train (Upgrading & Training), BOTM (Best of the Month), Bonding. Program: JOTS (Joy On The Street), PELANGI, SCOVIT (Scolah Fun and Visit). RnD: Parenting, CATALYST, Scolah Says. SFr: Olshop (Merchandise), Marketplace, Sharing is Caring (Scholarships and Open Donations).",
      },
    ],
  },
  {
    category: "Partnership & Benefits",
    icon: <Gift size={24} className="text-white" />,
    questions: [
      {
        question:
          "How can organizations collaborate with SCOLAH-UNAIR Mengajar?",
        answer:
          "Organizations or institutions that wish to collaborate with SCOLAH-UNAIR Mengajar can contact us via email at prunairmengajar@gmail.com or WhatsApp at 0889-8901-5827. We frequently collaborate with various organizations both within and outside the campus for educational and social programs.",
      },
      {
        question: "What are the benefits of joining SCOLAH-UNAIR Mengajar?",
        answer:
          "Joining SCOLAH-UNAIR Mengajar provides various benefits, including: valuable experience in community service and education, certificates with Participation Credit Units (SKP), extensive relationships with various organizations, opportunities to develop soft skills and hard skills, and direct contribution to improving the quality of primary education.",
      },
      {
        question: "How can I contact SCOLAH-UNAIR Mengajar?",
        answer:
          "Instagram/Youtube/TikTok: unairmengajar, LinkedIn/Facebook: SCOLAH - UNAIR Mengajar, Email: prunairmengajar@gmail.com, WhatsApp: 0889-8901-5827.",
      },
    ],
  },
];

// Define prop types
interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div className="border-b border-primary-light">
      <button
        className="w-full flex justify-between items-center py-5 px-3 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="text-neutral font-medium text-lg pr-8 font-heading">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-primary"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="py-3 px-5 text-text bg-background rounded-lg mb-4 font-body">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface FaqCategoryProps {
  category: string;
  icon: React.ReactNode;
  questions: FAQ[];
}

const FaqCategory: React.FC<FaqCategoryProps> = ({
  category,
  icon,
  questions,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mb-12">
      <h3 className="text-primary text-2xl font-bold mb-6 flex items-center font-heading">
        <span className="bg-gradient-primary p-2 rounded-full mr-3">
          {icon}
        </span>
        {category}
      </h3>
      <div className="space-y-1 bg-white p-5 rounded-xl shadow-card">
        {questions.map((faq, index) => (
          <AccordionItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

// SVG Icon component for school house
const SchoolHouseIcon = () => (
  <svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M60 10L10 40V110H110V40L60 10Z" fill="#009FE3" />
    <path d="M40 50H80V110H40V50Z" fill="white" />
    <path d="M50 70H70V90H50V70Z" fill="#E6007E" />
    <path d="M30 50H50V70H30V50Z" fill="#E6007E" />
    <path d="M70 50H90V70H70V50Z" fill="#E6007E" />
    <path d="M60 5L5 35V45L60 15L115 45V35L60 5Z" fill="#0077AA" />
  </svg>
);

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredFaqs, setFilteredFaqs] = useState<CategoryData[]>(faqData);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term.trim() === "") {
      setFilteredFaqs(faqData);
      return;
    }

    const filtered = faqData
      .map((category) => {
        const filteredQuestions = category.questions.filter(
          (item) =>
            item.question.toLowerCase().includes(term) ||
            item.answer.toLowerCase().includes(term)
        );

        return {
          ...category,
          questions: filteredQuestions,
        };
      })
      .filter((category) => category.questions.length > 0);

    setFilteredFaqs(filtered);
  };

  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative py-20 px-4 mb-16 bg-gradient-blend overflow-hidden rounded-2xl mx-4 md:mx-12">
        <div className="absolute inset-0 bg-opacity-10 bg-white opacity-20">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-30"
              style={{
                width: `${Math.random() * 80 + 20}px`,
                height: `${Math.random() * 80 + 20}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-white p-3 rounded-full shadow-button">
              <HelpCircle size={40} className="text-primary" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-heading">
            <span className="text-white">FREQUENTLY </span>
            <span className="text-accent">ASKED</span>
          </h1>

          <div className="flex justify-center mb-6">
            <SchoolHouseIcon />
          </div>

          <h2 className="text-accent text-2xl md:text-4xl italic font-semibold font-heading">
            questions<span className="text-white">.</span>
          </h2>

          <p className="text-white max-w-2xl mx-auto mt-6 font-medium font-body">
            Quick answers to questions you may have about SCOLAH-UNAIR Mengajar.
            Can&apos;t find what you&apos;re looking for? Feel free to contact
            us directly.
          </p>

          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a question..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full p-4 pl-12 pr-10 rounded-xl bg-white/80 border border-text-light text-text focus:outline-none focus:border-primary shadow-card backdrop-blur-sm font-body"
              />
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary"
                size={20}
              />
              {searchTerm && (
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setFilteredFaqs(faqData);
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary-dark"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="container mx-auto px-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow-card">
            <HelpCircle size={60} className="text-primary mx-auto mb-4" />
            <h3 className="text-xl text-neutral mb-2 font-heading font-semibold">
              No matching questions found
            </h3>
            <p className="text-text-light font-body">
              Try a different search term or browse all categories below
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setFilteredFaqs(faqData);
              }}
              className="mt-4 px-6 py-2 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors shadow-button font-heading"
            >
              Show all FAQs
            </button>
          </div>
        ) : (
          <>
            {filteredFaqs.map((category, index) => (
              <FaqCategory
                key={index}
                category={category.category}
                icon={category.icon}
                questions={category.questions}
              />
            ))}
          </>
        )}

        {/* Contact Section */}
        <div className="mt-16 text-center bg-gradient-accent p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-4 font-heading">
            Still have questions?
          </h3>
          <p className="text-white mb-6 font-body">
            If you couldn&apos;t find the answer to your question, feel free to
            reach out to us directly. We&apos;ll wait for your questions!
          </p>
          <a
            href={`https://wa.me/6289525378418?text=${encodeURIComponent(
              "Halo kak saya ingin bertanya tentang SCOLAH-UNAIR Mengajar perihal: "
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-accent px-8 py-3 rounded-xl hover:bg-primary hover:text-white transition-colors font-medium shadow-button border border-accent"
          >
            Contact Us
          </a>
        </div>
      </div>
    </main>
  );
}
