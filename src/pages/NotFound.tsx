import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="bg-background min-h-screen flex items-center justify-center px-6 pt-40 pb-24 relative overflow-x-hidden">
      <div className="blob w-[400px] h-[400px] bg-[#FFE4E1] -top-20 -left-20" />
      <div className="blob w-[400px] h-[400px] bg-[#E6E6FA] -bottom-20 -right-20" style={{ animationDelay: "-3s" }} />
      <div className="text-center max-w-2xl relative z-10">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-muted-foreground block mb-6">Error 404</span>
        <h1 className="display-font text-[8rem] md:text-[14rem] font-bold leading-none tracking-tight mb-6 text-foreground">404</h1>
        <p className="cursive-font text-4xl md:text-5xl text-[#FFB7B2] mb-12">this page is missing</p>
        <a href="/" className="btn-primary inline-flex">Return Home →</a>
      </div>
    </main>
  );
};

export default NotFound;
