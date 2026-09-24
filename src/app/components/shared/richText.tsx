import React from "react";

/** Renders a content string with minimal inline markup: **bold** and *italic*. */
export default function RichText({ text }: { text: string }) {
  return (
    <>
      { text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, index) => {
        if ( part.startsWith('**') ) {
          return <strong key={ index }>{ part.slice(2, -2) }</strong>;
        }
        if ( part.startsWith('*') && part.length > 1 ) {
          return <em key={ index }>{ part.slice(1, -1) }</em>;
        }
        return part;
      }) }
    </>
  );
}
