import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="text-3xl font-bold underline">Hello world!</div>;
    </Layout>
  );
};

export default IndexPage;
