import PianoBody from "./PianoBody";
import PianoInterface from "./PianoInterface";
import PianoKeyBoard from "./PianoKeyBoard";
import PianoSpeaker from "./PianoSpeaker";

interface PianoProps {}

const Piano: React.FC<PianoProps> = () => {
  return (
    <div className="bg-zinc-800 flex flex-col justify-between items-center w-full h-full">
      <PianoBody>
        <PianoSpeaker />
        <PianoInterface />
        <PianoSpeaker />
      </PianoBody>
      <PianoKeyBoard />
    </div>
  );
};

export default Piano;
