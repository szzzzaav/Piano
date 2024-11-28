import { useEffect, useState } from "react";
import PianoButton from "./PianoButton";

interface PianoKeyBoardProps {
  select: number;
}

const KeyMapArray = [
  ["C 2-white", "1"],
  ["C#2-black", "shf-1"],
  ["D 2-white", "2"],
  ["D#2-black", "shf-2"],
  ["E 2-white", "3"],
  ["F 2-white", "4"],
  ["F#2-black", "shf-4"],
  ["G 2-white", "5"],
  ["G#2-black", "shf-5"],
  ["A 2-white", "6"],
  ["A#2-black", "shf-6"],
  ["B 2-white", "7"],
  ["C 3-white", "8"],
  ["C#3-black", "shf-8"],
  ["D 3-white", "9"],
  ["D#3-black", "shf-9"],
  ["E 3-white", "0"],
  ["F 3-white", "q"],
  ["F#3-black", "shf-q"],
  ["G 3-white", "w"],
  ["G#3-black", "shf-w"],
  ["A 3-white", "e"],
  ["A#3-black", "shf-e"],
  ["B 3-white", "r"],
  ["C 4-white", "t"],
  ["C#4-black", "shf-t"],
  ["D 4-white", "y"],
  ["D#4-black", "shf-y"],
  ["E 4-white", "u"],
  ["F 4-white", "i"],
  ["F#4-black", "shf-i"],
  ["G 4-white", "o"],
  ["G#4-black", "shf-o"],
  ["A 4-white", "p"],
  ["A#4-black", "shf-p"],
  ["B 4-white", "a"],
  ["C 5-white", "s"],
  ["C#5-black", "shf-s"],
  ["D 5-white", "d"],
  ["D#5-black", "shf-d"],
  ["E 5-white", "f"],
  ["F 5-white", "g"],
  ["F#5-black", "shf-g"],
  ["G 5-white", "h"],
  ["G#5-black", "shf-h"],
  ["A 5-white", "j"],
  ["A#5-black", "shf-j"],
  ["B 5-white", "k"],
  ["C 6-white", "l"],
  ["C#6-black", "shf-l"],
  ["D 6-white", "z"],
  ["D#6-black", "shf-z"],
  ["E 6-white", "x"],
  ["F 6-white", "c"],
  ["F#6-black", "shf-c"],
  ["G 6-white", "v"],
  ["G#6-black", "shf-v"],
  ["A 6-white", "b"],
  ["A#6-black", "shf-b"],
  ["B 6-white", "n"],
];

const reverseKeyMap: {} = {
  "1": "C 2-white",
  "!": "C#2-black",
  "2": "D 2-white",
  "@": "D#2-black",
  "3": "E 2-white",
  "4": "F 2-white",
  $: "F#2-black",
  "5": "G 2-white",
  "%": "G#2-black",
  "6": "A 2-white",
  "^": "A#2-black",
  "7": "B 2-white",
  "8": "C 3-white",
  "*": "C#3-black",
  "9": "D 3-white",
  "(": "D#3-black",
  "0": "E 3-white",
  q: "F 3-white",
  Q: "F#3-black",
  w: "G 3-white",
  W: "G#3-black",
  e: "A 3-white",
  E: "A#3-black",
  r: "B 3-white",
  t: "C 4-white",
  T: "C#4-black",
  y: "D 4-white",
  Y: "D#4-black",
  u: "E 4-white",
  i: "F 4-white",
  I: "F#4-black",
  o: "G 4-white",
  O: "G#4-black",
  p: "A 4-white",
  P: "A#4-black",
  a: "B 4-white",
  s: "C 5-white",
  S: "C#5-black",
  d: "D 5-white",
  D: "D#5-black",
  f: "E 5-white",
  g: "F 5-white",
  G: "F#5-black",
  h: "G 5-white",
  H: "G#5-black",
  j: "A 5-white",
  J: "A#5-black",
  k: "B 5-white",
  l: "C 6-white",
  L: "C#6-black",
  z: "D 6-white",
  Z: "D#6-black",
  x: "E 6-white",
  c: "F 6-white",
  C: "F#6-black",
  v: "G 6-white",
  V: "G#6-black",
  b: "A 6-white",
  B: "A#6-black",
  n: "B 6-white",
};

const PianoKeyBoard: React.FC<PianoKeyBoardProps> = ({ select }) => {
  const [press, setPress] = useState("");

  useEffect(() => {
    const playSound = (url: string) => {
      let audio = document.createElement("audio");
      audio.src = url;
      audio.onloadeddata = () => {
        audio.play().then(() => audio.remove());
      };
    };
    document.addEventListener("keydown", (event) => {
      let path = "";
      let idx = null;
      idx = event.key;
      let k = Object.keys(reverseKeyMap).indexOf(event.key);
      if (k === -1) return;
      path = "sounds/" + reverseKeyMap[idx]?.split("-")[0].replace(" ", "").replace("#", "b") + ".mp3";
      setPress(reverseKeyMap[idx]);
      playSound(path);
    });
  }, []);
  return (
    <div className="w-[98%] rounded-2xl bg-indigo-600 h-[90%] flex items-center justify-center">
      <div className="box-border  w-auto gap-0 h-full flex items-center justify-between">
        {KeyMapArray.map((arrayItem, i) => {
          const item = arrayItem[0];
          const [_, color] = item.split("-");
          if (color === "black") {
            return;
          }
          if (i + 1 < KeyMapArray.length) {
            const nextItem = KeyMapArray[i + 1][0];
            const [__, nextColor] = nextItem.split("-");
            if (nextColor === "black") {
              return (
                <div className="relative box-border h-[98%] w-auto p-0 m-0" key={i}>
                  <PianoButton
                    description={[item, KeyMapArray[i][1]]}
                    wrap={true}
                    press={press}
                    select={select}
                  ></PianoButton>
                  <PianoButton
                    description={[nextItem, KeyMapArray[i + 1][1]]}
                    wrap={true}
                    press={press}
                    select={select}
                  ></PianoButton>
                </div>
              );
            }
          }
          return (
            <PianoButton
              description={[item, KeyMapArray[i][1]]}
              wrap={false}
              press={press}
              key={i}
              select={select}
            ></PianoButton>
          );
        })}
      </div>
    </div>
  );
};

export default PianoKeyBoard;
