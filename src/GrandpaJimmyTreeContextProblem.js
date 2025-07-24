/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css, Global } from "@emotion/react";
import {createContext, useContext, useEffect, useRef, useState} from "react";
import JimmyHappy from "./icons/childAHappy.svg";
import ShimBobSVG from "./icons/childB.svg";
import GrandpaJimmySVG from "./icons/oldmanA.svg";
import GrandpaShimmySVG from "./icons/oldmanB.svg";
import JimmyJuniourSVG from "./icons/manA.svg";
import ShimmyJuniourSVG from "./icons/manB.svg";
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
import {useRenderCount} from "./useRenderCount";

// ✨ Global animations
const animationStyles = css`
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
    0% { transform: scale(1); opacity: 0.6; }
    70% { transform: scale(1.4); opacity: 0.2; }
    100% { transform: scale(1.6); opacity: 0; }
  }

  .absorbing {
    animation: absorbGlow 0.8s ease-out;
  }
  @keyframes absorbGlow {
    0% { box-shadow: 0 0 0px rgba(158, 207, 104, 0.7); transform: translateY(0); }
    50% { box-shadow: 0 0 15px rgba(158, 207, 104, 0.9); transform: translateY(-6px); }
    100% { box-shadow: 0 0 0px rgba(158, 207, 104, 0.2); transform: translateY(0); }
  }
`;

// 🌀 Styled wrapper
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
  max-width: 600px;
  &.gold-glow {
    border-color: #ffcb05;
    animation: borderFlash 0.8s ease-out;
  }
  @keyframes borderFlash {
    0% { box-shadow: 0 0 0px #ffcb05; }
    50% { box-shadow: 0 0 14px #ffcb05; }
    100% { box-shadow: 0 0 0px #ffcb05; }
  }
`;

const ContextValueBox = styled.div`
  margin: 1.2rem auto;
  padding: 1.2rem 1.6rem;
  max-width: 280px;
  text-align: center;
  background-color: #f9f3ff;
  border: 2px solid #b48fc3;
  border-radius: 14px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.03);
  font-size: 1.05rem;
  font-weight: 500;
  color: #5a5364;
  transition: all 0.3s ease;
`;




// 📬 Create Context
export const FamilyPostalContext = createContext(null);
export const useFamilyPostalContext = () => useContext(FamilyPostalContext);

// 🎁 Provider with gift and letter
function PostalContextProvider({ children }) {
    const [gift, setGift] = useState(null);
    const [letter, setLetter] = useState(null);
    const [isFreshGift, setIsFreshGift] = useState(false);
    const [isFreshLetter, setIsFreshLetter] = useState(false);

    const gifts = ["Playstation", "Legos", "Gift voucher"];
    const letters = ["You're awesome!", "Miss you!", "See you soon!"];

    const buyGift = () => {
        const randomIndex = Math.floor(Math.random() * gifts.length);
        setGift(gifts[randomIndex]);
    };
    const sendLetter = () => {
        const randomIndex = Math.floor(Math.random() * letters.length);
        setLetter(letters[randomIndex]);
    };

    useEffect(() => {
        if (gift) {
            setIsFreshGift(true);
            const timeout = setTimeout(() => setIsFreshGift(false), 800);
            return () => clearTimeout(timeout);
        }
    }, [gift]);

    useEffect(() => {
        if (letter) {
            setIsFreshLetter(true);
            const timeout = setTimeout(() => setIsFreshLetter(false), 800);
            return () => clearTimeout(timeout);
        }
    }, [letter]);

    return (
        <>
            <Global styles={animationStyles} />
            <ContexVisual className={isFreshGift || isFreshLetter ? "gold-glow" : ""}>
                <h4>📬 Family Postal Context</h4>
                <ContextValueBox>
                    <div style={{ opacity: 0.75 }}>Gift</div>
                    <div style={{ color: "#9c67af" }}>{gift ?? "Awaiting delivery..."}</div>
                    <div style={{ marginTop: "1rem", opacity: 0.75 }}>Letter</div>
                    <div style={{ color: "#487aa3" }}>{letter ?? "Awaiting post..."}</div>
                </ContextValueBox>
                <FamilyPostalContext.Provider value={{ gift, letter, buyGift, sendLetter }}>
                    <div style={{ display: "flex" }}>{children}</div>
                </FamilyPostalContext.Provider>
            </ContexVisual>
        </>
    );
}

// 🧃 Gift receiver
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
            <ProfileImage src={JimmyHappy} alt="Jimbo" style={{ borderColor: "#9ecf68" }} />
            <Name>Jimbo</Name>
            <GiftText>{gift || "Waiting for gift..."}</GiftText>
        </JimboBox>
    );
}

// 💌 Letter receiver
function ShimBob() {
    const { letter } = useFamilyPostalContext();
    const [lastLetter, setLastLetter] = useState(null);
    const [isAbsorbing, setIsAbsorbing] = useState(false);

    useEffect(() => {
        if (letter && letter !== lastLetter) {
            setIsAbsorbing(true);
            setLastLetter(letter);
            setTimeout(() => setIsAbsorbing(false), 800);
        }
    }, [letter]);

    return (
        <JimboBox className={isAbsorbing ? "absorbing" : ""}>
            <ProfileImage src={ShimBobSVG} alt="Shim-bob" style={{ borderColor: "#9ecf68" }} />
            <Name>Shim-bob</Name>
            <GiftText>{letter || "Waiting for letter..."}</GiftText>
        </JimboBox>
    );
}

function JimmyJunior() {
    return (
        <>
            <JuniorBox style={{ marginBottom: "60px" }}>
                <ProfileImage src={JimmyJuniourSVG} alt="Jimmy Junior" style={{ borderColor: "#48a3c6" }} />
                <Name>Jimmy Junior</Name>
            </JuniorBox>
            <Jimbo />
        </>
    );
}

function ShimmyJunior() {
    console.count("Rendering shimmy juniour")
    return (
        <>
            <JuniorBox style={{ marginBottom: "60px" }}>
                <ProfileImage src={ShimmyJuniourSVG} alt="Shimmy Junior" style={{ borderColor: "#48a3c6" }} />
                <Name>Shimmy Junior</Name>
            </JuniorBox>
            <ShimBob />
        </>
    );
}


// 👴 Grandpa Jimmy sends gift with pulse
function GrandpaJimmy() {
    const { buyGift, gift } = useFamilyPostalContext();
    const [lastGift, setLastGift] = useState(null);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        if (gift && gift !== lastGift) {
            setIsPulsing(true);
            setLastGift(gift);
            setTimeout(() => setIsPulsing(false), 800);
        }
    }, [gift]);

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

// 👴 Grandpa Shimmy sends letter with pulse
function GrandpaShimmy() {
    const { sendLetter, letter } = useFamilyPostalContext();
    const [lastLetter, setLastLetter] = useState(null);
    const [isPulsing, setIsPulsing] = useState(false);

    useEffect(() => {
        if (letter && letter !== lastLetter) {
            setIsPulsing(true);
            setLastLetter(letter);
            setTimeout(() => setIsPulsing(false), 800);
        }
    }, [letter]);

    return (
        <TreeContainer>
            <Box className={isPulsing ? "pulse-box" : ""} style={{ marginBottom: "60px" }}>
                <ProfileImage
                    src={GrandpaShimmySVG}
                    alt="Grandpa Shimmy"
                    style={{ borderColor: "#ea6449" }}
                />
                <Name>Grandpa Shimmy</Name>
                <Button onClick={sendLetter}>Send letter</Button>
            </Box>
            <ShimmyJunior />
        </TreeContainer>
    );
}

// 🌳 Root component
export default function GrandpaJimmyTreeContextProblem() {
    return (
        <PostalContextProvider>
            <GrandpaJimmy />
            <GrandpaShimmy/>
        </PostalContextProvider>
    );
}