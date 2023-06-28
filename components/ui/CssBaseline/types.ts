import * as React from 'react';
import { WithStylesProps } from 'react-jss';
import styles from '@/components/ui/CssBaseline/styles';

export interface IProps extends WithStylesProps<typeof styles> {
    children: React.ReactNode;
}
