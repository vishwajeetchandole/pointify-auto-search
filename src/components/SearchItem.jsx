import { Search, ExternalLink, CheckCircle2 } from "lucide-react";

export default function SearchItem({ text, onSearch, isCompleted }) {
  return (
    <div className={`group p-4 rounded-2xl flex justify-between items-center transition-all duration-300 card-hover border ${
      isCompleted 
        ? "bg-emerald-50/50 border-emerald-100 shadow-sm" 
        : "bg-white border-gray-100 hover:border-blue-100 hover:shadow-md hover:shadow-blue-500/5"
    }`}>
      <div className="flex items-center gap-4 flex-1">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
          isCompleted 
            ? "bg-emerald-100 text-emerald-600" 
            : "bg-gray-50 text-gray-400 group-hover:bg-blue-50 group-hover:text-blue-500"
        }`}>
          {isCompleted ? <CheckCircle2 size={18} /> : <Search size={18} />}
        </div>
        <p className={`text-sm font-medium leading-tight transition-colors ${
          isCompleted ? "text-emerald-900/60 line-through" : "text-gray-700"
        }`}>
          {text}
        </p>
      </div>

      <button
        onClick={() => onSearch(text)}
        disabled={isCompleted}
        className={`px-5 py-2.5 rounded-xl flex gap-2 items-center text-sm font-bold transition-all shadow-sm ${
          isCompleted
            ? "bg-emerald-600 text-white cursor-default"
            : "bg-gray-900 hover:bg-black text-white active:scale-95"
        }`}
      >
        <span>{isCompleted ? "Completed" : "Search"}</span>
        {isCompleted ? (
          <CheckCircle2 size={14} className="animate-in zoom-in duration-300" />
        ) : (
          <ExternalLink size={14} className="opacity-50" />
        )}
      </button>
    </div>
  );
}
