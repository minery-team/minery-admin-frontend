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
    <div className="h-screen overflow-y-scroll">
      <div className="text-3xl font-bold pl-5">와인 추가</div>
      <form
        ref={formRef}
        className="flex flex-col w-full gap-5 px-5 py-5"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitWineInfo();
        }}
      >
        {WineInfo.map((info) => {
          return <WineInfoByCategory wineCategory={info} />;
        })}
        <button
          type="submit"
          className="self-end w-24 h-12 rounded-xl text-xl text-white	 bg-blue-500"
        >
          저장
        </button>
      </form>
    </div>
  );
}

export default withAuth(AddWinePage);
