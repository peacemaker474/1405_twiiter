'use client';

import { useRouter } from 'next/navigation';

import PublicLayout from '../_component/PublicLayout';

export default function RedirectLoginPage() {
  const router = useRouter();
  router.replace('/i/flow/login');

  return <PublicLayout />;
}
