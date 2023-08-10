'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getAccessToken } from '@/utils/access-token';

//FIXME: 현재는 권한이 필요한 페이지 컴포넌트마다 withAuth로 감싸주어야한다!
const withAuth = (WrappedComponent: any) => {
  return <P extends {}>(props: P) => {
    const router = useRouter();
    const accessToken = getAccessToken();
    const pathname = usePathname();

    useEffect(() => {
      if (!accessToken && pathname !== '/login') {
        router.push(`/login?from=${pathname}`);
      }
    }, [accessToken]);

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
