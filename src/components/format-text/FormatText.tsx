export const FormatText = ({ text, className }: any) => {
  function removeHTMLText(html: any) {
    var tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  const cleanedText = removeHTMLText(text);

  return cleanedText.split("\r\n").map((line: any, i: number) => (
    <p key={i} className={className}>
      {line}
    </p>
  ));
};
