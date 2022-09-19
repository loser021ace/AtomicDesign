import styled from "styled-components";

export const Input = (props) => {
  const { placeholder } = props;
  return <SInput placeholder={placeholder} />;
};

const SInput = styled.input`
  background-color: black;
`;
