/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { createContext, useContext } from "react";
import JimmyHappy from "./icons/childAHappy.svg";
import ShimBobSVG from "./icons/childB.svg";
import GrandpaJimmySVG from "./icons/oldmanA.svg";
import GrandpaShimmySVG from "./icons/oldmanB.svg";
import JimmyJuniourSVG from "./icons/manA.svg";
import ShimmyJuniourSVG from "./icons/manB.svg";
import {useGetRandomValueFromList} from "./useGetRandomValueFromList";
import {useRenderCount} from "./useRenderCount";

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



// 💌 Styled context wrapper
const ContexVisual = styled.div`
  border: 2px dashed #a7c7e7;
  background:  #eaf4fc;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 12px;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  position: relative;
  transition: border-color 0.4s ease;
  max-width: 800px;
  
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




export const GiftContext = createContext(null);
export const useGiftContext = () => useContext(GiftContext);

// 🎁 Provider with gift and letter
function GiftContextProvider({ children }) {
    const gifts = ["Playstation", "Lego", "Gift voucher"];
    const [gift, setGift] = useGetRandomValueFromList(gifts);

    const buyGift = () => {
        const randomIndex = Math.floor(Math.random() * gifts.length);
        setGift(gifts[randomIndex]);
    };

    return (
        <>
            <ContexVisual>
                <h4>Gift Context</h4>
                <ContextValueBox>
                    <div style={{ opacity: 0.75 }}>Gift</div>
                    <div style={{ color: "#9c67af" }}>{gift ?? "Awaiting delivery..."}</div>
                </ContextValueBox>
                <GiftContext.Provider value={{ gift, buyGift}}>
                    <div style={{ display: "flex" }}>{children}</div>
                </GiftContext.Provider>
            </ContexVisual>
        </>
    );
}

export const LetterContext = createContext(null);
export const useLetterContext = () => useContext(LetterContext);

// 🎁 Provider with gift and letter
function LetterContextProvider({ children }) {
    const letters = ["You're awesome!", "Miss you!", "See you soon!"];
    const [letter, setLetter] = useGetRandomValueFromList(letters);

    const sendLetter = () => {
        const randomIndex = Math.floor(Math.random() * letters.length);
        setLetter(letters[randomIndex]);
    };

    return (
        <>
            <ContexVisual>
                <h4>Letter Context</h4>
                <ContextValueBox>
                    <div style={{ opacity: 0.75 }}>Letter</div>
                    <div style={{ color: "#487aa3" }}>{letter ?? "Awaiting post..."}</div>
                </ContextValueBox>
                <LetterContext.Provider value={{ letter, sendLetter }}>
                    <div style={{ display: "flex" }}>{children}</div>
                </LetterContext.Provider>
            </ContexVisual>
        </>
    );
}


// 🧃 Jimbo (3rd Generation)
function Jimbo() {
    const { gift } = useGiftContext();

    return (
        <JimboBox>
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

function ShimBob() {
    const { letter } = useLetterContext();
    const count = useRenderCount();

    return (
        <JimboBox>
            <ProfileImage
                src={ShimBobSVG}
                alt="ShimBob"
                style={{ borderColor: "#9ecf68" }}
            />
            <Name>Shim-bob - Renders: {count}</Name>
            <GiftText>{letter || "Waiting for letter..."}</GiftText>
        </JimboBox>
    );
}

// 🧒 Jimmy Junior (2nd Generation)
function JimmyJunior() {
    const count = useRenderCount();

    return (
        <JuniorBox>
            <ProfileImage
                src={JimmyJuniourSVG}
                alt="Jimmy Junior"
                style={{ borderColor: "#48a3c6" }}
            />
            <Name>Jimmy Junior - Renders: {count}</Name>
            <Jimbo />
        </JuniorBox>
    );
}

function ShimmyJunior() {
    const count = useRenderCount();

    return (
        <JuniorBox>
            <ProfileImage
                src={ShimmyJuniourSVG}
                alt="Shimmy Juniorr"
                style={{ borderColor: "#48a3c6" }}
            />
            <Name>Shimmy Junior - Renders: {count}</Name>
            <ShimBob/>
        </JuniorBox>
    );
}


function GrandpaShimmy() {
    const { sendLetter } = useLetterContext();
    const count = useRenderCount();


    return (
        <Box>
            <ProfileImage
                src={GrandpaShimmySVG}
                alt="Grandpa Shimmy"
                style={{ borderColor: "#ea6449" }}
            />
            <Name>Grandpa Shimmy - Renders: {count}</Name>
            <Button onClick={sendLetter}>Send letter</Button>
            <ShimmyJunior />
        </Box>
    );

}
function GrandpaJimmy() {
    const { buyGift } = useGiftContext();

    const count = useRenderCount();


    return (
        <Box>
            <ProfileImage
                src={GrandpaJimmySVG}
                alt="Grandpa Jimmy"
                style={{ borderColor: "#ea6449" }}
            />
            <Name>Grandpa Jimmy - Renders: {count}</Name>
            <Button onClick={buyGift}>Buy gift</Button>
            <JimmyJunior />
        </Box>
    );

}

// 👴 Grandpa Jimmy (1st Generation)
export default function GrandpaJimmyBoxesSplitContext() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <GiftContextProvider>
                <GrandpaJimmy />
            </GiftContextProvider>
            <LetterContextProvider>
                <GrandpaShimmy />
            </LetterContextProvider>
        </div>

    )
}