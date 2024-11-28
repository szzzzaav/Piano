import { twMerge } from "tailwind-merge";
import { useEffect } from "react";

interface PianoButtonProps {
  description: [string, string];
  wrap: Boolean;
  press: string;
  select: number;
}

const PianoButton: React.FC<PianoButtonProps> = ({ description, wrap = false, press, select }) => {
  const [pitch, color] = description[0]?.split("-");
  return (
    <div
      className={twMerge(
        "box-border h-[98%] w-[33px] p-0 m-0 border-[1px] flex flex-col items-center justify-end rounded-b-lg text-xs ease-in duration-200 pb-7",
        wrap ? "h-full" : "",
        color === "black"
          ? "text-white bg-black absolute top-0 h-[60%] left-[15px] z-10"
          : "text-black bg-white pt-[180px]",
        press.split("-")[0] === pitch ? "bg-indigo-300" : ""
      )}
    >
      {select !== 3 && <div>{pitch}</div>}
      {select === 2 && <div>{description[1]}</div>}
    </div>
  );
};

export default PianoButton;
