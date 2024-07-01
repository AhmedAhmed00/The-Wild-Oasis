import styled, { css } from "styled-components";


const Heading = styled.h1`

${(props) => props.type === 'h1' && css`
font-size: 3rem;
font-weight:600;
` }
${(props) => props.type === 'h2' && css`
font-size: 2rem;
font-weight:600;
`}

${(props) => props.type === 'h2' && css`
font-size: 2rem;
font-weight:400;
`}
 font-size   :20px ;
  line-height: 1.4;
`;

export default Heading;
