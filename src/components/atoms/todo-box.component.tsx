import styled from 'styled-components';

const TodoBox = styled.div`
  background-color: #ffffff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  width: 450px;
  height: auto;
  margin-bottom: 40px;
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
  @media (max-width: 760px) {
    width: 350px;
  }
`;

export default TodoBox;
