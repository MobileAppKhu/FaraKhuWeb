import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import React from 'react'
import students from './mock-data.json'
import { getTranslate } from '../../localization'
// style
import './styles/studentsTable.css'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6c5677',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}))

const tableData = [{
  family: 'Crossthwaite',
  stId: 98202330,
  name: 'Aldwin',
  email: 'acrossthwaite0@cdc.gov',
  row: 1,
}, {
  family: 'Bothbie',
  stId: 98202315,
  name: 'Roldan',
  email: 'rbothbie1@stanford.edu',
  row: 2,
}, {
  family: 'Emblen',
  stId: 98202321,
  name: 'Nikolai',
  email: 'nemblen2@biblegateway.com',
  row: 3,
}, {
  family: 'Slessor',
  stId: 98202348,
  name: 'Cherice',
  email: 'cslessor3@networksolutions.com',
  row: 4,
}, {
  family: 'Sundin',
  stId: 98202301,
  name: 'Thorsten',
  email: 'tsundin4@blinklist.com',
  row: 5,
}, {
  family: 'Appleford',
  stId: 98202338,
  name: 'Justus',
  email: 'jappleford5@umich.edu',
  row: 6,
}, {
  family: 'Mottershaw',
  stId: 98202303,
  name: 'Romeo',
  email: 'rmottershaw6@adobe.com',
  row: 7,
}, {
  family: 'Seamon',
  stId: 98202317,
  name: 'Yelena',
  email: 'yseamon7@sfgate.com',
  row: 8,
}]

const StudentsTable = () => {
    console.log('hi')
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">{getTranslate('ردیف')}</StyledTableCell>
            <StyledTableCell align="center">{getTranslate('نام')}</StyledTableCell>
            <StyledTableCell align="center">{getTranslate('نام خانوادگی')}</StyledTableCell>
            <StyledTableCell align="center">{getTranslate('شماره دانشجویی')}</StyledTableCell>
            <StyledTableCell align="center">{getTranslate('ایمیل')}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((student) => (
            <StyledTableRow key={student.stId}>
              <StyledTableCell align="center" component="th" scope="row">
                {student.row}
              </StyledTableCell>
              <StyledTableCell align="center">{student.name}</StyledTableCell>
              <StyledTableCell align="center">{student.family}</StyledTableCell>
              <StyledTableCell align="center">{student.stId}</StyledTableCell>
              <StyledTableCell align="center">{student.email}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default StudentsTable
