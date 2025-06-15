// src/components/ui/Tabs.tsx
import { useState, Children, cloneElement } from "react";

export function Tabs({ children, defaultValue }: any) {
  const [active, setActive] = useState(defaultValue);
  return Children.map(children, (child: any) =>
    cloneElement(child, { active, setActive })
  );
}

export function TabsList({ children }: any) {
  return <div className="flex flex-wrap gap-2">{children}</div>;
}

export function TabsTrigger({ value, active, setActive, children }: any) {
  const isActive = active === value;
  return (
    <button
      onClick={() => setActive(value)}
      className={`rounded px-4 py-2 font-medium border ${
        isActive
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-gray-200 text-gray-700 border-gray-300"
      }`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, active, children }: any) {
  return active === value ? <div className="mt-4">{children}</div> : null;
}
