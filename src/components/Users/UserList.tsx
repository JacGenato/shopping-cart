import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Link } from 'react-router-dom';

import USERLIST from '../../__mock__/users';
import { Avatar, Typography, Stack, Container, Button } from '@mui/material';

interface Column {
  id: 'name' | 'company' | 'role' | 'isVerified' | 'status';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: boolean) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'company', label: 'Company', minWidth: 170 },
  { id: 'role', label: 'Role', minWidth: 170 },
  {
    id: 'isVerified',
    label: 'Verified',
    minWidth: 170,
    format: (value: boolean) => value.toString(),
  },
  { id: 'status', label: 'Status', minWidth: 170 },
];

const setData = (data: {
  id: any;
  name: any;
  company: any;
  status: any;
  avatarUrl: any;
  role: any;
}) => {
  let { id, name, company, status, avatarUrl, role } = data;
  localStorage.setItem('ID', id);
  localStorage.setItem('Name', name);
  localStorage.setItem('Company', company);
  localStorage.setItem('Status', status);
  localStorage.setItem('AvatarUrl', avatarUrl);
  localStorage.setItem('Role', role);
};

const rows = USERLIST;

export default function UserList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Container>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
                <TableCell style={{ minWidth: 200 }}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Stack
                              direction="row"
                              alignItems="center"
                              spacing={2}
                            >
                              {column.id == 'name' ? (
                                <Avatar alt={row.name} src={row.avatarUrl} />
                              ) : (
                                ''
                              )}
                              <Typography variant="subtitle2" noWrap>
                                {column.format && typeof value === 'boolean'
                                  ? column.format(value)
                                  : value}
                              </Typography>
                            </Stack>
                          </TableCell>
                        );
                      })}{' '}
                      <TableCell>
                        <Link to="/details">
                          <Button onClick={() => setData(row)}>Details</Button>
                        </Link>
                        <Link to="/edit">
                          <Button onClick={() => setData(row)}>Update</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Container>
  );
}
