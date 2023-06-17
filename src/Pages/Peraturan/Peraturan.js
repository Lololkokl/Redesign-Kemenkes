import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { TablePeraturan } from "../../Components/Table/TablePeraturan";
import { React, useEffect, useState } from "react";

export const Peraturan = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Peraturan Perundangan" />
      <Searchbar
        placeholder="Cari Peraturan Perundangan"
        search={search}
        setSearch={setSearch}
      />
      <TablePeraturan search={search} />
      <Pagination search={search} />
    </div>
  );
};
