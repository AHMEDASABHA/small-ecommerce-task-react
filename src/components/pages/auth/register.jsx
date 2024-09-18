import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, Button, FloatingLabel } from "react-bootstrap";

// Define the validation schema using Zod
const schema = z
  .object({
    firstName: z.string().min(3, "FirstName is required"),
    lastName: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .transform((data) => Number(data))
      .refine((val) => !isNaN(val), {
        message: "Phone number must be a number",
      }),
    username: z.string().min(3, "Username is required"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(6),
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
            isInvalid={!!errors.firstName}
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
            isInvalid={!!errors.username}
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
            isInvalid={!!errors.email}
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
            isInvalid={!!errors.phone}
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
            isInvalid={!!errors.password}
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
            isInvalid={!!errors.confirmPassword}
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
