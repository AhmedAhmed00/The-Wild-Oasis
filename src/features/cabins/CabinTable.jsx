
import styled from 'styled-components';

import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import useCabins from './useCabins';
import Table from '../../ui/Table';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import Menus from '../../ui/Menus';




const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;


function CabinTable() {

  const { cabins, isError, isLoading } = useCabins()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const x = searchParams.get("discount")

  }, [searchParams])

  const filterParam = searchParams.get("discount") || 'all'

  let filterdData;
  if (filterParam === 'all') filterdData = cabins
  if (filterParam === 'no-discount') filterdData = cabins.filter(cabins => cabins.discount === 0)
  if (filterParam === 'with-discount') filterdData = cabins.filter(cabins => cabins.discount > 0)

  const sortBy = searchParams.get('sortBy') || "startDate-asc"

  const [field, direction] = sortBy.split('-')
  const modifier = direction === 'asc' ? 1 : -1
  const sortedData = filterdData?.sort((a, b) => (a[field] - b[field]) * modifier)



  if (isLoading) return <Spinner />



  return (
    <Menus>


      <Table columns='0.6fr 1.8fr 2.2fr 1fr 1fr 1fr'>
        <Table.Header role='row'>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>
        <Table.Body data={sortedData} render={sortedData => <CabinRow cabin={sortedData} key={sortedData.id} />} />
      </Table>
    </Menus>
  );
}


export default CabinTable;
