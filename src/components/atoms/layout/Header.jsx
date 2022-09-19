import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Header>
      <Link to={"/home"}>HOME</Link>
      <Link to={"/users"}>USERS</Link>
    </Header>
  );
};
