/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import { createContext, useContext, useEffect, useState } from "react";
import JimmyHappy from "./icons/childAHappy.svg";
import GrandpaJimmySVG from "./icons/oldmanA.svg";
import JimmyJuniourSVG from "./icons/manA.svg";
import {
    AnimatedPipe,
    Box,
    Button,
    GiftText,
    JimboBox,
    JuniorBox,
    Name,
    ProfileImage,
    TreeContainer
} from "./CommonStyledComponents";
import {useGetRandomValueFromList} from "./useGetRandomValueFromList";

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
      transform: scale(1.6);
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
    const gifts = ["Playstation", "Lego", "Gift voucher"];
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
// 🧃 Jimbo receives context gift
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

// 🧒 Jimmy Junior passes down to Jimbo
function JimmyJunior() {
    return (
        <>
            <JuniorBox style={{ marginBottom: "60px" }}>
                <ProfileImage
                    src={JimmyJuniourSVG}
                    alt="Jimmy Junior"
                    style={{ borderColor: "#48a3c6" }}
                />
                <Name>Jimmy Junior</Name>
            </JuniorBox>
            <Jimbo />
        </>
    );
}

// 👴 Grandpa Jimmy sends gift with pulse
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
        <TreeContainer>
            <Box className={isPulsing ? "pulse-box" : ""} style={{ marginBottom: "60px" }}>
                <ProfileImage
                    src={GrandpaJimmySVG}
                    alt="Grandpa Jimmy"
                    style={{ borderColor: "#ea6449" }}
                />
                <Name>Grandpa Jimmy</Name>
                <Button onClick={buyGift}>Buy gift</Button>
            </Box>
            <JimmyJunior />
        </TreeContainer>
    );
}

// 🌳 Root component
export default function GrandpaJimmyTreeContext() {
    return (
        <PostalContextProvider>
            <GrandpaJimmy />
        </PostalContextProvider>
    );
}