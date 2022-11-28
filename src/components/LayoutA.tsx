import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function LayoutA({ children }: IProps) {
  return <div>This is Layout A{children}</div>;
}
