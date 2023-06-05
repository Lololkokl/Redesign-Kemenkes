export const VisiList = ({ judul, items }) => {
  return (
    <div className="my-12">
      <h2 className="font-bold text-3xl ">{judul}</h2>
      <ul>
        {items.map((item) => {
          return (
            <li id={item.id} className="my-2">
              <p className="text-lg">{item.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
