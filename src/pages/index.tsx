import { ConnectedMessage } from "@/components/connectedMessage";
import { Message } from "@/components/message";
import { MessageInput } from "@/components/messageInput";
import { serverEndPoint } from "@/config";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
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

  function onReciveChatID(id : string) {
    console.log(id)
    setId(id)
  }

  function onReciveMessage(message: Message) {
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
    socket.on("recive-id", onReciveChatID)

    return () => {
      socket.off("connect", onConnect);
      socket.off("recive-message", onReciveMessage)
      socket.off("recive-id", onReciveChatID)
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
