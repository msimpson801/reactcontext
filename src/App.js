import Presentation from "./Presentation";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GrandpaJimmyBoxesContextRedux from "./GrandpaJimmyBoxesContextRedux";
import MultipleZustandStores from "./MultipleZustandStores";





function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/context" element={<Presentation/>} />

        </Routes>
      </BrowserRouter>

  );
}

export default App;
