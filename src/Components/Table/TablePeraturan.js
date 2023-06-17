export const TablePeraturan = ({ search = "" }) => {
  const colNames = ["No", "Jenis Peraturan", "Nomor", "Tentang", "Unduh"];
  const tableItems = [
    {
      no: 1,
      jenis: "Permenkes",
      nomor: "18 Tahun 2023",
      tentang: "Kegiatan Usaha Klinik Di Kawasan Ekonomi Khusus",
      value: "Permenkes 18 Tahun 2023",
    },
    {
      no: 2,
      jenis: "Peraturan Pemerintah",
      nomor: "109 Tahun 2012",
      tentang: "Pengamanan Bahan Yang Mengandung Zat Adiktif Tembakau",
      value:
        "Peraturan Pemerintah 109 Tahun 2012 Pengamanan Bahan Yang Mengandung Zat Adiktif Tembakau",
    },
    {
      no: 3,
      jenis: "Undang-Undang",
      nomor: "24 Tahun 2011",
      tentang: "Badan Penyelenggaraan Jaminan Sosial",
      value: "Undang-Undang 24 Tahun 2011 Badan Penyelenggaraan Jaminan Sosial",
    },
  ];

  let result = [...tableItems];
  if (search !== "") {
    result = tableItems.filter((tableItem) => {
      return tableItem.value.toLowerCase().includes(search.toLowerCase());
    });

    if (result.length === 0) {
      return (
        <div className="flex justify-center text-center my-5 md:my-10">
          <h2 className="text-lg md:text-xl font-bold font-heading text-primary">
            Maaf peraturan perundangan yang anda cari tidak dapat ditemukan
          </h2>
        </div>
      );
    }
  }

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
                {result.map((tableItem) => {
                  return (
                    <tr className="border-l-red-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                        {tableItem.no}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.jenis}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.nomor}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.tentang}
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
