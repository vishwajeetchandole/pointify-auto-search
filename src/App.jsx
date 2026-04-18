import { useState } from "react";
import GreetingCard from "./components/GreetingCard";
import SearchList from "./components/SearchList";
import Widgets from "./components/Widgets";

export default function App() {
  const [searchCount, setSearchCount] = useState(0);

  const handleSearch = (query) => {
    window.open(
      `https://www.bing.com/search?q=${encodeURIComponent(query)}`,
      "pointify_search"
    );
    setSearchCount((prev) => prev + 1);
  };

  return (
    <div className="flex h-screen bg-[#fbfbfd] overflow-hidden">
      {/* Main Scrollable Content */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <div className="h-16 px-10 flex items-center justify-between bg-white/50 border-b border-gray-100/50 backdrop-blur-md">
          <div className="flex items-center gap-4">
             <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse"></div>
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center relative">
                   <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white"></div>
             </div>
             <h1 className="text-2xl font-bold tracking-tighter text-gray-900">Pointify</h1>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
          <div className="max-w-5xl mx-auto space-y-8">
            <GreetingCard />
            <SearchList onSearch={handleSearch} />
          </div>
        </div>
      </main>

      {/* Widgets Panel */}
      <aside className="w-[400px] border-l border-gray-100/50 bg-white/30 backdrop-blur-sm overflow-y-auto custom-scrollbar">
        <div className="p-8 pb-20">
          <Widgets searchCount={searchCount} />
        </div>
      </aside>
    </div>
  );
}
