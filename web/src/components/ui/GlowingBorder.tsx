import React from 'react';

const GlowingBorder = ({ side = 'top', color = 'red' }) => {
    const positions = {
        top: 'top-0 left-0 right-0 h-[1px]',
        left: 'top-0 bottom-0 left-0 w-[1px]',
    };

    const colors = {
        red: 'via-red-500',
        blue: 'via-blue-500',
    }

    return (
        <div className={`absolute ${positions[side]} bg-gradient-to-r from-transparent ${colors[color]} to-transparent`}></div>
    );
};

export { GlowingBorder };
