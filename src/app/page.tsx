"use client";

import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Page = () => {
  const trpc = useTRPC();
  const invoke = useMutation(
    trpc.invoke.mutationOptions({
      onSuccess: () => {
        toast.success("Background job invoked successfully!");
      },
    }),
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Button
        disabled={invoke.isPending}
        onClick={() => {
          invoke.mutate({ text: "Kushal Vithal" });
        }}
      >
        Invoke Background Job
      </Button>
    </div>
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
