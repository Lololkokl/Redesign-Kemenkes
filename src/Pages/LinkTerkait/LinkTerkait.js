import { Accordion } from "../../Components/Accordion/Accordion";
import { Pagetitle } from "../../Components/Pagetitle";

export const LinkTerkait = () => {
  const items = [
    {
      id: 1,
      text: "Direktorat Jenderal Pelayanan Kesehatan",
      contents: ["https://yankes.kemkes.go.id/"],
    },
    {
      id: 2,
      text: "Direktorat Jenderal Pencegahan dan Pengendalian Penyakit",
      contents: ["http://p2p.kemkes.go.id/"],
    },
    {
      id: 3,
      text: "Direktorat Jenderal Kesehatan Masyarakat",
      contents: ["https://kesmas.kemkes.go.id/"],
    },
    {
      id: 4,
      text: "Direktorat Jenderal Kefarmasian dan Alat Kesehatan",
      contents: ["https://farmalkes.kemkes.go.id/"],
    },
    {
      id: 5,
      text: "Inspektorat Jenderal",
      contents: ["https://farmalkes.kemkes.go.id/"],
    },
    {
      id: 6,
      text: "Badan Kebijakan Pembangunan Kesehatan",
      contents: ["https://www.badankebijakan.kemkes.go.id/"],
    },
    {
      id: 7,
      text: "Direktorat Jenderal Tenaga Kesehatan",
      contents: ["https://bppsdmk.kemkes.go.id/"],
    },
  ];
  return (
    <div className="mx-16 md:mx-48 mt-12 mb-24 text-justify">
      <Pagetitle text="Tautan Terkait" />
      <Accordion items={items} type="linkterkait" />
    </div>
  );
};
