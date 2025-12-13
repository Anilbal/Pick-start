import { useState } from "react";
import { Dropdown } from "../common/icon/Icon";
import { BackendConstants } from "../../constants/Backend";
import { Link } from "@tanstack/react-router";

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

const Item = ({ label, path }: { label: string; path?: string }) => (
  <Link
    to={path}
    className="cursor-pointer px-2 py-1.5 transition hover:underline text-[15px] select-none"
  >
    {label}
  </Link>
);

const SubItem = ({
  items,
  path,
}: {
  items: string[];
  path: "/home/node-with-express-postgres";
}) => (
  <div className="ml-2 flex flex-col">
    {items.map((item, index) => (
      <Link
        key={index}
        className="cursor-pointer px-2 py-1 transition text-[15px] hover:underline"
        to={`${path}/$id`}
        params={{ id: `1.${index + 1}` }}
      >
        {`1.${index + 1}`} {item}
      </Link>
    ))}
  </div>
);

export default function Sidebar() {
  const [openUI, setOpenUI] = useState(false);

  return (
    <aside className="w-1/5  h-[calc(100vh-56px)]  px-4 py-2 backdrop-blur mt-14 bg-gray-50 border-r border-gray-300">
      {/* UI COMPONENTS */}
      <Section title="Backend">
        <div
          className="flex justify-between items-center cursor-pointer transition rounded-sm hover:underline"
          onClick={() => setOpenUI(!openUI)}
        >
          <Item
            label="Node with express and postgres"
            path="/home/node-with-express-postgres"
          />
          <span className={`transition text-xs ${openUI ? "rotate-180" : ""}`}>
            <Dropdown />
          </span>
        </div>

        {openUI && (
          <SubItem
            items={BackendConstants}
            path="/home/node-with-express-postgres"
          />
        )}
      </Section>

      {/* WIDGETS */}
      <Section title="Frontend">
        <Item label="React with JS" />
      </Section>
    </aside>
  );
}
