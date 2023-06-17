import { Pagetitle } from "../../Components/Pagetitle";

export const Detail2 = () => {
  const berita = {
    judul: "Hipertensi Disebut sebagai Silent Killer, Menkes Budi Imbau Rutin Cek Tekanan Darah",
    img: "/images/hipertensi.jpg",
    tanggal: "10 Juni 2023",
    contents: [
      "Menteri Kesehatan (Menkes) RI Budi Gunadi Sadikin mengatakan kasus hipertensi di Indonesia sangat banyak, bahkan sampai disebut silent killer. Ia meminta masyarakat untuk rutin cek tekanan darah.",

      "1 dari 3 orang Indonesia mengidap hipertensi, bahkan angka ini terus meningkat setiap tahunnya. Hipertensi sering disebut sebagai silent killer karena orang dengan tekanan darah tinggi tidak memiliki keluhan,'' ujar Menkes Budi pada webinar Hari Hipertensi Sedunia, Selasa (6/6).",

      "Padahal, lanjutnya, hipertensi meningkatkan risiko penyakit jantung, stroke, gagal ginjal, dan penyakit lainnya yang menyebabkan kematian dan pembiayaan kesehatan yang sangat besar.",

      "Oleh karena itu dalam memperingati hari hipertensi sedunia tahun 2023 saya mengajak kita semua untuk mengukur tekanan darah secara rutin, baik secara mandiri maupun di fasilitas kesehatan,'' ungkap Menkes Budi.",

      "Ia menilai deteksi dini hipertensi sangat penting untuk mencegah berbagai risiko penyakit akibat tekanan darah. Deteksi dini hipertensi harus digaungkan baik oleh pemerintah pusat dan daerah, maupun semua unsur masyarakat di berbagai sektor.",

      "Saya juga berpesan kepada masyarakat yang telah mengidap hipertensi untuk tetap menerapkan prinsip periksa kesehatan secara berkala, atasi penyakit dengan pengobatan tepat, tetap menjaga pola makan sehat dan gizi seimbang, serta upayakan beraktivitas fisik dan menghindari rokok,'' ucapnya.",

      "Ketua Tim Kerja Penyakit Jantung dan Pembuluh Darah, Ditjen Pencegahan dan Pengendalian Penyakit Kemenkes dr. Fatcha Nuraliyah, MKM menjelaskan prevalensi hipertensi di Indonesia sangat besar yaitu sebesar 34,1% berdasarkan survei nasional di 2018.",

      "Jadi kalau kita hitung, banyaknya orang yang diperkirakan menderita hipertensi sekitar 70 juta lebih penduduk Indonesia,'' katanya.",

      "Sebelum seseorang menderita hipertensi ada faktor risiko yang jadi penyebab hipertensi, antara lain, pola makan yang tidak sehat, biasanya pola makan dengan kandungan gula garam lemak yang melebihi batas normal setiap harinya. Kemudian aktivitas fisik yang kurang dianjurkan, untuk setiap hari bisa melakukan aktivitas fisik sekitar 15-20 menit untuk mencegah munculnya penyakit tidak menular.",

      "Karakteristik dari pengidap hipertensi di Indonesia yang terdiagnosis mereka mengatakan masih merasa sehat walaupun tekanan darah tinggi. Mereka tidak merasa sakit, dan ini adalah populasi yang paling besar.",

      "Dr. Erwinanto dari Perhimpunan Dokter Hipertensi Indonesia mengatakan klasifikasi hipertensi di Indonesia mengacu pada klasifikasi Eropa, yakni hipertensi dibagi menjadi sejumlah derajat yaitu :",

      "1. Optimal dengan tekanan darah >120/<80, 2. Normal dengan tekanan darah 120-129/80-84, 3. High Normal dengan tekanan darah 130-139/85-89, 4. Grade 1 Hypertension dengan tekanan darah 140-159 /90-99, 5. Grade 2 Hypertension dengan tekanan darah 160-179/100-109, 6. Grade 3 Hypertension dengan tekanan darah >180/ >110, 7. Isolated Systolic Hypertension dengan tekanan darah >140/>90.",

      "Rata-rata tekanan darah yang harus dicapai adalah kurang dari 130/80 tapi tidak lebih rendah dari 120/70. Artinya target tekanan darahnya adalah antara 120-129/70-79,'' kata dr. Erwinanto.",
    
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
