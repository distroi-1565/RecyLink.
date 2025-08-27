import "../styles/globals.css";

export const metadata = {
  title: "RecyLink — Dinero por Basura",
  description: "Recicla y gana — marketplace y B2B para materiales reciclables"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
