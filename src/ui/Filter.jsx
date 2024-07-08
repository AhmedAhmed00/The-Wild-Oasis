import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.4rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;


export default function Filter({ filterField, options }) {

  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = searchParams.get(filterField) || options[0]

  function handleChoose(e) {
    searchParams.set(filterField, e.target.value)
    searchParams.set("page", 1)
    setSearchParams(searchParams)
  }

  return (
    <StyledFilter>

      {options.map(option => <FilterButton
        key={option.value}
        active={activeTab === option.value}
        disabled={activeTab === option.value}
        value={option.value}
        onClick={handleChoose}>
        {option.label}
      </FilterButton>)}

    </StyledFilter>
  )
}

