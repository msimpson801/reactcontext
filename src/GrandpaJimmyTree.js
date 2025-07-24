/** @jsxImportSource @emotion/react */
import {useEffect, useState} from "react";
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



// 🧃 Jimbo
function Jimbo({ gift }) {
    const [delayedGift, setDelayedGift] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedGift(gift);
        }, 2000); // matches the animation duration

        return () => clearTimeout(timer);
    }, [gift]);

    console.log(delayedGift);

    return (
        <JimboBox>
            <ProfileImage
                src={JimmyHappy}
                alt="Jimbo"
                style={{ borderColor: "#9ecf68" }}
            />
            <Name>Jimbo</Name>
            <GiftText>{delayedGift || "Waiting for gift..."}</GiftText>
        </JimboBox>
    );
}

// 🧒 Jimmy Junior
function JimmyJunior({ gift }) {

    return (
        <>
            <JuniorBox>
                <ProfileImage
                    src={JimmyJuniourSVG}
                    alt="Jimmy Junior"
                    style={{ borderColor: "#48a3c6" }}
                />
                <Name>Jimmy Junior</Name>
            </JuniorBox>
            <AnimatedPipe hasDelay={true} gift={gift} />
            <Jimbo gift={gift} />
        </>
    );
}

// 👴 Grandpa Jimmy
export default function GrandpaJimmyTree() {
    const gifts = ["Playstation", "Lego", "Gift voucher"];
    const [gift,getGift] = useGetRandomValueFromList(gifts)

    return (
        <TreeContainer>
            <Box>
                <ProfileImage
                    src={GrandpaJimmySVG}
                    alt="Grandpa Jimmy"
                    style={{ borderColor: "#ea6449" }}
                />
                <Name>Grandpa Jimmy</Name>
                <Button onClick={getGift}>Buy gift</Button>
            </Box>
            <AnimatedPipe gift={gift} />
            <JimmyJunior gift={gift} />
        </TreeContainer>
    );
}