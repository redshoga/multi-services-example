import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>service2/sample.jsx</h1>
      <Link href="/" passHref>
        <a>/service2/index.jsx</a>
      </Link>
    </div>
  );
};

export default Page;
