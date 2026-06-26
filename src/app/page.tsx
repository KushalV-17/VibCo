import { Button } from "../components/ui/button";
import { prisma } from "../lib/db";

const Page = async () => {
  const users = await prisma.user.findMany();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {JSON.stringify(users, null, 2)}
    </div>
  );
};

export default Page;
