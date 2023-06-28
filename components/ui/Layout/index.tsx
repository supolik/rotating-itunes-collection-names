import React from 'react';
import useStyles from './styles';
import { IProps } from './types';

const Layout = ({ children }: IProps) => {
    const classes = useStyles();
    return <main className={classes.layout}>{children}</main>;
};

export default Layout;
