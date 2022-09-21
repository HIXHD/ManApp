import logo from "./logo.svg";
import "./App.css";
import Skladnia from "./SkladniaRenderowamegoElementu";
import { WelcomeClass, WelcomeFunction } from "./Welcome";
function App() {
  return (
    <div className="App">
      

      <WelcomeClass name="Sara" surname="Jackson" />
      <WelcomeClass name="Cahal" />
      <WelcomeClass name="Edite" />

      <WelcomeFunction name="Sara" />
      <WelcomeFunction name="Cahal" />
      <WelcomeFunction name="Edite" />
    </div>
  );
}

export default App;
