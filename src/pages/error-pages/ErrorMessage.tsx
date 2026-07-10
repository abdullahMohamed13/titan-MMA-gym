import { useRouteError } from "react-router-dom";

export default function ErrorMessage() {
  const error = useRouteError() as Error;
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-text p-6">
      <div className="text-center max-w-md">
        <h2 className="text-4xl font-bold text-primary mb-4">Oops!</h2>
        <p className="text-lg">{error.message}</p>
      </div>
    </div>
  );
}
