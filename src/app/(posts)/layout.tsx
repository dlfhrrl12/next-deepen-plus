// app/posts/layout.tsx
import Link from "next/link";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav style={{ padding: "1rem", backgroundColor: "#f0f0f0" }}>
        <ul style={{ display: "flex", gap: "20px" }}>
          <li>
            <Link href="/ssr">SSR</Link>
          </li>
          <li>
            <Link href="/ssg">SSG</Link>
          </li>
          <li>
            <Link href="/csr">CSR</Link>
          </li>
          <li>
            <Link href="/isr">ISR</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
    </div>
  );
}
