export const Beritagrid = () => {
  const news = [
    {
      img: "./images/3.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "./images/4.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "./images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "./images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "./images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "./images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "./images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "./images/5.png",
      headline: "Olahraga Efektif untuk Diet Sehat, Ini Penjelasannya",
      tanggal: "19 Juni 2023",
    },
    {
      img: "./images/5.png",
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
                src={newItem.img}
                alt=""
                srcset=""
                className="w-full h-48 object-cover"
              />
              <div className="flex-1">
                <p className="sm:text-xs md:text-sm font-bold">
                  {newItem.headline}
                </p>
                <p className="mt-2 text-xs text-gray-500">{newItem.tanggal}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
