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
    <div className="mx-12 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Struktur Organisasi" />
      <img
        src="/redesign-web-kemenkes/images/struktur.png"
        alt=""
        className="md:w-10/12 w-full mx-auto my-6"
      />
      <h2 className="text-primary mt-4 text-lg md:text-xl">
        Struktur Organisasi Kementerian Kesehatan RI
      </h2>
      <ol className="list-inside ml-4">
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
