export const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-y-12 my-6">
      <div className="hidden md:block">
        <h1 className="text-2xl md:text-5xl font-bold text-primary">
          Masyarakat Sehat,
        </h1>
        <h1 className="text-2xl md:text-5xl font-bold text-primary">
          Indonesia Kuat
        </h1>
      </div>

      <h1 className="text-2xl font-bold text-center block md:hidden text-primary">
        Masyarakat Sehat, Indonesia Kuat
      </h1>
      <img src="./redesign-web-kemenkes/images/1.png" alt="" />

      <img
        src="./redesign-web-kemenkes/images/2.png"
        alt=""
        className="hidden md:inline-block"
      />
      <div>
        <h1 className="text-lg md:text-3xl font-bold self-end text-primary my-2">
          Kesehatan Untuk Semua
        </h1>
        <p className="text-justify leading-8">
          Kementerian Kesehatan berkomitmen mambantu masyarakat Indonesia
          memiliki kesehatan yang lebih baik. Kami berupaya untuk menciptakan
          sistem kesehatan nasional yang baik dan terintegrasi mulai dari
          pencegahan, penanganan, sampai peningkatan kualitas hidup masyarakat
          Indonesia. Selain itu, kami sedang berupaya meningkatan jumlah tenaga
          kesehatan dan kualitas layanan kesehatan sehingga seluruh lapisan
          masyarakat dapat memperoleh pelayanan kesehatan yang layak.
        </p>
      </div>
    </div>
  );
};
