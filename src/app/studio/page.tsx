import { ChatView } from "@/components/studio/chat-view";
import { StudioShell } from "@/components/studio/shell";

export default function StudioPage() {
  return (
    <StudioShell mode="chat">
      <ChatView />
    </StudioShell>
  );
}
