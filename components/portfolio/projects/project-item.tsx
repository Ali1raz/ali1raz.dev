import {
  TimelineContent,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/reui/timeline";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible, //
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { MyProjectType } from "@/data/projects";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

interface ProjectItemProps {
  project: MyProjectType;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Collapsible>
      <TimelineItem step={project.key} className="my-4">
        <TimelineHeader>
          {/* <TimelineDate></TimelineDate> */}
          <TimelineTitle className="text-lg font-medium hover:underline underline-offset-4">
            <CollapsibleTrigger className="w-full flex items-center justify-between">
              <Link href={project.repo_url}>{project.title}</Link>
              <ChevronDown className="transition-transform data-[state=open]:rotate-180" />
            </CollapsibleTrigger>
          </TimelineTitle>
        </TimelineHeader>
        <TimelineIndicator />
        <TimelineSeparator />
        <TimelineContent>
          <CollapsibleContent>
            <p className="text-sm text-muted-foreground">
              {project.description}
            </p>
          </CollapsibleContent>

          <div className="flex items-center flex-wrap *:hover:bg-accent gap-1 my-2">
            {project.tech_stack.map((tech) => (
              <Badge variant="outline" key={tech}>
                {tech.charAt(0).toUpperCase() + tech.slice(1)}
              </Badge>
            ))}
          </div>
        </TimelineContent>
      </TimelineItem>
    </Collapsible>
  );
}
