import { useState } from "react";
import { ScrollArea } from "../components/ui/scroll-area";
import { Card } from "../components/card";
import { Icons } from "../components/icons";
import { Button } from "../components/ui/button";
import { mainViewData } from "@/data/main-view";
import { ConnectWallet } from "@thirdweb-dev/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";



export function MainView() {
  const [open, setOpen] = useState(false);

  return (
    <ScrollArea className="relative bg-[#121212]">
      <div className="pb-4">
        <header className="sticky top-0 h-16 bg-black/80 flex flex-row items-center justify-between px-8 z-10">
          <div className="space-x-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="inline-block relative h-8 w-8 p-3 rounded-full dark:bg-black/80 dark:hover:bg-black/80">
                    <Icons.chevronLeft className="absolute inset-0 m-auto h-4 w-4 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Go back</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button className="inline-block relative h-8 w-8 p-3 rounded-full dark:bg-black/80 dark:hover:bg-black/80">
                    <Icons.chevronRight className="absolute inset-0 m-auto h-4 w-4 text-white" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Go forward</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
       <ConnectWallet/>
        </header>
        <div className="mt-8 mb-8 px-8">
          {mainViewData.map((data) => (
            <section key={data.section.id} className="mt-9 first:mt-0">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-stone-100 font-bold text-2xl">
                  {data.section.title}
                </h2>
                <Button variant="link" className="font-semibold">
                  Show all
                </Button>
              </div>
              <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(180px,_1fr))] overflow-hidden grid-rows-[1fr_0_0_0_0_0] items-stretch justify-start gap-x-6">
                {data.section.content.map((item) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    text={item.text}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}