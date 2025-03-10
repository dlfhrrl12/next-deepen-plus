"use client";

import React, { useEffect } from "react";

const ClientExample = () => {
  useEffect(() => {
    console.log("안녕, 난 서버 컴포넌트야");
  }, []);
  return <div>ClientExample</div>;
};

export default ClientExample;
