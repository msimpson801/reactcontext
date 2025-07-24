import { CodeBlock, dracula } from "react-code-blocks";
import styled from "@emotion/styled";

const AlignedCodeBlock = styled.div`
  text-align: left;

  pre {
    text-align: left !important;
  }
`;


export default function GrandpaJimmyCodeBlock() {
    const code = `   
function GrandpaJimmy() {
    const [gift, setGift] = useState(null);
    const gifts = ["Playstation", "Legos", "Gift voucher"];

    const buyGift = () => {
        const randomIndex = Math.floor(Math.random() * gifts.length);
        setGift(gifts[randomIndex]); // Grandpa generates the gift
    };

    return (
        <div>
            <h2>Grandpa Jimmy</h2>
            <button onClick={buyGift}>Buy Gift</button>
            <JimmyJunior gift={gift} />
        </div>
    );
}

function JimmyJunior({ gift }) {
    return (
        <div>
            <h3>Jimmy Junior</h3>
            <Jimbo gift={gift} />
        </div>
    );
}

function Jimbo({ gift }) {
    return (
        <div>
            <h4>Jimbo</h4>
            {gift && <p>Grandpa gave me: {gift}</p>}
        </div>
    );
}

export default function App() {
    return <GrandpaJimmy />;
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