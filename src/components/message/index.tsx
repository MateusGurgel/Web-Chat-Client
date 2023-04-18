import { FaUserCircle } from "react-icons/fa";

interface MessageProps {
  user: string,
  content: string;
}

export function Message({ user, content }: MessageProps) {
  return (
    <div className="w-full p-5 flex items-center gap-4">
      <FaUserCircle size={50}/>
      <div>
      <h1 className="font-bold">{user}</h1>
      <p>{content}</p>
      </div>
    </div>
  );
}
