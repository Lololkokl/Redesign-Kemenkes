import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { SearchbarBerita } from "../../Components/SearchbarBerita";
import { Beritagrid } from "./Beritagrid";

export const Beritapage = () => {
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Berita" />
      <SearchbarBerita placeholder="Cari Berita" />
      <Beritagrid />
      <Pagination />
    </div>
  );
};
