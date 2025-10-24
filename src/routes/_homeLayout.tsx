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
    <main className="grid min-h-[100dvh] grid-rows-[auto_1fr] overflow-y-clip text-white md:grid-cols-[226px_auto]">
      <SideNav />
      <header className="bg-black-50 z-2 md:w-9/10 sticky top-0 grid grid-cols-1 items-center justify-between gap-8 p-4 md:mx-auto md:min-w-[526px] md:max-w-[768px] md:grid-cols-[1fr_100px] md:p-8 lg:max-w-[980px] lg:gap-12">
        <Formik
          initialValues={{
            search: "",
          }}
          onSubmit={() => {}}
        >
          <Form className="w-9/10 md:w-full">
            <FormGroup>
              <Field
                label="Search"
                id="search"
                name="search"
                type="text"
                placeholder="Search for movies, TV shows..."
                autoComplete="false"
                className="bg-black-100 w-9/10 max-w-4xl rounded-sm border-0 px-3 py-4 font-semibold outline-none md:w-full"
              />
            </FormGroup>
          </Form>
        </Formik>
        <img
          src={user?.photoURL || userPhoto}
          className="hidden h-[70px] w-[70px] justify-self-end rounded-full md:block"
          alt=""
        />
      </header>
      <Outlet />
    </main>
  );
};
