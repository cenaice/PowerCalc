import React from "react";
import styled, { keyframes } from "styled-components";

const FadeInText = ({ text }) => {
  return (
    <div className="text-slate-500 dark:text-slate-400 mt-2">
      <p>{addAnimation(text)}</p>
    </div>
  );
};

const addAnimation = (text) => {
  const ANIMATION_DELAY = 20;

  // The below turns a string into an array of characters and replaces empty spaces with &nbsp; (i.e. 'a b' --> ['a', <>&nbsp;</>, 'b'])
  const allChars = [...text].map((char) => (char === " " ? <>&nbsp;</> : char));

  return allChars.map((char, i) => {
    return (
      <span
        key={i}
        className="char"
        style={{ animationDelay: `${ANIMATION_DELAY * i}ms` }}
      >
        {char}
      </span>
    );
  });
};

export default FadeInText;

// export default function TextAnimation() {
//   return <Wrapper>Calculator</Wrapper>;
// }

// const animation = keyframes`
//     0% { opacity: 0; transform: translateY(-100px) dkewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px); }
//     25% { opacity: 1; transform: translateY(0px) dkewY(10deg) skewX(0deg) rotateZ(0deg); filter:blur(0px); }
//     75% { opacity: 1; transform: translateY(0px) dkewY(10deg) skewX(0deg) rotateZ(0deg); filter:blur(0px); }
//     100% { opacity: 0; transform: translateY(-100px) dkewY(10deg) skewX(10deg) rotateZ(30deg); filter:blur(10px); }
// `;

// const Wrapper = styled.span`
//   display: inline-block;
//   opacity: 0;
//   animation-name: ${animation};
//   animation-duration: 6s;
//   animation-fill-mode: forwards;
//   animation-iteration-count: infinite;
// `;
