import React from 'react';
import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'mx-auto w-[90%] max-w-[500px] sm:max-w-[768px] sm:w-[90%] lg:max-w-[1440px] lg:w-[80%]',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
