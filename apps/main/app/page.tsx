import Votex from "@repo/ui/components/Votex";
import TypingTest from "@repo/ui/components/typingArea";

export default function Home() {
  return (
    <div>
      <div className=" mx-auto rounded-md  h-[700px] w-full overflow-hidden">
        <Votex />
      </div>
      <div id="typing-practice">
        <TypingTest />
      </div>
    </div>
  );
}
