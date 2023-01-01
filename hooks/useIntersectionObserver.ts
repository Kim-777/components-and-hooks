import React from "react";

export default function useIntersectionObserver({
  root,
  target,
  onIntersect,
  threshold = 1.0,
  rootMargin = "10px",
  enabled = true,
}: {
  root: any;
  target: React.MutableRefObject<any>;
  onIntersect: any;
  threshold?: number;
  rootMargin?: string;
  enabled: boolean | undefined;
}) {
  React.useEffect(() => {
    if (!enabled) {
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && onIntersect());
      },
      {
        root: root && root.current,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;

    if (!el) {
      return;
    }

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
  }, [target, enabled, root, threshold, rootMargin, onIntersect]);
}
