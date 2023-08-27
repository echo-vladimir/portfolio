import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { animate } from "popmotion";
import styler from "stylefire";

const useSlideAnimation = (page) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  const loadingRef = useRef(null);
  const contentIndexRef = useRef(null);
  const contentCasesRef = useRef(null);

  const currentContentRef =
    page === "index" ? contentIndexRef : contentCasesRef;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const contentStyler = styler(currentContentRef.current);
      const loadingStyler = styler(loadingRef.current);

      const slideInContent = () => {
        animate({
          from: 0,
          to: 1,
          duration: 1000,
          onUpdate: (v) => {
            contentStyler.set({ opacity: v, x: (1 - v) * 100 });
          },
          onComplete: () => {
            setIsAnimationComplete(true);
          },
        });
      };

      const fadeOutLoading = () => {
        animate({
          from: 1,
          to: 0,
          duration: 500,
          onUpdate: (v) => {
            loadingStyler.set("opacity", v);
            if (v <= 0.01) {
              slideInContent();
            }
          },
        });
      };

      const animateLoading = () => {
        animate({
          from: 0,
          to: 1,
          duration: 1000,
          onUpdate: (v) => {
            if (v >= 0.99) {
              setIsLoading(false);
              fadeOutLoading();
            }
          },
        });
      };

      setIsLoading(true);
      setIsAnimationComplete(false);

      if (!currentContentRef.current || !loadingRef.current) return;

      contentStyler.set({ opacity: 0, x: 100 });
      animateLoading();
    }

    return () => {
      setIsAnimationComplete(false);
    };
  }, [router.asPath]);

  return { isLoading, isAnimationComplete, currentContentRef, loadingRef };
};

export default useSlideAnimation;
