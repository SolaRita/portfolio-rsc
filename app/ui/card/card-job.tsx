"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface Job {
  name: string;
  description?: string[];
  charge: string;
  period: string;
  href?: string;
}

export default function CardJob(job: Job) {
  const { name, charge, period, description, href } = job;
  const [accordionOpen, setAccordionOpen] = useState(false);

  const handleAccordion = () => {
    setAccordionOpen(!accordionOpen);
  };
  const isLinkAvailable = href && href.length > 0;

  return (
    <article
      className={`block max-w p-6 bg-background-200 border border-background-300 rounded-lg shadow transition-all duration-300 hover:bg-background-300 ${
        accordionOpen ? "bg-background-300" : "bg-background-200"
      }`}
    >
      <button
        onClick={handleAccordion}
        className="flex flex-col cursor-pointer w-full"
      >
        <div className="flex justify-between pb-4 w-full">
          <h1 className="md:text-lg text-2xl text-primary font-semibold">
            {name}
          </h1>
          <svg
            className="fill-primary-soft shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen ? "rotate-180" : ""
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen ? "rotate-180" : ""
              }`}
            />
          </svg>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between items-start pb-4 w-full">
          <h2 className="md:text-sm text-lg text-body font-semibold mb-2 md:mb-0">
            {charge}
          </h2>
          <p className="md:text-sm text-lg text-body">{period}</p>
        </div>
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
          accordionOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="ml-5">
          {description?.map((desc: string, i: number) => (
            <li className="md:text-sm text-lg list-disc mb-2 text-body" key={i}>
              {desc}
            </li>
          ))}
        </ul>
        {isLinkAvailable && (
          <div className="grid justify-items-end">
            <Link key={name} href={href} target="_blank">
              <Image
                src={`/icons/open.svg`}
                alt={name}
                width={45}
                height={45}
                className="md:w-5"
              />
            </Link>
          </div>
        )}
      </div>
    </article>
  );
}
