import { Accordion } from "../../Components/Accordion/Accordion";
import { Pagetitle } from "../../Components/Pagetitle";

export const Struktur = () => {
  const items = [
    {
      id: 1,
      text: "Struktur Organisasi Kementerian Kesehatan",
      image: "/images/struktur.png",
    },
    {
      id: 2,
      text: "Struktur Organisasi Direktorat Jenderal Pelayanan Kesehatan",
      image: "/images/struktur2.jpg",
    },
    {
      id: 3,
      text: "Struktur Organisasi Direktorat Jenderal Pencegahan dan Pengendalian Penyakit",
      image: "/images/struktur3.jpg",
    },
    {
      id: 4,
      text: "Struktur Organisasi Direktorat Jenderal Kesehatan Masyarakat",
      image: "/images/struktur4.jpg",
    },
    {
      id: 5,
      text: "Struktur Organisasi Direktorat Jenderal Kefarmasian dan Alat Kesehatan",
      image: "/images/struktur5.jpg",
    },
  ];
  return (
    <div className="mx-12 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Struktur Organisasi" />
      <Accordion items={items} />
    </div>
  );
};
