import { useEffect, useState } from "react";

export const getData = async () => {
  const response: Response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log(response);
  const data = await response.json();
  return data as [];
};

export const MultiPromiseExample = () => {
  const [ress, setRess] = useState<any>([]);
  const dataFetch = async () => {
    const res1 = await test();
    setRess(res1);
  };
  
  useEffect( () => {
    dataFetch();
  }, [])
  return (
    <>
      {ress.map((r: string) => {
        return <DummyC data={r}></DummyC>;
      })}
    </>
  );
};
const DummyC = ({ data }: { data: any }) => {
  return (
    <>
      <div>{data.body}</div>
      <div>{data.id}</div>
      <div>{data.title}</div>
      <div>{data.userId}</div>
    </>
  );
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getMultipleRequests<T extends Response>(jobs: Promise<T>[]) {
  return new Promise((reject) => {
    const length = jobs.length;
    let doneCount = 0;
    let failtCount = 0;
    const responses = Array.from({ length });
    const errors: Record<number, Error> = {};
    jobs.map((params, i) => {
      params
        .then((res: T) => {
          responses[i] = res;
        })
        .catch((err: Error) => {
          failtCount++;
          responses[i] = err;
          errors[i] = err;
        })
        .finally(() => {
          doneCount++;
          if (length === doneCount) {
            reject({
              responses,
              errors,
            });
          }
        });
    });
  });
}

const test = async () => {
  const b = (await getMultipleRequests<Response>([
    fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplaceholder.typicode.com/posts"),
    // fetch("https://jsonplacehol2der.typicode.com/posts")
  ])) as { responses: Response[]; errors: Record<number, Error> };

  // debugger;
  console.log(b);
  const result = b.responses.filter((b: Response) => b.status < 300);
  const reulst2 = await result.reduce(async (prev: any, cur, i) => {
    let result = await prev;

    result[i] = await cur.json();
    // debugger;
    return result;
  }, {});

  const b1 = Object.values(reulst2).flat();
  return b1;
};
