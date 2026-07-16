import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-black">

      <Link 
        to="/" 
        className="text-xl font-bold"
      >
        Medway Motor Works
      </Link>

      <div className="flex gap-5">

        <Link to="/">
          Home
        </Link>

        <Link to="/services">
          Services
        </Link>

        <Link to="/repairs">
          Repairs
        </Link>

        <Link to="/mot">
          MOT
        </Link>

        <Link to="/areas-covered">
          Areas
        </Link>

        <Link to="/contact">
          Contact
        </Link>

      </div>

    </nav>
  );
}