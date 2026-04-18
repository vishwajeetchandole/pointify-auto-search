import StatsCard from "./StatsCard";
import RewardsCard from "./RewardsCard";

export default function Widgets({ searchCount }) {
  return (
    <div className="flex flex-col gap-8 h-full">
      <StatsCard searchCount={searchCount} />
      <RewardsCard />
    </div>
  );
}
