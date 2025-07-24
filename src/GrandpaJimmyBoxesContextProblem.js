/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { createContext, useContext, useEffect, useState } from "react";
import JimmyHappy from "./icons/childAHappy.svg";
import GrandpaJimmySVG from "./icons/oldmanA.svg";
import JimmyJuniourSVG from "./icons/manA.svg";
import {useGetRandomValueFromList} from "./useGetRandomValueFromList";

// Layout & Box Styles
const Box = styled.div`
  background-color: #fff2f7;
  border: 2px solid #ea6449;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  margin: 1rem auto;
`;

const JuniorBox = styled.div`
  background-color: #e2faff;
  border: 2px solid #48a3c6;
  width: 280px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-top: 0.8rem;
`;

const JimboBox = styled.div`
  background-color: #f0ffdb;
  border: 2px solid #9ecf68;
  width: 260px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 1rem;
  margin-top: 0.6rem;
`;

// Shared UI Styles
const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid;
  margin-bottom: 6px;
`;

const Name = styled.div`
  font-size: 14px;
  font-family: "Segoe UI Semibold", serif;
  margin-bottom: 4px;
`;

const GiftText = styled.div`
  font-size: 12px;
  font-family: "Segoe UI Semibold", serif;
  margin-top: 3px;
  text-align: center;
`;

const Button = styled.button`
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


// ✨ Global animations
const animationStyles = css`
  /* Grandpa pulse */
  .pulse-box {
    position: relative;
    z-index: 0;
  }
  .pulse-box::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 12px;
    border: 2px solid rgba(234, 100, 73, 0.5);
    animation: pulseEcho 0.8s ease-out;
    z-index: -1;
  }
  @keyframes pulseEcho {
    0% {
      transform: scale(1);
      opacity: 0.6;
    }
    70% {
      transform: scale(1.4);
      opacity: 0.2;
    }
    100% {
      transform: scale(1.4);
      opacity: 0;
    }
  }

  /* Jimbo absorbing */
  .absorbing {
    animation: absorbGlow 0.8s ease-out;
  }
  @keyframes absorbGlow {
    0% {
      box-shadow: 0 0 0px rgba(158, 207, 104, 0.7);
      transform: translateY(0);
    }
    50% {
      box-shadow: 0 0 15px rgba(158, 207, 104, 0.9);
      transform: translateY(-6px);
    }
    100% {
      box-shadow: 0 0 0px rgba(158, 207, 104, 0.2);
      transform: translateY(0);
    }
  }
`;



// 💌 Styled context wrapper
const ContexVisual = styled.div`
  border: 2px dashed #a7c7e7;
  background: linear-gradient(to right, #f9f9f9, #eaf4fc);
  padding: 1.5rem;
  margin: 1rem auto;
  border-radius: 12px;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: relative;
  transition: border-color 0.4s ease;
  max-width: 480px;


  &.gold-glow {
    border-color: #ffcb05;
    animation: borderFlash 0.8s ease-out;
  }

  @keyframes borderFlash {
    0%   { box-shadow: 0 0 0px #ffcb05; }
    50%  { box-shadow: 0 0 14px #ffcb05; }
    100% { box-shadow: 0 0 0px #ffcb05; }
  }
`;

const ContextValueBox = styled.div`
  margin: 1.2rem auto;
  padding: 1.2rem 1.6rem;
  max-width: 280px;
  text-align: center;
  background-color: #f9f3ff; /* soft lavender-pink wash */
  border: 2px solid #b48fc3; /* harmonious complement to #ea6449, #48a3c6 */
  border-radius: 14px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.03);
  font-size: 1.05rem;
  font-weight: 500;
  color: #5a5364;
  transition: all 0.3s ease;
`;



// 📬 Context setup
export const FamilyPostalContext = createContext(null);
export const useFamilyPostalContext = () => useContext(FamilyPostalContext);

// 🎁 Postal Provider
function PostalContextProvider({ children }) {
    const gifts = ["Playstation", "Legos", "Gift voucher"];
    const [gift, buyGift] = useGetRandomValueFromList(gifts)
    const [lastGift, setLastGift] = useState(null);
    const [isFresh, setIsFresh] = useState(false);

    useEffect(() => {
        if (gift && gift !== lastGift) {
            setIsFresh(true);
            setLastGift(gift);
            const timeout = setTimeout(() => setIsFresh(false), 800);
            return () => clearTimeout(timeout);
        }
    }, [gift]);

    return (
        <>
            <Global styles={animationStyles} />
            <ContexVisual className={isFresh ? "gold-glow" : ""}>
                <h4>📬 Family Postal Context</h4>
                <ContextValueBox>
                    <div style={{ fontSize: "0.9rem", opacity: 0.75 }}>Current Gift</div>
                    <div style={{
                        marginTop: "0.6rem",
                        fontWeight: "bold",
                        fontSize: "1.2rem",
                        color: "#9c67af"
                    }}>
                        {gift ?? "Awaiting delivery..."}
                    </div>
                </ContextValueBox>
                <FamilyPostalContext.Provider value={{ gift, buyGift }}>
                    {children}
                </FamilyPostalContext.Provider>
            </ContexVisual>
        </>
    );
}

// 🧃 Jimbo (3rd Generation)
function Jimbo() {
    const { gift } = useFamilyPostalContext();
    const [lastGift, setLastGift] = useState(null);
    const [isAbsorbing, setIsAbsorbing] = useState(false);

    useEffect(() => {
        if (gift && gift !== lastGift) {
            setIsAbsorbing(true);
            setLastGift(gift);
            setTimeout(() => setIsAbsorbing(false), 800);
        }
    }, [gift]);

    return (
        <JimboBox className={isAbsorbing ? "absorbing" : ""}>
            <ProfileImage
                src={JimmyHappy}
                alt="Jimbo"
                style={{ borderColor: "#9ecf68" }}
            />
            <Name>Jimbo</Name>
            <GiftText>{gift || "Waiting for gift..."}</GiftText>
        </JimboBox>
    );
}

// 🧒 Jimmy Junior (2nd Generation)
function JimmyJunior() {
    return (
        <JuniorBox>
            <ProfileImage
                src={JimmyJuniourSVG}
                alt="Jimmy Junior"
                style={{ borderColor: "#48a3c6" }}
            />
            <Name>Jimmy Junior</Name>
            <Jimbo />
        </JuniorBox>
    );
}

function GrandpaJimmy() {
    const { gift } = useFamilyPostalContext();
    const [lastGift, setLastGift] = useState(null);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        if (gift && gift !== lastGift) {
            setIsPulsing(true);
            setLastGift(gift);
            setTimeout(() => setIsPulsing(false), 800); // Match animation duration
        }
    }, [gift]);

    const { buyGift } = useFamilyPostalContext();


    return (
        <Box className={isPulsing ? "pulse-box" : ""}>
            <ProfileImage
                src={GrandpaJimmySVG}
                alt="Grandpa Jimmy"
                style={{ borderColor: "#ea6449" }}
            />
            <Name>Grandpa Jimmy</Name>
            <Button onClick={buyGift}>Buy gift</Button>
            <JimmyJunior gift={gift} />
        </Box>
    );

}

// 👴 Grandpa Jimmy (1st Generation)
export default function GrandpaJimmyBoxesContextProblem() {
    return (
        <PostalContextProvider>
            <GrandpaJimmy />
        </PostalContextProvider>
    )
}