import { createUseStyles } from 'react-jss';
import { Theme } from '@/theme/types';

const useStyles = createUseStyles(({ colors }: Theme) => ({
    list: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        border: [2, 'solid', colors.dark],
        borderRadius: 8,
        gap: 8,
        padding: [8, 12],
        background: colors.grey,
        width: '100%',
    },
}));

export default useStyles;
