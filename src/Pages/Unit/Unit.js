import { Pagetitle } from "../../Components/Pagetitle";

export const Unit = () => {
  const staffs = [
    {
      id: 1,
      jabatan: "Menteri Kesehatan Republik Indonesia",
      nama: "Budi Gunadi Sadikin",
      img: "./images/budi.png",
      deskripsi: [
        "Lahir di Bogor pada 6 Mei 1964, Budi Gunadi Sadikin dilantik menjadi Menteri Kesehatan RI pada tanggal 23 Desember 2020. Sebelumnya beliau menjabat sebagai Wakil Menteri Badan Usaha Milik Negara I sejak November 2019. Berkiprah sebagai Wakil Menteri yang membidangi BUMN Kesehatan dan Farmasi, beliau terlibat aktif dalam penanggulangan pandemi COVID-19 dengan membuka jaringan internasional dan mengerahkan sumberdaya dalam negeri untuk pengadaan alat PCR test, vaksin COVID beserta sistem pelaksanaan dan distribusi vaksin, dan juga pengadaan obat penyembuhan (therapeutic) COVID-19. Beliau juga berperan aktif dalam penanganan COVID-19 dengan memonitor dan mengelola 70 rumah sakit BUMN.",
        "Budi Gunadi Sadikin memulai kariernya pada tahun 1988 sebagai Information Technology Officer di Kantor Pusat IBM Asia-Pasifik di Tokyo, Jepang, dan selanjutnya bergabung dengan PT Bank Bali Tbk. hingga tahun 1999. Berikutnya beliau menjabat sebagai Director of Consumer and Commercial Banking untuk ABN AMRO Bank Indonesia & Malaysia. Beliau juga sempat bergabung dengan PT Bank Danamon Tbk. dan Adira Quantum Multi Finance.",
        "Tahun 2006, beliau menjabat sebagai Direktur Micro dan Retail Banking Bank Mandiri. Setelah menyelesaikan jabatannya di Bank Mandiri, beliau menjabat sebagai Senior Advisor Menteri Badan Usaha Milik Negara dari tahun 2016 sampai dengan 2017. Selanjutnya beliau menjabat sebagai Direktur Utama PT Indonesia Asahan Alumunium (Inalum) (Persero) dari September 2017 sampai dengan November 2019.",
      ],
    },
    {
      id: 2,
      jabatan: "Wakil Menteri Kesehatan Republik Indonesia",
      nama: "dr. Dante Saksono Harbuwono, Sp. PD., Ph.D.",
      img: "./images/dante.png",
      deskripsi: [
        "Pria kelahiran Temanggung ini dilantik menjadi Wakil Menteri Kesehatan RI pada tanggal 23 Desember 2020. Sebelumnya beliau menjabat sebagai Kepala Klaster Diabetik Rumah Sakit Cipto Mangunkusumo Kencana sejak tahun 2018.",
        "Dante Saksono Harbuwono menjabat sebagai Ketua Divisi Metabolik Endokrin pada Departemen Ilmu Penyakit Dalam Fakultas Kedokteran Universitas Indonesia - Rumah Sakit Cipto Mangunkusumo pada tahun 2017-2020, selanjutnya menjabat sebagai Koordinator Divisi Pengembangan Bisnis FKUI tahun 2013-2014. Beliau ditunjuk sebagai Anggota Panel Ahli Dokter Kepresidenan sejak tahun 2014 sampai saat ini. Sejak tahun 2017 sampai saat ini, beliau juga menjabat sebagai Kepala Klaster Metabolic Disorder, Cardiovascular and Aging IMERI FKUI.",
        "Beliau merupakan lulusan S-3 dari University of Yamanashi Jepang tahun 2008. Gelar dokter spesialis penyakit dalam diraih dari Fakultas Kedokteran Universitas Indonesia."
      ],
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
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-6/12 md:w-2/12 p-2.5  "
        >
          <option selected>Eselon I</option>
          <option value="">Sekretariat Jenderal</option>
          <option value="">Pelayanan Kesehatan</option>
          <option value="">Pencegahan dan Pengendalian Penyakit</option>
          <option value="">Kesehatan Masyarakat</option>
        </select>
      </div>

      {staffs.map((staff) => {
        return (
          <div id={staff.id} className="my-8">
            <h2 className="text-gray-600 font-bold text-center md:text-start font-heading">
              {staff.jabatan}
            </h2>
            <h2 className="font-bold text-center md:text-start font-heading">
              {staff.nama}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center md:items-start my-4">
              <img
                src={staff.img}
                alt=""
                srcset=""
                className="w-[200px] h-[200px]"
              />
              <div className="text-justify md:leading-7 font-paragraph mb-2">
                {staff.deskripsi.map((desk) => {
                  return <p className="mb-3">{desk}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
