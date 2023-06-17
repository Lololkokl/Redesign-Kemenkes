export const Searchbar = ({ placeholder, search, setSearch }) => {
  return (
    <div className="flex my-4 py-2">
      <input
        type="text"
        id="default-input"
        className="bg-gray-50 border border-gray-400 focus:border-primary text-grey-500 text-sm rounded-lg focus:ring-primary block w-full p-2.5  "
        placeholder={placeholder}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};
