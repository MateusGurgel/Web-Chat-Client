import { Message } from "@/components/message";
import { MessageInput } from "@/components/messageInput";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  function handleSubmitMessage(message: String) {
    console.log(message);
  }

  return (
    <main className={inter.className}>
      <Message message="Olá!" />
      <Message message="Olá!" />
      <Message message="Como você vai?" />
      <Message message="Bem!" />
      
      <MessageInput handleSubmitMessage={handleSubmitMessage} />
    </main>
  );
}

