import {useRef, useState} from "react";

export function useRandomGift(giftList) {
    const [gift, setGift] = useState(null);
    const previousIndex = useRef(null);

    const buyGift = () => {
        if (!giftList || giftList.length === 0) return;

        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * giftList.length);
        } while (
            giftList.length > 1 &&
            randomIndex === previousIndex.current
            );

        previousIndex.current = randomIndex;
        setGift(giftList[randomIndex]);
    };

    return { gift, buyGift };
}
