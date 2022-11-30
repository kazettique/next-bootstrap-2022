import { IconId } from '@/types/icon-types';

interface Props {
  iconId: IconId;
  className?: string;
}

export default function Icon({ iconId, className = `` }: Props) {
  return <i className={`icon-${iconId} ${className}`} />;
}
