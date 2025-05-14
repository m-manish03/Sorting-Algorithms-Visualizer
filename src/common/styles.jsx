import styled, { keyframes } from "styled-components";

export const ArrayHolder = styled.div`
  display: flex;
  height: 175px;
  align-items: center;
  padding: 15px;
  overflow: auto;
  
  @media (max-width: 768px) {
    height: 150px;
    padding: 10px;
  }
  
  @media (max-width: 480px) {
    height: 120px;
    padding: 5px;
  }
`;

export const ArrayItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  box-shadow: 0 5px 30px 0 rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  flex-shrink: 0;
  font-size: 16px;
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    font-size: 12px;
  }
`;

export const swapAnimation = (distance, swapColor) => keyframes`
  0%{
    background-color: ${swapColor};
  }
  10%{
    transform: translate(0px, 0px);
    background-color: ${swapColor};
  }
  30% {
    transform: translate(0px, -50px);
    background-color: ${swapColor};
  }
  70% {
    transform: translate(-${distance * 50}px, -50px);
    background-color: ${swapColor};
  }
  99% {
    transform: translate(-${distance * 50}px, 0px);
    background-color: ${swapColor};
  }
  100%{
    transform: translate(-${distance * 50}px, 0px);
  }
  
  @media (max-width: 768px) {
    70% {
      transform: translate(-${distance * 40}px, -40px);
    }
    99%, 100% {
      transform: translate(-${distance * 40}px, 0px);
    }
  }
  
  @media (max-width: 480px) {
    70% {
      transform: translate(-${distance * 35}px, -35px);
    }
    99%, 100% {
      transform: translate(-${distance * 35}px, 0px);
    }
  }
`;

export const moveAnimation = () => keyframes`
  0%{
    transform: translate(0px, 0px);
  }
  100%{
    transform: translate(50px, 0px);
  }
  
  @media (max-width: 768px) {
    100%{
      transform: translate(40px, 0px);
    }
  }
  
  @media (max-width: 480px) {
    100%{
      transform: translate(35px, 0px);
    }
  }
`;

export const destinationAnimation = (distance, swapColor) => keyframes`
  0%{
    background-color: ${swapColor};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${swapColor};
  }
  60% {
    transform: translate(0px, 50px);
    background-color: ${swapColor};
  }
  80% {
    transform: translate(-${distance * 50}px, 50px);
    background-color: ${swapColor};
  }
  99% {
    transform: translate(-${distance * 50}px, 0px);
    background-color: ${swapColor};
  }
  100%{
    transform: translate(-${distance * 50}px, 0px);
    background-color: none;
  }
  
  @media (max-width: 768px) {
    60% {
      transform: translate(0px, 40px);
    }
    80% {
      transform: translate(-${distance * 40}px, 40px);
    }
    99%, 100% {
      transform: translate(-${distance * 40}px, 0px);
    }
  }
  
  @media (max-width: 480px) {
    60% {
      transform: translate(0px, 35px);
    }
    80% {
      transform: translate(-${distance * 35}px, 35px);
    }
    99%, 100% {
      transform: translate(-${distance * 35}px, 0px);
    }
  }
`;

export const sourceAnimation = (distance, swapColor) => keyframes`
  0%{
    background-color: ${swapColor};
  }
  40%{
    transform: translate(0px, 0px);
    background-color: ${swapColor};
  }
  60% {
    transform: translate(0px, -50px);
    background-color: ${swapColor};
  }
  80% {
    transform: translate(${distance * 50}px, -50px);
    background-color: ${swapColor};
  }
  99% {
    transform: translate(${distance * 50}px, 0px);
    background-color: ${swapColor};
  }
  100%{
    transform: translate(${distance * 50}px, 0px);
    background-color: none;
  }
  
  @media (max-width: 768px) {
    60% {
      transform: translate(0px, -40px);
    }
    80% {
      transform: translate(${distance * 40}px, -40px);
    }
    99%, 100% {
      transform: translate(${distance * 40}px, 0px);
    }
  }
  
  @media (max-width: 480px) {
    60% {
      transform: translate(0px, -35px);
    }
    80% {
      transform: translate(${distance * 35}px, -35px);
    }
    99%, 100% {
      transform: translate(${distance * 35}px, 0px);
    }
  }
`;