import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NativeSelect from '@material-ui/core/NativeSelect';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    border: 'none',
    width: '100%',
    fontSize: '12px',
    color: '#495D69',
    display: 'relative',
    "& .MuiNativeSelect-select:focus": {
      backgroundColor: '#F4F5F6',
    },
    "& .MuiNativeSelect-select": {
      padding: ' 15px 10px'
    },

  },
}));

export default function NativeSelects({ setPriority}) {
  const classes = useStyles();
  

  const handleChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <div>
        <NativeSelect
          disableUnderline
          onChange={handleChange}
          name="dificulty"
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
        >
        <option name="low"  value='low'> LOW</option>
        <option name="medium"  value="medium"> MEDIUM</option>
        <option name="high"  value="high"> HIGH</option>
        </NativeSelect>
    </div>
  );
}