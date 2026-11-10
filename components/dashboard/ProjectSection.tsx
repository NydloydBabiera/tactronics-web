"use client";

import Image from "next/image";

const projects = [
  {
    id: "Records-System",
    name: "Records System: Automatic Door Lock with Face Recognition and RFID",
    image: "/records-system.svg",
    documentUrl: "https://docs.google.com/document/d/14aXc86kdadpvQGN_z77XkhanPBw-EjgWO5GciGwXu7o/edit?usp=sharing",
  },
  {
    id: "crop-forecasting",
    name: "IoT Based Crop Field Forecasting System",
    image: "/crop-forecasting.svg",
    documentUrl: "https://docs.google.com/document/d/1fZcMsOsZKVqv41t5rXSWci9_7IHdmSXG0ye4F3Q5J3c/edit?usp=sharing",
  },
  {
    id: "rfid-billing",
    name: "RFID Bill and Coin Acceptor System",
    image: "/rfid-billing.svg",
    documentUrl: "https://docs.google.com/document/d/189RRoU6yrQjwpca56wbPL_AcyzPLk7MYBhrjwAattDs/edit?usp=sharing",
  },
  {
    id: "hydroponics-sensor",
    name: "Monitoring the pH and TDS Level with GSM Module in Hydroponics Farming",
    image: "/hydroponics-logo.svg",
    documentUrl: "https://docs.google.com/document/d/1gfg9AAplMT1v9J0XSE0hSQpOB7UE8NPydgW7NiJF4ME/edit?usp=sharing",
  },
  {
    id: "dry-rubber-content",
    name: "Dry Rubber Content Determination of Natural Rubber Latex Using Near-Infrared Spectometry (NIRS)",
    image: "/rubber-logo.svg",
    documentUrl: "https://docs.google.com/document/d/1HGJ2xVxesJZ1ZB8zxL9FOiXIs_iXZtJEl9KeBj2e8JE/edit?usp=sharing",
  },
  {
    id: "pineapple-sugar-level",
    name: "MEASURING SUGAR CONTENT OF DIFFERENT PINEAPPLE VARIETIES USING NEAR-INFRARED SPECTROMETRY (NIRS)",
    image: "/pineaple-logo.svg",
    documentUrl: "https://docs.google.com/document/d/1DB0texPpCITQL-FDM65-AziNMXGMvTbeuaI7mTS1zws/edit?usp=sharing",
  },
];

export default function ProjectSection() {
  return (
    <div className="w-full px-2 py-10 sm:px-4 lg:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <p className="section-kicker">{"// SELECTED WORK"}</p>
          <h2 className="section-heading mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
            Systems we&apos;ve engineered
          </h2>
          <p className="muted-copy mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Open any project brief in Google Docs to learn more about the design.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.documentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group flex flex-col overflow-hidden rounded-[1.5rem] p-4 text-left transition duration-300 hover:-translate-y-1 focus:outline-none focus:ring-2"
            >
              <div className="project-visual relative mb-5 h-48 overflow-hidden rounded-[1.1rem] transition">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="project-title text-lg font-semibold">{project.name}</span>
                <span className="project-meta text-xs uppercase tracking-[0.08em]">
                  View system brief ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
