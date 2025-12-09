import { useState } from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="mt-6">
    <h2 className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
      {title}
    </h2>
    <div className="mt-2 space-y-2">{children}</div>
  </div>
);

const Item = ({ label }: { label: string }) => (
  <div className="text-gray-200 hover:text-white cursor-pointer px-2 py-1 transition">
    {label}
  </div>
);

export default function Sidebar() {
  const [openUI, setOpenUI] = useState(true);

  return (
    <aside className="w-1/5 bg-[#0c1a2b]/90 text-gray-200 h-screen px-4 py-6 backdrop-blur mt-14">
      {/* MENU TITLE */}
      <h1 className="text-sm font-bold text-gray-400 uppercase tracking-wide">
        Menu
      </h1>

      {/* Dashboard */}
      <div className="mt-3 bg-gray-700/30 px-3 py-2 rounded cursor-pointer text-white">
        Dashboard Example
      </div>

      {/* UI COMPONENTS */}
      <Section title="UI Components">
        <div
          className="flex justify-between items-center cursor-pointer px-2 py-1 text-gray-300 hover:text-white"
          onClick={() => setOpenUI(!openUI)}
        >
          <span>Elements</span>
          <span className={`transition text-xs ${openUI ? "rotate-180" : ""}`}>
            ▼
          </span>
        </div>

        {openUI && (
          <>
            <Item label="Components" />
            <Item label="Regular Tables" />
          </>
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
