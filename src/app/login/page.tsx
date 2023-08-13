'use client';

import { KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import { useLogin } from './hooks/useLogin';

export default function Login() {
  const { handleLogin, setId, setPassword } = useLogin();

  return (
    <Space
      className="flex justify-center w-52 h-screen mx-auto"
      direction="vertical"
    >
      <Input
        size="middle"
        placeholder="아이디"
        prefix={<UserOutlined />}
        onChange={(e) => setId(e.target.value)}
      />
      <Input.Password
        placeholder="비밀번호"
        prefix={<KeyOutlined />}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button color={'blue'} onClick={handleLogin}>
        로그인
      </Button>
    </Space>
  );
}
