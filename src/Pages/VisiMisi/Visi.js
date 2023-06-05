import { Pagetitle } from "../../Components/Pagetitle";
import { VisiList } from "./VisiList";

export const Visi = () => {
  const visis = [
    {
      judul: "Visi",
      items: [
        {
          id: 1,
          text: "Menciptakan manusia yang sehat, produktif, mandiri dan berkeadilan",
        },
      ],
      id: 1,
    },
    {
      judul: "Misi",
      items: [
        {
          id: 2,
          text: "Menurukan angka kematian ibu dan bayi",
        },
        {
          id: 3,
          text: "Menurunkan angka stunting pada balita",
        },
        {
          id: 4,
          text: "Memperbaiki pengelolaan Jaminan Kesehatan Nasional dan",
        },
        {
          id: 5,
          text: "Meningkatkan kemandirian dan penggunaan produk farmasi dan alat kesehatan dalam negeri",
        },
      ],
      id: 2,
    },
    {
      judul: "Tujuan Strategis",
      items: [
        {
          id: 6,
          text: "Peningkatan derajat kesehatan masyarakat melalui pendekatan siklus hidup",
        },
        {
          id: 7,
          text: "Penguatan pelayanan kesehatan dasar dan rujukan",
        },
        {
          id: 8,
          text: "Peningkatan pencegahan dan pengendalian penyakit dan pengelolaan kedaruratan kesehatan masyarakat",
        },
        {
          id: 9,
          text: "Peningkatan sumber daya kesehatan",
        },
      ],
      id: 3,
    },
  ];

  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Visi dan Misi" />
      {visis.map((visi) => {
        return <VisiList id={visi.id} judul={visi.judul} items={visi.items} />;
      })}
    </div>
  );
};
