import { Gift, ArrowUpRight } from "lucide-react";

export default function RewardsCard() {
  const handleOpenRewards = () => {
    window.open("https://rewards.bing.com/", "_blank");
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl shadow-xl relative overflow-hidden group border border-white/10">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full -mr-16 -mt-16 blur-3xl group-hover:bg-blue-500/30 transition-colors"></div>
      
      <div className="flex gap-5 items-center mb-8">
        <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10 shadow-inner">
          <Gift className="text-blue-400" size={24} />
        </div>

        <div>
          <h3 className="font-bold text-xl text-white">
            Rewards Hub
          </h3>
          <p className="text-sm text-gray-400 font-medium tracking-tight">
            Claim your hard-earned points
          </p>
        </div>
      </div>

      <button 
        onClick={handleOpenRewards}
        className="group/btn bg-white hover:bg-white text-black w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-white/5"
      >
        <span>Open Rewards</span>
        <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
      </button>
    </div>
  );
}
