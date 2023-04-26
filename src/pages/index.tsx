import { ConnectedMessage } from "@/components/connectedMessage";
import { Message } from "@/components/message";
import { MessageInput } from "@/components/messageInput";
import { serverEndPoint } from "@/config";
import { Inter } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import { Socket, io } from "socket.io-client";

const inter = Inter({ subsets: ["latin"] });

interface Message {
  user: string;
  content: string;
}

export default function Home() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [myId, setId] = useState<string | undefined>("");

  function handleSubmitMessage(message: string) {
    socket?.emit("send-message", message);
  }

  function onConnect() {
    console.log("Connected!");
  }

  function onReciveMessage(message: Message) {
    setId(message.user)
    setMessages(prev => [...prev, message])
  }

  useEffect(() => {
    const socket = io(serverEndPoint);
    setSocket(socket);

    if (!socket){
      return
    }

    socket.on("connect", onConnect);
    socket.on("recive-message", onReciveMessage)

    return () => {
      socket.off("connect", onConnect);
      socket.off("recive-message", onReciveMessage)
    } 


  }, []);

  return (
    <main style={inter.style} className="mb-20">
      <ConnectedMessage id={myId} />

      {messages.map((message, index) => (
        <Message key={index} user={message.user} content={message.content} />
      ))}
      
      <MessageInput handleSubmitMessage={handleSubmitMessage} />
    </main>
  );
}
