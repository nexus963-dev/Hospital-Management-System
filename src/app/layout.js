import "./globals.css";
import SessionWrapper from "../components/SessionWrapper/sessionWrapper.jsx";

export const metadata = {
  title: "Hospital Management System",
  description: "Hospital Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#000] via-[#63e] to-[#000] min-h-screen">
        <SessionWrapper>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
