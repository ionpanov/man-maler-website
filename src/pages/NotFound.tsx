import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { FAQ_PATH, SERVICE_PAGES } from "@/lib/cities";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-6 py-20">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Oops! Page not found</p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Return to Home
        </a>
        <nav aria-label="Nyttige sider" className="mt-8">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {SERVICE_PAGES.map((service) => (
              <li key={service.path}>
                <Link to={service.path} className="text-muted-foreground hover:text-primary hover:underline">
                  {service.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/omraader" className="text-muted-foreground hover:text-primary hover:underline">
                Områder
              </Link>
            </li>
            <li>
              <Link to={FAQ_PATH} className="text-muted-foreground hover:text-primary hover:underline">
                Ofte stillede spørgsmål
              </Link>
            </li>
            <li>
              <Link to="/kontakt" className="text-muted-foreground hover:text-primary hover:underline">
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NotFound;
