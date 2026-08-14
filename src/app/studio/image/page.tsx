import { ImageView } from "@/components/studio/image-view";
import { StudioShell } from "@/components/studio/shell";

export default function ImagePage() {
  return (
    <StudioShell mode="image">
      <ImageView />
    </StudioShell>
  );
}
