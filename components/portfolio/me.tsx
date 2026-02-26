import { USER } from "@/data/user";
import Image from "next/image";

export function Me() {
  return (
    <div className="flex sm:items-end-safe sm:flex-row flex-col items-start border-x border-edge mt-6 screen-line-after">
      <div className="shrink-0 border border-edge">
        <div className="relative mx-2 my-2 border-edge size-40 rounded-full overflow-hidden p-2">
          <Image
            src={USER.avatar}
            fill
            alt={USER.name}
            className="aspect-square select-none rounded-full object-cover ring-1 ring-border ring-offset-2 ring-offset-background sm:size-40"
          />
        </div>
      </div>
      <div className="w-full border-t border-edge">
        <div className="flex flex-1 flex-col">
          <div>
            <div className="p-4">
              <h1 className="text-3xl font-bold">{USER.name}</h1>
            </div>
          </div>
          <div className="flex-1 flex border-t border-edge">
            <p className="p-2">{USER.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
