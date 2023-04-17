import { FaUserCircle } from "react-icons/fa";

interface ConnectedMessageProps {
  id: string;
}

export function ConnectedMessage({ id }: ConnectedMessageProps) {
  return (
    <div className="w-full text-center mt-5">
      <p>You have connected with id: {id}</p>
    </div>
  );
}
