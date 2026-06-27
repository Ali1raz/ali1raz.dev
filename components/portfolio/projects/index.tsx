"use client";

import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/general/panel";
import { ProjectItem } from "./project-item";
import { MyProjects, MyProjectType } from "@/data/projects";
import { useState } from "react";
import { SITE } from "@/data/site";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export function Projects() {
  const [open, setOpen] = useState(false);

  const visibleProjects = MyProjects.slice(0, SITE.visible_projects);
  const hiddenProjects = MyProjects.slice(SITE.visible_projects);
  const hasMore = hiddenProjects.length > 0;

  return (
    <Panel id="projects" className="border-b-0">
      <PanelHeader className="p-4">
        <PanelTitle>
          Projects
          <PanelTitleSup className="text-sm ml-3">
            ({MyProjects.length})
          </PanelTitleSup>
        </PanelTitle>
      </PanelHeader>
      <PanelContent className="space-y-2">
        {visibleProjects.map((project) => (
          <ProjectItem key={project.key} project={project} />
        ))}

        {hasMore && (
          <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleContent className="space-y-2">
              {hiddenProjects.map((project) => (
                <ProjectItem key={project.key} project={project} />
              ))}
            </CollapsibleContent>
            <CollapsibleTrigger asChild>
              <div className="w-full cursor-pointer">
                <div className="relative flex items-center gap-2">
                  <Separator className="flex-1" />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded shrink-0 text-muted-foreground hover:text-foreground px-2"
                  >
                    {open ? (
                      <>
                        <ChevronUp className="mr-2 size-4" />
                        Show less
                      </>
                    ) : (
                      <>
                        <ChevronDown className="mr-2 size-4" />
                        Show all <MoreProjects projects={hiddenProjects} />
                      </>
                    )}
                  </Button>
                  <Separator className="flex-1" />
                </div>
              </div>
            </CollapsibleTrigger>
          </Collapsible>
        )}
      </PanelContent>
    </Panel>
  );
}

function MoreProjects({ projects }: { projects: MyProjectType[] }) {
  const ps = projects.slice(0, 2);
  const remaining = projects.length - 2;

  return (
    <div className="flex items-center gap-1">
      {ps.map((p) => (
        <Badge
          variant="outline"
          key={p.key}
          className="hover:border-muted-foreground/40"
        >
          {p.title}
        </Badge>
      ))}
      {remaining > 0 && <Badge variant="outline">+{remaining} more</Badge>}
    </div>
  );
}
