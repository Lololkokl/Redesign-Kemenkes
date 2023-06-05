import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { Beritagrid } from "./Beritagrid";

export const Beritapage = () => {
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Berita" />
      <Searchbar placeholder="Cari Berita" />
      <Beritagrid />
      <Pagination />
    </div>
  );
};
