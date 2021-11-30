import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  bacground-color: #fff;
  align-items: center;
  border-radius: 5px;
  height: 25px;
  margin-top: 5px;
`;

export const Select = styled.select`
  width: 120px;
  height: 30px;
  background: white;
  color: gray;
  margin-right: 20px;
  border-radius: 5px;
  font-size: 14px;
  margin-top: 5px;
`;

export const Option = styled.option`
  font-weight: small;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

export const ButtonAdd = styled.button`
  background-color: #63b8ff;
  border-radius: 5px;
  color: #000;
  width: 100px;
  height: 35px;
  margin-top: 25px;
  font-size: 18px;
  border-color: #63b8ffcc;
  flex: 2;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-right: 20px;
`;
