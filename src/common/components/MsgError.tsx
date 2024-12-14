import { FC } from "react";

interface IProps {
  children: React.ReactNode;
}

const MsgError: FC<IProps> = ({ children }) => {
  return (
    <div className="bg-red-100 rounded-md text-red-700 px-2 py-1 text-center">
      {children}
    </div>
  );
};

export default MsgError;
