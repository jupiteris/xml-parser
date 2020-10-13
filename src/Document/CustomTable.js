import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import AddIcon from '@material-ui/icons/Add';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import Popover from '@material-ui/core/Popover';
import { RuboForm } from './RuboForm';

const useStyles = makeStyles({
  tableContainer: { position: 'relative' },
  table: {
    minWidth: 650,
    '& thead': { background: '#F2F2F2' },
    '& tbody': { cursor: 'pointer' },
    margin: '17px 0px 10px 0px'
  },
  popover: {
    '& .MuiPopover-paper': {
      left: '9px !important',
      width: '100%'
    }
  },
  editForm: { background: '#f2f2f2', paddingLeft: 9 },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    cursor: 'pointer',
    '& svg': { padding: 9 }
  }
});

export const CustomTable = ({ data }) => {
  const classes = useStyles();
  const { headers, rows } = data;
  const [anchorEl, setAnchorEl] = useState(null);
  const [forms, setForms] = useState([
    {
      rubo: 'r1',
      camp1: 'Campo 1',
      camp2: 'Campo 2'
    }
  ]);

  const handleRow = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleAdd = () => {
    setForms([...forms, { rubo: 'r2', camp1: 'Campo 1', camp2: 'Campo 2' }]);
  };

  const handleDelete = () => {
    if (forms.length) setForms(forms.slice(0, -1));
  };

  return (
    <div className={classes.tableContainer}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {headers.length &&
              headers.map((h, index) => (
                <TableCell key={index} align={h.align ?? 'left'}>
                  {h.name}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} onClick={handleRow}>
              <TableCell component="th" scope="row">
                {row.no}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.unit}</TableCell>
              <TableCell align="right">{row.imported}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={classes.popover}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <div className={classes.editForm}>
          <div className={classes.header}>
            <span>Information de Rubrado</span>
            <div>
              <span>Aplicar a todo</span>
              <Checkbox checked={false} onChange={() => console.log('here')} inputProps={{ 'aria-label': 'primary checkbox' }} style={{ marginLeft: 20 }} />
            </div>
          </div>
          {forms.length ? forms.map((f, index) => <RuboForm data={f} key={index} />) : ''}
          <div className={classes.actions}>
            <AddIcon onClick={handleAdd} />
            <DeleteIcon onClick={handleDelete} />
            <SaveIcon onClick={handleClose} />
          </div>
        </div>
      </Popover>
    </div>
  );
};
