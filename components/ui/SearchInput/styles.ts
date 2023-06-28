import { createUseStyles } from 'react-jss';
import { Theme } from '@/theme/types';

const useStyles = createUseStyles(({ colors }: Theme) => ({
    searchInput: {
        border: [2, 'solid', colors.dark],
        backgroundColor: colors.light,
        borderRadius: 8,
        padding: [4, 8],
        height: 38,
        width: '100%',
    },
}));

export default useStyles;
