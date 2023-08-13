'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button } from 'antd';

import { Product } from '../models/WineType';
import { deleteWine } from '../api/deleteWine';

function WineItem({
  wine,
  refetchWineList,
}: {
  wine: Product;
  refetchWineList: () => void;
}) {
  const router = useRouter();

  const onClickRevise = (productId: number) => {
    router.push(`/revise-wine/${productId}`);
  };

  const onClickDelete = async (wineId: number) => {
    await deleteWine(wineId).then(() => {
      refetchWineList();
    });
  };

  return (
    <div>
      <div className="flex">
        <Image
          src={wine.image ?? '/images/empty_wine.png'}
          alt={wine.name}
          width={100}
          height={100}
        />
        <div>
          <div className="text-xl">{wine.name}</div>
          <div className="flex mt-2.5 gap-2.5">
            <Button onClick={() => onClickRevise(wine.id)}>정보 수정</Button>
            <Button danger onClick={() => onClickDelete(wine.id)}>
              삭제
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-px bg-black" />
    </div>
  );
}

export default WineItem;
