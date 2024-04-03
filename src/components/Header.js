import "./Header.css";

function Header({ section }) {
  return (
    <header className="header">
      <div className="info-box">
        <p>{section}</p>
      </div>
    </header>
  );
}
export default Header;
