import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #ece9e6, #ffffff);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: white;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #B1B1B1;
      margin: 0 0 10px;

      &::placeholder {
        color: #B1B1B1;
      }
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #DE5974;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, "#DE5974")};
      }
    }

    a {
      color: #333;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
