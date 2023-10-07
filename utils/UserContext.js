import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "demo",
    email: "demo@demo.com",
  },
});

export default UserContext;
