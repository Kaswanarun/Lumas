import { useState, cloneElement, Children } from "react";

export function Tabs({ children, defaultValue }: any) {
  const [active, setActive] = useState(defaultValue);
  return Children.map(children, (child: any) =>
    cloneElement(child, { active, setActive })
  );
}

export function TabsList({ children, className = "" }: any) {
  return <div className={className}>{children}</div>;
}

export function TabsTrigger({ value, active, setActive, children }: any) {
  const isActive = active === value;
  return (
    <button
      onClick={() => setActive(value)}
      className={`rounded-full px-4 py-2 font-medium text-sm whitespace-nowrap transition ${
        isActive
          ? "bg-blue-600 text-white shadow-md"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, active, children }: any) {
  return active === value ? <div className="mt-4">{children}</div> : null;
}
