import Link from "next/link";

const Button = () => {
  return (
    <button className="px-6 rounded-md py-2 border border-blue-5  00 relative before:absolute overflow-hidden before:-translate-x-50 hover:before:translate-x-0 before:z-[-1] before:translate-y-12 dark:text-slate-200 dark:z-0 dark:before:bg-blue-500 before:transition hover:before:translate-y-0 before:duration-300 hover:text-secondary  before:w-full before:h-full before:bg-primary before:top-0 before:left-0">
      <Link href="/cv26.pdf" download>
        Descarga mi CV
      </Link>
    </button>
  );
};

export default Button;
