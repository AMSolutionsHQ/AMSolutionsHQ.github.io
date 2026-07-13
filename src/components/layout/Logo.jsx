import { company } from "@/data/company";

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-bold text-lg">
        {company.name.charAt(0)}
      </div>

      <div>
        <h1 className="text-lg font-bold text-white">
          {company.name}
        </h1>

        <p className="text-xs text-slate-400">
          Software Solutions
        </p>
      </div>
    </a>
  );
}

export default Logo;