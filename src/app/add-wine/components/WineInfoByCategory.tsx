interface WineCategory {
  category: string;
  content: {
    name: string;
    tag: string;
  }[];
}

const WineInfoByCategory = ({
  wineCategory,
}: {
  wineCategory: WineCategory;
}) => {
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

export default WineInfoByCategory;
