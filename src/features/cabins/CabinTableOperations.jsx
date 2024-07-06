
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';
import TableOperations from './../../ui/TableOperations';

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter filterField={'discount'} options={
        [{ value: 'all', label: 'All' },
        { value: 'with-discount', label: "With Discount" },
        { value: 'no-discount', label: "No discount" }]
      } />
      <SortBy options={[
        { value: 'name-asc', label: "Sort By Name (A-Z)" },
        { value: 'name-desc', label: "Sort By Name (Z-A)" },
        { value: 'regularPrice-asc', label: "Sort from by Price (low to high)" },
        { value: 'regularPrice-desc', label: "Sort from by Price (high to low)" },
      ]} />
    </TableOperations>

  );
}

export default CabinTableOperations;
