import { useAuthStore } from "../stores/auth/authStore";

const mockLogin = () => {
  const login = useAuthStore.getState().login;

  // Pretend user logged in
  login({
    name: "John Doe",
    email: "john@example.com",
    role: "student",
  });
};

export default mockLogin;
