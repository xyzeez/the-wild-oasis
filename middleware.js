// Services
import { auth } from "@/src/services/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
