import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ title, children, className = '', href }: CardProps) {
  const baseClasses = 'p-8 rounded-xl border bg-white dark:bg-gray-800 shadow-sm transition-all duration-300';
  
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className} block hover:border-blue-300 dark:hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 hover:-translate-y-1`}
      >
        <h3 className="text-xl font-bold text-professional dark:text-white mb-4 leading-tight">
          {title}
        </h3>
        <div className="text-gray-600 dark:text-gray-300">
          {children}
        </div>
      </a>
    );
  }

  return (
    <div className={`${baseClasses} ${className}`}>
      <h3 className="text-xl font-bold text-professional dark:text-white mb-4 leading-tight">
        {title}
      </h3>
      <div className="text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
} 