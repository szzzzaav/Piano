import { useState } from "react";
import PianoBody from "./PianoBody";
import PianoInterface from "./PianoInterface";
import PianoKeyBoard from "./PianoKeyBoard";
import PianoSpeaker from "./PianoSpeaker";

interface PianoProps {}

const Piano: React.FC<PianoProps> = () => {
  const [select, setSelect] = useState<number>(1);
  return (
    <div className="bg-zinc-800 flex flex-col justify-between items-center w-full h-full">
      <PianoBody>
        <PianoSpeaker />
        <PianoInterface select={select} setSelect={setSelect} />
        <PianoSpeaker />
      </PianoBody>
      <PianoKeyBoard select={select} />
    </div>
  );
};

export default Piano;
