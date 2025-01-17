"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Header = () => {
  const menuBtnRef = useRef();
  const path1 = useRef();
  const path2 = useRef();
  const logoRef = useRef();

  useGSAP(() => {
    let isMenuOpen = false;

    menuBtnRef.current.addEventListener("click", function () {
      if (isMenuOpen) {
        gsap.to(path1.current, {
          attr: { d: "M 0 5 L 25 5" },
        });

        gsap.to(path2.current, {
          attr: { d: "M 0 13 L 25 13" },
        });
        gsap.to(logoRef.current, {
          attr: { fill: "black" },
          delay: 0.6,
        });
        gsap.to("#menu", {
          height: 0,
          opacity: 0,
          duration: 0.3,
          delay: 0.5,
        });
        gsap.to("#menubtn", {
          attr: {
            stroke: "#000",
          },
          delay: 0.6,
        });
       
        gsap.to("#links *", {
          opacity: 0,
          transform: "translateY(40px)",
          duration: 0.2,
          stagger: 0.02,
          ease: "back.in",
        });
        gsap.to("#buttons", {
          background: "#fff",
          delay: 0.7,
        });

        isMenuOpen = false;
      } else {
        gsap.to(path1.current, {
          attr: { d: "M 0 0 L 17 16" },
        });

        gsap.to(path2.current, {
          attr: { d: "M 0 16 L 17 1" },
        });
        gsap.to(logoRef.current, {
          attr: { fill: "white" },
        });
        gsap.to("#menu", {
          height: "55vh",
          opacity: 1,
          duration: 0.3,
          delay: 0.3,
        });
        gsap.to("#menubtn", {
          attr: {
            stroke: "#fff",
          },
        });
       
        gsap.to("#links *", {
          opacity: 1,
          transform: "translateY(0)",
          duration: 0.4,
          delay: 0.3,
          stagger: 0.05,
          ease: "back.in",
        });
        gsap.to("#buttons", {
          background: "transparent"
        });

        isMenuOpen = true;
      }
    });
  });
  return (
    <>
      <div className="flex items-center justify-center h-20 fixed w-full bg-white z-30">
        <div className="flex items-center justify-between w-[90%] md:w-[95%]">
          <svg
            ref={logoRef}
            width="80"
            height="80"
            viewBox="0 0 37 10"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            className="z-10"
          >
            <path d="M0.756 9V0.491999H2.904V9H0.756ZM2.46 9V7.152H6.564V9H2.46ZM11.5696 9.156C10.9136 9.156 10.3096 9.044 9.75759 8.82C9.20559 8.596 8.72159 8.284 8.30559 7.884C7.89759 7.484 7.57759 7.016 7.34559 6.48C7.11359 5.936 6.99759 5.352 6.99759 4.728C6.99759 4.104 7.10959 3.528 7.33359 3C7.56559 2.464 7.88559 1.996 8.29359 1.596C8.70159 1.196 9.18159 0.888 9.73359 0.672C10.2856 0.447999 10.8896 0.335999 11.5456 0.335999C12.2016 0.335999 12.8056 0.447999 13.3576 0.672C13.9096 0.888 14.3896 1.196 14.7976 1.596C15.2056 1.996 15.5216 2.464 15.7456 3C15.9776 3.536 16.0936 4.116 16.0936 4.74C16.0936 5.364 15.9776 5.944 15.7456 6.48C15.5216 7.016 15.2056 7.488 14.7976 7.896C14.3896 8.296 13.9096 8.608 13.3576 8.832C12.8136 9.048 12.2176 9.156 11.5696 9.156ZM11.5456 7.236C12.0256 7.236 12.4416 7.132 12.7936 6.924C13.1456 6.716 13.4176 6.424 13.6096 6.048C13.8016 5.672 13.8976 5.232 13.8976 4.728C13.8976 4.36 13.8416 4.024 13.7296 3.72C13.6256 3.416 13.4696 3.156 13.2616 2.94C13.0536 2.716 12.8056 2.544 12.5176 2.424C12.2296 2.304 11.9056 2.244 11.5456 2.244C11.0656 2.244 10.6496 2.348 10.2976 2.556C9.94559 2.756 9.67359 3.044 9.48159 3.42C9.28959 3.796 9.19359 4.232 9.19359 4.728C9.19359 5.112 9.24559 5.46 9.34959 5.772C9.46159 6.076 9.62159 6.34 9.82959 6.564C10.0376 6.78 10.2856 6.948 10.5736 7.068C10.8616 7.18 11.1856 7.236 11.5456 7.236ZM21.6528 9.132C21.0048 9.132 20.4048 9.024 19.8528 8.808C19.3088 8.584 18.8288 8.272 18.4128 7.872C18.0048 7.472 17.6848 7.008 17.4528 6.48C17.2288 5.944 17.1168 5.364 17.1168 4.74C17.1168 4.108 17.2328 3.528 17.4648 3C17.7048 2.464 18.0368 2 18.4608 1.608C18.8848 1.208 19.3768 0.9 19.9368 0.684C20.5048 0.46 21.1088 0.348 21.7488 0.348C22.5088 0.348 23.1968 0.484 23.8128 0.756C24.4288 1.02 24.9288 1.388 25.3128 1.86L23.8728 3.3C23.5848 2.956 23.2688 2.7 22.9248 2.532C22.5808 2.356 22.1808 2.268 21.7248 2.268C21.2608 2.268 20.8448 2.372 20.4768 2.58C20.1168 2.78 19.8288 3.064 19.6128 3.432C19.3968 3.8 19.2888 4.232 19.2888 4.728C19.2888 5.224 19.3888 5.66 19.5888 6.036C19.7968 6.412 20.0768 6.704 20.4288 6.912C20.7888 7.12 21.2008 7.224 21.6648 7.224C22.1288 7.224 22.5208 7.136 22.8408 6.96C23.1688 6.784 23.4168 6.528 23.5848 6.192C23.7608 5.856 23.8488 5.456 23.8488 4.992L25.3008 5.928L21.4248 5.832V4.08H26.0088V4.404C26.0088 5.42 25.8248 6.28 25.4568 6.984C25.0888 7.688 24.5768 8.224 23.9208 8.592C23.2728 8.952 22.5168 9.132 21.6528 9.132ZM31.5379 9.156C30.8819 9.156 30.2779 9.044 29.7259 8.82C29.1739 8.596 28.6899 8.284 28.2739 7.884C27.8659 7.484 27.5459 7.016 27.3139 6.48C27.0819 5.936 26.9659 5.352 26.9659 4.728C26.9659 4.104 27.0779 3.528 27.3019 3C27.5339 2.464 27.8539 1.996 28.2619 1.596C28.6699 1.196 29.1499 0.888 29.7019 0.672C30.2539 0.447999 30.8579 0.335999 31.5139 0.335999C32.1699 0.335999 32.7739 0.447999 33.3259 0.672C33.8779 0.888 34.3579 1.196 34.7659 1.596C35.1739 1.996 35.4899 2.464 35.7139 3C35.9459 3.536 36.0619 4.116 36.0619 4.74C36.0619 5.364 35.9459 5.944 35.7139 6.48C35.4899 7.016 35.1739 7.488 34.7659 7.896C34.3579 8.296 33.8779 8.608 33.3259 8.832C32.7819 9.048 32.1859 9.156 31.5379 9.156ZM31.5139 7.236C31.9939 7.236 32.4099 7.132 32.7619 6.924C33.1139 6.716 33.3859 6.424 33.5779 6.048C33.7699 5.672 33.8659 5.232 33.8659 4.728C33.8659 4.36 33.8099 4.024 33.6979 3.72C33.5939 3.416 33.4379 3.156 33.2299 2.94C33.0219 2.716 32.7739 2.544 32.4859 2.424C32.1979 2.304 31.8739 2.244 31.5139 2.244C31.0339 2.244 30.6179 2.348 30.2659 2.556C29.9139 2.756 29.6419 3.044 29.4499 3.42C29.2579 3.796 29.1619 4.232 29.1619 4.728C29.1619 5.112 29.2139 5.46 29.3179 5.772C29.4299 6.076 29.5899 6.34 29.7979 6.564C30.0059 6.78 30.2539 6.948 30.5419 7.068C30.8299 7.18 31.1539 7.236 31.5139 7.236Z"/>
          </svg>

          <div id="buttons" className="flex items-center justify-center w-12 h-12 rounded-full z-10">
            <svg
              ref={menuBtnRef}
              width="22"
              height="16"
              id="menubtn"
              stroke="#000"
              className="cursor-pointer"
            >
              <path ref={path1} d="M 0 5 L 25 5" />
              <path ref={path2} d="M 0 13 L 25 13" />
            </svg>
          </div>

          <div
            id="menu"
            className="w-full h-0 absolute left-0 top-0 bg-[#111] text-white flex items-center justify-center opacity-0"
          >
            <div
              id="links"
              className="flex flex-col items-end justify-end w-[95%] h-[95%] text-[12vw] leading-[13.5vw] md:text-[5vw] md:leading-[6vw] uppercase font-black"
            >
              <Link className="opacity-0 translate-y-10" href={"/docsupload"}>
                Upload
              </Link>
              <Link className="opacity-0 translate-y-10" href={"/dashboard"}>
                Dashboard
              </Link>
              <Link className="opacity-0 translate-y-10" href={"/signin"}>
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
