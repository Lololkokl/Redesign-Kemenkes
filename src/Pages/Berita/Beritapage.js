import { Pagetitle } from "../../Components/Pagetitle";
import { Beritagrid } from "./Beritagrid";

export const Beritapage = () => {
  return (
    <div className="mx-12 my-8">
      <Pagetitle text="Berita" />
      <Beritagrid />
    </div>
  );
};
