export const Searchbar = ({ placeholder }) => {
  return (
    <div className="flex my-4 p-2">
      <input
        type="text"
        id="default-input"
        className="bg-gray-50 border border-gray-400 focus:border-primary mr-2 text-grey-500 text-sm rounded-lg focus:ring-primary block w-full p-2.5  "
        placeholder={placeholder}
      />

      <button
        type="button"
        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-primary text-white hover:bg-white hover:border-primary hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:text-primary focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
      >
        Cari
      </button>
    </div>
  );
};
