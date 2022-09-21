import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>service1/sample.jsx</h1>
      <Link href="/" passHref>
        <a>/service1/index.jsx</a>
      </Link>
    </div>
  );
};

export default Page;
