import { createFileRoute, Outlet } from "@tanstack/react-router";
import SideNav from "../component/ui/SideNav";
import { Form, FormGroup, FormLabel } from "../component/ui/Form";

export const Route = createFileRoute("/_homeLayout")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <main className="grid h-screen grid-cols-[226px_auto] grid-rows-[auto_1fr] overflow-y-clip text-white">
      <SideNav />
      <header className="grid grid-cols-[1fr_100px] justify-between gap-12 p-8">
        <Form className="w-full">
          <FormGroup>
            <FormLabel htmlFor="search">Search</FormLabel>
            <input
              id="search"
              name="search"
              type="text"
              placeholder="Search for movies, TV shows..."
              autoComplete="false"
              className="bg-black-100 rounded-4xl w-9/10 max-w-4xl border-0 px-8 py-4 font-semibold outline-none"
            />
          </FormGroup>
        </Form>
        <figure className="h-[70px] w-[70px] justify-self-end rounded-full bg-sky-50">
          <img src="" alt="" />
        </figure>
      </header>
      <Outlet />
    </main>
  );
}
