import * as React from "react";
import { Layout } from "../components/Layout";
import { styled } from "baseui";
import { StatefulInput } from "baseui/input";

const Centered = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
});

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <Centered>
          <StatefulInput />
        </Centered>
      </main>
    </Layout>
  );
};

export default IndexPage;
