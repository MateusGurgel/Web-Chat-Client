import { FaUserCircle } from "react-icons/fa";

interface MessageProps {
  message: string;
}

export function Message({ message }: MessageProps) {
  return (
    <div className="w-full p-5 flex items-center gap-4">
      <FaUserCircle size={50}/>
      <div>
      <h1 className="font-bold">Anonimous user</h1>
      <p>{message}</p>
      </div>
    </div>
  );
}
