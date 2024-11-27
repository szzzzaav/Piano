import "./pianoSpeaker.css";

interface PianoSpeakerProps {}

const PianoSpeaker: React.FC<PianoSpeakerProps> = () => {
  return <div className="w-[25%] h-[25%] p-3 rounded-md piano_speaker border-1 border-zinc-600 shadow-2xl"></div>;
};

export default PianoSpeaker;
