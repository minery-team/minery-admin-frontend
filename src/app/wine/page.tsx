'use client';

import { useWineList } from './hooks/useWineList';
import WineItem from './components/WineItem';

function WinePage() {
  const [wineList, refetchWineList] = useWineList({ order: 0 });

  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      {wineList &&
        wineList.map((wine) => {
          return <WineItem wine={wine} refetchWineList={refetchWineList} />;
        })}
    </div>
  );
}

export default WinePage;
