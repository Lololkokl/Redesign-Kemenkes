import { NavLink } from "react-router-dom";

export const Page404 = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex-col flex justify-center items-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
            Error 404
          </h1>
          <p className="mb-4 text-3xl tracking-tight text-center font-bold text-gray-900 md:text-4xl dark:text-white">
            Halaman Tidak Ditemukan
          </p>
          <NavLink to="/">
            <button className="inline-flex text-primary bg-primary-600 hover:bg-primary-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center  border-primary border-2 hover:bg-primary hover:text-white my-4">
              Kembali Ke Beranda
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
