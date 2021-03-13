import React, {useEffect, useState} from 'react';
import { MenuItem, Select } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  menuItem: {
    fontSize: '12px',
    fontWeight: '500',
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    padding: '0',
    border: 'none',
    width: '100%',
    fontSize: '12px',
    color: '#495D69',
    display: 'relative',
    "& .MuiSelect-select:focus": {
      backgroundColor: '#F4F5F6',
    },
    "& .MuiSelect-select": {
      padding: ' 15px 10px'
    },

  },
}));

export default function NativeSelects({ curPriority, setPriority}) {
  const classes = useStyles();
  const [priority, setPriorityLocal] = useState('LOW');
  useEffect(() => {
    setPriorityLocal(curPriority ? curPriority : 'LOW')
    setPriority(curPriority ? curPriority : 'LOW');
  }, [])

  const handleChange = (event) => {
    setPriorityLocal(event.target.value)
    setPriority(event.target.value);
  };

  return (
    <div>
        <Select
          disableUnderline
          onChange={handleChange}
          name="dificulty"
          displayEmpty
          value={priority}
          className={classes.selectEmpty}
        >
        <MenuItem className={classes.menuItem} value={'LOW'}>LOW</MenuItem>
        <MenuItem className={classes.menuItem} value={'MEDIUM'}>MEDIUM</MenuItem>
        <MenuItem className={classes.menuItem} value={'HIGH'}>HIGH</MenuItem>
        {/* <option name="low"  value='low'> LOW</option>
        <option name="medium"  value="medium"> MEDIUM</option>
        <option name="high"  value="high"> HIGH</option> */}
        </Select>
    </div>
  );
}