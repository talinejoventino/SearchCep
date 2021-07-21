import styled from "styled-components"

const Wrapper = styled.div`
  padding: 1em;
`;
const TitlePrincipal = styled.h1`
  text-align: center;
  color: #7100a5;
  font-size: 1.5em;
`;


function Title() {
    return(
        <Wrapper>
            <TitlePrincipal>
            Busca CEP
            </TitlePrincipal>
        </Wrapper>
    )
}


export default Title;