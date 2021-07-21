import styled from 'styled-components';

const Input = styled.input`
    width: 100%;
    padding: 12px 20px;
    margin: 4px 4px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    float: left;
    display: block;
    background-color: #ffff;
` 
const Label = styled.h4`
    display: block;
    margin: 4px 4px;
    float: left;
    text-align:center;
`

const Wrapper = styled.section`
  width: 450px;
  display: inline-block;
  padding: 4px 12px;
`;

function Inputdiv({placeholder, type, value, label }) {
  return (
    <Wrapper>
        <Label>{label}</Label>
        <Input 
            placeholder={placeholder}
            type={type} 
            value={value}
            disabled
        />
    </Wrapper>
  );
}

export default Inputdiv;