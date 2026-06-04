import { MyProjectType } from "@/data/projects";
import {
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ProjectItemProps {
  project: MyProjectType;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <TimelineItem className="not-first:border-t border-edge" step={project.key}>
      <TimelineSeparator />
      <TimelineIndicator />

      <Collapsible className="w-full group/collapsible py-1">
        <Card className="px-1 p-0 bg-background/20 shadow-none rounded border-0">
          <TimelineHeader>
            <CardHeader className="p-2 bg-background">
              <CollapsibleTrigger asChild>
                <Button
                  className="flex cursor-pointer rounded px-2 p-0 bg-background! hover:bg-background border-0 shadow-none w-full items-center justify-between"
                  variant="outline"
                >
                  <TimelineTitle className="text-xl">
                    {project.title}
                  </TimelineTitle>
                  <div className="flex gap-2">
                    <div className="gap-1 hidden sm:flex">
                      {project.badges?.map((badge) => (
                        <Badge key={badge} variant="outline">
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <ChevronDown className="size-6 text-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-180" />
                  </div>
                </Button>
              </CollapsibleTrigger>
            </CardHeader>
          </TimelineHeader>

          <CollapsibleContent>
            <CardContent className="p-0 px-4 border-0 rounded">
              <TimelineContent className="space-y-3">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="hover:border-muted-foreground/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-fit rounded border-edge!"
                >
                  <a href={project.repo_url} target="_blank" rel="noreferrer">
                    Visit
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </TimelineContent>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    </TimelineItem>
  );
}
