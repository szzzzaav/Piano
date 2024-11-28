interface PianoBodyProps {
  children: React.ReactNode;
}

const PianoBody: React.FC<PianoBodyProps> = ({ children }) => {
  return <div className=" w-full h-full flex items-center justify-around">{children}</div>;
};

export default PianoBody;
