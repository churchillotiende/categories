import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  padding-top:100px;
  /* @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    padding-top:0px;
    flex-direction: column;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top:0px;
    margin: 0 auto;
  } */
`;

export const RightSection = styled.div`
  width:100%;
  padding-top:100px;
  font-size:30px;
  display:flex ;
  flex-direction:column;
  margin:0 auto ;
  margin-left:20px;
  /* @media ${(props) => props.theme.breakpoints.md}{
    padding-top:0;
    margin-left:0 ;
  } */
`;