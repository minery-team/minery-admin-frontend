'use client';

import { useWineList } from './hooks/useWineList';
import WineItem from './components/WineItem';
import withAuth from '@/common/hocs/withAuth';

function WinePage() {
  const [wineList, refetchWineList] = useWineList({ order: 0 });

  return (
    <div className="h-screen overflow-y-scroll">
      {wineList &&
        wineList.map((wine) => {
          return <WineItem wine={wine} refetchWineList={refetchWineList} />;
        })}
    </div>
  );
}

export default withAuth(WinePage);
