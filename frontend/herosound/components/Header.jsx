import { Sidebar } from "./sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/card";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRef, useEffect, useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export function Header(){
 
    return(<>
       
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
             
                  <div className="relative transition-all flex flex-row items-center justify-center gap-x-2 bg-black p-[2px] rounded-full dark:hover:bg-stone-700/70">
                    <span className="absolute flex h-5 w-5 animate-bounce items-center justify-center -right-2 top-0 z-10">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
                    </span>
                    
                    <span className="hidden lg:block font-semibold text-white leading-none">
                     
                    </span>
                  </div>
            </header>
          
          </div>
        </ScrollArea>
        </>
    )
}

