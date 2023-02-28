import React from "react";
import styles from "./style";
import Wilks from "./wilks.jsx";
import { SiOpenaigym } from "react-icons/si";
import { useEffect } from "react";
import { useState } from "react";
import TextAnimation from "./animations/TextAnimation";
import styled, { keyframes } from "styled-components";
import "./animations/text-split.css";

function Hero() {
  const [activeButton, setActiveButton] = useState("dots");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };
  return (
    <section class="bg-white dark:bg-gray-800">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          href="#"
          class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <span class="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>{" "}
          <span class="text-sm font-medium">Signup coming soon</span>
          <svg
            class="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          <TextAnimation text="Enter your Powerlifting data" />
        </h1>
        <div class="text-center mb-8 lg:mb-16">
          <p class="mb-4 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-white-400">
            Calculate your DOTS/WILKS/1RM with this calculator
          </p>
          <div class="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
            <button
              type="button"
              onClick={() => handleButtonClick("wilks")}
              class="rounded-l inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              Wilks
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick("dots")}
              class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              Dots
            </button>
            <button
              type="button"
              onClick={() => handleButtonClick("1rm")}
              class="rounded-r inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out"
            >
              1RM
            </button>
          </div>
          <div class="flex flex-col items-center">
            {activeButton === "wilks" && <Wilks />}
            {activeButton === "dots" && <Wilks />}
            {activeButton === "1rm" && <Wilks />}
          </div>
        </div>
        <div class="flex items-center justify-center">
          <div
            class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          ></div>
        </div>
        <div class="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span class="font-semibold text-gray-400 uppercase">
            CALCULATE NOW
          </span>

          <div className="container-form"></div>
        </div>
      </div>
    </section>
  );
  {
    /* <p className={`${styles.paragraph} ml-2`}>
              <TextAnimation text='Enter your data to calculator your DOTS/WILKS score'/>
            </p> */
  }
}

export default Hero;
