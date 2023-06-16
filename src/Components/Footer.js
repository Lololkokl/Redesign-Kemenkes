import { NavLink } from "react-router-dom";
import { CiFacebook, CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

export const Footer = () => {
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
        { title: "Peraturan Peundangan", link: "/peraturan" },
      ],
    },
    {
      title: "Tentang Kami",
      navChildren: [
        { title: "Visi dan Misi", link: "/visi" },
        { title: "Struktur", link: "/struktur" },
        { title: "Tugas dan Fungsi", link: "/tugas" },
        { title: "Unit Kerja dan Pejabat", link: "/unit" },
        { title: "Link Terkait", link: "/linkterkait" },
      ],
    },
    {
      title: "Media Sosial",
      navChildren: [
        {
          title: "Instagram",
          link: "https://www.instagram.com/kemenkes_ri/",
          external: true,
          icon: <BsInstagram />,
        },
        {
          title: "Twitter",
          link: "https://twitter.com/KemenkesRI",
          external: true,
          icon: <CiTwitter />,
        },
        {
          title: "Facebook",
          link: "https://www.facebook.com/KementerianKesehatanRI/",
          external: true,
          icon: <CiFacebook />,
        },
        {
          title: "Youtube",
          link: "https://www.youtube.com/channel/UCWBnPaPlVx2_h7Kdva52AYg",
          external: true,
          icon: <AiOutlineYoutube />,
        },
      ],
    },
  ];
  return (
    <footer className="w-full py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-black ">
      <div className="max-w-[85rem] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-2 lg:block">
          <h4
            className="flex-none text-md font-semibold text-white font-heading"
            href="#"
            aria-label="Brand"
          >
            Kementerian Kesehatan
          </h4>
          <p className="mt-3 text-xs sm:text-sm text-white font-paragraph">
            Jl. H.R. Rasuna Said Blok X5 Kav 4-9 Kuningan, Jakarta Selatan
            <p className="mt-3 text-xs sm:text-sm text-white font-paragraph">
          Halo Kemenkes 1500567 
          </p>
            
          </p>
          <p className="mt-3 text-xs sm:text-sm text-white font-paragraph">
          Email kontak@kemkes.go.id
          </p>
        </div>

        {navItems.map((navItem) => {
          return (
            <div>
              <h4 className="text-md font-semibold text-white font-heading">
                {navItem.title}
              </h4>
              <div className="mt-1 grid space-y-5 text-sm">
                <p>
                  {navItem.navChildren.map((navChild) => {
                    if (navChild.external === true) {
                      return (
                        <p className="mt-1 font-paragraph">
                          <a
                            href={navChild.link}
                            target="_blank"
                            className="inline-flex gap-x-2 text-gray-400  hover:text-gray-600 items-center"
                          >
                            {navChild.icon ? navChild.icon : ""}
                            {navChild.title}
                          </a>
                        </p>
                      );
                    }
                    return (
                      <p className="mt-1">
                        <NavLink
                          className="inline-flex gap-x-2 text-gray-400 hover:text-gray-600 "
                          to={navChild.link}
                        >
                          {navChild.title}
                        </NavLink>
                      </p>
                    );
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
