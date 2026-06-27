import { MyProjects, MyProjectType } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import { Separator } from "@/components/ui/separator";

interface ProjectItemProps {
  project: MyProjectType;
}

export function ProjectItem({ project }: ProjectItemProps) {
  return (
    <>
      <div className="py-1">
        <Card className="px-1 p-0 bg-background/20  w-full shadow-none rounded border-0">
          <CardHeader className="px-2 space-y-0.5">
            <div className="flex rounded w-full sm:items-center sm:justify-between flex-col sm:flex-row gap-2">
              <h1 className="sm:text-xl text-lg leading-none font-bold">
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
            <a
              href={project.repo_url}
              target="_blank"
              rel="noreferrer"
              className="hover:underline underline-offset-4 line-clamp-1 text-ellipsis text-sm text-muted-foreground"
            >
              {project.repo_url}
            </a>
          </CardHeader>

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
      </div>
      {project.key !== MyProjects[MyProjects.length - 1].key && (
        <Separator className="border-edge my-3" />
      )}
    </>
  );
}
