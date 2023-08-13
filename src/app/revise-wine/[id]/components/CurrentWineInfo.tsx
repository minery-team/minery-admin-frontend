import { Product } from '@/app/wine/models/WineType';

interface WineCategory {
  category: string;
  content: {
    name: string;
    tag: string;
  }[];
}

const CurrentWineInfo = ({
  productInfo,
  wineCategory,
}: {
  productInfo: Product;
  wineCategory: WineCategory;
}) => {
  const getValue = (tag: string) => {
    if (productInfo) {
      if (productInfo[tag]) return productInfo[tag];
      else if (productInfo.wine[tag]) {
        if (tag === 'kinds') {
          let kindList = '';

          for (let i = 0; i < productInfo.wine[tag].length; i += 1) {
            kindList += productInfo.wine[tag][i].name + ',';
          }

          return kindList;
        }
        return productInfo.wine[tag];
      }
    }
    return '';
  };

  return (
    <div>
      <div className="text-xl font-bold mb-2.5">{wineCategory.category}</div>
      <div className="flex flex-col bg-white	rounded-2xl gap-2.5 px-5 py-5">
        {wineCategory.content.map((content) => {
          return (
            <div className="flex flex-col gap-1.5">
              <div>{content.name}</div>
              <input
                defaultValue={getValue(content.tag)}
                type="text"
                className="w-full h-8 border border-solid border-black"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWineInfo;
