// "use client";

import { useRouter } from "next/router";
import React from "react";

const BoardTest = () => {
  const router = useRouter();
  const { id } = router.query;

  console.log(id);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default BoardTest;
