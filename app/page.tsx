"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Users, FlaskConical } from "lucide-react";

const VIDEOS: string[] = ["/background/bg0.mp4", "/background/bg1.mp4"];

export default function Home() {
  const [index, setIndex] = useState(0);

  return (
    <div className="relative min-h-screen overflow-hidden font-sans text-white">
      {/* Page shell - header will sit inside the hero so it appears over the video */}

      <main className="relative z-10">
        {/* Hero: video confined to top 100vh (full-bleed) */}
        <section className="relative h-screen w-full">
          {/* Background video (clearer via CSS filters) - plays only in hero */}
          <video
            key={VIDEOS[index]}
            className="absolute inset-0 w-full h-full object-cover filter brightness-105 contrast-105 saturate-115"
            src={VIDEOS[index]}
            autoPlay
            muted
            playsInline
            onEnded={() => setIndex((i) => (i + 1) % VIDEOS.length)}
          />

          {/* Subtle overlay to keep video crisp but readable */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/40" />

          {/* Header (navbar) sits inside hero and above the video */}
          <header className="relative z-20 max-w-7xl mx-auto p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/icons/logo.jpeg" alt="Logo" width={48} height={48} />
              <h1 className="text-2xl font-semibold">
                Project Recruitment Portal
              </h1>
            </div>
            <nav className="flex items-center gap-4">
              <Link
                href="/auth/login"
                className="text-sm font-medium hover:underline"
                aria-label="Login"
              >
                Login
              </Link>
              <Link
                href="/auth/register"
                className="text-sm font-medium hover:underline"
                aria-label="Register"
              >
                Register
              </Link>
            </nav>
          </header>

          {/* Centered content container inside hero */}
          <div className="relative z-10 max-w-7xl mx-auto h-full grid md:grid-cols-2 gap-8 items-center px-6">
            <div className="space-y-6">
              <h2 className="text-5xl font-extrabold leading-tight">
                IITK Project Recruitment Portal
              </h2>
              <p className="text-lg text-white/85 max-w-xl">
                Explore curated projects, follow mentors, and save ideas. A
                visually rich place to discover academic projects — laid out
                like a creative board.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 items-center ">
                {/* Student */}
                <Link href="/auth/register?role=student" legacyBehavior>
                  <a
                    aria-label="Register as Student"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300"
                  >
                    <GraduationCap className="w-5 h-5" />
                    <span>Student</span>
                  </a>
                </Link>

                {/* Mentor */}
                <Link href="/auth/register?role=mentor" legacyBehavior>
                  <a
                    aria-label="Register as Mentor"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-300"
                  >
                    <Users className="w-5 h-5" />
                    <span>Mentor</span>
                  </a>
                </Link>

                {/* Professor */}
                <Link href="/auth/register?role=professor" legacyBehavior>
                  <a
                    aria-label="Register as Professor"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-br from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-300"
                  >
                    <FlaskConical className="w-5 h-5" />
                    <span>Professor</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Below-the-hero: separate light-themed content area */}
        <section className="bg-gray-50 text-gray-900">
          <div className="max-w-7xl mx-auto p-6 grid gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">
                Popular projects
              </h3>

              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <article
                    key={i}
                    className="inline-block w-full mb-6 break-inside-avoid rounded-xl overflow-hidden bg-white shadow-sm border border-gray-200"
                  >
                    <div className="h-44 w-full bg-gradient-to-br from-rose-400 via-indigo-500 to-cyan-400 flex items-end p-4">
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Project title {i}
                        </h4>
                        <p className="text-sm text-gray-700 mt-1">
                          By Mentor {i} • AI, ML
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700">
                        Short project description that teases the idea and
                        invites clicks.
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          3 requests • 12 submissions
                        </div>
                        <Link
                          href={`/student/projects/${i}`}
                          className="text-sm text-rose-600"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                © {new Date().getFullYear()} Student Portal
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIndex((i) => (i + 1) % VIDEOS.length)}
                  className="px-3 py-2 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                  Switch Background
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
