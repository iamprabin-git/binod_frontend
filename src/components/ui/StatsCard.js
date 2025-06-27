// src/components/ui/StatsCard.jsx
const StatsCard = ({ title, value, bgColor, textColor }) => {
  return (
    <div className={`${bgColor} rounded-lg p-4 shadow`}>
      <div className={`text-sm ${textColor}`}>{title}</div>
      <div className="text-2xl font-bold mt-1">{value}</div>
    </div>
  );
};

export default StatsCard;