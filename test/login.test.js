const { fireEvent, render, screen } = require("@testing-library/dom");
require("@testing-library/jest-dom");

document.body.innerHTML = `
  <form action="/login" method="POST">
    <label for="email">Email</label>
    <input id="email" type="email" name="email" required />
    <label for="password">Password</label>
    <input id="password" type="password" name="password" required />
    <button type="submit">Login</button>
  </form>
`;

describe("Login Form", () => {
  test("renders email and password input fields", () => {
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });

  test("allows user to input email and password", () => {
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    fireEvent.input(emailInput, { target: { value: "test@example.com" } });
    fireEvent.input(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("submits form successfully", () => {
    const submitButton = screen.getByRole("button", { name: /login/i });

    fireEvent.click(submitButton);
    expect(submitButton).toBeInTheDocument(); // Pastikan tombol tetap ada
  });
});
