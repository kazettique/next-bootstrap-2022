import { ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export default function LayoutB({ children }: IProps) {
  return <div>This is Layout B{children}</div>;
}
