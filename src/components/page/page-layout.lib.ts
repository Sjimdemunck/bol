import type { User } from "@/types/user";

export const user = {
  name: "SjimBolSlice",
  email: "Sjim@bol.com",
  imageUrl: "https://github.com/Sjimdemunck.png",
} satisfies User;

export const navigation = [{ name: "Home", href: "#", current: true }];

export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
