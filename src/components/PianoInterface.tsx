import { useState } from "react";
import PianoControlButton from "./PianoControlButton";

interface PianoInterfaceProps {}

const information = ["Letter Notes", "Keyboard", "None"];

const PianoInterface: React.FC<PianoInterfaceProps> = () => {
  const [select, setSelect] = useState(1);
  return (
    <div className="w-[30%] h-[40%] relative rounded-md bg-zinc-700 shadow-md shadow-indigo-800 p-4">
      {/* controlBar */}
      <div className="flex flex-col gap-2">
        <h4 style={{ textShadow: "2px 2px #000000" }}>{information[select - 1]}</h4>
        <div className="flex justify-between relative w-[60%]">
          <PianoControlButton selected={select === 1} selectedColor={"text-indigo-600"} onClick={() => setSelect(1)} />
          <PianoControlButton selected={select === 2} selectedColor={"text-rose-600"} onClick={() => setSelect(2)} />
          <PianoControlButton selected={select === 3} selectedColor={"text-gray-600"} onClick={() => setSelect(3)} />
        </div>
      </div>
    </div>
  );
};

export default PianoInterface;
