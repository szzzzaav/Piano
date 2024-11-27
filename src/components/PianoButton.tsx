import { twMerge } from "tailwind-merge";

interface PianoButtonProps {
  description: string;
  wrap: Boolean;
  press: string;
  setPress: Function;
}

const PianoButton: React.FC<PianoButtonProps> = ({ description, wrap = false, press, setPress }) => {
  const [pitch, color] = description.split("-");
  let playSound = () => {
    let curPitch = pitch;
    setPress(pitch);
    curPitch = curPitch.replace("#", "b").replace(" ", "");
    let audio = document.createElement("audio");
    audio.src = "/sounds/" + curPitch + ".mp3";
    audio.volume = 0.8;
    audio.play().then(() => audio.remove());
  };
  return (
    <div
      onMouseDown={() => playSound()}
      className={twMerge(
        "box-border h-[98%] w-[30px] p-0 m-0 border-[1px] flex items-center justify-center rounded-b-lg text-xs ease-in duration-200",
        wrap ? "h-full" : "",
        color === "black"
          ? "text-white bg-black absolute top-0 h-[60%] left-[15px] z-10"
          : "text-black bg-white pt-[180px]",
        press === pitch ? "bg-indigo-300" : ""
      )}
    >
      <div>{pitch}</div>
    </div>
  );
};

export default PianoButton;
