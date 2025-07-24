/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useEffect, useState } from 'react';

import { keyframes } from '@emotion/react';

const moveDown = keyframes`
  0% { top: -34px; }
  100% { top: calc(100% - 0px);
 }
`;

const Container = styled.div`
  position: relative;
  height: 60px;
  width: 100px;
  margin: 0 auto;
  z-index: -8;
`;

const Line = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  width: 4px;
  background-color: #ccc;
`;

const Label = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 12px;
  font-family: "Segoe UI Semibold", serif;
  padding: 8px;
  margin: 1px 0;
  background-color: #3366ff;
  color: white;
  top: -34px;
  border-radius: 4px;
`;

const AnimatedLabel = styled(Label)`
  animation: ${moveDown} 1s ease-in-out forwards;
`;

export function AnimatedPipe({ gift, hasDelay = false }) {
    const [key, setKey] = useState(0);
    const [giftPassed, setGiftPassed] = useState(null)

    useEffect(() => {

        if (hasDelay) {
            setTimeout(() => {
                setGiftPassed(gift)
            }, 1000)
        } else {
            setGiftPassed(gift)
        }


    })

    useEffect(() => {
        setKey((prev) => prev + 1); // bump the key to restart animation
    }, [giftPassed]); // runs whenever `gift` changes


    return (
        <Container>
            <Line />
            {giftPassed && <AnimatedLabel key={key}>Props</AnimatedLabel>}
        </Container>
    );
}



// Layout
export const TreeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-right:  1rem;
`;


// Boxes
export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid;
  margin-bottom: 6px;
`;

export const Box = styled.div`
  background-color: #fff2f7;
  border: 2px solid #ea6449;
  width: 240px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.8rem;
`;

export const JuniorBox = styled.div`
  background-color: #e2faff;
  border: 2px solid #48a3c6;
  width: 220px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.8rem;
`;


export const JimboBox = styled.div`
  background-color: #f0ffdb;
  border: 2px solid #9ecf68;
  width: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.8rem;
`;



// Typography
export const Name = styled.div`
  font-size: 14px;
  font-family: "Segoe UI Semibold", serif;
  margin-bottom: 4px;
`;

export const GiftText = styled.div`
  font-size: 12px;
  font-family: "Segoe UI Semibold", serif;
  margin-top: 3px;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #ff7e5f;
  color: white;
  padding: 0.3rem 0.7rem;
  font-family: "Segoe UI Semibold", serif;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.85rem;
  letter-spacing: 0.02em;
  transition: transform 0.2s ease;
  margin: 6px 0;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: scale(0.98);
  }
`;
