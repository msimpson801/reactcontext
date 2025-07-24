import { CodeBlock, dracula } from "react-code-blocks";
import styled from "@emotion/styled";

const AlignedCodeBlock = styled.div`
  text-align: left;

  pre {
    text-align: left !important;
  }
`;


export default function LittleJimmyCodeBlock() {
    const code = `   
function LittleJimmy() {
    const [gift, setGift] = useState(null);
    const gifts = ["Rag for tears", "Lump of coal", "New gruel spoon"];

    const buyGift = () => {
        const randomIndex = Math.floor(Math.random() * gifts.length);
        setGift(gifts[randomIndex]);
    };

    return (
        <div>
            <h2>🎁 Little Jimmy</h2>
            <button onClick={buyGift}>Buy Gift</button>
            {gift && <p>{gift}</p>}
        </div>
    );
}
function App() {
    return (
        <LittleJimmy />
    );
}
    
`;

    return (
        <AlignedCodeBlock>
            <CodeBlock
                text={code}
                language="javascript"
                showLineNumbers={false}
                theme={dracula}
            />
        </AlignedCodeBlock>

    );
}