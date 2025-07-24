/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import JimmyCustard from "./icons/familyPhoto.svg";
import ReactContextSVG from './icons/contextOpening.svg'
import LittleJimmyCodeBlock from "./LittleJimmyCodeblock";
import BigJimmyTree from "./BigJimmyTree";
import LittleJimmyTree from "./LittleJimmyTree";
import BigJimmyBoxes from "./BigJimmyBoxes";
import GrandpaJimmyBoxes from "./GrandpaJimmyBoxes";
import GrandpaJimmyTree from "./GrandpaJimmyTree";
import GrandpaJimmyBoxesContextProblem from "./GrandpaJimmyBoxesContextProblem";
import GrandpaJimmyBoxesContext from "./GrandpaJimmyBoxesContext";
import GrandpaJimmyTreeContextProblem2 from "./GrandpaJimmyTreeContextProblem2";
import LongLostBrother from './icons/longLostBrother.svg'
import prosOfReduxPNG from './icons/prosOfRedux.png'
import prosOfZustandPNG from './icons/prosOfZustand.png'
import powerOfContext from './icons/thePowerOfContext.svg'
import happyFamilySVG from './icons/happyFamily.svg'
import GrandpaJimmyBoxesSplitContext from "./GrandpaJimmyBoxesSplitContext";
import GrandpaJimmyBoxesContextRedux from "./GrandpaJimmyBoxesContextRedux";
import GrandpaJimmyBoxesContextZustand from "./GrandpaJimmyBoxesContextZustand";
import MultipleZustandStores from "./MultipleZustandStores";

// 🌆 Layout Containers
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background-color: ${({ background }) => background || "transparent"};
  z-index: -8;
`;

// ✒️ Styled "Once upon a time"
const StoryIntro = styled.div`
  font-size: 2.2rem;
  font-family: 'Georgia', serif;
  font-style: italic;
  color: #4d4d4d;
  margin-bottom: 2rem;
  text-align: center;
`;


const SectionTitle = styled.h2`
  font-size:1.6rem;
  margin-bottom: 1rem;
  font-family:Segoe UI Semibold, serif;
  color: #ea6449;

`




// 📖 Full Story View
export default function Presentation() {
    return (
        <PageWrapper>
            <Section background="#fff9e6">
                <img
                    src={powerOfContext}
                    style={{ maxWidth: '100%' }}
                    alt="Power of context"
                />
            </Section>

            <Section background="#ffecf0">
                <img
                    src={ReactContextSVG}
                    style={{ maxWidth: '100%' }}
                    alt="Jimmy outside custard factory"
                />
            </Section>

            <Section background="#ffecf0">
                <StoryIntro>Once upon a time...</StoryIntro>
                <img
                    src={JimmyCustard}
                    alt="Jimmy outside custard factory"
                    style={{ maxWidth: "500px" }}
                />
            </Section>

            <Section background="#e6f7ff">
                <SectionTitle>Initial App</SectionTitle>
                <LittleJimmyTree />
            </Section>

            <Section background="#f0fff4">
                <SectionTitle>Little Jimmy Code</SectionTitle>
                <LittleJimmyCodeBlock />
            </Section>

            <Section background="#fff9e6">
                <SectionTitle>Little Jimmy grows up</SectionTitle>
                <BigJimmyBoxes />
            </Section>

            <Section background="#f2f2ff">
                <SectionTitle>Big Jimmy - Component tree</SectionTitle>
                <BigJimmyTree />
            </Section>

            <Section background="#fff9e6">
                <SectionTitle>Jimmy Becomes a grandpa</SectionTitle>
                <GrandpaJimmyBoxes />
            </Section>

            <Section background="#e6f7ff">
                <SectionTitle>Grandpa Jimmy - Component Tree</SectionTitle>
                <GrandpaJimmyTree />
            </Section>

            <Section background="#f0fff4">
                <SectionTitle>Context to the rescue</SectionTitle>
                <GrandpaJimmyBoxesContextProblem />
            </Section>

            <Section background="#f8f5f1">
                <SectionTitle>Tree grows bigger</SectionTitle>
                <div style={{ display: 'flex' }}>
                    <img style={{ minHeight: "50%" }} src={LongLostBrother} />
                    <GrandpaJimmyTreeContextProblem2 />
                </div>
            </Section>

            <Section background="#ffecf0">
                <SectionTitle>The Problem with context</SectionTitle>
                    <GrandpaJimmyBoxesContext />
            </Section>

            <Section background="#f8f5f1">
                <SectionTitle>Splitting context</SectionTitle>
                <GrandpaJimmyBoxesSplitContext/>
            </Section>

            <Section background="#f8f5f1">
                <SectionTitle>Redux as a solution</SectionTitle>
                <GrandpaJimmyBoxesContextRedux/>
            </Section>

            <Section background="#f8f5f1">
                <SectionTitle>Redux as a solution</SectionTitle>
                <img style={{ maxWidth: "50%" }} src={prosOfReduxPNG} />
            </Section>


            <Section background="#f8f5f1">
                <SectionTitle>Zustand</SectionTitle>
                <GrandpaJimmyBoxesContextZustand/>
            </Section>

            <Section background="#e6f7ff">
                <SectionTitle>MultipleZustandStores</SectionTitle>
                <MultipleZustandStores />
            </Section>

            <Section background="#f2f2ff">
                <SectionTitle>Zustand as a solution</SectionTitle>
                <img style={{ maxWidth: "50%" }} src={prosOfZustandPNG} />
            </Section>

            <Section background="#e6f7ff">
                <SectionTitle>The end</SectionTitle>
                <img style={{ maxWidth: "25%" }} src={happyFamilySVG} />
            </Section>



        </PageWrapper>
    );
}