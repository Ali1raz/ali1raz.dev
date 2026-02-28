import { USER } from "@/data/user";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "../general/panel";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const Socials = () => {
  return (
    <Panel>
      <PanelHeader className="p-2">
        <PanelTitle>Social</PanelTitle>
      </PanelHeader>
      <PanelContent>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {USER.social_links.map((social) => (
            <SocialLink key={social.title} {...social} />
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
};

function SocialLink({
  title,
  link,
  icon: Icon,
}: {
  title: string;
  link: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  return (
    <Link href={link} target="_blank">
      <li className="flex items-center group justify-between px-2">
        <div className="flex items-center gap-2">
          <Icon className="size-5" />
          <span>{title}</span>
        </div>
        <span>
          <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 transition duration-75" />
        </span>
      </li>
    </Link>
  );
}
