import { Pagetitle } from "../../Components/Pagetitle";
import { Pagination } from "../../Components/Pagination";
import { Searchbar } from "../../Components/Searchbar";
import { TablePublikasi } from "../../Components/Table/TablePublikasi";
import { React, useEffect, useState } from "react";

export const Publikasi = () => {
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState("");
  const values = ["info", "profil", "buletin"];

  const options = [
    { value: "info", text: "Info Data dan Informasi" },
    { value: "profil", text: "Profile Kesehatan Indonesia" },
    { value: "buletin", text: "Buletin" },
  ];

  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Publikasi" />
      <div className="flex justify-center md:justify-start items-center gap-5">
        <label for="unit" className="block text-sm font-medium text-gray-900  ">
          Jenis Publikasi
        </label>
        <select
          id="unit"
          selected={options[index].value}
          onChange={(e) => {
            setSearch("");
            setIndex(values.indexOf(e.target.value));
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-6/12 md:w-3/12 p-2.5  "
        >
          {options.map((option) => {
            return <option value={option.value}>{option.text}</option>;
          })}
        </select>
      </div>
      <Searchbar
        placeholder="Cari Publikasi"
        search={search}
        setSearch={setSearch}
      />
      <TablePublikasi index={index} search={search} />
      <Pagination search={search} />
    </div>
  );
};
