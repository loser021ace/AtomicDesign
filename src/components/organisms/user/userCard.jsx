import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { UserIconWithName } from "../../molecules/UserIconWithName";
export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName name={user.name} img={user.img} />
      <SDL>
        <dt>メール</dt>
        <dd>{user.mail}</dd>
        <dt>TEL</dt>
        <dd>{user.tel}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>WEB</dt>
        <dd>{user.WEB}</dd>
      </SDL>
    </Card>
  );
};

const SDL = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 30px;
    padding-bottom: 9px;
    overflow-wrap: break-word;
  }
`;
