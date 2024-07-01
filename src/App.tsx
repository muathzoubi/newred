import "./App.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const UrgeWithPleasureComponent = () => (
  <CountdownCircleTimer
    isPlaying
    duration={7}
    size={100}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[7, 5, 2, 0]}
  >
    {({ remainingTime }) => remainingTime}
  </CountdownCircleTimer>
);
function App() {
  return (
    <>
      <div className="countdown">
        <UrgeWithPleasureComponent />
      </div>
      <p>
        سوف يتم اعادة توجيهك تلقائياً للموقع بعد 7 ثواني او اضغط على الأنتقال
        للموقع
      </p>

      <div className="card">
        <a href="https://www.invsment-opo.com/">
          <button>الأنتقال للموقع</button>
        </a>
      </div>
      <p className="read-the-docs">
        قد تستغرق هذه العملية وقتاً اكثر من اللازم
      </p>
    </>
  );
}

export default App;
