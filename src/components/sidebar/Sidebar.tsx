import { useState } from "react";
import { Dropdown } from "../common/icon/Icon";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="mt-4">
    <h2 className=" text-xs font-semibold uppercase tracking-wider">{title}</h2>
    <div className="mt-2">{children}</div>
  </div>
);

const Item = ({ label }: { label: string }) => (
  <div className="cursor-pointer px-2 py-1.5 transition hover:underline text-[15px]">
    {label}
  </div>
);

const SubItem = ({ items }: { items: string[] }) => (
  <ol className="ml-2" start={1}>
    {items.map((item, index) => (
      <li key={index} className="cursor-pointer px-2 py-1 transition text-[15px]">
        {`1.${index + 1}`} {item}
      </li>
    ))}
  </ol>
);

export default function Sidebar() {
  const [openUI, setOpenUI] = useState(false);

  return (
    <aside className="w-1/5  h-[calc(100vh-56px)]  px-4 py-2 backdrop-blur mt-14 bg-gray-50 border-r border-gray-300">
      {/* UI COMPONENTS */}
      <Section title="Backend">
        <div
          className="flex justify-between items-center cursor-pointer px-2 py-1.5 transition rounded-sm hover:underline"
          onClick={() => setOpenUI(!openUI)}
        >
          <span className="text-[15px]">Node with express and postgres</span>
          <span className={`transition text-xs ${openUI ? "rotate-180" : ""}`}>
            <Dropdown />
          </span>
        </div>

        {openUI && (
          <SubItem items={["Simple Table", "Striped Table", "Striped Table"]} />
        )}
      </Section>

      {/* WIDGETS */}
      <Section title="Widgets">
        <Item label="Dashboard Boxes" />
      </Section>

      {/* FORMS */}
      <Section title="Forms">
        <Item label="Controls" />
        <Item label="Layouts" />
        <Item label="Validation" />
      </Section>

      {/* CHARTS */}
      <Section title="Charts">
        <Item label="ChartJS" />
      </Section>
    </aside>
  );
}
