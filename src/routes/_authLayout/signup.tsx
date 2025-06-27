import { createFileRoute, Link } from "@tanstack/react-router";
import { Form, FormGroup, FormInput, FormLabel } from "../../component/ui/Form";
import Button from "../../component/ui/Button";
import { FcGoogle } from "react-icons/fc";

export const Route = createFileRoute("/_authLayout/signup")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section className="grid h-screen grid-cols-[1.2fr_1fr]">
      <div>
        <img
          src="https://image.tmdb.org/t/p/w780/rthMuZfFv4fqEU4JVbgSW9wQ8rs.jpg"
          alt=""
          className="h-full object-cover"
        />
      </div>
      <div className="bg-black-50 h-full">
        <Form className="mx-auto my-14 flex h-full w-4/5 max-w-[415px] flex-col justify-center">
          <FormGroup>
            <h1 className="text-white-50 text-center text-4xl font-semibold">
              Create an account
            </h1>
            <p className="text-xl text-gray-50">
              Let's get started with 30 days free trial.
            </p>
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="name">Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              autoComplete="true"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              autoComplete="true"
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              autoComplete="true"
            />
          </FormGroup>
          <FormGroup>
            <Button
              type="submit"
              className="bg-white-50 text-black-50 font-semibold"
            >
              Create account
            </Button>
            <Button
              type="button"
              className="bg-black-50 text-white-50 border-1 drop-shadow-gray-50 gap-4 border-gray-50"
            >
              <FcGoogle size={"30px"} /> Sign up with Google
            </Button>
          </FormGroup>

          <p className="text-center text-sm text-gray-50">
            Already have an account?{" "}
            <Link to="/signin" className="text-white-50">
              Log in
            </Link>
          </p>
        </Form>
      </div>
    </section>
  );
}
