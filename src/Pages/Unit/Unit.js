import { Pagetitle } from "../../Components/Pagetitle";
import { React, useEffect, useState } from "react";
import { Staff } from "../../Components/Staff";

export const Unit = () => {
  const [index, setIndex] = useState(0);
  const values = [
    "eselon1",
    "sekjen",
    "pelkes",
    "pencegahanpenyakit",
    "kesmas",
    "alkes",
    "itjen",
    "bppk",
    "nakes",
  ];

  const options = [
    { value: "eselon1", text: "Eselon 1" },
    { value: "sekjen", text: "Sekretariat Jenderal" },
    { value: "pelkes", text: "Pelayanan Kesehatan" },
    {
      value: "pencegahanpenyakit",
      text: "Pencegahan dan Pengendalian Penyakit",
    },
    {
      value: "kesmas",
      text: "Kesehatan Masyarakat",
    },
    {
      value: "alkes",
      text: "Kefarmasian dan Alat Kesehatan",
    },
    {
      value: "itjen",
      text: "Inspektorat Jenderal",
    },
    {
      value: "bppk",
      text: "Badan Penelitian dan Pengembangan Kesehatan",
    },
    {
      value: "nakes",
      text: "Tenaga Kesehatan",
    },
  ];

  return (
    <div className="mx-10 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Unit Kerja dan Pejabat" />
      <div className="flex justify-center md:justify-start items-center gap-5">
        <label for="unit" className="block text-sm font-medium text-gray-900 ">
          Unit Kerja
        </label>
        <select
          id="unit"
          selected={options[index].value}
          onChange={(e) => {
            setIndex(values.indexOf(e.target.value));
          }}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-6/12 md:w-3/12 p-2.5  "
        >
          {options.map((option) => {
            return <option value={option.value}>{option.text}</option>;
          })}
        </select>
      </div>
      <Staff index={index} />
    </div>
  );
};
