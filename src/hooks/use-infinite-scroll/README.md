# Description

This hook returns a batch list of rendered elements. Uses SWR to fetch data, and is inspired by their recommendations to [infinite loading](https://swr.vercel.app/docs/pagination#infinite-loading) together with [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

# How to use

```js
import fetcher from "@/path/fetcher";

const Line: FunctionComponent<{ data: DataType }> = ({ data }) => {
  return <div>{data.key}</div>;
};

const YourComponent = () => {
  const { batches } =
    useInfiniteScroll <
    DataType >
    {
      Component: MembersLine,
      observerRef,
      offset: DEFAULT_OFFSET,
      onFinishLoad: ({ offset, total, data }) => {},
      onLoadAction: ({ offset }) => {
        fetcher({ offset, ...otherParams });
      },
      onStartLoad,
    };

  return <div>{batches}</div>;
};
```
