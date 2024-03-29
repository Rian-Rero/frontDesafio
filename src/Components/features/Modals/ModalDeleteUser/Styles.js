import styled from 'styled-components';
import { Button } from 'antd';
import { colors } from '../../../../styles/styleVariables';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

export const Message = styled.h1`
  font-size: 2.1rem;
  text-align: center;
  margin: 1.4rem;
  color: ${colors.white};
  @media (max-width: 375px) {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export const DeleteButton = styled(Button)`
  cursor: pointer;

  width: 15rem;
  height: 5rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  align-items: center;

  background-color: transparent;
  border: 1px solid white;
  border-radius: 0.5rem;
  color: ${colors.white};

  margin-top: 1.5rem;

  font-style: normal;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.black};
    cursor: pointer;
  }
  svg {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }
`;
