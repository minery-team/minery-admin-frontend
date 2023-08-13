'use client';

import { useRef } from 'react';

import { WineInfo } from '@/app/add-wine/model/WineInfo';
import { useWineKindList } from '@/app/add-wine/hooks/useWineKindList';
import CurrentWineInfo from './components/CurrentWineInfo';
import { reviseWine } from './api/reviseWine';
import { reviseProduct } from './api/reviseProduct';
import { useProduct } from './hooks/useProduct';
import { divideByComma } from './util/stringUtil';
import { reviseWineInfo } from './util/reviseWineInfo';
import { reviseProductInfo } from './util/reviseProductInfo';

function ReviseWinePage({ params }: { params: { id: string } }) {
  const wineList = useWineKindList();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [productInfo] = useProduct(params.id);

  const onClickRevise = async () => {
    const wineReviseProps = reviseWineInfo(formRef, wineList);
    // TODO wine/product 변경 api 사용하기
    if (wineReviseProps) {
      await reviseWine(productInfo.wine._id, wineReviseProps)
        .then(async () => {
          const productReviseProps = reviseProductInfo(
            formRef,
            productInfo.wine._id
          );
          await reviseProduct(params.id, productReviseProps)
            .then(() => {
              window.alert('와인이 정보가 수정되었습니다!');
            })
            .catch(() => {
              window.alert(
                `product 정보 수정에 실패했습니다. ${params.id} 와인에 대해 문의 바랍니다.`
              );
            });
        })
        .catch(() => {
          window.alert('wine 수정에 실패했습니다.');
        });
    }
  };

  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      <div
        style={{ fontSize: '30px', padding: '0 0 0 20px', fontWeight: 'bold' }}
      >
        와인 수정
      </div>
      <form
        ref={formRef}
        onSubmit={(e) => {
          e.preventDefault();
          onClickRevise();
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
          return (
            <CurrentWineInfo productInfo={productInfo} wineCategory={info} />
          );
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
          수정
        </button>
      </form>
    </div>
  );
}

export default ReviseWinePage;
