import {create} from "zustand";
import {devtools} from "zustand/middleware";

export const createRobotSlice = (set) => ({
    robot: {
        missingPart: null,
        deliverComponent: (missingPart) =>
            set((state) => ({
                robot: {
                    ...state.robot,
                    missingPart
                }
            }), false, "robot/deliverComponent")
    }
});

export const createMonsterSlice = (set) => ({
    monster: {
        surprise: null,
        setSurprise: (surprise) =>
            set((state) => ({
                monster: {
                    ...state.monster,
                    surprise
                }
            }), false, "monster/setSurprise")
    }
});

export const createPirateSlice = (set) => ({
    pirate: {
        missingTreasure: null,
        setTreasure: (missingTreasure) =>
            set((state) => ({
                pirate: {
                    ...state.pirate,
                    missingTreasure
                }
            }), false, "pirate/setTreasure")
    }
});

export const useStoreWithSlices = create(
    devtools(
        (set) => ({
            ...createRobotSlice(set),
            ...createMonsterSlice(set),
            ...createPirateSlice(set)
        }),
        { name: "ZustandUnifiedSliceStore" }
    )
);
