import { Accordion } from "../../Components/Accordion/Accordion";
import { Pagetitle } from "../../Components/Pagetitle";

export const Tugas = () => {
  const items = [
    {
      id: 1,
      text: "Kementerian Kesehatan Indonesia",
      contents: [
        "Perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, dan kefarmasian dan alat kesehatan",
        "Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organsisasi di lingkungan Kementerian Kesehatan",
        "Pengelolaan barang milik negara yang menjadi tanggung jawab Kementerian Kesehatan",
        "Pelaksanaan penelitian dan pengembangan di bidang kesehatan",
        "Pelaksanaan pengembangan dan pemberdayaan sumber daya manusia di bidang kesehatan serta pengelolaan tenaga kesehatan",
        "Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan urusan Kementerian Kesehatan di daerah",
        "Pengawasan atas pelaksanaan tugas di lingkungan Kementerian Kesehatan",
        "Pelaksanaan dukungan substansif kepada seluruh unsur organisasi di lingkungan Kementerian Kesehatan",
      ],
    },
    {
      id: 2,
      text: "Sekretariat Jenderal",
      contents: [
        "Perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, dan kefarmasian dan alat kesehatan",
        "Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organsisasi di lingkungan Kementerian Kesehatan",
        "Pengelolaan barang milik negara yang menjadi tanggung jawab Kementerian Kesehatan",
        "Pelaksanaan penelitian dan pengembangan di bidang kesehatan",
        "Pelaksanaan pengembangan dan pemberdayaan sumber daya manusia di bidang kesehatan serta pengelolaan tenaga kesehatan",
        "Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan urusan Kementerian Kesehatan di daerah",
        "Pengawasan atas pelaksanaan tugas di lingkungan Kementerian Kesehatan",
        "Pelaksanaan dukungan substansif kepada seluruh unsur organisasi di lingkungan Kementerian Kesehatan",
      ],
    },
    {
      id: 3,
      text: "Direktorat Jenderal Kesehatan Masyarakat",
      contents: [
        "Perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, dan kefarmasian dan alat kesehatan",
        "Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organsisasi di lingkungan Kementerian Kesehatan",
        "Pengelolaan barang milik negara yang menjadi tanggung jawab Kementerian Kesehatan",
        "Pelaksanaan penelitian dan pengembangan di bidang kesehatan",
        "Pelaksanaan pengembangan dan pemberdayaan sumber daya manusia di bidang kesehatan serta pengelolaan tenaga kesehatan",
        "Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan urusan Kementerian Kesehatan di daerah",
        "Pengawasan atas pelaksanaan tugas di lingkungan Kementerian Kesehatan",
        "Pelaksanaan dukungan substansif kepada seluruh unsur organisasi di lingkungan Kementerian Kesehatan",
      ],
    },
    {
      id: 4,
      text: "Direktorat Jenderal Pencegahan dan Pengendalian Penyakit",
      contents: [
        "Perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, dan kefarmasian dan alat kesehatan",
        "Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organsisasi di lingkungan Kementerian Kesehatan",
        "Pengelolaan barang milik negara yang menjadi tanggung jawab Kementerian Kesehatan",
        "Pelaksanaan penelitian dan pengembangan di bidang kesehatan",
        "Pelaksanaan pengembangan dan pemberdayaan sumber daya manusia di bidang kesehatan serta pengelolaan tenaga kesehatan",
        "Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan urusan Kementerian Kesehatan di daerah",
        "Pengawasan atas pelaksanaan tugas di lingkungan Kementerian Kesehatan",
        "Pelaksanaan dukungan substansif kepada seluruh unsur organisasi di lingkungan Kementerian Kesehatan",
      ],
    },
  ];
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24 text-justify">
      <Pagetitle text="Tugas dan Fungsi" />
      <Accordion items={items} struktur={false} />
    </div>
  );
};
