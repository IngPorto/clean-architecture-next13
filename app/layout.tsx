import "../styles/globals.css";
import { ContextProvider } from "src/infraestructure/repository/context.repository";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ContextProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ContextProvider>
  );
}
