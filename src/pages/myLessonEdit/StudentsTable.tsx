import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import React from 'react'
import { getTranslate } from '../../localization'
// style
import './styles/studentsTable.css'
import { Lesson } from '../myLesson'

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

const StudentsTable:React.FC<Lesson> = ({ students }) => (
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
        {students.map((student, index) => (
          <StyledTableRow key={student.firstName + student.lastName}>
            <StyledTableCell align="center" component="th" scope="row">
              {index + 1}
            </StyledTableCell>
            <StyledTableCell align="center">{student.firstName}</StyledTableCell>
            <StyledTableCell align="center">{student.lastName}</StyledTableCell>
            <StyledTableCell align="center">{student.userId}</StyledTableCell>
            <StyledTableCell align="center">{student.email}</StyledTableCell>
          </StyledTableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
export default StudentsTable
