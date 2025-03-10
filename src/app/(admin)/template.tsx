"use client";

const AdminLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <h1>HomeAboutContact</h1>
      {children}
    </>
  );
};

export default AdminLayout;
