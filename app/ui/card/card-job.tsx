"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

interface Job {
  name: string;
  description?: string[];
  charge: string;
  period: string;
  href?: any;
}

export default function CardJob(job: Job) {
  const { name, charge, period, description, href } = job;
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const isLinkAvailable = href && href.length > 0;

  return (
    <details
      open={isOpen}
      name="description"
      className="block max-w p-6 bg-background-200 border border-background-300 rounded-lg shadow hover:bg-background-300"
    >
      <summary
        onClick={handleToggle}
        className="flex flex-col md:justify-between cursor-pointer"
      >
        <h1 className="md:text-lg text-2xl text-primary font-semibold">
          {name}
        </h1>
        <h2 className="md:text-sm text-lg font-semibold">{charge}</h2>
      </summary>
      <div className="flex flex-col md:justify-between pb-4">
        <p className="md:text-sm text-lg">{period}</p>
      </div>
      <ul className="ml-4">
        {description?.map((desc: string, i: number) => (
          <li className="md:text-sm text-lg list-disc" key={i}>
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
              className={"md:w-5"}
            />
          </Link>
        </div>
      )}
    </details>
  );
}
