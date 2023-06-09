import { GelombangAtas } from "../../Components/GelombangAtas";
import { GelombangBawah } from "../../Components/GelombangBawah";

export const Hero = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-12 md:mx-48 mb-12">
        <div className="hidden md:block">
          <h1 className="text-2xl md:text-5xl font-bold text-primary font-heading">
            Masyarakat Sehat,
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold text-primary font-heading">
            Indonesia Kuat
          </h1>
        </div>

        <h1 className="text-2xl font-bold text-center block md:hidden text-primary font-heading ">
          Masyarakat Sehat, Indonesia Kuat
        </h1>

        <img
          src="/redesign-web-kemenkes/images/1.png"
          alt=""
          className="w-full justify-self-center "
        />
      </div>

      <GelombangAtas data="#00B1A9" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center bg-primary gap-x-12 py-8 px-12 md:px-32">
        <img
          src="/redesign-web-kemenkes/images/2.png"
          alt=""
          className="hidden md:inline-block w-8/12 md:w-full justify-self-center"
        />
        <div className=" text-white font-heading">
          <h1 className="text-lg md:text-3xl font-bold md:text-start text-center self-end my-2">
            Kesehatan Untuk Semua
          </h1>
          <p className="text-justify leading-8 font-paragraph">
            Kementerian Kesehatan berkomitmen mambantu masyarakat Indonesia
            memiliki kesehatan yang lebih baik. Kami berupaya untuk menciptakan
            sistem kesehatan nasional yang baik dan terintegrasi mulai dari
            pencegahan, penanganan, sampai peningkatan kualitas hidup masyarakat
            Indonesia. Selain itu, kami sedang berupaya meningkatan jumlah
            tenaga kesehatan dan kualitas layanan kesehatan sehingga seluruh
            lapisan masyarakat dapat memperoleh pelayanan kesehatan yang layak.
          </p>
        </div>
      </div>
      <GelombangBawah data="#00B1A9" />
    </div>
  );
};
