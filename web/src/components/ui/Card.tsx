import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => (
    <div className={`bg-base-light border border-border-color rounded-xl p-6 relative ${className}`}>
        {children}
    </div>
);

export default Card;
