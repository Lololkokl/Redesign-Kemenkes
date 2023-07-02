import { GelombangAtas } from "../../Components/GelombangAtas";
import { GelombangBawah } from "../../Components/GelombangBawah";

export const Hero = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mx-12 md:mx-48 mb-12 md:mb-24">
        <div className="hidden md:flex flex-col gap-y-4">
          <h1 className="text-2xl md:text-5xl font-bold text-primary font-heading">
            Masyarakat Sehat
          </h1>
          <h1 className="text-2xl md:text-5xl font-bold text-primary font-heading">
            Indonesia Kuat
          </h1>
        </div>

        <h1 className="text-3xl font-bold text-center block md:hidden text-primary font-heading ">
          Masyarakat Sehat
        </h1>
        <h1 className="text-3xl font-bold text-center block md:hidden text-primary font-heading mb-2">
          Indonesia Kuat
        </h1>

        <img
          src="/images/1.png"
          alt=""
          className="w-full justify-self-center "
          data-aos="zoom-out-left"
          data-aos-once="true"
        />
      </div>

      <GelombangAtas data="#00B1A9" />
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center bg-primary gap-x-12 py-8 px-12 md:px-32">
        <img
          src="/images/2.png"
          alt=""
          className="hidden lg:inline-block w-8/12 lg:w-full justify-self-center"
          data-aos="zoom-out-right"
          data-aos-once="true"
        />
        <div className=" text-white font-heading ">
          <h1 className="text-2xl lg:text-3xl font-bold lg:text-start text-center self-end my-2">
            Kesehatan Untuk Semua
          </h1>
          <p className="text-justify leading-8 font-paragraph">
            Kementerian Kesehatan berkomitmen membantu masyarakat Indonesia
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
