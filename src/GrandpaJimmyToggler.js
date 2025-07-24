/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useState } from "react";
import GrandpaJimmyTree from "./GrandpaJimmyTree";
import GrandpaJimmyBoxes from "./GrandpaJimmyBoxes";
import GrandpaJimmyCodeBlock from "./GrandpaJimmyCodeBlock";
import GrandpaJimmyTreeContext from "./GrandpaJimmyTreeContext";



// Toggle Buttons
const ToggleBar = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const ToggleButton = styled.button`
  background-color: ${({ active }) => (active ? "#ff7e5f" : "#eee")};
  color: ${({ active }) => (active ? "white" : "#444")};
  font-family: "Segoe UI", sans-serif;
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  box-shadow: ${({ active }) =>
          active ? "0 2px 6px rgba(0,0,0,0.2)" : "none"};

  &:hover {
    background-color: #ffd3c3;
  }
`;

const DiagramWrapper = styled.div`
  border-radius: 12px;
  padding: 1rem;
  background-color: #fefefe;
  font-size: 0.9rem;
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
`;

export default function GrandpaJimmyToggler() {
    const [view, setView] = useState("tree");

    return (
        <>
            <ToggleBar>
                <ToggleButton active={view === "box"} onClick={() => setView("app")}>
                    App
                </ToggleButton>
                <ToggleButton active={view === "tree"} onClick={() => setView("tree")}>
                    Component tree
                </ToggleButton>
                <ToggleButton active={view === "code"} onClick={() => setView("code")}>
                    Code
                </ToggleButton>
            </ToggleBar>

            <DiagramWrapper>
                {view === "tree" && <GrandpaJimmyTree />}
                {view === "app" && <GrandpaJimmyBoxes />}
                {/*{view === "code" && <GrandpaJimmyCodeBlock />}*/}
                {/*{view === "code" && <GrandpaJimmyTreeContext />}*/}
            </DiagramWrapper>
        </>
    );
}