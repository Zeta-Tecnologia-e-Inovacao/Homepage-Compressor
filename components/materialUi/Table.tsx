"use client"

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSession } from 'next-auth/react';
import { URL_API } from '../../utils/constants'; 
import { useState } from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }: any) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id: number,
  name: string,
  serial: number
) {
  return { id, name, serial };
}


export default function TableDashboard() {

  const [nameCompressor, setNameCompressor] = useState('')
  const [Serial, setSerial] = useState('')

  const { data: session } = useSession();
  const Origin = process.env.NEXT_PUBLIC_AWS_ORIGIN;


  async function buscarDadosCompressor(){
    const resposta = await fetch(`${URL_API}/compressors/client/${session?.user.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "origin": Origin ?? ''
      }
    });

    if(resposta.ok){

      const dadosCompressor = await resposta.json();

      console.log(dadosCompressor)

      const { name, serial_number }: any = dadosCompressor.data[0];

      setNameCompressor(name)
      setSerial(serial_number)

    } else {
      console.error('Erro ao buscar dados do compressor:', resposta.status);
    }
  } 

  buscarDadosCompressor();
  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Nome do compressor</StyledTableCell>
            <StyledTableCell align="left">Serial&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={nameCompressor}>
            <StyledTableCell component="th" scope="row">
              {nameCompressor}
            </StyledTableCell>
            <StyledTableCell align="left">{Serial}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}