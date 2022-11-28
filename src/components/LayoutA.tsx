import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function LayoutA({ children }: IProps) {
  return (
    <div className="border border-red-500 p-5">This is Layout A{children}</div>
  );
}
