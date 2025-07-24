import {useCallback, useRef, useState} from "react";

export function useGetRandomValueFromList(list) {
    const [item, setItem] = useState(null);
    const previousGiftRef = useRef(null);

    const getRandomItem = useCallback(() => {
        if (!list|| list.length === 0) return;

        let newItem;
        do {
            const randomIndex = Math.floor(Math.random() * list.length);
            newItem = list[randomIndex];
        } while (newItem === previousGiftRef.current && list.length > 1);

        previousGiftRef.current = newItem;
        setItem(newItem);
    }, [list]);

    return [item,getRandomItem];
}
