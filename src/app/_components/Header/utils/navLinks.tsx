export type NavLink = {
  href: string;
  label: string;
  isButton?: boolean;
  onClick?: () => void;
};

export const navLinks = (
  session?: boolean,
  isLoading?: boolean,
  signOut?: () => void
): NavLink[] => {
  const links: NavLink[] = [];

  if (isLoading) return [];

  if (session) {
    links.push({
      href: "/",
      label: "Sair",
      isButton: true,
      onClick: signOut,
    });
  } else {
    links.push({
      href: "/login",
      label: "Login",
      isButton: true,
      onClick: () => {
        window.location.href = process.env.NEXT_PUBLIC_GOOGLE_AUTH_URL!;
      },
    });
  }

  return links;
};
