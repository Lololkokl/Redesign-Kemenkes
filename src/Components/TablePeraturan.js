export const TablePeraturan = () => {
  const colNames = ["No", "Jenis Peraturan", "Nomor", "Tentang", "Unduh"];
  const tableItems = [
    {
      no: 1,
      jenis: "Permenkes",
      nomor: "18 Tahun 2023",
      tentang: "Kegiatan Usaha Klinik Di Kawasan Ekonomi Khusus",
    },
    {
      no: 2,
      jenis: "Peraturan Pemerintah",
      nomor: "109 Tahun 2012",
      tentang: "Pengamanan Bahan Yang Mengandung Zat Adiktif Tembakau",
    },
    {
      no: 3,
      jenis: "Undang-Undang",
      nomor: "24 Tahun 2011",
      tentang: "Badan Penyelenggaraan Jaminan Sosial",
    },
  ];
  return (
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
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
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                {tableItems.map((tableItem) => {
                  return (
                    <tr className="border-l-red-50">
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                        {tableItem.no}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.jenis}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.nomor}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                        {tableItem.tentang}
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                        <a
                          class="text-blue-500 hover:text-blue-700 underline"
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
