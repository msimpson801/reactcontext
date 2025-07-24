/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
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

// 🧃 Jimbo (3rd Generation)
function Jimbo({ gift }) {
    return (
        <JimboBox>
            <ProfileImage
                src={JimmyHappy}
                alt="Jimbo"
                style={{ borderColor: "#9ecf68" }}
            />
            <Name>Jimbo</Name>
            <GiftText>{gift || "Waiting for gruel seed..."}</GiftText>
        </JimboBox>
    );
}

// 🧒 Jimmy Junior (2nd Generation)
function JimmyJunior({ gift }) {
    return (
        <JuniorBox>
            <ProfileImage
                src={JimmyJuniourSVG}
                alt="Jimmy Junior"
                style={{ borderColor: "#48a3c6" }}
            />
            <Name>Jimmy Junior</Name>
            <Jimbo gift={gift} />
        </JuniorBox>
    );
}

// 👴 Grandpa Jimmy (1st Generation)
export default function GrandpaJimmyBoxes() {
    const gifts = ["Playstation", "Lego", "Gift voucher"];
    const [gift,getGift] = useGetRandomValueFromList(gifts)



    return (
        <Box>
            <ProfileImage
                src={GrandpaJimmySVG}
                alt="Grandpa Jimmy"
                style={{ borderColor: "#ea6449" }}
            />
            <Name>Grandpa Jimmy</Name>
            <Button onClick={getGift}>Buy gift</Button>
            <JimmyJunior gift={gift} />
        </Box>
    );
}