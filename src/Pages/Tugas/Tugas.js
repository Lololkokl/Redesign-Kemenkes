import { Pagetitle } from "../../Components/Pagetitle";

export const Tugas = () => {
  const items = [
    {
      id: 1,
      text: "Perumusan, penetapan, dan pelaksanaan kebijakan di bidang kesehatan masyarakat, pencegahan dan pengendalian penyakit, pelayanan kesehatan, dan kefarmasian dan alat kesehatan;",
    },
    {
      id: 2,
      text: "Koordinasi pelaksanaan tugas, pembinaan, dan pemberian dukungan administrasi kepada seluruh unsur organsisasi di lingkungan Kementerian Kesehatan;",
    },
    {
      id: 3,
      text: "Pengelolaan barang milik negara yang menjadi tanggung jawab Kementerian Kesehatan;",
    },
    {
      id: 4,
      text: "Pelaksanaan penelitian dan pengembangan di bidang kesehatan;",
    },
    {
      id: 5,
      text: "Pelaksanaan pengembangan dan pemberdayaan sumber daya manusia di bidang kesehatan serta pengelolaan tenaga kesehatan;",
    },
    {
      id: 6,
      text: "Pelaksanaan bimbingan teknis dan supervisi atas pelaksanaan urusan Kementerian Kesehatan di daerah;",
    },
    {
      id: 7,
      text: "Pengawasan atas pelaksanaan tugas di lingkungan Kementerian Kesehatan;",
    },
    {
      id: 8,
      text: "Pelaksanaan dukungan substansif kepada seluruh unsur organisasi di lingkungan Kementerian Kesehatan;",
    },
  ];
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24 text-justify">
      <Pagetitle text="Tugas dan Fungsi" />
      <h2 className="text-primary text-lg md:text-xl cursor-pointer">
        Kementerian Kesehatan Republik Indonesia
      </h2>
      <div className="ml-4">
        <div className="mt-2 leading-5 font-paragraph">
          <p>
            Kementerian Kesehatan RI mempunyai tugas membantu Presiden dalam
            menyelenggarakan sebagian urusan pemerintahan di bidang kesehatan.
          </p>
          <p>
            Berdasarkan Permenkes 64 Tahun 2016, pasal 3 dalam melaksanakan
            tugas, Kementerian Kesehatan RI menyelenggarakan fungsi:
          </p>
        </div>

        <ol className="list-decimal ml-4">
          {items.map((item) => {
            return (
              <li id={item.id} className="my-2 md:mb-3 font-paragraph">
                {item.text}
              </li>
            );
          })}
        </ol>
      </div>
      <h2 className="my-2 md:mb-3 font-paragraph text-lg cursor-pointer">
        Sekretariat Jenderal
      </h2>
      <h2 className="my-2 md:mb-3 font-paragraph text-lg cursor-pointer">
        Direktorat Jenderal Kesehatan Masyarakat
      </h2>
      <h2 className="my-2 md:mb-3 font-paragraph text-lg cursor-pointer">
        Direktorat Jenderal Pencegahan dan Pengendalian Penyakit
      </h2>
    </div>
  );
};
