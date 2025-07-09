import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import SideNav from "../component/ui/SideNav";
import { Form, FormGroup } from "../component/ui/Form";
import { Field, Formik } from "formik";
import { useAuth } from "../component/auth/useAuth";
import userPhoto from "../assets/user.png";

export const Route = createFileRoute("/_homeLayout")({
  component: RouteComponent,
  beforeLoad({ context }) {
    if (!context.user) {
      throw redirect({ to: "/signin", from: "/" });
    }
  },
});

function RouteComponent() {
  return <HomeLayout />;
}

const HomeLayout = () => {
  const user = useAuth();
  return (
    <main className="grid h-screen grid-cols-[226px_auto] grid-rows-[auto_1fr] overflow-y-clip text-white">
      <SideNav />
      <header className="grid grid-cols-[1fr_100px] items-center justify-between gap-12 p-8">
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={() => {}}
        >
          <Form className="w-full">
            <FormGroup>
              <Field
                label="Search"
                id="search"
                name="search"
                type="text"
                placeholder="Search for movies, TV shows..."
                autoComplete="false"
                className="bg-black-100 rounded-4xl w-9/10 max-w-4xl border-0 px-8 py-4 font-semibold outline-none"
              />
            </FormGroup>
          </Form>
        </Formik>
        <img
          src={user?.photoURL || userPhoto}
          className="h-[70px] w-[70px] justify-self-end rounded-full"
          alt=""
        />
      </header>
      <Outlet />
    </main>
  );
};
