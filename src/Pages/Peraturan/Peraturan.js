import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { TablePeraturan } from "../../Components/Table/TablePeraturan";

export const Peraturan = () => {
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Peraturan Perundangan" />
      <Searchbar placeholder="Cari Peraturan Perundagan" />
      <TablePeraturan />
      <Pagination />
    </div>
  );
};
