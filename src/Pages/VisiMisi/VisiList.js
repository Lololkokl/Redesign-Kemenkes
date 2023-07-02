export const VisiList = ({ judul, items }) => {
  return (
    <div className="my-12">
      <h2 className="font-bold text-2xl font-heading ">{judul}</h2>
      <ul>
        {items.map((item) => {
          return (
            <li id={item.id} className="my-2">
              <p className="text-lg font-paragraph text-gray-900">
                {item.text}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
