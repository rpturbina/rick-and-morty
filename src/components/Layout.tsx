import * as React from 'react';

const Layout = ({ children }: React.PropsWithChildren) => {
  return <main className="mx-auto mt-6 max-w-[90%]">{children}</main>;
};

export default Layout;
