import { Logo } from "../logo";

export const Footer = () => {
  return (
    <footer className="py-12 bg-brand text-white">
      <div className="container">
        <figure>
          <Logo type="light" className="w-[124px]" />
        </figure>
      </div>
    </footer>
  );
};
