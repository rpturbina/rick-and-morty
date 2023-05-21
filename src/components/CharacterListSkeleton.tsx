const CharacterListSkeleton = () => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="w-full max-w-xs rounded-md bg-slate-800 p-4"
        >
          <div className="animate-pulse">
            <div className="h-[300px] max-h-full w-[300px] max-w-full rounded-md bg-slate-700" />
          </div>
          <div className="animate-pulse">
            <div className="mt-4 h-6 w-[80%] rounded-md bg-slate-700" />
            <div className="mt-2 h-4 w-[40%] rounded-md bg-slate-700" />
          </div>
        </div>
      ))}
    </>
  );
};

export default CharacterListSkeleton;
