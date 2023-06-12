export const TablePeraturan = () => {
  return (
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                  >
                    Jenis Peraturan
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                  >
                    Nomor
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                  >
                    Tentang
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                  >
                    Unduh
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr className="border-l-red-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                    1
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Permenkes
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    18 Tahun 2023
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Kegiatan Usaha Klinik Di Kawasan Ekonomi Khusus
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Pdf
                    </a>
                  </td>
                </tr>
                <tr className="border-l-red-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                    2
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Peraturan Pemerintah
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    109 Tahun 2012
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Pengamanan Bahan Yang Mengandung Zat Adiktif Tembakau
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Pdf
                    </a>
                  </td>
                </tr>
                <tr className="border-l-red-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-center">
                    3
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Undang-Undang
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    24 Tahun 2011
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Badan Penyelenggaraan Jaminan Sosial
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Pdf
                    </a>
                  </td>
                </tr>


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};