export const Staff = ({ index }) => {
  const staffs = [
    {
      id: 1,
      text: "Eselon 1",
      members: [
        {
          jabatan: "Menteri Kesehatan Republik Indonesia",
          nama: "Budi Gunadi Sadikin",
          img: "./images/budi.png",
          deskripsi: [
            "Lahir di Bogor pada 6 Mei 1964, Budi Gunadi Sadikin dilantik menjadi Menteri Kesehatan RI pada tanggal 23 Desember 2020. Sebelumnya beliau menjabat sebagai Wakil Menteri Badan Usaha Milik Negara I sejak November 2019. Berkiprah sebagai Wakil Menteri yang membidangi BUMN Kesehatan dan Farmasi, beliau terlibat aktif dalam penanggulangan pandemi COVID-19 dengan membuka jaringan internasional dan mengerahkan sumberdaya dalam negeri untuk pengadaan alat PCR test, vaksin COVID beserta sistem pelaksanaan dan distribusi vaksin, dan juga pengadaan obat penyembuhan (therapeutic) COVID-19. Beliau juga berperan aktif dalam penanganan COVID-19 dengan memonitor dan mengelola 70 rumah sakit BUMN.",
          ],
        },
        {
          jabatan: "Wakil Menteri Kesehatan Republik Indonesia",
          nama: "dr. Dante Saksono Harbuwono, Sp. PD., Ph.D.",
          img: "./images/dante.png",
          deskripsi: [
            "Pria kelahiran Temanggung ini dilantik menjadi Wakil Menteri Kesehatan RI pada tanggal 23 Desember 2020. Sebelumnya beliau menjabat sebagai Kepala Klaster Diabetik Rumah Sakit Cipto Mangunkusumo Kencana sejak tahun 2018.",
            "Dante Saksono Harbuwono menjabat sebagai Ketua Divisi Metabolik Endokrin pada Departemen Ilmu Penyakit Dalam Fakultas Kedokteran Universitas Indonesia - Rumah Sakit Cipto Mangunkusumo pada tahun 2017-2020, selanjutnya menjabat sebagai Koordinator Divisi Pengembangan Bisnis FKUI tahun 2013-2014. Beliau ditunjuk sebagai Anggota Panel Ahli Dokter Kepresidenan sejak tahun 2014 sampai saat ini. Sejak tahun 2017 sampai saat ini, beliau juga menjabat sebagai Kepala Klaster Metabolic Disorder, Cardiovascular and Aging IMERI FKUI.",
          ],
        },
      ],
    },
    {
      id: 2,
      text: "Sekretariat Jenderal",
      members: [
        {
          jabatan: "Kepala Biro Perencanaan dan Anggaran",
          nama: "Liendha Andajani, S.E., M.Si",
          img: "./images/sekjen1.jpg",
          deskripsi: [
            "Sebelum diangkat sebagai Kepala Biro Perencanaan dan Anggaran, perempuan kelahiran Madiun ini menjabat sebagai Kepala Subdirektorat Anggaran Bidang Kesehatan, Direktorat Anggaran Bidang Pembangunan Manusia dan Kebudayaan, Kementerian Keuangan RI tahun 2016. Beliau lulusan S1 Akuntansi Universitas Indonesia dan meraih gelar S2 Administrasi Publik dari Universitas Indonesia.",
          ],
        },
        {
          jabatan: "Kepala Biro Keuangan dan Barang Milik Negara",
          nama: "Drs. Bayu Teja Muliawan, Apt., M.Pharm, MM",
          img: "./images/sekjen2.jpg",
          deskripsi: [
            "Pria kelahiran Jakarta ini sebelumnya menjabat sebagai Kepala Biro Perencanaan dan Anggaran sejak tahun 2016. Beliau dilantik sebagai Kepala Biro Keuangan dan BMN pada tanggal 11 Oktober 2021. Peraih gelar Apoteker dari University Sains Malaysia dan lulusan S2 Manajemen Keuangan Universitas Mercu Buana ini juga pernah menjabat sebagai Direktur Bina Pelayanan Kefarmasian pada tahun 2013-2016, serta Direktur Bina Obat Publik dan Perbekalan Kesehatan tahun 2012. Penghargaan yang terakhir diterima: Satyalancana Karya Satya 20 Tahun.",  
          ],
        },
      ],
    },
    {
      id: 3,
      text: "Pelayanan Kesehatan",
      members: [
        {
          jabatan: "Direktur Pelayanan Kesehatan Rujukan",
          nama: "drg. Yuli Astuti Saripawan, M.Kes.",
          img: "./images/pelkes1.png",
          deskripsi: [
            "Perempuan kelahiran Ketapang ini dilantik sebagai Direktur Pelayanan Kesehatan Rujukan pada tanggal 29 Desember 2022. Lulusan Fakultas Kedokteran Gigi Universitas Gadjah Mada dan peraih gelar Magister Ilmu Kesehatan Masyarakat dari Universitas Gadjah Mada ini sebelumnya menjabat sebagai Direktur Rumah Sakit Umum Daerah (RSUD) dr. Soedarso.",  
          ],
        },
        {
          jabatan: "Direktur Pelayanan Kesehatan Primer",
          nama: "dr. Yanti Herman, S.H., M.H.Kes.",
          img: "./images/pelkes2.png",
          deskripsi: [
            "Perempuan kelahiran Jakarta ini dilantik sebagai Direktur Pelayanan Kesehatan Primer pada tanggal 14 April 2022, setelah sebelumnya menjabat sebagai Perancang Peraturan Perundang-undangan Ahli Madya pada Sekretariat Direktorat Jenderal Pelayanan Kesehatan. Beliau merupakan lulusan Fakultas Kedokteran Universitas Padjajaran dan Fakultas Hukum Universitas Langlangbuana, serta meraih gelar Magister Hukum Kesehatan dari Universitas Katolik Soegijapranta.",  
          ],
        },
      ],
    },
    {
      id: 4,
      text: "Pencegahan dan Pengendalian Penyakit",
      members: [
        {
          jabatan: "Sekretaris Direktorat Jenderal Pencegahan dan Pengendalian Penyakit",
          nama: "dr. Yudhi Pramono, M.A.R.S.",
          img: "./images/p2p1.jpg",
          deskripsi: [
            "Pria kelahiran Surabaya ini dilantik sebagai Sekretaris Direktorat Jenderal Pencegahan dan Pengendalian Penyakit pada tanggal 2 September 2022. Sebelumnya, beliau menjabat sebagai Kepala Kantor Kesehatan Pelabuhan Kelas I Tanjung Priok sejak tahun 2020. Beliau merupakan lulusan Fakultas Kedokteran Universitas Wijaya Kusuma Surabaya dan meraih gelar Magister Administrasi Rumah Sakit dari Universitas Respati Indonesia.",  
          ],
        },
        {
          jabatan: "Direktur Pencegahan dan Pengendalian Penyakit Tidak Menular",
          nama: "Dr. Eva Susanti, S.Kp., M.Kes.",
          img: "./images/p2p2.png",
          deskripsi: [
            "Perempuan kelahiran Pelawan ini dilantik sebagai Direktur Pencegahan dan Pengendalian Penyakit Tidak Menular tanggal 2 September 2022. Beliau merupakan lulusan S.1 Keperawatan, S.2 Ilmu Kedokteran Dasar, dan S.3 Ilmu Kedokteran dari Universitas Padjajaran.",  
          ],
        },
      ],
    },
    {
      id: 5,
      text: "Kesehatan Masyarakat",
      members: [
        {
          jabatan: "Sekretaris Direktorat Jenderal Kesehatan Masyarakat",
          nama: "dr. Niken Wastu Palupi, MKM",
          img: "./images/kesmas1.jpg",
          deskripsi: [
            "Perempuan kelahiran Padang ini sebelumnya menjabat sebagai Kepala Balai Besar Laboratorium Kesehatan Jakarta sejak tahun 2018. Peraih gelar Dokter Umum dari Universitas Andalas dan Magister Ilmu Kesehatan Masyarakat dari Universitas Indonesia ini dilantik sebagai Sekretaris Direktorat Jenderal Kesehatan Masyarakat pada tanggal 2 September 2022. Penghargaan yang terakhir diterima: Bhakti Karya Husada Dwi Windu (16 Tahun).",  
          ],
        },
        {
          jabatan: "Direktur Promosi Kesehatan dan Pemberdayaan Masyarakat",
          nama: "drg. Widyawati, M.K.M.",
          img: "./images/kesmas2.jpg",
          deskripsi: [
            "Sebelum menjabat sebagai Direktur Promosi Kesehatan dan Pemberdayaan Masyarakat pada tanggal 2 September 2022, perempuan kelahiran Sungai Gerong-Palembang ini menjabat sebagai Kepala Biro Komunikasi dan Pelayanan Masyarakat sejak tahun 2018. Beliau meraih gelar Dokter Gigi dari Universitas Trisakti, dan mendapatkan gelar Magister Kesehatan Masyarakat dari Universitas Indonesia. Penghargaan yang terakhir diterima: Satyalancana Karya Satya 20 Tahun.",  
          ],
        },
      ],
    },
    {
      id: 6,
      text: "Kefarmasian dan Alat Kesehatan",
      members: [
        {
          jabatan: "Sekretaris Ditjen Kefarmasian dan Alat Kesehatan",
          nama: "Dita Novianti Sugandi Argadiredja, S.Si., Apt., MM",
          img: "./images/alkes1.jpg",
          deskripsi: [
            "Perempuan kelahiran Rangkasbitung ini dilantik sebagai Sekretaris Ditjen Kefarmasian dan Alat Kesehatan tanggal 10 Februari 2022. Sebelumnya beliau menjabat sebagai Direktur Pelayanan Kefarmasian sejak tahun 2018, Kepala Subdirektorat Obat dan Pangan, Direktorat Produksi dan Distribusi Kefarmasian tahun 2018, dan Kepala Sub Direktorat Kemandirian Obat dan Bahan Baku Sediaan Farmasi, Direktorat Produksi dan Distribusi Kefarmasian tahun 2016. Beliau merupakan lulusan S1 Farmasi dan Apoteker Universitas Padjajaran Bandung, serta meraih gelar Magister Manajemen dari Universitas Padjajaran Bandung. Penghargaan terakhir yang diterima adalah Bhakti Karya Husada Dwi Windu (16 Tahun).",  
          ],
        },
        {
          jabatan: "Direktur Ketahanan Kefarmasian dan Alat Kesehatan",
          nama: "Roy Himawan, S.Farm., Apt., M.K.M.",
          img: "./images/alkes2.jpg",
          deskripsi: [
            "Sebelum menjabat sebagai Direktur Ketahanan Kefarmasian dan Alat Kesehatan pada tanggal 2 September 2022, pria kelahiran Jakarta ini menjabat sebagai Analis Anggaran Ahli Madya pada Sekretariat Direktorat Jenderal Kefarmasian dan Alat Kesehatan. Beliau meraih gelar Apoteker dari Universitas Gadjah Mada dan Magister Ilmu Kesehatan Masyarakat dari Universitas Indonesia. Penghargaan terakhir yang diterima: Satya Lancana Karya Satya 10 Tahun.",  
          ],
        },
      ],
    },
    {
      id: 7,
      text: "Inspektorat Jenderal",
      members: [
        {
          jabatan: "Sekretaris Inspektorat Jenderal",
          nama: "Heri Radison, S.K.M, M.K.M, QGIA",
          img: "./images/itjen1.jpg",
          deskripsi: [
            "Pria kelahiran Cirebon ini dilantik sebagai Sekretaris Inspektorat Jenderal Kementerian Kesehatan pada tanggal 2 September 2022. Sebelumnya, beliau menjabat sebagai Inspektur Inspektorat I pada tahun 2020. Beliau menyelesaikan pendidikan dan memperoleh gelar Magister Kesehatan Masyarakat Universitas Indonesia.",  
          ],
        },
        {
          jabatan: "Inspektur I",
          nama: "Heru Susanto, S.E., S.H., M.H., CFE, CLA",
          img: "./images/itjen2.jpg",
          deskripsi: [
            "Pria kelahiran Singaraja ini dilantik sebagai Inspektur I pada tanggal 29 Desember 2022. Sebelum menjabat sebagai Inspektur I, beliau menjabat sebagai Auditor Ahli Madya pada Inspektorat Jenderal Kementerian Keuangan Republik Indonesia.",  
          ],
        },
      ],
    },
    {
      id: 8,
      text: "Badan Penelitian dan Pengembangan",
      members: [
        {
          jabatan: "Sekretaris Badan Kebijakan Pembangunan Kesehatan",
          nama: "Dr. Drs. Nana Mulyana, M.Kes",
          img: "./images/bkpk1.png",
          deskripsi: [
            "Sebelum dilantik sebagai Sekretaris Badan Penelitian dan Pengembangan Kesehatan pada tanggal 12 Januari 2018, pria kelahiran Subang, lulusan S2 dan S3 Ilmu Kesehatan Masyarakat Fakultas Kesehatan Masyarakat Universitas Indonesia ini menjabat sebagai Kepala Pusat Penelitian dan Pengembangan Sumber Daya dan Pelayanan Kesehatan pada tanggal 18 Januari 2016. Sebelumnya beliau menjabat sebagai Kepala Bidang Advokasi dan Kemitraan, Pusat Promosi Kesehatan. Penghargaan yang terakhir diterima: Satyalancana Karya Satya 30 Tahun.",  
          ],
        },
        {
          jabatan: "Kepala Pusat Kebijakan Upaya Kesehatan",
          nama: "Dra. Pretty Multihartina, Ph.D",
          img: "./images/bkpk2.png",
          deskripsi: [
            "Perempuan kelahiran Magetan, peraih gelar Doktor Biologi ini dilantik sebagai Kepala Pusat Kebijakan Upaya Kesehatan pada tanggal 10 Februari 2022. Sebelumnya beliau menjabat sebagai Kepala Pusat Penelitian dan Pengembangan Sumber Daya dan Pelayanan Kesehatan. Beliau pernah pula menjabat sebagai Kepala Pusat Analisis Determinan Kesehatan, serta Kepala Pusat Penelitian dan Pengembangan Biomedis dan Teknologi Dasar Kesehatan Balitbangkes tahun 2013.",  
          ],
        },
      ],
    },
    {
      id: 9,
      text: "Tenaga Kesehatan",
      members: [
        {
          jabatan: "Sekretaris Direktorat Jenderal Tenaga Kesehatan",
          nama: "Sugianto, SKM, M.Sc.PH",
          img: "./images/nakes1.png",
          deskripsi: [
            "Sebelum menjabat sebagai Sekretaris Direktorat Jenderal Tenaga Kesehatan pada tanggal 10 Februari 2022, pria kelahiran Cirebon ini menjabat sebagai Kepala Pusat Penelitian dan Pengembangan Humaniora dan Manajemen Kesehatan, serta Kepala Balai Penelitian Gangguan Akibat Kekurangan Iodium. Beliau merupakan lulusan Fakultas Kesehatan Masyarakat Universitas Diponegoro Semarang, dan meraih gelar Magister of Public Health dari Griffith University Australia. Penghargaan terakhir yang diterima adalah Bakti Karya Husada Tri Windu (24 tahun).",  
          ],
        },
        {
          jabatan: "Direktur Perencanaan Tenaga Kesehatan",
          nama: "Sugiyanto, S.Pd, M.App.Sc.",
          img: "./images/nakes2.png",
          deskripsi: [
            "Pria kelahiran Kulon Progo ini dilantik sebagai Direktur Perencanaan Tenaga Kesehatan pada tanggal 10 Februari 2022. Sebelumnya beliau menjabat sebagai Kepala Pusat Pendidikan Sumber Daya Manusia Kesehatan sejak tahun 2017, Direktur Poltekkes Semarang sejak tahun 2013. Beliau merupakan lulusan Teknik Radiologi dan S2 Keteknisian Medis dari Universitas Royal Melbourne Institute of Technology Australia. Penghargaan terakhir yang diterima adalah Bakti Karya Husada Tri Windu (24 tahun).",  
          ],
        },
      ],
    },
  ];

  return staffs[index].members.map((staff) => {
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
            className="max-w-[150px] h-[200px] rounded-lg"
          />
          <div className="text-justify md:leading-7 font-paragraph mb-2">
            {staff.deskripsi.map((desk) => {
              return <p className="mb-3">{desk}</p>;
            })}
          </div>
        </div>
      </div>
    );
  });
};
