import { navigation } from "@/data/company";

function NavLinks({ className = "" }) {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-8">
        {navigation.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-slate-300 transition-colors duration-200 hover:text-white"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavLinks;