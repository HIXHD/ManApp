import "./SkladniaRenderowamegoElementu.css";
import ImageJakubB from "./ImageJakubB.png"

function Skladnia() {
  const formatName = (person) => {
    return `${person.firstName}   ${person.lastName}`;
  };

  const user = {
    firstName: "Jakub",
    lastName: "Bojda",
    urlAvatar:
    ImageJakubB,
  };
  const getGreeting = (person) => {
    if (person) {
      return formatName(person);
    }
    return "Witaj , nieznajomy.";
  };

  return (
    <div>
      <img src={user.urlAvatar}></img>
      <h1>{getGreeting(user)}</h1>
    </div>
  );
}

export default Skladnia;
