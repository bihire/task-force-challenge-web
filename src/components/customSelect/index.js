import React from 'react';
import { makeStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';

const theme1 = createMuiTheme({
  overrides: {
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: 'none'
        }
      }
    }
  }
});

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(0),
    border: 'none',
    width: '100%',
    padding: '10px 0',
    fontSize: '12px',
    color: '#495D69',
    display: 'relative',
    "& .MuiNativeSelect-select:focus": {
      backgroundColor: '#F4F5F6',
    },

  },
}));

export default function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          name="age"
          disableUnderline
          
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'age' }}
        >
          <option value={10}>low</option>
          <option value={20}>medium</option>
          <option value={30}>high</option>
        </NativeSelect>
    </div>
  );
}