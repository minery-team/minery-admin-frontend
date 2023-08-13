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
import withAuth from '@/common/hocs/withAuth';

function ReviseWinePage({ params }: { params: { id: string } }) {
  const wineList = useWineKindList();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [productInfo] = useProduct(params.id);

  const onClickRevise = async () => {
    const wineReviseProps = reviseWineInfo(formRef, wineList);

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
    <div className="h-screen overflow-scroll">
      <div className="text-3xl font-bold pl-5">와인 수정</div>
      <form
        ref={formRef}
        className="flex flex-col w-full gap-5 px-5 py-5"
        onSubmit={(e) => {
          e.preventDefault();
          onClickRevise();
        }}
      >
        {WineInfo.map((info) => {
          return (
            <CurrentWineInfo productInfo={productInfo} wineCategory={info} />
          );
        })}
        <button
          type="submit"
          className="self-end w-24 h-12 rounded-xl text-xl text-white	 bg-blue-500"
        >
          수정
        </button>
      </form>
    </div>
  );
}

export default withAuth(ReviseWinePage);
