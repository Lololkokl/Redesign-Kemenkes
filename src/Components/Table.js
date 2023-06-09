export const Table = () => {
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
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Age
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                  >
                    Address
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr className="border-l-red-50">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                    John Brown
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    Regional Paradigm Technician
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    john@site.com
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    45
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    New York No. 1 Lake Park
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Delete
                    </a>
                  </td>
                </tr>

                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                    Jim Green
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    Forward Response Developer
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    jim@site.com
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    27
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    London No. 1 Lake Park
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Delete
                    </a>
                  </td>
                </tr>

                <tr>
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                    Joe Black
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    Product Directives Officer
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    joe@site.com
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    31
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    Sidney No. 1 Lake Park
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <a class="text-blue-500 hover:text-blue-700" href="#">
                      Delete
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
