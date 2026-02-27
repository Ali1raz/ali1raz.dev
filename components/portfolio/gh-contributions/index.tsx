import { Suspense } from "react";

import { GitHubContributionFallback, GitHubContributionGraph } from "./graph";
import { Panel } from "@/components/general/panel";
import { getGitHubContributions } from "@/data/github-contributions";

export function GitHubContributions() {
  const contributions = getGitHubContributions();

  return (
    <Panel>
      <h2 className="sr-only">GitHub Contributions</h2>

      <Suspense fallback={<GitHubContributionFallback />}>
        <GitHubContributionGraph contributions={contributions} />
      </Suspense>
    </Panel>
  );
}
