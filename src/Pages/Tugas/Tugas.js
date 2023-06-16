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
        "Koordinasi kegiatan Kementerian Kesehatan",
        "Koordinasi dan penyusunan rencana, program, dan anggaran Kementerian Kesehatan",
        "Pembinaan dan pemberian dukungan administrasi yang meliputi ketatausahaan, kepegawaian, keuangan, kerumahtanggaan, kerja sama, hubungan masyarakat, arsip, dan dokumentasi Kementerian Kesehatan",
        "Pembinaan dan penataan organisasi dan tata laksana",
        "Koordinasi dan penyusunan peraturan perundang-undangan serta pelaksanaan advokasi hukum",
        "Penyelenggaraan pengelolaan barang milik negara dan layanan pengadaan barang/jasa",
        "Pelaksanaan fungsi lain yang diberikan oleh Menteri",
      ],
    },
    {
      id: 3,
      text: "Direktorat Jenderal Pelayanan Kesehatan",
      contents: [
        "Perumusan kebijakan di bidang peningkatan pelayanan, fasilitas, dan mutu pelayanan kesehatan primer, rujukan, tradisional, dan komplementer",
        "Pelaksanaan kebijakan di bidang peningkatan pelayanan, fasilitas, dan mutu pelayanan kesehatan primer rujukan, tradisional, dan komplementer",
        "Penyusunan norma, standar, prosedur, dan kriteria di bidang peningkatan pelayanan, fasilitas, dan mutu pelayanan kesehatan primer rujukan, tradisional, dan komplementer",
        "Pemberian bimbingan teknis dan supervisi di bidang peningkatan pelayanan, fasilitas, dan mutu pelayanan kesehatan primer rujukan, tradisional, dan komplementer",
        "Pelaksanaan evaluasi, dan pelaporan di bidang peningkatan pelayanan, fasilitas, dan mutu pelayanan kesehatan primer rujukan, tradisional, dan komplementer",
        "Pelaksanaan administrasi Direktorat Jenderal Pelayanan Kesehatan",
        "Pelaksanaan fungsi lain yang diberikan oleh Menteri",
      ],
    },
    {
      id: 4,
      text: "Direktorat Jenderal Pencegahan dan Pengendalian Penyakit",
      contents: [
        "Perumusan kebijakan di bidang surveilans epidemiologi dan karantina, pencegahan dan pengendalian penyakit menular, penyakit tular vektor, penyakit zoonotik, dan penyakit tidak menular, serta upaya kesehatan jiwa dan Narkotika, Psikotropika, dan Zat adiktif lainnya (NAPZA)",
        "Pelaksanaan kebijakan di bidang surveilans epidemiologi dan karantina, pencegahan dan pengendalian penyakit menular, penyakit tular vektor, penyakit zoonotik, dan penyakit tidak menular, serta upaya kesehatan jiwa dan Narkotika, Psikotropika, dan Zat adiktif lainnya (NAPZA)",
        "Penyusunan norma, standar, prosedur dan kriteria di bidang surveilans epidemiologi dan karantina, pencegahan dan pengendalian penyakit menular, penyakit tular vektor, penyakit zoonotik, dan penyakit tidak menular, serta upaya kesehatan jiwa dan Narkotika, Psikotropika, dan Zat adiktif lainnya (NAPZA)",
        "Pelaksanaan administrasi Direktorat Pencegahan dan Pengendalian Penyakit",
        "Pelaksanaan fungsi lain yang diberikan Menteri",
      ],
    },
    {
      id: 5,
      text: "Direktorat Jenderal Kesehatan Masyarakat",
      contents: [
        "Perumusan kebijakan di bidang peningkatan kesehatan keluarga, kesehatan lingkungan, kesehatan kerja dan olahraga, gizi masyarakat, serta promosi kesehatan dan pemberdayaan masyarakat",
        "Pelaksanaan kebijakan di bidang peningkatan kesehatan keluarga , kesehatan lingkungan, kesehatan kerja dan olahraga, gizi masyarakat, serta promosi kesehatan dan pemberdayaan masyarakat",
        "Penyusunan norma, standar, prosedur, dan kriteria di bidang peningkatan kesehatan keluarga, kesehatan lingkungan, kesehatan kerja dan olahraga, gizi masyarakat, serta promosi kesehatan dan pemberdayaan masyarakat",
        "Pemberian bimbingan teknis dan supervisi di bidang peningkatan kesehatan keluarga , kesehatan lingkungan, kesehatan kerja dan olahraga, gizi masyarakat, serta promosi kesehatan dan pemberdayaan masyarakat",
        "Pelaksanaan evaluasi dan pelaporan di bidang peningkatan kesehatan keluarga , kesehatan lingkungan, kesehatan kerja dan olahraga, gizi masyarakat, serta promosi kesehatan dan pemberdayaan masyarakat",
        "Pelaksanaan administrasi Direktorat Jenderal Kesehatan Masyarakat",
        "Pelaksanaan fungsi lain yang diberikan oleh Menteri",
      ],
    },
    {
      id: 6,
      text: "Direktorat Jenderal Kefarmasian dan Alat Kesehatan",
      contents: [
        "Perumusan kebijakan di bidang produksi dan distribusi sediaan farmasi, alat kesehatan dan perbekalan kesehatan rumah tangga, pengawasan alat kesehatan dan perbekalan rumah tangga, tata kelola perbekalan kesehatan, dan pelayanan kefarmasian",
        "Pelaksanaan kebijakan di bidang produksi dan distribusi sediaan farmasi, alat kesehatan dan perbekalan kesehatan rumah tangga, pengawasan alat kesehatan dan perbekalan rumah tangga, tata kelola perbekalan kesehatan, dan pelayanan kefarmasian",
        "Penyusunan norma, standar, prosedur, dan kriteria di bidang produksi dan distribusi sediaan farmasi, alat kesehatan dan perbekalan kesehatan rumah tangga, pengawasan alat kesehatan dan perbekalan rumah tangga, tata kelola perbekalan kesehatan, dan pelayanan kefarmasian",
        "Pemberian bimbingan teknis dan supervisi di bidang produksi dan distribusi sediaan farmasi, alat kesehatan dan perbekalan kesehatan rumah tangga, pengawasan alat kesehatan dan perbekalan rumah tangga, tata kelola perbekalan kesehatan, dan pelayanan kefarmasian",
        "Pelaksanaan evaluasi dan pelaporan di bidang produksi dan distribusi sediaan farmasi, alat kesehatan dan perbekalan kesehatan rumah tangga, pengawasan alat kesehatan dan perbekalan rumah tangga, tata kelola perbekalan kesehatan, dan pelayanan kefarmasian",
        "Pelaksanaan administrasi Direktorat Jenderal Kefarmasian dan Alat Kesehatan",
        "Pelaksanaan fungsi lain yang diberikan oleh Menteri",
      ],
    },
  ];
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24 text-justify">
      <Pagetitle text="Tugas dan Fungsi" />
      <Accordion items={items} type="tugas" />
    </div>
  );
};
