import { AccordionMember } from "./AccordionMember";

export const Accordion = ({ items, type = "struktur" }) => {
  return (
    <div className="hs-accordion-group">
      {items.map((item) => {
        return (
          <div
            className={`hs-accordion ${
              item.id === 1 ? "active" : ""
            } border -mt-px first:rounded-t-lg last:rounded-b-lg px-2 md:px-4`}
            id="hs-basic-with-title-and-arrow-stretched-heading-two"
          >
            <button
              className="hs-accordion-toggle hs-accordion-active:text-primary group py-3 inline-flex items-center font-heading justify-between gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-primary text-xs md:text-base "
              aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"
            >
              {item.text}
              <div className="mx-1">
                <svg
                  className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-primary "
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                <svg
                  className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w- h-3 text-gray-600 group-hover:text-primary"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
              </div>
            </button>
            <div
              id="hs-basic-with-title-and-arrow-stretched-collapse-two"
              className={`hs-accordion-content ${
                item.id !== 1 ? "hidden" : ""
              } w-full overflow-hidden transition-[height] duration-300`}
              aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"
            >
              {type === "struktur" ? (
                <img src={item.image} alt="" srcset="" />
              ) : type === "tugas" ? (
                <AccordionMember contents={item.contents} link={false} />
              ) : (
                <AccordionMember contents={item.contents} link={true} />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
