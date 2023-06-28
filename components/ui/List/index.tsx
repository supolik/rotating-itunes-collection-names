import React from 'react';
import { IProps } from './types';
import useStyles from './styles';

const List = ({ children }: IProps) => {
    const classes = useStyles();

    return <ul className={classes.list}>{children}</ul>;
};

export default List;
