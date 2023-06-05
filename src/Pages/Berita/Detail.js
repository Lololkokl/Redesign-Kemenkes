import { Pagetitle } from "../../Components/Pagetitle";

export const Detail = () => {
  const berita = {
    judul: "Olahraga Efektif Untuk Diet Sehat, Ini Penjelasannya",
    img: "/redesign-web-kemenkes/images/4.png",
    tanggal: "19 Juni 2023",
    contents: [
      "Berolahraga dapat memberikan banyak manfaat pada tubuh, terutama untuk menjaga kesehatan dan kebugaran. Untuk menurunkan berat badan, banyak orang yang mengombinasikan olahraga dengan diet agar penurunan bobot tubuh terjadi secara signifikan. Namun, banyak orang yang bertanya bagaimana caranya melakukan aktivitas fisik dapat membuat tubuh semakin ramping? Berikut ulasannya!",
      "Saat berolahraga, metabolisme tubuh akan meningkat sehingga kalori yang berlebih di dalam tubuh terbakar. Hal tersebut terjadi saat tubuh mengeluarkan keringat ketika melakukan aktivitas fisik. Dengan menggabungkan olahraga dengan diet, lemak yang bertumpuk di dalam tubuh tidak tergantikan dengan yang baru. Ini karena sudah dilakukan penyesuaian terkait konsumsi makanan yang sesuai dengan kalori yang dibutuhkan.",
      "Namun, jika kamu hanya berolahraga saja tanpa adanya kombinasi dengan diet, penurunan berat badan mungkin tidak dapat terjadi atau membutuhkan waktu yang sangat lama. Ini karena kebiasaan banyak orang yang setelah berolahraga mengonsumsi porsi makanan yang lebih banyak dari yang dibakar. Alih-alih menurunkan berat badan, pertambahan justru yang terjadi.",
      "Untuk mendapatkan hasil yang maksimal terkait manfaat dari berolahraga, kamu disarankan untuk melakukan beberapa jenis latihan aerobik paling tidak tiga kali seminggu dengan minimal 20 menit per sesinya. Dengan melakukan olahraga tingkat sedang selama 15 menit per harinya, dapat membakar hingga 100 kalori di dalam tubuh. Saat membakar 700 kalori selama seminggu, kamu dapat menurunkan berat badan hingga 4 kilogram jika konsumsi makannya benar-benar diatur.",
    ],
  };
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24">
      <Pagetitle text="Berita" />
      <h2 className="text-center font-bold text-2xl">{berita.judul}</h2>
      <img src={berita.img} alt="" className="w-8/12 mx-auto" />
      <p className="text-gray-400">{berita.tanggal}</p>
      <div className="leading-8 text-justify">
        {berita.contents.map((content) => {
          return <p className="my-1">{content}</p>;
        })}
      </div>
    </div>
  );
};
