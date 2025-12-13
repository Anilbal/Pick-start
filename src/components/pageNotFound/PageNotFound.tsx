import { useRouter } from "@tanstack/react-router";

const NotFound: React.FC = () => {
  const router = useRouter();
  return (
    <div className="flex h-[calc(100vh-56px)] flex-col items-center justify-center bg-gray-50 px-6 text-center">
      <h1 className="text-9xl font-extrabold text-gray-700">404</h1>

      <p className="mt-4 text-2xl font-semibold text-gray-800">
        Page Not Found
      </p>

      <p className="mt-2 text-gray-600">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      <button
        onClick={() => router.history.back()}
        className="mt-6 rounded-md bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700"
      >
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
