"use client";
import Image from "next/image";
import { motion } from "framer-motion";

type TranslatorProps = {
  fullName: string;
  shortName: string;
  imageSrc: string;
  href: string;
  description: string;
  specializations?: string[];
  index?: number;
};

export default function Translator({
  fullName,
  imageSrc,
  href,
  description,
  specializations = [],
  index = 0,
}: TranslatorProps) {
  return (
    <motion.div
      className="group relative bg-base-100 rounded-2xl border border-base-300 p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500"
      style={{ marginTop: index > 0 ? "-1rem" : 0, zIndex: 10 - index }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="relative shrink-0">
          <Image
            src={imageSrc}
            alt={fullName}
            width={120}
            height={120}
            className="rounded-xl w-24 h-24 md:w-28 md:h-28 object-cover"
          />
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#0077b5] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
            aria-label={`${fullName} on LinkedIn`}
          >
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <div className="flex-1">
          <h3 className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold mb-2 text-base-content">
            {fullName}
          </h3>
          <p className="text-base-content/70 text-base leading-relaxed mb-4">
            {description}
          </p>
          {specializations.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {specializations.map((spec) => (
                <span
                  key={spec}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-warm/10 text-warm-dark border border-warm/20"
                >
                  {spec}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
