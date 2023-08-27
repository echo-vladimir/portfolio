import { useState, useEffect } from "react";

const useHtmlParser = (contentHtml) => {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(contentHtml, "text/html");

    const elements = doc.body.querySelectorAll(
      `:scope > figure, 
       :scope > blockquote, 
       :scope > video, 
       :scope > p, 
       :scope > h1, 
       :scope > h2, 
       :scope > ul`
    );

    const elementBlocks = Array.from(elements).map((element) => {
      return element.outerHTML;
    });

    setBlocks(elementBlocks);
  }, [contentHtml]);

  return blocks;
};

export default useHtmlParser;
