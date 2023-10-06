import React, { useEffect, useState } from "react";

export const FormatText = ({ text, className }: any) => {
  const [cleanedText, setCleanedText] = useState("");

  useEffect(() => {
    setCleanedText(text);
  }, [text]);

  return (
    <div className={className}>
      {cleanedText.split("<p>").map((paragraph: string, i: number) => {
        if (paragraph.trim() === "") return null;
        return (
          <p key={i}>
            <span dangerouslySetInnerHTML={{ __html: paragraph }} />
          </p>
        );
      })}
    </div>
  );
};
