import Image from "next/image";

interface LogoProps {
  type?: "light" | "dark";
  className?: string;
}

export const Logo = ({ type, className }: Readonly<LogoProps>) => {
  return (
    <Image
      width={200}
      height={100}
      alt="Logo"
      src={type === "light" ? "/assets/logo-white.svg" : "/assets/logo.svg"}
      className={className}
    />
  );
};
