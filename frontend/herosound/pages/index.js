import { MainView } from "../components/main-view";
import { Sidebar } from "../components/sidebar";
import { MediaPlayer } from "@/components/media-player";
import { ScrollArea } from "../components/ui/scroll-area";

export default function Home() {
  return (
    <div className="w-full grid grid-rows-[1fr_90px]">
    <div className="w-full h-[calc(100vh_-_90px)] grid grid-cols-[260px_1fr] justify-center">
      <Sidebar />
      
      <MainView />
    </div>
   
    <MediaPlayer />
  </div>
  );
}
