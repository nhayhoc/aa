import Link from "next/link";
const fetch = require("node-fetch");
const Page = ({ stars, isServer }) => (
  <div>
    <div>
      Next stars: {stars} <br /> isServer: {isServer.toString()}
    </div>
    <br />
    <Link href="/index">
      <a>Navigate</a>
    </Link>
  </div>
);

Page.getInitialProps = async ({ req }) => {
  console.log({ req });
  const res = await fetch("https://api.github.com/repos/zeit/next.js");
  const json = await res.json();
  return { stars: json.stargazers_count, isServer: !!req };
};

export default Page;
