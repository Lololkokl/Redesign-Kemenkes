import { Pagetitle } from "../../Components/Pagetitle";

export const Detail = () => {
  const berita = {
    judul: "Kasus Gagal Ginjal Akut Pada Anak Meningkat, Orang Tua Diminta Waspada",
    img: "/images/anak.jpg",
    tanggal: "11 Juni 2023",
    contents: [
      "Kasus gagal ginjal akut yang menyerang anak-anak usia 6 bulan-18 tahun terjadi peningkatan terutama dalam dua bulan terakhir. Per tanggal 18 Oktober 2022 sebanyak 189 kasus telah dilaporkan, paling banyak didominasi usia 1-5 tahun.",

      "Seiring dengan peningkatan tersebut, Kemenkes meminta orang tua untuk tidak panik, tenang namun selalu waspada. Terutama apabila anak mengalami gejala yang mengarah kepada gagal ginjal akut seperti ada diare, mual ,muntah, demam selama 3-5 hari, batuk, pilek, sering mengantuk serta jumlah air seni/air kecil semakin sedikit bahkan tidak bisa buang air kecil sama sekali.",
      
      "Orang tua harus selalu hati-hati, pantau terus kesehatan anak-anak kita, jika anak mengalami keluhan yang mengarah kepada penyakit gagal ginjal akut, sebaiknya segera konsultasikan ke tenaga kesehatan jangan ditunda atau mencari pengobatan sendiri,'' kata Plt. Direktur Pelayanan Kesenatan Rujukan dr. Yanti Herman, MH. Kes.",
      
      "Pastikan bila anak sakit cukupi kebutuhan cairan tubuhnya dengan minum air. Lebih lanjut, gejala lain yang juga perlu diwaspadai orang tua adalah perubahan warna pada urine (pekat atau kecoklatan). Bila warna urine berubah dan volume urine berkurang, bahkan tidak ada urine selama 6-8 jam (saat siang hari), orang tua diminta segera membawa anak ke fasilitas pelayanan kesehatan terdekat untuk mendapatkan penanganan lebih lanjut.",
      
      "Sampai saat ini kasus gagal ginjal akut pada anak belum diketahui secara pasti penyebabnya, untuk itu pemerintah bersama Ikatan Dokter Anak Indonesia (IDAI) dan tim dokter RS Cipto Mangunkusumo (RSCM) membentuk satu tim yang bertugas untuk mengamati dan menyelidiki kasus gangguan ginjal akut pada anak.",
      
      "Dari data yang ada gejala yang muncul di awal adalah terkait infeksi saluran cerna yang utama untuk itu Kemkes menghimbau sebagai upaya pencegahan agar orang tua tetap memastikan perilaku hidup bersih dan sehat tetap diterapkan, pastikan cuci tangan tetap diterapkan, makan makanan yang bergizi seimbang, tidak jajan sembarangan, minum air matang dan pastikan imunisasi anak rutin dan lanjuti dilengkapi.",

      "Selain itu, Kemenkes juga telah menerbitkan Surat Keputusan Direktur Jenderal Pelayanan Kesehatan Nomor HK.02.02./2/I/3305/2022 tentang Tata Laksana dan Managemen Klinis Gangguan Ginjal Akut Progresif Atipikal (Atypical Progressive Acute Kidney Injury) Pada Anak di Fasilitas Pelayanan Kesehatan sebagai bagian peningkatan kewaspadaan.",

      "Surat keputusan ini memuat serangkaian kegiatan yang dilakukan oleh tenaga medis dan tenaga kesehatan lain dalam melakukan penanganan terhadap pasien gagal ginjal akut sesuai dengan indikasi medis.",

      "Belajar dari pandemi COVID-19, pemerintah tentu tidak bisa bekerja sendiri. Sinergi dan kolaborasi dari seluruh pihak sangat diperlukan untuk mencegah agar penyakit ini bisa di cegah sedini mungkin. Karenanya kami mengimbau kepada Dinas Kesehatan, rumah sakit maupun pintu masuk negara agar segera melaporkan apabila ada indikasi kasus yang mengarah kepada gagal ginjal akut maupun penyakit lain yang berpotensi mengalami KLB, imbuh dr. Yanti"
      ],
  };
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Berita" />
      <h2 className="text-center font-bold text-2xl font-heading text-gray-900">
        {berita.judul}
      </h2>
      <img src={berita.img} alt="" className="w-full md:w-8/12 mx-auto rounded-lg my-4" />
      <p className="text-gray-400">{berita.tanggal}</p>
      <div className="leading-8 text-justify">
        {berita.contents.map((content) => {
          return <p className="my-2 font-paragraph text-gray-900">{content}</p>;
        })}
      </div>
    </div>
  );
};
