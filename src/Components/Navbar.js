import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navItems = [
    {
      title: "Untuk Publik",
      navChildren: [
        { title: "Berita", link: "/berita" },
        { title: "Publikasi", link: "/publikasi" },
        {
          title: "Statistik",
          link: "https://satusehat.kemkes.go.id/dashboard/",
          external: true,
        },
        {
          title: "Layanan Kesehatan",
          link: "https://upk.kemkes.go.id/new/",
          external: true,
        },
      ],
    },
    {
      title: "Untuk Profesional",
      navChildren: [
        {
          title: "Perizinan Produksi dan Distribusi Alat Kesehatan",
          link: "https://sertifikasialkes.kemkes.go.id/",
          external: true,
        },
        {
          title: "Registrasi Alat Kesehatan",
          link: "https://regalkes.kemkes.go.id/",
          external: true,
        },
        {
          title: "Registrasi Dokter",
          link: "https://registrasi.kki.go.id/",
          external: true,
        },
        { title: "Peraturan Perundangan", link: "/peraturan" },
      ],
    },
    {
      title: "Tentang Kami",
      navChildren: [
        { title: "Visi dan Misi", link: "/visi" },
        { title: "Struktur", link: "/struktur" },
        { title: "Tugas dan Fungsi", link: "/tugas" },
        { title: "Unit Kerja dan Pejabat", link: "/unit" },
      ],
    },
  ];
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-3 ">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <NavLink
            className="flex-none text-xl font-semibold"
            to="/redesign-web-kemenkes"
          >
            <img
              src="/redesign-web-kemenkes/images/logoKemenkes.png"
              alt=""
              className="w-[40px]"
            />
          </NavLink>
          <div className="text-xl font-bold text-gray-700 mx-2">
            <span>KEMENTERIAN KESEHATAN</span>
          </div>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium  bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
              data-hs-collapse="#navbar-collapse-basic"
              aria-controls="navbar-collapse-basic"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>

        <div id="navbar-collapse-basic" className="hidden grow sm:block">
          <div className="flex flex-col gap-10 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5 border-primary">
            {navItems.map((navItem) => {
              return (
                <div className="hs-dropdown [--strategy:static] sm:[--strategy:absolute] [--adaptive:none] sm:[--trigger:hover]">
                  <button
                    type="button"
                    className="flex items-center w-full text-gray-600 hover:text-primary font-semibold"
                  >
                    {navItem.title}
                  </button>

                  <div className="hs-dropdown-menu transition-[opacity,margin] sm:border duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-full hidden z-10 top-full left-0 min-w-[15rem] bg-primary sm:shadow-md  before:absolute before:-top-5 before:left-0 before:w-full before:h-5 p-0">
                    <div className="sm:grid sm:grid-cols-1">
                      <div className="flex flex-col">
                        {navItem.navChildren.map((navChild) => {
                          if (navChild.external === true) {
                            return (
                              <a
                                className="flex items-center gap-x-3.5 py-3 px-3 text-lg font-semibold text-white hover:bg-white hover:text-primary"
                                href={navChild.link}
                                target="_blank"
                              >
                                {navChild.title}
                              </a>
                            );
                          }
                          return (
                            <NavLink
                              className="flex items-center gap-x-3.5 py-3 px-3 text-lg font-semibold text-white hover:bg-white hover:text-primary "
                              to={"redesign-web-kemenkes" + navChild.link}
                            >
                              {navChild.title}
                            </NavLink>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};
