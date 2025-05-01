
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000014] via-[#000020] to-[#000033]">
      <div className="text-center bg-slate-900/60 backdrop-blur-sm p-10 rounded-2xl border border-slate-800 shadow-lg">
        <h1 className="text-6xl font-bold text-[#00BFFF] mb-4">404</h1>
        <p className="text-2xl text-slate-300 mb-6">Oops! Page not found</p>
        <Link 
          to="/" 
          className="df-cta-button hover:text-white"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
