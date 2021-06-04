export const removeHTMLEntities = (value: string) => {
  if (!value) {
    return false;
  }

  const characters: any = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&apos;": "'",
    "&cent;": "¢",
    "&pound;": "£",
    "&yen;": "¥",
    "&euro;": "€",
    "&copy;": "©",
    "&reg;": "®",
  };

  return value.replace(/&[a-z]{3,5};/g, function (m) {
    return characters[m];
  });
};
