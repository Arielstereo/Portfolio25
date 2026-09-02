import Link from "next/link";
import { FiDownload } from "react-icons/fi";

const Button = () => {
  return (
    <Link href="/cv26.pdf" download className="btn-action group">
      <FiDownload
        className="w-4 h-4 text-accent transition-transform duration-300 group-hover:translate-y-0.5"
        aria-hidden="true"
      />
      <span>Descarga mi CV</span>
    </Link>
  );
};

export default Button;
