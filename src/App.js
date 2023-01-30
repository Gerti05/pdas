import ProfileCard from "./ProfileCard";
import AlexaImg from "./images/alexa.png";
import CortanaImg from "./images/cortana.png";
import SiriImg from "./images/siri.png";

function App() {
  return (
    <div>
      <div>Personal Digital Assistance</div>

      <ProfileCard title="Alexa" handle="@alexa99" image={AlexaImg} />
      <ProfileCard title="Cortana" handle="@cortana32" image={CortanaImg} />
      <ProfileCard title="Siri" handle="@siri01" image={SiriImg} />
    </div>
  );
}

export default App;
