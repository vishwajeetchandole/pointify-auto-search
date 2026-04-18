import avatar from "../assets/avatar.png";

export default function GreetingCard() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    if (hour < 21) return "Good Evening";
    return "Good Night";
  };

  const getEmoji = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "☀️";
    if (hour < 17) return "🌤️";
    if (hour < 21) return "🌅";
    return "🌙";
  };

  return (
    <div className="bg-white p-8 rounded-3xl flex gap-8 items-center border border-gray-100/50 shadow-sm card-hover relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500 rounded-2xl blur-xl opacity-10 scale-110"></div>
        <img
          src={avatar}
          className="w-24 h-24 relative rounded-2xl bg-gray-50 object-cover border-2 border-white shadow-sm"
          alt="Avatar"
        />
      </div>

      <div className="relative">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-1">
          {getGreeting()}, Vish! <span className="inline-block animate-bounce-slow">👋</span> {getEmoji()}
        </h2>
        <p className="text-gray-500 font-medium text-lg">
          Your daily quest is ready. Complete searches to unlock exclusive rewards.
        </p>
      </div>
    </div>
  );
}
