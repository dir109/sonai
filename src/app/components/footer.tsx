export default function Footer() {
  return (
    <div className="h-36 bg-white flex flex-col sm:flex-row sm: justify-between px-10 pt-5 sm:pt-10 pb-5 text-gray-500">
      <p>Alle Systeme funktional</p>
      <p>IONOS SE . {new Date().getFullYear()}</p>
      <p>Datenschutzhinweise</p>
    </div>
  );
}
