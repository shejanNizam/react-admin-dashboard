import { Outlet } from "react-router-dom";

export default function Auth() {
  return (
    <main
      className="max-w-[1620px] mx-auto px-4 lg:px-8 2xl:px-0 py-2 lg:py-8"
      aria-label="Authentication Pages"
    >
      <Outlet />
    </main>
  );
}
