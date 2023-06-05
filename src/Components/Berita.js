export const Berita = () => {
  const news = [
    {
      img: "/images/logo192.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "/images/logo192.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "/images/logo192.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {news.map((newItem) => {
          return (
            <div className="card flex flex-col justify-center">
              <img
                src={process.env.PUBLIC_URL + newItem.img}
                alt=""
                srcset=""
                className="w-6/12 self-center"
              />
              <p className="sm:text-xs md:text-sm font-bold">
                {newItem.headline}
              </p>
              <p className="mt-2 text-xs text-gray-500">{newItem.tanggal}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
