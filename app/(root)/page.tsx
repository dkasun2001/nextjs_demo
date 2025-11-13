import React from "react";
import Hello from "@/app/components/hello";

const Home = () => {
  console.log("server side component");
  return (
    <main>
      <div>Welcome to Next.js</div>
      <Hello />
    </main>
  );
};

export default Home;
