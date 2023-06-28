import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 400,
        gap: 8,
    },
    form: {
        width: '100%',
    },
});

export default useStyles;
