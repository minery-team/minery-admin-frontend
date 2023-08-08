'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getAccessToken } from '@/utils/access-token';

const withAuth = (WrappedComponent: any) => {
  return <P extends {}>(props: P) => {
    const router = useRouter();
    const accessToken = getAccessToken();

    useEffect(() => {
      if (!accessToken) {
        router.push('/login');
      }
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
