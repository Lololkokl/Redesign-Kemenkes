import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { TablePublikasi } from "../../Components/TablePublikasi";

export const Publikasi = () => {
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Publikasi" />
      <div className="flex justify-center md:justify-start items-center gap-5">
        <label for="unit" className="block text-sm font-medium text-gray-900  ">
          Jenis Publikasi
        </label>
        <select
          id="unit"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-6/12 md:w-2/12 p-2.5  "
        >
          <option selected>Info Data dan Informasi</option>
          <option value="">Profil Kesehatan Indonesia</option>
          <option value="">Data Dasar Puskesmas</option>
          <option value="">Buletin</option>
        </select>
      </div>
      <Searchbar placeholder="Cari Publikasi" />
      <TablePublikasi />
      <Pagination />
    </div>
  );
};
