'use client'

import { useSearchParams } from 'next/navigation';

export default function ThankYouName() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Guest';

  return (
    <>{name}</>
  );
}
