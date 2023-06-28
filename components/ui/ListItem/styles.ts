import { createUseStyles } from 'react-jss';
import { Theme } from '@/theme/types';

const useStyles = createUseStyles(({ colors }: Theme) => ({
    listItem: {
        listStyle: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: [2, 'solid', colors.dark],
        backgroundColor: colors.light,
        borderRadius: 8,
        padding: 4,
        height: 38,
        width: '100%',
        transition: 'all 0.2s ease-in-out',
    },
    text: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
}));

export default useStyles;
