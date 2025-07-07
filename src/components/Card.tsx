import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ title, children, className = '', href }: CardProps) {
  const baseClasses = 'p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow';
  
  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${className} block hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900`}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
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
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <div className="text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
} 