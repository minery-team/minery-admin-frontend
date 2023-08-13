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
      <div className="text-xl font-bold mb-2.5">{wineCategory.category}</div>
      <div className="flex flex-col bg-white	rounded-2xl gap-2.5 px-5 py-5">
        {wineCategory.content.map((content) => {
          return (
            <div className="flex flex-col gap-1.5">
              <div>{content.name}</div>
              <input
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

export default WineInfoByCategory;
