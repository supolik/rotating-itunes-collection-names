import React, { forwardRef, Ref } from 'react';
import { IProps } from './types';
import useStyles from './styles';

const SearchInput = forwardRef((props: IProps, ref?: Ref<HTMLInputElement>) => {
    const classes = useStyles();

    return <input {...props} className={classes.searchInput} ref={ref} type="text" />;
});

export default SearchInput;
