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
      <div style={{ display: 'flex' }}>
        <Image
          src={wine.image ?? '/images/empty_wine.png'}
          alt={wine.name}
          width={100}
          height={100}
        />
        <div>
          <div style={{ fontSize: '20px' }}>{wine.name}</div>
          <div style={{ display: 'flex', marginTop: '10px', gap: '10px' }}>
            <Button onClick={() => onClickRevise(wine.id)}>정보 수정</Button>
            <Button danger onClick={() => onClickDelete(wine.id)}>
              삭제
            </Button>
          </div>
        </div>
      </div>
      <div
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: 'black',
        }}
      />
    </div>
  );
}

export default WineItem;
