import { ResearchView } from "@/components/studio/research-view";
import { StudioShell } from "@/components/studio/shell";

export default function ResearchPage() {
  return (
    <StudioShell mode="research">
      <ResearchView />
    </StudioShell>
  );
}
