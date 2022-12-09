import React from "react";
import styles from "./style";
import { SiOpenaigym } from "react-icons/si";
import {useEffect} from 'react';
import TextAnimation from "./animations/TextAnimation";
import styled, { keyframes } from "styled-components";
import './animations/text-split.css'


function Hero() {
  return (
    <div className={`${styles.boxWidth}`}>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <div
            id="hero-intro"
            className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
          >
            <SiOpenaigym
              class="animate-pulse"
              color="white"
              size="3rem"
            />
            <p className={`${styles.paragraph} ml-2`}>
              <TextAnimation text='Enter your data to calculator your DOTS/WILKS score'/>
            </p>
          </div>

          <div className="flex flex-row justify-between items-center w-full">
            <h1 className="flex-1 font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
              Powerlifting <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Calculator</span>{" "}
            </h1>
            <div className="ss:flex hidden md:mr-4 mr-0"></div>
          </div>
          <span className='text-white md:mr-4'>
            
          </span>
        </div>

      </section>
    </div>
  );
}

export default Hero;
