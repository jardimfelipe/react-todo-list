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
  @media (max-width: 760px) {
    width: 350px;
  }
`;

export default TodoBox;
