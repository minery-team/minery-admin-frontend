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
      <div
        style={{
          fontSize: '20px',
          marginBottom: '10px',
          fontWeight: 'bold',
        }}
      >
        {wineCategory.category}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          borderRadius: '20px',
          padding: '20px',
          gap: '10px',
        }}
      >
        {wineCategory.content.map((content) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '5px',
              }}
            >
              <div>{content.name}</div>
              <input
                defaultValue={getValue(content.tag)}
                type="text"
                style={{
                  border: '1px solid black',
                  width: '100%',
                  height: '30px',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWineInfo;
