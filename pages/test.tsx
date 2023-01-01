import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";

const Test = () => {
  const router = useRouter();
  const testQuery = useQuery(
    ["test", "only"],
    (): Promise<string> =>
      new Promise((resolve) => {
        setTimeout(() => {
          console.log("데이터 패칭패칭 패칭!!");
          resolve("데이터 패칭 완료!");
        }, 5000);
      })
  );
  console.log("router.query ::::::: ", router.query);

  // React.useEffect(() => {
  //   console.log('router.query ::::::: ' )
  // }, [])

  if (testQuery.isLoading) {
    return <div>로딩 중.........</div>;
  }

  if (testQuery.isFetching) {
    return <div>패칭 중.........</div>;
  }

  return (
    <div>
      <div>Test</div>
      <div>{testQuery.data}</div>
      <button
        onClick={() => {
          testQuery.refetch();
        }}
      >
        refetching
      </button>
    </div>
  );
};

export default Test;
