export const AccordionMember = ({ contents }) => {
  return (
    <ol className="pb-2 list-decimal px-3 md:px-5 text-xs md:text-base">
      {contents.map((content) => {
        return <li className="my-1 md:my-2 font-paragraph">{content}</li>;
      })}
    </ol>
  );
};
