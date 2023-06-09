import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { Table } from "../../Components/Table";

export const Publikasi = () => {
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Publikasi" />
      <div className="flex justify-center md:justify-start items-center gap-5">
        <label
          for="unit"
          className="block text-sm font-medium text-gray-900 dark:text-white "
        >
          Jenis Publikasi
        </label>
        <select
          id="unit"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-6/12 md:w-2/12 p-2.5  "
        >
          <option selected>Unit Kerja</option>
          <option value="">Eselon I</option>
          <option value="">Eselon II</option>
          <option value="">Eselon III</option>
        </select>
      </div>
      <Searchbar placeholder="Cari Publikasi" />
      <Table />
      <Pagination />
    </div>
  );
};
