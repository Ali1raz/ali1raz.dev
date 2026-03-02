import {
  Panel,
  PanelContent,
  PanelHeader,
  PanelTitle,
  PanelTitleSup,
} from "@/components/general/panel";
import { ProjectItem } from "./project-item";
import { MyProjects } from "@/data/projects";
import { Timeline } from "@/components/reui/timeline";

export function Projects() {
  return (
    <Panel id="projects" className="border-b-0 ">
      <PanelHeader className="p-4">
        <PanelTitle>
          Projects
          <PanelTitleSup className="text-sm ml-3">
            ({MyProjects.length})
          </PanelTitleSup>
        </PanelTitle>
      </PanelHeader>
      <PanelContent>
        <Timeline defaultValue={MyProjects.length} className="">
          {MyProjects.map((project) => (
            <ProjectItem key={project.key} project={project} />
          ))}
        </Timeline>
      </PanelContent>
    </Panel>
  );
}
