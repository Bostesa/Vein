import React from 'react';

interface RiskBadgeProps {
  score: number;
}

const RiskBadge: React.FC<RiskBadgeProps> = ({ score }) => {
    const getRiskInfo = (score: number) => {
        if (score <= 40) return { color: 'bg-green-500/10 text-green-400', text: 'Low' };
        if (score <= 70) return { color: 'bg-yellow-500/10 text-yellow-400', text: 'Medium' };
        return { color: 'bg-red-500/10 text-red-400', text: 'High' };
    };

    const { color, text } = getRiskInfo(score);

    return (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${color}`}>
            {text}
        </span>
    );
};

export default RiskBadge;