import { Pagetitle } from "../../Components/Pagetitle";

export const Struktur = () => {
  const items = [
    {
      id: 1,
      text: "Struktur Organisasi Direktorat Jenderal Pelayanan Kesehatan",
    },
    {
      id: 2,
      text: "Struktur Organisasi Direktorat Jenderal Pencegahan dan Pengendalian Penyakit",
    },
    {
      id: 3,
      text: "Struktur Organisasi Direktorat Jenderal Kesehatan Masyarakat",
    },
    {
      id: 4,
      text: "Struktur Organisasi Direktorat Jenderal Kefarmasian dan Alat Kesehatan",
    },
    {
      id: 5,
      text: "Struktur Organisasi Inspektorat Jenderal",
    },
    {
      id: 6,
      text: "Struktur Organisasi Badan Kebijakan Pembangunan Kesehatan",
    },
    {
      id: 7,
      text: "Struktur Organisasi Direktorat Jenderal Tenaga Kesehatan",
    },
    {
      id: 8,
      text: "Struktur Organisasi Pusat di Bawah Menteri",
    },
    {
      id: 9,
      text: "Struktur Organisasi Staf Ahli",
    },
  ];
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Struktur Organisasi" />
      <h2 className="text-primary text-lg md:text-xl">
        Struktur Organisasi Kementerian Kesehatan RI
      </h2>
      <img src="" alt="" />
      <ol className="list-decimal ml-4">
        {items.map((item) => {
          return (
            <li id={item.id} className="my-2 md:mb-2">
              {item.text}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
