import { StoreHeader } from "../components/layout/StoreHeader";
import { Outlet } from "react-router";
import { StoreFooter } from "../components/layout/StoreFooter";

export function StoreLayout() {
  return (
    <>
      <StoreHeader />

      <main>
        <Outlet />
      </main>

      <StoreFooter />
    </>
  )
}