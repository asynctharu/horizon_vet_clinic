import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6 pt-32 pb-24">
      <div className="text-center max-w-2xl">
        <div className="mono-label opacity-50 mb-8">Error 404</div>
        <h1 className="display-font text-[10rem] md:text-[16rem] font-black leading-none tracking-tighter mb-8">404</h1>
        <p className="display-font text-3xl md:text-4xl italic mb-12">This page is missing.</p>
        <a href="/" className="btn-primary inline-flex">Return Home →</a>
      </div>
    </main>
  );
};

export default NotFound;
