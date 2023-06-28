import * as React from 'react';
import injectSheet from 'react-jss';
import { IProps } from './types';
import styles from './styles';

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */
const CssBaseline = injectSheet(styles, { injectTheme: true })(({ children }: IProps) => {
    return <>{children}</>;
});

export default CssBaseline;
