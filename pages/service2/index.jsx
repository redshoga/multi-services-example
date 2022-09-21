import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>service2/index.jsx</h1>
      <Link href="/sample" passHref>
        <a>/service2/sample.jsx</a>
      </Link>
    </div>
  );
};

export default Page;
