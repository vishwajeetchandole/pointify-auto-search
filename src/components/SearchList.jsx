import { useState, useEffect } from "react";
import { RefreshCw, Play, Loader2 } from "lucide-react";
import SearchItem from "./SearchItem";

export default function SearchList({ onSearch }) {
  const [searches, setSearches] = useState([]);
  const [completedSearches, setCompletedSearches] = useState(new Set());
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isAutoSearching, setIsAutoSearching] = useState(false);

  const topics = [
    "latest AI startups", "technology trends", "global economy", "startup funding",
    "AI tools", "machine learning news", "crypto market", "stock market",
    "developer tools", "business trends", "AI future", "education technology",
    "innovation trends", "tech layoffs", "government policies", "AI startups India",
    "automation tools", "software trends", "AI productivity tools", "future programming languages"
  ];

  const prefixes = [
    "Latest updates about", "Complete analysis of", "Future predictions for",
    "Recent developments in", "Why trending", "Detailed explanation about"
  ];

  const generateSearches = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const list = Array.from({ length: 20 }, () => {
        const topic = topics[Math.floor(Math.random() * topics.length)];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        return `${prefix} ${topic}`;
      });
      setSearches(list);
      setCompletedSearches(new Set());
      setIsRefreshing(false);
    }, 600);
  };

  const handleSearchClick = (item, index) => {
    if (completedSearches.has(index)) return;
    const newCompleted = new Set(completedSearches);
    newCompleted.add(index);
    setCompletedSearches(newCompleted);
    onSearch(item);
  };

  const handleAutoSearch = async () => {
    if (isAutoSearching) return;
    setIsAutoSearching(true);
    
    for (let i = 0; i < searches.length; i++) {
      if (completedSearches.has(i)) continue;
      
      const item = searches[i];
      
      // Update state
      setCompletedSearches(prev => new Set(prev).add(i));
      
      // Perform search
      onSearch(item);
      
      // Wait for a small delay to avoid browser popup blocking and ensure search registers
      await new Promise(resolve => setTimeout(resolve, 2500));
    }
    
    setIsAutoSearching(false);
  };

  useEffect(() => {
    generateSearches();
  }, []);

  return (
    <div className="bg-white/50 border border-gray-100/50 rounded-3xl flex flex-col flex-1 overflow-hidden shadow-sm">
      <div className="p-8 pb-4 flex justify-between items-end">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
            <span className="text-xs font-bold text-blue-600 tracking-wider uppercase">Live Quests</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900">
            Daily Search Tasks
          </h3>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleAutoSearch}
            disabled={isAutoSearching || searches.length === 0}
            className="group bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-2xl flex gap-3 items-center font-bold transition-all hover:shadow-lg active:scale-95 disabled:opacity-50"
          >
            {isAutoSearching ? (
              <Loader2 size={18} className="animate-spin" />
            ) : (
              <Play size={18} fill="currentColor" />
            )}
            <span>{isAutoSearching ? "Auto Searching..." : "Auto Search"}</span>
          </button>

          <button
            onClick={generateSearches}
            disabled={isRefreshing || isAutoSearching}
            className="group bg-white border border-gray-200 hover:border-gray-900 text-gray-900 px-6 py-3 rounded-2xl flex gap-3 items-center font-bold transition-all hover:shadow-lg active:scale-95 disabled:opacity-50"
          >
            <RefreshCw size={18} className={`${isRefreshing ? 'animate-spin' : 'group-hover:rotate-180 transition-transform duration-500'}`} />
            <span>Refresh Tasks</span>
          </button>
        </div>
      </div>

      <div className="p-8 pt-4 overflow-y-auto flex-1 custom-scrollbar">
        <div className="grid gap-3">
          {searches.map((item, index) => (
            <SearchItem
              key={`${index}-${item}`}
              text={item}
              isCompleted={completedSearches.has(index)}
              onSearch={() => handleSearchClick(item, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
