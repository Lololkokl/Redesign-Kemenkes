export const AccordionMember = ({ contents, link = false }) => {
  return (
    <ol
      className={`pb-2  px-3 md:px-5 text-xs md:text-base ${
        link ? "" : "list-decimal"
      }`}
    >
      {contents.map((content) => {
        return (
          <li className="my-1 md:my-2 font-paragraph">
            {link ? (
              <a
                className="text-blue-500 hover:text-blue-700 underline"
                href={content}
                target="_blank"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ol>
  );
};
