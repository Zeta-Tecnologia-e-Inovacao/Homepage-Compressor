import React from 'react';
import { Table } from "@radix-ui/themes";

const TablePage = () => {

  return (
    <Table.Root className='bg-slate-200 text-white h-[150px] max-w-full mx-auto md:max-w-none'>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell className='text-blue-900 font-semibold'>Modelo</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='text-blue-900'>Fabricante</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell className='text-blue-900'>???</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell className='text-black font-semibold'>ID compressor</Table.Cell>
          <Table.Cell className='text-black font-semibold'>Fabricante compressor</Table.Cell>
          <Table.Cell className='text-black font-semibold'>2 minutos</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell className='text-black font-semibold'>Jasper Eriksson</Table.Cell>
          <Table.Cell className='text-black font-semibold'>jasper@example.com</Table.Cell>
          <Table.Cell className='text-black font-semibold'>Developer</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default TablePage;