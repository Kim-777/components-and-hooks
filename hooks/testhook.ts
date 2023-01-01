import React from "react";

const useTest = (num: number = 1) => {
  // 프롭스는 변경되어도 state는 최초 호출된 값을 가지고 있습니다. state를 프롭과 같은 값으로 유지하고 싶다면 useEffect를 사용하는 것을 추천합니다.
  const [test, setTest] = React.useState(num);

  console.log("호출이 계속 될까??? :::: ", num);

  return [test, setTest];
};

export default useTest;
