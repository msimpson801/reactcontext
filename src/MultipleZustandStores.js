/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import GrandadPirateSVG from './icons/GrandpaPirate.svg'
import DadPirateSVG from './icons/DadPirate.svg'
import GrandsonPirateSVG from './icons/GrandsonPirate.svg'

import GrandadMonsterSVG from './icons/GrandadMonster.svg'
import DadMonsterSVG from './icons/DadMonster.svg'
import GrandsonMonsterSVG from './icons/GrandsonMonster.svg'

import GrandadRobotSVG from './icons/GrandadRobot.svg'
import DadRobotSVG from './icons/SonRobot.svg'
import GrandsonRobotSVG from './icons/GrandsonRobot.svg'

import {useRenderCount} from "./useRenderCount";

import { useStoreWithSlices} from "./multipleStores";

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
  background: #f9f9f9;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 12px;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: border-color 0.4s ease;
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



function RobotContextProvider({ children }) {
    const missingPart = useStoreWithSlices((state) => state.robot.missingPart);

    return (
        <ContexVisual>
            <h4>🤖 Robot Missing Part Store</h4>
            <ContextValueBox>
                <div style={{ opacity: 0.75 }}>Missing Part</div>
                <div style={{ color: "#9c67af" }}>
                    {missingPart ?? "Awaiting component dispatch..."}
                </div>
            </ContextValueBox>
            <div style={{ display: "flex" }}>{children}</div>
        </ContexVisual>
    );
}

function MonsterContextProvider({ children }) {
    const surprise = useStoreWithSlices((state) => state.monster.surprise);

    return (
        <ContexVisual>
            <h4>👾 Monster Surprise Store</h4>
            <ContextValueBox>
                <div style={{ opacity: 0.75 }}>Surprise</div>
                <div style={{ color: "#9c67af" }}>
                    {surprise ?? "Awaiting gunk delivery..."}
                </div>
            </ContextValueBox>
            <div style={{ display: "flex" }}>{children}</div>
        </ContexVisual>
    );
}
function PirateContextProvider({ children }) {
    const missingTreasure = useStoreWithSlices((state) => state.pirate.missingTreasure);

    return (
        <ContexVisual>
            <h4>🏴‍☠️ Pirate Treasure Store</h4>
            <ContextValueBox>
                <div style={{ opacity: 0.75 }}>Treasure</div>
                <div style={{ color: "#9c67af" }}>
                    {missingTreasure ?? "Awaiting buried booty..."}
                </div>
            </ContextValueBox>
            <div style={{ display: "flex" }}>{children}</div>
        </ContexVisual>
    );
}


function GrandsonRobot() {
    const missingPart = useStoreWithSlices((state) => state.robot.missingPart);
    const count = useRenderCount();

    return (
        <JimboBox>
            <ProfileImage
                src={GrandsonRobotSVG}
                alt="Jimbo"
                style={{borderColor: "#9ecf68"}}
            />
            <Name>Chip – Renders: {count}</Name>
            <GiftText>{missingPart || "Waiting for missing part..."}</GiftText>
        </JimboBox>
    );
}

function GrandsonPirate() {
    const treasure = useStoreWithSlices((state) => state.pirate.missingTreasure);
    const count = useRenderCount();


    return (
        <JimboBox>
            <ProfileImage
                src={GrandsonPirateSVG}
                alt="Jimbo"
                style={{borderColor: "#9ecf68"}}
            />
            <Name>Billy Bob Buckets - Renders: {count}</Name>
            <GiftText>{treasure || "Waiting for treasure..."}</GiftText>
        </JimboBox>
    );
}

function GrandsonMonster() {
    const surprise = useStoreWithSlices((state) => state.monster.surprise);
    const count = useRenderCount();

    return (
        <JimboBox>
            <ProfileImage
                src={GrandsonMonsterSVG}
                alt="ShimBob"
                style={{borderColor: "#9ecf68"}}
            />
            <Name>Slimer - Renders: {count}</Name>
            <GiftText>{surprise || "Waiting for surprise..."}</GiftText>
        </JimboBox>
    );
}

function DadRobot() {
    const count = useRenderCount();

    return (
        <JuniorBox>
            <ProfileImage
                src={DadRobotSVG}
                alt="Jimmy Junior"
                style={{borderColor: "#48a3c6"}}
            />
            <Name>Ricktron 5000 - Renders: {count}</Name>
            <GrandsonRobot/>
        </JuniorBox>
    );
}

// 🧒 Jimmy Junior (2nd Generation)
function DadPirate() {
    const count = useRenderCount();

    return (
        <JuniorBox>
            <ProfileImage
                src={DadPirateSVG}
                alt="Jimmy Junior"
                style={{borderColor: "#48a3c6"}}
            />
            <Name>Buccaneer Billy - Renders: {count}</Name>
            <GrandsonPirate/>
        </JuniorBox>
    );
}

function DadMonster() {
    const count = useRenderCount();

    return (
        <JuniorBox>
            <ProfileImage
                src={DadMonsterSVG}
                alt="Shimmy Juniorr"
                style={{borderColor: "#48a3c6"}}
            />
            <Name>Shaggy Shaun - Renders: {count}</Name>
            <GrandsonMonster/>
        </JuniorBox>
    );
}

function GrandadRobot() {
    const deliverComponent = useStoreWithSlices((state) => state.robot.deliverComponent);
    const count = useRenderCount();

    const transmitMissingPart = () => {
        const missingParts = [
            "Servo Motor",
            "Hydraulic Claw",
            "Quantum Capacitor",
            "Optic Sensor",
            "Voice Modulator",
            "Chrome-Plated Gripper",
        ];
        const selectedPart =
            missingParts[Math.floor(Math.random() * missingParts.length)];
        deliverComponent(selectedPart);
    };

    return (
        <Box>
            <ProfileImage
                src={GrandadRobotSVG}
                alt="Grandpa Jimmy"
                style={{borderColor: "#ea6449"}}
            />
            <Name>RoboRick – Renders: {count}</Name>
            <Button onClick={transmitMissingPart}>Transmit Part</Button>
            <DadRobot/>
        </Box>
    );
}


function GrandpaMonster() {
    const count = useRenderCount();
    const setSurprise = useStoreWithSlices((state) => state.monster.setSurprise);


    const giveSurprise = () => {
        const surprises = ["Gunk", "Goo", "Spiders"];
        const randomGift = surprises[Math.floor(Math.random() * surprises.length)];
        setSurprise(randomGift);
    };


    return (
        <Box>
            <ProfileImage
                src={GrandadMonsterSVG}
                alt="Grandpa Shimmy"
                style={{borderColor: "#ea6449"}}
            />
            <Name>Hairball Harry - Renders: {count}</Name>
            <Button onClick={giveSurprise}>Give surprise</Button>
            <DadMonster/>
        </Box>
    );

}


function GrandpaPirate() {
    const setTreasure = useStoreWithSlices((state) => state.pirate.setTreasure);
    const count = useRenderCount();

    const getTreasure = () => {
        const treasures = [
            "Golden Doubloon",
            "Silver Cutlass",
            "Emerald Kraken Fang",
            "Tattered Treasure Map",
            "Enchanted Compass",
            "Bottle o’ Whispering Rum",
            "Jeweled Pegleg"
        ];
        const randomTreasure = treasures[Math.floor(Math.random() * treasures.length)];
        setTreasure(randomTreasure);
    }


    return (
        <Box>
            <ProfileImage
                src={GrandadPirateSVG}
                alt="Grandpa Jimmy"
                style={{borderColor: "#ea6449"}}
            />
            <Name>Barnacle Bill - Renders: {count}</Name>
            <Button onClick={getTreasure}>Buy Gift</Button>
            <DadPirate/>
        </Box>
    );
}

// 👴 Grandpa Jimmy (1st Generation)
export default function MultipleZustandStores() {
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <MonsterContextProvider>
                <GrandpaMonster/>
            </MonsterContextProvider>

            <PirateContextProvider>
                <GrandpaPirate/>
            </PirateContextProvider>

            <RobotContextProvider>
                <GrandadRobot/>
            </RobotContextProvider>
        </div>

    )
}