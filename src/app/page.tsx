import { getQueryClient, trpc } from "@/trpc/server";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({ text: "world" }));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<p>Loading...</p>}>
        <Client />
      </Suspense>
    </HydrationBoundary>
  );
};

export default Page;

/**
 * For the Client:
 * useTRPC along with useQuery is a common pattern for fetching data from a tRPC router in a React component.
 *
 *
 * For the server:
 * caller is used to call the tRPC router procedures directly on the server side, which is useful for server-side rendering or API routes.
 *
 * We also have a good option of Prefetching data on the server side and passing it to the client, which can improve performance and reduce loading times.
 */
