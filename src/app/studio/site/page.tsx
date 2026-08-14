import { SiteView } from "@/components/studio/site-view";
import { StudioShell } from "@/components/studio/shell";

export default function SitePage() {
  return (
    <StudioShell mode="site">
      <SiteView />
    </StudioShell>
  );
}
