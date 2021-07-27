import styled from "styled-components";

export const FilterStyled = styled.label`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  .inputFilter {
    width: 150px;
    margin-top: 5px;

    &:focus {
      outline: none;
      border: 2px solid lightblue;
    }
  }
`;
