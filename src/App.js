import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SeconderyButton } from "./components/atoms/button/SeconderyButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/userCard";

export default function App() {
  return (
    <>
      <PrimaryButton>test</PrimaryButton>
      <SeconderyButton>test3</SeconderyButton>
      <SearchInput />
      <UserCard />
    </>
  );
}
