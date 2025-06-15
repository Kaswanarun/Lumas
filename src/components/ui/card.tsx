export const Card = ({ children }) => (
  <div className="bg-white rounded shadow-md">{children}</div>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
