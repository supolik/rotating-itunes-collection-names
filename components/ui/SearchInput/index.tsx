import React, { forwardRef, Ref } from 'react';
import { IProps } from './types';
import useStyles from './styles';

const SearchInput = forwardRef((props: IProps, ref?: Ref<HTMLInputElement>) => {
    const { ...restProps } = props;
    const classes = useStyles();

    return <input className={classes.searchInput} {...restProps} ref={ref} type="text" />;
});

export default SearchInput;
