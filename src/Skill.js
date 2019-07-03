import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    },
    input: {
        display: 'none',
    },
}));

export default (props) => {
    const classes = useStyles();
    return (
    <ul className="c7 lst-kix_41m63nyv7fxz-0 start">
        {
            // props.skills.filter(function(skill) {
            //     return skill.stack === 'Backend'
            // }).map(function(skill) {
            //     return <li key={skill.id} className="c2"><span className="c1">{skill.skill}</span></li>
            // })
            props.skills.filter(skill => skill.stack === 'Backend')
                        .map(skill => <Button key={skill.id} variant="contained" color="primary" className={classes.button}>{skill.skill}</Button>)
        }
    </ul>  
  )
}