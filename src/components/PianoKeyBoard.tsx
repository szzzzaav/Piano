import { useState } from "react";
import PianoButton from "./PianoButton";

interface PianoKeyBoardProps {}

const keys = [
  "C 2-white",
  "C#2-black",
  "D 2-white",
  "D#2-black",
  "E 2-white",
  "F 2-white",
  "F#2-black",
  "G 2-white",
  "G#2-black",
  "A 2-white",
  "A#2-black",
  "B 2-white",
  "C 3-white",
  "C#3-black",
  "D 3-white",
  "D#3-black",
  "E 3-white",
  "F 3-white",
  "F#3-black",
  "G 3-white",
  "G#3-black",
  "A 3-white",
  "A#3-black",
  "B 3-white",
  "C 4-white",
  "C#4-black",
  "D 4-white",
  "D#4-black",
  "E 4-white",
  "F 4-white",
  "F#4-black",
  "G 4-white",
  "G#4-black",
  "A 4-white",
  "A#4-black",
  "B 4-white",
  "C 5-white",
  "C#5-black",
  "D 5-white",
  "D#5-black",
  "E 5-white",
  "F 5-white",
  "F#5-black",
  "G 5-white",
  "G#5-black",
  "A 5-white",
  "A#5-black",
  "B 5-white",
  "C 6-white",
  "C#6-black",
  "D 6-white",
  "D#6-black",
  "E 6-white",
  "F 6-white",
  "F#6-black",
  "G 6-white",
  "G#6-black",
  "A 6-white",
  "A#6-black",
  "B 6-white",
];

const mapKey = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
];
console.log(mapKey.length, keys.length);

const PianoKeyBoard: React.FC<PianoKeyBoardProps> = () => {
  const [press, setPress] = useState("");
  return (
    <div className="w-[90%] rounded-2xl bg-indigo-600 h-[90%] flex items-center justify-center">
      <div className="box-border  w-auto gap-0 h-full flex items-center justify-between">
        {keys.map((item, i) => {
          const [_, color] = item.split("-");
          if (color === "black") {
            return;
          }
          if (i + 1 < keys.length) {
            const nextItem = keys[i + 1];
            const [__, nextColor] = nextItem.split("-");
            if (nextColor === "black") {
              return (
                <div className="relative box-border h-[98%] w-auto p-0 m-0">
                  <PianoButton description={item} wrap={true} press={press} setPress={setPress}></PianoButton>
                  <PianoButton description={nextItem} wrap={true} press={press} setPress={setPress}></PianoButton>
                </div>
              );
            }
          }
          return <PianoButton description={item} wrap={false} press={press} setPress={setPress}></PianoButton>;
        })}
      </div>
    </div>
  );
};

export default PianoKeyBoard;
