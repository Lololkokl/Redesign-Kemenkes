export const Pagination = () => {
  return (
    <nav class="flex justify-center items-center space-x-2 my-4">
      <a
        class="text-gray-500 hover:text-primary p-4 inline-flex items-center gap-2 rounded-md"
        href="#"
      >
        <span aria-hidden="true">«</span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="w-10 h-10 bg-primary text-white p-4 inline-flex items-center text-sm font-medium rounded-full"
        href="#"
        aria-current="page"
      >
        1
      </a>
      <a
        class="w-10 h-10 text-gray-500 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full"
        href="#"
      >
        2
      </a>
      <a
        class="w-10 h-10 text-gray-500 hover:text-primary p-4 inline-flex items-center text-sm font-medium rounded-full"
        href="#"
      >
        3
      </a>
      <a
        class="text-gray-500 hover:text-primary p-4 inline-flex items-center gap-2 rounded-md"
        href="#"
      >
        <span class="sr-only">Next</span>
        <span aria-hidden="true">»</span>
      </a>
    </nav>
  );
};