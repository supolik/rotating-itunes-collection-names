import React from 'react';
import { IProps } from './types';
import useStyles from './styles';

const ListItem = ({ children }: IProps) => {
    const classes = useStyles();

    return (
        <li className={classes.listItem}>
            <div className={classes.text}>{children}</div>
        </li>
    );
};

export default ListItem;
