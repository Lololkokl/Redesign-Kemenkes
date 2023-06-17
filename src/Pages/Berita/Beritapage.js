import { useState } from "react";
import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { Beritagrid } from "./Beritagrid";

export const Beritapage = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Berita" />
      <Searchbar
        placeholder="Cari Berita"
        search={search}
        setSearch={setSearch}
      />
      <Beritagrid search={search} />
      <Pagination search={search} />
    </div>
  );
};
