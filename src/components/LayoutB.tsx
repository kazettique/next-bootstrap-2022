import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function LayoutB({ children }: IProps) {
  return (
    <div className="border border-blue-500">This is Layout B{children}</div>
  );
}
