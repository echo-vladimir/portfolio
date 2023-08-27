import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

const casesDirectory = path.join(process.cwd(), "store/cases");

export async function getSortedCasesData() {
  const fileNames = fs.readdirSync(casesDirectory);

  const allCasesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");

    const fullPath = path.join(casesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allCasesData.sort(({ date: a }, { date: b }) => {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  });
}

export function getAllCasesIds() {
  const fileNames = fs.readdirSync(casesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getCaseData(id, allCasesData) {
  const fullPath = path.join(casesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const currentIndex = allCasesData.findIndex((caseData) => caseData.id === id);

  const prevCase =
    allCasesData[currentIndex - 1] || allCasesData[allCasesData.length - 1];
  const nextCase = allCasesData[currentIndex + 1] || allCasesData[0];

  return {
    id,
    contentHtml,
    currentNum: currentIndex + 1,
    totalCases: allCasesData.length,
    prevCase,
    nextCase,
    ...matterResult.data,
  };
}
