import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, Button, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// Define the validation schema using Zod
const schema = z
  .object({
    firstName: z
      .string()
      .min(3, "FirstName is required")
      .regex(/^[a-zA-Z]+$/),
    lastName: z.string().optional(),
    email: z
      .string()
      .email("Invalid email address")
      .regex(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Invalid email address"
      ),
    phone: z
      .string()
      .transform((data) => Number(data))
      .refine((val) => !isNaN(val), {
        message: "Phone number must be a number",
      }),
    username: z.string().min(3, "Username is required"),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters long")
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
        "Please Enter a password with a SC, Number, a number of characters between 8-32"
      ),
    confirmPassword: z
      .string()
      .min(6)
      .regex(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/,
        "Please Enter a password with a SC, Number, a number of characters between 8-32"
      ),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

function RegisterForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem(
      "user",
      JSON.stringify({ email: data.email, password: data.password })
    );
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-start vh-100 ">
      <Form onSubmit={handleSubmit(onSubmit)} className="w-50 mt-3">
        <FloatingLabel
          controlId="formFirstName"
          label="First Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter first name"
            {...register("firstName")}
            isInvalid={errors.firstName != null}
          />
          <Form.Control.Feedback type="invalid">
            {errors.firstName?.message}
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          controlId="formLastName"
          label="Last Name"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter last name"
            {...register("lastName")}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="formUsername"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter username"
            {...register("username")}
            isInvalid={errors.username != null}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username?.message}
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          controlId="formEmail"
          label="Email address"
          className="mb-3"
        >
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email")}
            isInvalid={errors.email != null}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email?.message}
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          controlId="formPhone"
          label="Phone Number"
          className="mb-3"
        >
          <Form.Control
            type="text"
            placeholder="Enter phone number"
            {...register("phone")}
            isInvalid={errors.phone != null}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone?.message}
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          controlId="formPassword"
          label="Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Password"
            {...register("password")}
            isInvalid={errors.password != null}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password?.message}
          </Form.Control.Feedback>
        </FloatingLabel>

        <FloatingLabel
          controlId="formConfirmPassword"
          label="Confirm Password"
          className="mb-3"
        >
          <Form.Control
            type="password"
            placeholder="Confirm password"
            {...register("confirmPassword")}
            isInvalid={errors.confirmPassword != null}
          />
          <Form.Control.Feedback type="invalid">
            {errors.confirmPassword?.message}
          </Form.Control.Feedback>
        </FloatingLabel>

        <Button variant="primary w-100" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}
export default RegisterForm;
