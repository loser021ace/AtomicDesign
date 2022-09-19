import "./styles.css";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SeconderyButton } from "./components/atoms/button/SeconderyButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/userCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";

export default function App() {
  const user = {
    img: "https://source.unsplash.com/brFsZ7qszSY",
    name: "うんちまん",
    mail: "dosukoi@gmail.com",
    tel: "090-1111-2222",
    company: {
      name: "うんち会社"
    },
    WEB: "http//google.com"
  };
  return (
    <HeaderOnly>
      <PrimaryButton>test</PrimaryButton>
      <SeconderyButton>test3</SeconderyButton>
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}
