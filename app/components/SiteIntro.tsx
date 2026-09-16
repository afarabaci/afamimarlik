"use client";

import { useEffect, useState } from "react";

const letters = "MİMARLIK".split("");

export default function SiteIntro() {
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFinished(true), 3500);
    return () => clearTimeout(timer);
  }, []);

  if (finished) return null;

  return (
    <div className="site-intro">
      <div className="intro-logo-wrap">

        <svg
          className="intro-signature"
          viewBox="0 0 2172 724"
          aria-hidden="true"
        >
          <defs>

            {/* 1 - Büyük A */}
            <mask id="intro-mask-1">
              <rect width="2172" height="724" fill="black" />

              <path
                className="intro-mask-path intro-mask-1"
                pathLength="1"
                d="
                  M 315 665
                  C 500 485 720 265 960 60
                  C 905 205 825 435 760 665
                "
              />
            </mask>

            {/* 2 - f harfinin ana gövdesi */}
            <mask id="intro-mask-2a">
              <rect width="2172" height="724" fill="black" />
              <rect className="intro-reveal-2a" x="0" y="0" width="2172" height="724" fill="white" />
            </mask>

            <mask id="intro-mask-2b">
              <rect width="2172" height="724" fill="black" />
              <rect className="intro-reveal-2b" x="0" y="0" width="2172" height="724" fill="white" />
            </mask>

            {/* 3 - Soldan gelen uzun çizgi */}
            <mask
              id="intro-mask-3"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="2172"
              height="724"
            >
              <rect width="2172" height="724" fill="black" />
              <rect
                className="intro-reveal-3"
                x="0"
                y="0"
                width="2172"
                height="724"
                fill="white"
              />
            </mask>

            {/* 4 - Son kıvrım + sağ uzun çizgi */}
            <mask
              id="intro-mask-4"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="2172"
              height="724"
            >
              <rect width="2172" height="724" fill="black" />
              <rect
                className="intro-reveal-4"
                x="0"
                y="0"
                width="2172"
                height="724"
                fill="white"
              />
            </mask>

          </defs>

          <image
            href="/intro/1.svg"
            width="2172"
            height="724"
            mask="url(#intro-mask-1)"
          />

          <image
            href="/intro/2a.svg"
            width="2172"
            height="724"
            mask="url(#intro-mask-2a)"
          />

          <image
            href="/intro/2b.svg"
            width="2172"
            height="724"
            mask="url(#intro-mask-2b)"
          />

          <image
            href="/intro/3.svg"
            width="2172"
            height="724"
            mask="url(#intro-mask-3)"
          />

          <image
            href="/intro/4.svg"
            width="2172"
            height="724"
            mask="url(#intro-mask-4)"
          />
        </svg>

        <div className="intro-architecture">
          {letters.map((letter, index) => (
            <span
              key={index}
              style={{ animationDelay: `${1.58 + index * .06}s` }}
            >
              {letter}
            </span>
          ))}

          <i className="intro-caret" />
        </div>

      </div>
    </div>
  );
}