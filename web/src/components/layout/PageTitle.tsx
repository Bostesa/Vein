import React from 'react';

interface PageTitleProps {
  title: string;
  children?: React.ReactNode; // Making children optional fixes errors on pages
}

const PageTitle: React.FC<PageTitleProps> = ({ title, children }) => (
    <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tighter">{title}</h1>
        <div>{children}</div>
    </div>
);

export default PageTitle;
