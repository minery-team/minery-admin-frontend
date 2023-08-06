'use client';

import { useRef } from 'react';

import { WineInfo } from './model/WineInfo';
import { postWine } from './api/postWine';
import { postProduct } from './api/postProduct';
import { useWineKindList } from './hooks/useWineKindList';
import WineInfoByCategory from './components/WineInfoByCategory';
import { addWine } from './utils/addWine';
import { addProduct } from './utils/addProduct';

function AddWinePage() {
  const wineList = useWineKindList();
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmitWineInfo = async () => {
    const winePostProps = addWine(formRef, wineList);

    if (winePostProps) {
      const { _id } = await postWine(winePostProps);
      const productPostProps = addProduct(formRef, _id);
      await postProduct(productPostProps);
    }
  };

  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <div
        style={{ fontSize: '30px', padding: '0 0 0 20px', fontWeight: 'bold' }}
      >
        와인 추가
      </div>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitWineInfo();
        }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          padding: '20px',
        }}
      >
        {WineInfo.map((info) => {
          return <WineInfoByCategory wineCategory={info} />;
        })}
        <button
          type="submit"
          style={{
            width: 100,
            height: 50,
            backgroundColor: '#1777FF',
            fontSize: '20px',
            borderRadius: 10,
            color: '#ffffff',
            alignSelf: 'end',
          }}
        >
          저장
        </button>
      </form>
    </div>
  );
}

export default AddWinePage;
