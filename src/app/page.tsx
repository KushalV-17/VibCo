import { Button } from "../components/ui/button";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold">Welcome to Vibe!</h1>
      <p className="mt-4 text-lg text-gray-600">
        This is the home page of your Vibe application.
      </p>
      <Button className="mt-6">Click Me</Button>
    </div>
  );
};

export default Page;
