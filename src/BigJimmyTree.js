/** @jsxImportSource @emotion/react */
import {useEffect, useState} from 'react';
import JimmyHappy from "./icons/childAHappy.svg";
import JimmyJuniourSVG from "./icons/manA.svg";
import {
    AnimatedPipe,
    Box,
    Button,
    GiftText,
    JuniorBox,
    Name,
    ProfileImage,
    TreeContainer
} from "./CommonStyledComponents";
import {useGetRandomValueFromList} from "./useGetRandomValueFromList";


function JimmyJunior({ gift }) {
    const [delayedGift, setDelayedGift] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedGift(gift);
        }, 1000); // matches the animation duration

        return () => clearTimeout(timer);
    }, [gift]);

    return (
        <JuniorBox>
            <ProfileImage
                src={JimmyHappy}
                alt="Jimmy Junior"
                style={{ borderColor: "#48a3c6" }}
            />
            <Name>Jimmy Junior</Name>
            <GiftText>{delayedGift || "Waiting for gift..."}</GiftText>
        </JuniorBox>
    );
}

// 👴 Grandpa Jimmy
export default function BigJimmyTree() {
    const gifts = ["Playstation", "Lego", "Gift voucher"];
    const [gift,getGift] = useGetRandomValueFromList(gifts)

    return (
        <TreeContainer>
            <Box>
                <ProfileImage
                    src={JimmyJuniourSVG}
                    alt="Big Jimmy"
                    style={{ borderColor: "#ea6449" }}
                />
                <Name>Big Jimmy</Name>
                <Button onClick={getGift}>Buy gift</Button>
            </Box>
            <AnimatedPipe gift={gift} delay={1000} />
            <JimmyJunior gift={gift} />
        </TreeContainer>
    );
}