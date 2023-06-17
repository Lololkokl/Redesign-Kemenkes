import { Pagetitle } from "../../Components/Pagetitle";

export const Detail3 = () => {
  const berita = {
    judul: "Deteksi TBC Capai Rekor Tertinggi di Tahun 2022",
    img: "/images/tbc.png",
    tanggal: "9 Juni 2023",
    contents: [
      "Tahun 2022 Kementerian Kesehatan bersama seluruh tenaga kesehatan berhasil mendeteksi tuberculosis (TBC) sebanyak lebih dari 700 ribu kasus. Angka tersebut merupakan angka tertinggi sejak TBC menjadi program prioritas Nasional.",

      "Penyakit tuberkulosis (TBC) di Indonesia menempati peringkat ketiga setelah India dan Cina, yakni dengan jumlah kasus 824 ribu dan kematian 93 ribu per tahun atau setara dengan 11 kematian per jam. Berdasarkan Global TB Report tahun 2022 jumlah kasus TBC terbanyak pada kelompok usia produktif terutama pada usia 25 sampai 34 tahun. Di Indonesia jumlah kasus TBC terbanyak yaitu pada kelompok usia produktif terutama pada usia 45 sampai 54 tahun.",

      "Juru Bicara Kementerian Kesehatan RI dr. Mohammad Syahril mengatakan pendeteksian tertinggi penyakit TBC berkat adanya komitmen dari pemerintah dan surveilans yang semakin gencar.",

      "Pendeteksian adalah langkah awal untuk bisa mengobati pasien dengan TBC, sehingga tahun 2022 dilakukan deteksi TBC besar-besaran,'' ujar dr. Syahril.",

      "Menteri Kesehatan RI Budi Gunadi Sadikin meminta seluruh jajaran kesehatan untuk memprioritaskan pencarian para penderita TBC, sehingga 90% dari jumlah itu dapat terdeteksi di tahun 2024.",

      "Kemenkes menargetkan pencapaian deteksi TBC sebesar 90% pada 2024. Upaya skrining besar-besaran sudah dimulai sejak 2022,'' ucap dr. Syahril.",

      "Dikatakan syahril, Kemenkes sudah membuat protokol yang baru, kerja sama dengan berbagai asosiasi dan organisasi profesi. Termasuk juga mendorong dana Global Fund yang disalurkan ke propinsi, kabupaten dan kota agar terealisasi lebih cepat.",

      "Bahkan, untuk percepatan penanganan TBC pemerintah juga telah menjalin kerja sama luar negeri untuk pengendalian TBC di Indonesia. Pada 14 November 2022 telah dijalin kerja sama Indonesia dengan United Arab Emirates (UAE) dalam pengentasan TBC.",

      "UAE melalui Nota Diplomatik Kedubes PEA di Jakarta No. 1/3/19-281 menyampaikan komitmen Pemerintah Uni Emirat Arab untuk memberikan hibah berupa Financial Aid sebesar 10 juta USD untuk mendukung program pencegahan tuberkulosis di Indonesia.",

      "dr. Syahril melanjutkan, penemuan kasus sedini mungkin dan pengobatan secara tuntas sampai sembuh merupakan salah satu upaya yang terpenting dalam memutus penularan TBC di masyarakat.",

      "Angka keberhasilan pengobatan TBC sensitif obat di Indonesia pada tahun 2022 sebanyak 85%. Sementara angka keberhasilan pengobatan TBC resisten obat di Indonesia tahun 2022 secara umum keberhasilannya 55%.",

      "Dalam Strategi Nasional Eliminasi TBC yang tertuang pada Perpres nomor 67 tahun 2021 tentang Penanggulangan Tuberkulosis ada sejumlah strategi mengatasi TBC di Indonesia. Mulai dari penguatan komitmen, peningkatan akses layanan TBC, optimalisasi upaya promosi dan pencegahan TBC, pengobatan TBC dan pengendalian infeksi, kemudian pemanfaatan hasil riset dan teknologi.",
    ],
  };
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Berita" />
      <h2 className="text-center font-bold text-2xl font-heading text-gray-900">
        {berita.judul}
      </h2>
      <img src={berita.img} alt="" className="w-full md:w-8/12 mx-auto rounded-lg my-4" />
      <p className="text-gray-600">{berita.tanggal}</p>
      <div className="leading-8 text-justify">
        {berita.contents.map((content) => {
          return <p className="my-2 font-paragraph text-gray-900">{content}</p>;
        })}
      </div>
    </div>
  );
};
