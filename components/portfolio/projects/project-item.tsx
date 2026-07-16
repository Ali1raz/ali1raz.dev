"use client";

import { MyProjects, MyProjectType } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { Separator } from "@/components/ui/separator";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { useEffect, useRef, useState } from "react";
import { ChevronsUpDownIcon } from "@/components/chevrons-up-down-icon";
import { ChevronsUpDownIconHandle } from "@/components/chevrons-up-down-icon";

interface ProjectItemProps {
  project: MyProjectType;
}

export function ProjectItem({ project }: ProjectItemProps) {
  const chevronsUpDownIconRef = useRef<ChevronsUpDownIconHandle>(null);
  const [isOpen, setIsOpen] = useState(project.key === 1);

  useEffect(() => {
    const controls = chevronsUpDownIconRef.current;
    if (!controls) return;

    if (isOpen) {
      controls.startAnimation();
    } else {
      controls.stopAnimation();
    }
  }, [isOpen]);

  return (
    <>
      <div className="py-1">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <div className="w-full cursor-pointer group">
              <Card className="px-1 p-0 bg-background/20 w-full shadow-none rounded border-0 hover:bg-background/30 transition-colors">
                <CardHeader className="px-2 space-y-0.5">
                  <div className="flex rounded w-full sm:items-center sm:justify-between flex-col sm:flex-row gap-2">
                    <h1 className="sm:text-2xl text-lg leading-none font-bold">
                      {project.title}
                    </h1>
                    <div className="flex flex-wrap gap-2">
                      {project.badges?.map((badge) => (
                        <Badge key={badge} variant="outline">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between w-full">
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline underline-offset-4 line-clamp-1 text-ellipsis text-sm text-muted-foreground"
                    >
                      {project.repo_url}
                    </a>
                    <div className="flex items-center gap-2 ml-2">
                      <ChevronsUpDownIcon
                        ref={chevronsUpDownIconRef}
                        duration={0.2}
                        className="size-4 text-muted-foreground group-hover:text-foreground transition-colors"
                        data-open={isOpen}
                      />
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="w-full overflow-hidden">
            <Card className="px-1 p-0 bg-background/20 w-full shadow-none rounded border-0 mt-2">
              <CardContent className="p-0 px-4 space-y-3 border-0">
                <Message
                  from="system"
                  className="leading-relaxed text-muted-foreground"
                >
                  <MessageContent>
                    <MessageResponse>{project.description}</MessageResponse>
                  </MessageContent>
                </Message>

                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="hover:border-muted-foreground/40 capitalize"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>
      </div>
      {project.key !== MyProjects[MyProjects.length - 1].key && (
        <Separator className="border-edge my-3" />
      )}
    </>
  );
}
