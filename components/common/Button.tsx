
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  as?: 'button' | 'a';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', as = 'button', href, ...props }) => {
  const baseClasses = "inline-block px-6 py-3 rounded-md font-semibold text-center transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-secondary text-white hover:bg-blue-800 focus:ring-blue-600',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  };

  const className = `${baseClasses} ${variantClasses[variant]} ${props.className || ''}`;

  if (as === 'a') {
    return <a href={href} className={className}>{children}</a>;
  }
  
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
};

export default Button;
