import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
    '& .MuiOutlinedInput-root': { borderRadius: 0 },
    '& .MuiOutlinedInput-input': { padding: '9.5px 14px' },
    '& .MuiOutlinedInput-multiline': { padding: '0px 14px' }
  },
  badge: {
    background: '#828883',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 15px',
    marginRight: 9
  }
});

const rubos = [
  {
    value: 'r1',
    label: 'Rubo 1'
  },
  {
    value: 'r2',
    label: 'Rubo 2'
  }
];

export const RuboForm = ({ data }) => {
  const classes = useStyles();
  const [rubo, setRubo] = useState(data?.rubo ?? 'r1');

  const handleChange = (event) => {
    setRubo(event.target.value);
  };

  return (
    <div className={classes.form}>
      <TextField
        select
        value={rubo}
        onChange={handleChange}
        variant="outlined"
        style={{ width: '13%' }}
      >
        {rubos.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField placeholder={data?.camp1} multiline variant="outlined" style={{ width: '39%' }} />
      <TextField placeholder={data?.camp2} multiline variant="outlined" style={{ width: '39%' }} />
      <div className={classes.badge}>%</div>
    </div>
  );
};
