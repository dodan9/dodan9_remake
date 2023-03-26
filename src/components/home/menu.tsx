import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <ul>
        <li>
          <Link to='/blackjack/'>&lt;BlackJack /&gt;</Link>
        </li>
        <li>
          <Link to='/pokemon/'>&lt;Pokemon /&gt;</Link>
        </li>
      </ul>
    </>
  );
};

export default Menu;
