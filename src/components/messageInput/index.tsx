import TextareaAutosize from "react-textarea-autosize";
import { BsFillSendFill } from "react-icons/bs";
import { FormEvent } from "react";

interface MessageInputProps {
  handleSubmitMessage: (message: string) => void;
}

export function MessageInput({ handleSubmitMessage }: MessageInputProps) {
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    handleSubmitMessage("Message");
  }

  return (
    <div className="fixed bottom-0 left-0 right-0">
      <form onSubmit={handleSubmit} className="flex m-8 gap-4">
        <TextareaAutosize
          maxRows={22}
          className="flex w-full bg-zinc-700 resize-none focus:outline-none rounded py-2 md:pl-4"
        />
        <button type="submit">
          <BsFillSendFill size={22} className="w-full" />
        </button>
      </form>
    </div>
  );
}
