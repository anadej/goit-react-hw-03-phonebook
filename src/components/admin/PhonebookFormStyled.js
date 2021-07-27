import styled from "styled-components";

export const PhonebookFormStyled = styled.div`
  border: 2px solid black;
  width: 40%;
  padding: 20px;
  margin-left: 20px;

  .phoneForm {
    display: flex;
    flex-direction: column;
  }
  .labelForm {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
  .inputForm {
    width: 150px;
    margin-top: 5px;
  }
  .buttonForm {
    width: 40%;
    background-color: white;
    border-radius: 5px;
    margin-top: 10px;
  }
`;
