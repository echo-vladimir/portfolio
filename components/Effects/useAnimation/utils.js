export function splitSymbols(arr) {
  const countryFlag = "[\\u{1F1E6}-\\u{1F1FF}]{2}";
  const keyCap = "[0-9#\\*][\\u{FE0F}]?\\u{20E3}";
  const emojiRange = [
    "[\\u{2600}-\\u{26FF}]",
    "[\\u{2700}-\\u{27BF}]",
    "[\\u{1F300}-\\u{1F5FF}]",
    "[\\u{1F600}-\\u{1F64F}]",
    "[\\u{1F680}-\\u{1F6FF}]",
    "[\\u{1F700}-\\u{1F77F}]",
    "[\\u{1F900}-\\u{1F9FF}]",
  ];
  const emoji = `(${emojiRange.join("|")})`;
  const zeroWidthJoinder = "\\u{200D}";
  const variationSeletor = "[\\u{FE0E}\\u{FE0F}]";
  const skinTone = "[\\u{1F3FB}-\\u{1F3FF}]";
  const emojiVariation = `${emoji}(${zeroWidthJoinder}${emoji}|${skinTone}|${variationSeletor})*`;
  const patterns = [countryFlag, keyCap, emojiVariation, "."];
  const splitter = new RegExp(`(${patterns.join("|")})`, "gu");

  return arr.map((str) => str.match(splitter)) ?? [];
}
