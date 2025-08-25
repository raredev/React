import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className="w-52 h-52 object-contain" />
      <h1 className="uppercase font-semibold text-3xl mt-2 text-amber-800 tracking-widest">
        ReactArt
      </h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
