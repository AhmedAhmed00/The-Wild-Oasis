import styled, { css } from "styled-components";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  padding: 1.2rem 0;
  ${props => props.orientation === 'vertical' && css`
    gap: 1rem;   
  `}
  ${props => props.orientation === 'horizontal' && css`
  
    gap: 2.4rem;
    grid-template-columns: 24rem 1fr 1.2fr;

  `}

 

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

export const Label = styled.label`
  font-weight: 500;
`;

export const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;



function FormRow({ label, error, children, orientation }) {
  return (
    <StyledFormRow orientation={orientation}>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

StyledFormRow.defaultProps = {
  orientation: "horizontal"
}


export default FormRow