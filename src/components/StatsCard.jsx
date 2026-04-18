import { Search, Trophy, Target } from "lucide-react";

export default function StatsCard({ searchCount }) {
  const total = 20;
  const points = searchCount * 3;

  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100/50 shadow-sm card-hover">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Search Stats</h3>

      <div className="grid gap-6">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
              <Search size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Searches</p>
              <p className="text-xs font-medium text-gray-400">Today's activity</p>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-900">{searchCount}</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600">
              <Target size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Goal</p>
              <p className="text-xs font-medium text-gray-400">Daily target</p>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-900">{total}</span>
        </div>

        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100/50">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-600">
              <Trophy size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-500">Points</p>
              <p className="text-xs font-medium text-gray-400">Current earnings</p>
            </div>
          </div>
          <span className="text-xl font-bold text-gray-900">{points}</span>
        </div>
      </div>
    </div>
  );
}
