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
      jabatan: "Menteri Kesehatan Republik Indonesia",
      nama: "Budi Gunadi Sadikin",
      img: "./images/budi.png",
      deskripsi: [
        "Lahir di Bogor pada 6 Mei 1964, Budi Gunadi Sadikin dilantik menjadi Menteri Kesehatan RI pada tanggal 23 Desember 2020. Sebelumnya beliau menjabat sebagai Wakil Menteri Badan Usaha Milik Negara I sejak November 2019. Berkiprah sebagai Wakil Menteri yang membidangi BUMN Kesehatan dan Farmasi, beliau terlibat aktif dalam penanggulangan pandemi COVID-19 dengan membuka jaringan internasional dan mengerahkan sumberdaya dalam negeri untuk pengadaan alat PCR test, vaksin COVID beserta sistem pelaksanaan dan distribusi vaksin, dan juga pengadaan obat penyembuhan (therapeutic) COVID-19. Beliau juga berperan aktif dalam penanganan COVID-19 dengan memonitor dan mengelola 70 rumah sakit BUMN.",
        "Budi Gunadi Sadikin memulai kariernya pada tahun 1988 sebagai Information Technology Officer di Kantor Pusat IBM Asia-Pasifik di Tokyo, Jepang, dan selanjutnya bergabung dengan PT Bank Bali Tbk. hingga tahun 1999. Berikutnya beliau menjabat sebagai Director of Consumer and Commercial Banking untuk ABN AMRO Bank Indonesia & Malaysia. Beliau juga sempat bergabung dengan PT Bank Danamon Tbk. dan Adira Quantum Multi Finance.",
        "Tahun 2006, beliau menjabat sebagai Direktur Micro dan Retail Banking Bank Mandiri. Setelah menyelesaikan jabatannya di Bank Mandiri, beliau menjabat sebagai Senior Advisor Menteri Badan Usaha Milik Negara dari tahun 2016 sampai dengan 2017. Selanjutnya beliau menjabat sebagai Direktur Utama PT Indonesia Asahan Alumunium (Inalum) (Persero) dari September 2017 sampai dengan November 2019.",
      ],
    },
  ];
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Unit Kerja dan Pejabat" />
      <div className="flex">
        <p>Unit Kerja</p>
        <select name="" id="">
          <option value="">Eselon I</option>
          <option value="">Eselon II</option>
        </select>
      </div>

      {staffs.map((staff) => {
        return (
          <div id={staff.id} className="my-8">
            <h2 className="text-gray-400 font-bold">{staff.jabatan}</h2>
            <h2 className="font-bold text-center md:text-start">
              {staff.nama}
            </h2>
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center md:items-start my-4">
              <img
                src={staff.img}
                alt=""
                srcset=""
                className="w-6/12 md:w-2/12 h-[200px]"
              />
              <div className="text-justify md:leading-7">
                {staff.deskripsi.map((desk) => {
                  return <p>{desk}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
