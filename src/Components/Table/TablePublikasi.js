export const TablePublikasi = ({ index }) => {
  const colNames = ["No", "Sampul", "Judul", "Tahun", "Unduh"];

  const tableItems = [
    [
      {
        no: 1,
        sampul: "/images/lansia.jpg",
        judul: "Lansia Berdaya, Bangsa Sejahtera",
        tahun: 2022,
      },
      {
        no: 2,
        sampul: "/images/asi.jpg",
        judul: "Pemberian ASI Eksklusif dan Mastitis pada ibu menyusui",
        tahun: 2022,
      },
      {
        no: 3,
        sampul: "/images/osteoporosis.jpg",
        judul: "Situasi Osteoporosis di Indonesia ",
        tahun: 2020,
      },
    ],
    [
      {
        no: 1,
        sampul: "/images/profil2021.jpg",
        judul: "Profil Kesehatan Indonesia",
        tahun: 2021,
      },
      {
        no: 2,
        sampul: "/images/profil2020.jpg",
        judul: "Profil Kesehatan Indonesia",
        tahun: 2020,
      },
      {
        no: 3,
        sampul: "/images/profil2019.jpg",
        judul: "Profil Kesehatan Indonesia",
        tahun: 2019,
      },
    ],
    [
      {
        no: 1,
        sampul: "/images/demamberdarah.jpg",
        judul: "Demam Berdarah",
        tahun: 2022,
      },
      {
        no: 2,
        sampul: "/images/malaria.jpg",
        judul: "Malaria",
        tahun: 2021,
      },
      {
        no: 3,
        sampul: "/images/filariasis.jpg",
        judul: "Filariasis",
        tahun: 2020,
      },
    ],
  ];

  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  {colNames.map((colName) => {
                    return (
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                      >
                        {colName}
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {tableItems[index].map((tableItem) => {
                  return (
                    <tr className="border-l-red-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                        {tableItem.no}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                        <img
                          src={tableItem.sampul}
                          alt=""
                          srcset=""
                          className="h-full lg:w-[150px] lg:h-[225px] object-cover rounded-lg mx-auto"
                        />
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.judul}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.tahun}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                        <a
                          className="text-blue-500 hover:text-blue-700 underline"
                          href="#"
                        >
                          PDF
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
