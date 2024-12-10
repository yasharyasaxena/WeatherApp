import imgUrl from "./assets/logo.png";

export default function Header() {
  return (
    <header>
      <img src={imgUrl} alt="logo.png" />
      <span>Weather App</span>
    </header>
  );
}
