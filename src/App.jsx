import Countdown from "./components/CountDown/CountDown";
import Digitalclock from "./components/DigitalCLock/DigitalClock";
import Crono from "./components/Crono/Crono";

import "./main.scss";

function App() {
  return (
    <div className="App">
      <h1>Projecto Reloj Digital</h1>

      <Digitalclock />
      <Countdown />
      <Crono />
    </div>
  );
}

export default App;
