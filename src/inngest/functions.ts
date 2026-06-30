import { inngest } from "@/inngest/client";

export const helloWorld = inngest.createFunction(
  {
    id: "hello-world",
    triggers: [
      {
        event: "vibco/hello.world",
      },
    ],
  },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");

    return {
      message: `Hello, ${event.data.email}!`,
    };
  },
);
