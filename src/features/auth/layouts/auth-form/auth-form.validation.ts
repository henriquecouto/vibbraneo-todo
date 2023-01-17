import { z } from "zod";

export const authFormSchema = z.object({
  email: z.string().email("Please type a valid email"),
  password: z.string().min(6, "Please type a valid password"),
});
