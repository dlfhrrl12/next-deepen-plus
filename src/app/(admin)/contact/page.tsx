import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Link href={"/about"}>About</Link>
    </div>
  );
};

export default Contact;
