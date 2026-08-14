import { VideoView } from "@/components/studio/video-view";
import { StudioShell } from "@/components/studio/shell";

export default function VideoPage() {
  return (
    <StudioShell mode="video">
      <VideoView />
    </StudioShell>
  );
}
