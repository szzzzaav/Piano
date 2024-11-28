import { HiMusicalNote } from "react-icons/hi2";
import { twMerge } from "tailwind-merge";

interface PianoControlButtonProps {
  selected: Boolean;
  selectedColor: string;
  onClick: React.MouseEventHandler<SVGSVGElement>;
}

const PianoControlButton: React.FC<PianoControlButtonProps> = ({ selected, selectedColor, onClick }) => {
  return (
    <div className="relative">
      <HiMusicalNote
        onClick={onClick}
        className={twMerge(
          `absolute font-semibold text-4xl hover:${selectedColor} hover:ease-out ease-in duration-75 cursor-pointer z-10`,
          selected ? selectedColor : "text-gray-400 text-opacity-50"
        )}
      />
      <HiMusicalNote
        onClick={onClick}
        className={twMerge(`absolute font-semibold text-4xl z-0 text-gray-500 text-opacity-60`)}
        style={{ transform: "translate(2px,3px)" }}
      />
    </div>
  );
};

export default PianoControlButton;
