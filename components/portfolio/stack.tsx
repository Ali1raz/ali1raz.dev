import { TECH_STACK } from "@/data/stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../general/panel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Stack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle className="py-4">My Tech Stack</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <ul className="flex flex-wrap gap-4">
          {TECH_STACK.map((tech) => (
            <li key={tech.key}>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div className="flex items-center gap-2 cursor-pointer">
                      {<tech.icon className="size-8" />}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.title}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
