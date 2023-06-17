import { useState } from "react";

export const Pagination = ({ search = "" }) => {
  const [active, setActive] = useState(1);
  const indeces = [1, 2, 3];
  let result = [...indeces];

  if (search !== "") {
    result = result.slice(0, 1);
  }

  return (
    <nav className="flex justify-center items-center space-x-2 my-4">
      <button
        className={`text-gray-500 ${
          active !== 1 ? "hover:text-primary" : ""
        } p-4 inline-flex items-center gap-2 rounded-md`}
        type="button"
        disabled={active === 1 ? true : false}
        onClick={() => {
          if (active !== 1) {
            setActive(active - 1);
          }
        }}
      >
        <span aria-hidden="true">«</span>
        <span className="sr-only">Previous</span>
      </button>
      {result.map((index) => {
        return (
          <button
            className={`w-10 h-10 ${
              (active === index) | (result.length === 1)
                ? "bg-primary text-white"
                : "text-gray-500 hover:text-primary"
            }  p-4 inline-flex items-center text-sm font-medium rounded-md`}
            type="button"
            disabled={search !== "" ? true : false}
            onClick={() => {
              setActive(index);
            }}
            aria-current={active === index ? "page" : ""}
          >
            {index}
          </button>
        );
      })}
      <button
        className={`text-gray-500 ${
          active !== 3 ? "hover:text-primary" : ""
        } p-4 inline-flex items-center gap-2 rounded-md`}
        type="button"
        disabled={active === 3 ? true : false}
        onClick={() => {
          if (active !== 3) {
            setActive(active + 1);
          }
        }}
      >
        <span className="sr-only">Next</span>
        <span aria-hidden="true">»</span>
      </button>
    </nav>
  );
};
