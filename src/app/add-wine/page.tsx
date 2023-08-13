'use client';

import { useRef } from 'react';

import { WineInfo } from './model/WineInfo';
import { postWine } from './api/postWine';
import { postProduct } from './api/postProduct';
import { useWineKindList } from './hooks/useWineKindList';
import WineInfoByCategory from './components/WineInfoByCategory';
import { addWine } from './utils/addWine';
import { addProduct } from './utils/addProduct';
import withAuth from '@/common/hocs/withAuth';

function AddWinePage() {
  const wineList = useWineKindList();
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmitWineInfo = async () => {
    const winePostProps = addWine(formRef, wineList);

    if (winePostProps) {
      await postWine(winePostProps)
        .then(async ({ _id }) => {
          const productPostProps = addProduct(formRef, _id);
          await postProduct(productPostProps)
            .then(() => {
              window.alert('와인이 등록되었습니다!');
            })
            .catch(() => {
              window.alert(
                `product 등록에 실패했습니다. ${_id} 와인에 대해 문의 바랍니다.`
              );
            });
        })
        .catch(() => {
          window.alert('wine 등록에 실패했습니다.');
        });
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

export default withAuth(AddWinePage);
