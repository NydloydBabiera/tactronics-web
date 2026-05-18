"use client";

import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: "Records-System",
    name: "Records System: Automatic Door Lock with Face Recognition and RFID",
    image: "/records-system.svg",
    pdfPath: "/Record_System_Automated_Door_Lock.pdf",
  },
  {
    id: "crop-forecasting",
    name: "IoT Based Crop Field Forecasting System",
    image: "/crop-forecasting.svg",
    pdfPath: "/Crop-Forecasting.pdf",
  },
  {
    id: "rfid-billing",
    name: "RFID Bill and Coin Acceptor System",
    image: "/rfid-billing.svg",
    pdfPath: "/RFID_Billing.pdf",
  },
  {
    id: "hydroponics-sensor",
    name: "Monitoring the pH and TDS Level with GSM Module in Hydroponics Farming",
    image: "/hydroponics-logo.svg",
    pdfPath: "/Hydroponics-Sensor.pdf",
  },
  {
    id: "dry-rubber-content",
    name: "Dry Rubber Content Determination of Natural Rubber Latex Using Near-Infrared Spectometry (NIRS)",
    image: "/rubber-logo.svg",
    pdfPath: "/Dry-Rubber-Content.pdf",
  },
  {
    id: "pineapple-sugar-level",
    name: "MEASURING SUGAR CONTENT OF DIFFERENT PINEAPPLE VARIETIES USING NEAR-INFRARED SPECTROMETRY (NIRS)",
    image: "/pineaple-logo.svg",
    pdfPath: "/Pineapple-Sugar-Level-Measurement.pdf",
  },
];

type Project = (typeof projects)[number];

const pdfBaseUrl = process.env.NEXT_PUBLIC_PROJECT_PDF_BASE_URL;

function getPdfUrl(path: string) {
  if (!pdfBaseUrl) {
    return path;
  }

  const normalizedBase = pdfBaseUrl.endsWith("/") ? pdfBaseUrl.slice(0, -1) : pdfBaseUrl;
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${normalizedBase}/${normalizedPath}`;
}

export default function ProjectSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="w-full px-2 py-10 sm:px-4 lg:px-0">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-sky-700">
            PROJECTS
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg">
            Click any project widget to open a floating PDF preview and learn more about the design.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              onClick={() => setActiveProject(project)}
              className="group flex flex-col overflow-hidden rounded-4xl border border-sky-300 dark:bg-slate-900/90 p-4 text-left shadow-xl shadow-slate-950/30 transition duration-300 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-sky-300/30 focus:outline-none focus:ring-2"
            >
              <div className="relative mb-4 h-48 overflow-hidden rounded-[1.75rem] bg-sky-300 ring-1 transition">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-lg font-semibold text-sky-700">{project.name}</span>
                <span className="text-sm text-slate-700">
                  Tap to view project overview.
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeProject ? (
        <div className="fixed inset-0 z-50 overflow-auto px-4 py-4 sm:px-6">
          <div className="absolute inset-0 backdrop-blur-sm" />
          <div className="relative mx-auto w-full max-w-6xl max-h-[calc(100vh-2rem)] overflow-hidden rounded-4xl border shadow-2xl shadow-slate-950/40 bg-white">
            <div className="flex flex-col gap-4 border-b bg-sky-700 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-white">Preview</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{activeProject.name}</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="inline-flex items-center justify-center rounded-full border px-4 py-2 text-sm font-medium text-white transition hover:border-sky-300/40 hover:bg-slate-800/90"
              >
                Close
              </button>
            </div>
            <div className="h-[calc(100vh-14rem)] max-h-[calc(100vh-14rem)] w-full bg-white/80 sm:h-[calc(100vh-15rem)] sm:max-h-[calc(100vh-15rem)]">
              <iframe
                src={getPdfUrl(activeProject.pdfPath)}
                title={`${activeProject.name} PDF preview`}
                className="h-full w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
