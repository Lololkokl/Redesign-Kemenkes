export const TablePublikasi = () => {
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
                    Sampul
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                  >
                    Judul
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-bold text-gray-900 uppercase"
                  >
                    Tahun Rilis
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    <img
                    src="/images/lansia.jpg"
                    alt=""
                    srcset=""
                    className="h-full w-25 object-cover rounded-lg mx-auto" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Lansia Berdaya, Bangsa Sejahtera
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    2022
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    <img
                    src="/images/asi.jpg"
                    alt=""
                    srcset=""
                    className="h-full w-25 object-cover rounded-lg mx-auto" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Pemberian ASI Eksklusif dan Mastitis pada Ibu Menyusui
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    2022
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
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 ">
                    <img
                    src="/images/osteoporosis.jpg"
                    alt=""
                    srcset=""
                    className="h-full w-25 object-cover rounded-lg mx-auto" />
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    Situasi Osteoporosis di Indonesia
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900 text-center">
                    2020
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
