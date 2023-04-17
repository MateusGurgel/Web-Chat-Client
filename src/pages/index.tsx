import { ConnectedMessage } from "@/components/connectedMessage";
import { Message } from "@/components/message";
import { MessageInput } from "@/components/messageInput";
import { serverEndPoint } from "@/config";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [myId, setId] = useState<string | null>(null)

  function handleSubmitMessage(message: String) {
    console.log(message);
  }

  useEffect(() => {
    const socket = io(serverEndPoint);
    setSocket(socket);

    socket.on("connect", ()=> {
      setId(socket.id)
    })

  }, []);

  return (
    <main className={inter.className}>
      {myId && <ConnectedMessage id={myId}/>}
      <Message message="Olá!" />
      <Message message="Olá!" />
      <Message message="Como você vai?" />
      <Message message="Bem!" />

      <MessageInput handleSubmitMessage={handleSubmitMessage} />
    </main>
  );
}
