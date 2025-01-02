import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link className="underline" href="/documents/01">
        document
      </Link>
    </div>
  );
};

export default Home;
