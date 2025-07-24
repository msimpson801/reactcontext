/** @jsxImportSource @emotion/react */
import {useState} from 'react';
import LittleJimmyHappy from "./icons/childAHappy.svg";
import {Box, Button, GiftText, Name, ProfileImage, TreeContainer} from "./CommonStyledComponents";
import LittleJimmySad from "./icons/childASad.svg";
import {useGetRandomValueFromList} from "./useGetRandomValueFromList";


export default function LittleJimmyTree() {
    const gifts = ["Lump of coal", "New gruel spoon", "Rag for tears"];
    const [gift,getGift] = useGetRandomValueFromList(gifts)



    return (
        <TreeContainer>
            <Box>
                <ProfileImage
                    src={gift ? LittleJimmyHappy : LittleJimmySad}
                    alt="Big Jimmy"
                    style={{ borderColor: "#ea6449" }}
                />
                <Name>Little Jimmy</Name>
                <Button onClick={getGift}>Buy gift</Button>
                <GiftText>{gift || "Waiting for Christmas..."}</GiftText>
            </Box>
        </TreeContainer>
    );
}