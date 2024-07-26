import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa";
import logo from "../assets/images-removebg-preview (1).png";
export const Navbar = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <div className="bg-gray-100 py-4">
      <nav className="flex items-center justify-between mx-auto w-11/12 lg:w-9/12">
        <div className="flex items-center">
          <Link to={"/home"}>
            <img src={logo} alt="Logo" className="w-20 cursor-pointer" />{" "}
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-lg">
            Welcome{" "}
            <span className="text-green-600 text-xl font-bold">{userName}</span>
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded-lg focus:outline-none"
          >
            <FaSignOutAlt className="mr-2" />
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};
