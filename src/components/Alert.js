import React from "react";

export const Alert = ({ title, content, style }) => {
  return (
    <div
      className="bg-green-200 border-green-600 text-green-600 border-l-4 md:p-4"
      role="alert"
      style={style}
    >
      <p className="font-bold">{title}</p>
      <p>{content}</p>
    </div>
  );
};
