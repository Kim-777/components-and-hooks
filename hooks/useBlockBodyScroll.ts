import React from "react";

export const useStopBodyScroll = (initBlock?: boolean) => {
  const blockBodyScroll = React.useCallback(() => {
    document.body.style.overflowY = "hidden";
  }, []);

  const removeBlcokBodyScroll = React.useCallback(() => {
    document.body.style.overflowY = "";
  }, []);

  React.useEffect(() => {
    if (initBlock) {
      blockBodyScroll();
    }

    return () => {
      removeBlcokBodyScroll();
    };
  }, [initBlock, blockBodyScroll, removeBlcokBodyScroll]);

  return { blockBodyScroll, removeBlcokBodyScroll };
};
