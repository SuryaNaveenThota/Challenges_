import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const TableData = ({ data }) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Abbreviation (PT)</TableCell>
            <TableCell>Abbreviation (EN)</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Chapters</TableCell>
            <TableCell>Group</TableCell>
            <TableCell>Testament</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody>
          {data.map((book, index) => (
            <TableRow key={index}>
              <TableCell>{book.name}</TableCell>
              <TableCell>{book.abbrev.pt}</TableCell>
              <TableCell>{book.abbrev.en}</TableCell>
              <TableCell>{book.author}</TableCell>
              <TableCell>{book.chapters}</TableCell>
              <TableCell>{book.group}</TableCell>
              <TableCell>{book.testament}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableData;
