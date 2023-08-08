import { useEffect, useState } from 'react';
import { getLoginStatus } from '@/common/api/login/getLoginStatus';

import { useRouter } from 'next/navigation';

export function useLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    const res = await getLoginStatus({ id, password });
    setIsLogin(res);
  };

  useEffect(() => {
    if (!isLogin) return;

    router.push('/');
  }, [isLogin]);

  return { handleLogin, setId, setPassword, isLogin };
}
