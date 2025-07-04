import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Form, FormGroup, FormInput } from "../../component/ui/Form";
import Button from "../../component/ui/Button";
import { FcGoogle } from "react-icons/fc";
import { signInWithGoogle, signUpWithEmailPassword } from "../../firebase";
import { Formik } from "formik";
import * as Yup from "yup";

export const Route = createFileRoute("/_authLayout/signup")({
  component: RouteComponent,
});

const signUpSchema = Yup.object({
  name: Yup.string().required("Required").min(1, "Name cannot be blank"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .required("Required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(
      /[@$!%*?&#]/,
      "Password must contain at least one special character",
    ),
});

function RouteComponent() {
  const navigate = useNavigate({ from: "/signup" });
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
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
          }}
          validationSchema={signUpSchema}
          onSubmit={async (val, e) => {
            console.log(val, e);
            const result = await signUpWithEmailPassword(
              val.email,
              val.password,
            );

            if (result instanceof Error) {
              console.log(result, result.message);
              return;
            }
            console.log(result);
            navigate({ to: "/" });
          }}
        >
          {({ isSubmitting }) => {
            return (
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
                  <FormInput
                    label="Name"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    autoComplete="true"
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="true"
                  />
                </FormGroup>
                <FormGroup>
                  <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="true"
                  />
                </FormGroup>
                <FormGroup>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className="bg-white-50 disabled:bg-white-50/75 text-black-50 font-semibold transition-colors duration-300"
                  >
                    Create account
                  </Button>
                  <Button
                    type="button"
                    className="bg-black-50 text-white-50 border-1 drop-shadow-gray-50 gap-4 border-gray-50"
                    onClick={async () => {
                      await signInWithGoogle();
                      console.log("Logged In");
                      navigate({ to: "/" });
                    }}
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
            );
          }}
        </Formik>
      </div>
    </section>
  );
}
