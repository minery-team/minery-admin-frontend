'use client';

import Home from '@/app/page';
import { UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import { useRouter, usePathname } from 'next/navigation';

export function MenuBar() {
  const router = useRouter();
  const path = usePathname();

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  //FIXME: inline style 제거
  return (
    <Sider style={{ height: '100vh' }}>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[path]}
        items={[
          {
            key: '/',
            icon: <Home />,
            label: '홈',
            onClick: () => handleMenuClick('/'),
          },
          {
            key: '/wine',
            icon: <UserOutlined />,
            label: '와인',
            onClick: () => handleMenuClick('/wine'),
          },
          {
            key: '/order',
            icon: <VideoCameraOutlined />,
            label: '주문',
            onClick: () => handleMenuClick('/order'),
          },
        ]}
      />
    </Sider>
  );
}
