import { useEffect, useState } from 'react';
import { getLoginStatus } from '@/common/api/login/getLoginStatus';

import { atom, useRecoilState } from 'recoil';
import { useSearchParams, useRouter } from 'next/navigation';

export const loginState = atom<boolean>({
  key: 'login_state',
  default: false,
});

export function useLogin() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const params = useSearchParams();
  const router = useRouter();
  const from = params.get('from');

  const handleLogin = async () => {
    const res = await getLoginStatus({ id, password });
    setIsLogin(res);

    if (res) {
      from ? router.push(from) : router.push('/');
    }
  };

  return { handleLogin, setId, setPassword, isLogin };
}
