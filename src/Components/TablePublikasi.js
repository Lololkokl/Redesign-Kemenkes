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
        sampul: "/images/1.png",
        judul: "Lansia Berdaya, Bangsa Sejahtera",
        tahun: 2022,
      },
      {
        no: 2,
        sampul: "/images/2.png",
        judul: "Pemberian ASI Eksklusif dan Mastitis pada ibu menyusui",
        tahun: 2022,
      },
      {
        no: 3,
        sampul: "/images/3.png",
        judul: "Situasi Osteoporosis di Indonesia ",
        tahun: 2020,
      },
    ],
    [
      {
        no: 1,
        sampul: "/images/1.png",
        judul: "Lansia Berdaya, Bangsa Sejahtera",
        tahun: 2022,
      },
      {
        no: 2,
        sampul: "/images/2.png",
        judul: "Pemberian ASI Eksklusif dan Mastitis pada ibu menyusui",
        tahun: 2022,
      },
      {
        no: 3,
        sampul: "/images/3.png",
        judul: "Situasi Osteoporosis di Indonesia ",
        tahun: 2020,
      },
    ],
    [
      {
        no: 1,
        sampul: "/images/1.png",
        judul: "Lansia Berdaya, Bangsa Sejahtera",
        tahun: 2022,
      },
      {
        no: 2,
        sampul: "/images/2.png",
        judul: "Pemberian ASI Eksklusif dan Mastitis pada ibu menyusui",
        tahun: 2022,
      },
      {
        no: 3,
        sampul: "/images/3.png",
        judul: "Situasi Osteoporosis di Indonesia ",
        tahun: 2020,
      },
    ],
  ];

  return (
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                {colNames.map((colName) => {
                  return (
                    <th
                      scope="col"
                      class="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                    >
                      {colName}
                    </th>
                  );
                })}
                <tr></tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {tableItems[index].map((tableItem) => {
                  return (
                    <tr className="border-l-red-50">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                        {tableItem.no}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                        <img
                          src={tableItem.sampul}
                          alt=""
                          srcset=""
                          className="h-full lg:w-[150px] lg:h-[225px] object-cover rounded-lg mx-auto"
                        />
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.judul}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.tahun}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                        <a class="text-blue-500 hover:text-blue-700" href="#">
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
