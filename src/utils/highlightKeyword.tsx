// highlightKeywords.tsx
import React from "react";

export const highlightKeywords = (
  text: string,
  keywords: string[]
): JSX.Element => {
  if (!text) return <>{text}</>;
  if (!keywords || keywords.length === 0) return <>{text}</>;

  const regex = new RegExp(`(${keywords.join("|")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        keywords.some(
          (keyword) => keyword.toLowerCase() === part.toLowerCase()
        ) ? (
          <span key={index} className="font-bold">
            {part}
          </span>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </>
  );
};
