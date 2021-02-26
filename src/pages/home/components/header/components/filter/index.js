import React from 'react';
import MenuItem from "@material-ui/core/MenuItem";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles, createStyles } from '@material-ui/core/styles';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        paper: {
            marginRight: theme.spacing(2),
        },
        poper: {
            marginTop: '10px'
        },
        filterTitle: {
            fontSize: '10px',
            fontWeight: '800',
            padding: '0 4px 2px 4px',
        },
        listItems: {
            background: "#fff",
            // color: '#fff'
        }
    }),
);

const IgnoreDisabledListItem = React.forwardRef(function IgnoreDisabledListItem(
    { disabled, ...other },
    ref
) {
    return <ListItem {...other} ref={ref} />;
});

function Filter() {
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            <div className='Header_right_menu_container' ref={anchorRef}
                onClick={handleToggle}>
                <div className='Header_right_menu_container_icon'>
                    <div className='Header_right_menu_container_icon_bar1'>

                    </div>
                    <div className='Header_right_menu_container_icon_bar2'>

                    </div>
                    <div className='Header_right_menu_container_icon_bar3'>

                    </div>
                </div>
            </div>

            <Popper className={classes.poper}  open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'left top' : 'left bottom' }}
                    >
                        
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList className={classes.listItems} autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                    <IgnoreDisabledListItem className={classes.filterTitle} disabled>
                                        FILTER BY PRIORITY
                                    </IgnoreDisabledListItem>
                                    <MenuItem className={classes.listItems} onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}

export default Filter;