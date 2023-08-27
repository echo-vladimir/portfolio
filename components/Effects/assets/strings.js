export const generate = (string, index, replacement) => {
  const outputStr =
    string.substr(0, index) +
    replacement +
    string.substr(index + string.length);
  return string.length !== index ? outputStr : string;
};

export const modify = (string, nextString, index, replacement) => {
  const output =
    nextString.substr(0, index) +
    replacement +
    string.substr(index, string.length);
  return nextString.length !== index ? output : nextString;
};

export const charByChar = (string, index, replacement) =>
  string.substring(0, index) +
  replacement +
  string.substring(index, string.length);

export const type = (string, index) =>
  string.substring(0, index).split("\n").join("<br/>");
