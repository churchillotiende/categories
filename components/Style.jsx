import styled from 'styled-components';

export const ProductTitle = styled.div`
    text-align:center ;
    font-size:60px;
    color:#241F59;
    margin-bottom:100px;

    
`;

export const ProductsContainer = styled.section`
    height: 900px;
    max-width:1900px;
    background-color:#FFC000;
    border-radius:10px;
    /* margin-left:30px ; */
    margin-top:0;

    
    
`;
export const H1 = styled.h2`
        margin-top:-100px;
        text-align:center;
        font-size:60px ;
        font-weight:800 ;
        color:#241F59;  
`;

export const Section = styled.section`
  display: ${(props) => props.grid ? "grid" : "flex" };
  flex-direction: ${(props) => props.row ? "row" : "column" };
  padding: ${(props) => props.nopadding ? "0" : "32px 48px 0" } ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
`

