// src/components/ui/Card.tsx

import React from "react";

export const Card = ({ children }: any) => (
  <div className="bg-white rounded shadow-md">{children}</div>
);

export const CardContent = ({ children, className = "" }: any) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
