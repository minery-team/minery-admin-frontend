'use client';

import { RecoilRoot } from 'recoil';
import React from 'react';

interface RecoilRootWrapperProps {
  children: React.ReactNode;
}

export default function RecoilWrapper({ children }: RecoilRootWrapperProps) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
