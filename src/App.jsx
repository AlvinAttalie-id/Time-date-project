import Player from "./components/Player";
import TimerChallenge from "./components/TimerChallenge";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={10} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={3} />
        <TimerChallenge title="pro" targetTime={1} />
      </div>
    </>
  );
}

export default App;
