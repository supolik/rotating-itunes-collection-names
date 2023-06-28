import App, { AppContext } from 'next/app';
import React from 'react';
import { ThemeProvider } from 'react-jss';
import CssBaseline from '@/components/ui/CssBaseline';
import defaultTheme from '@/theme/defaultTheme';
import Head from 'next/head';

class MyApp extends App {
    static async getInitialProps(context: AppContext) {
        let pageProps = {};
        const { Component, ctx } = context;

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return {
            pageProps,
        };
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#server-side-styles');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, err, pageProps } = this.props;

        return (
            <ThemeProvider theme={defaultTheme}>
                <CssBaseline>
                    <Head>
                        <meta name="viewport" content="width=device-width" />
                        <title>SPA</title>
                        <link
                            href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAMFBMVEVHcEwATJcATJcATJcATJcATJcATJcATJcATJcATJcATJcATJcATJcATJcATJcATJflFCzEAAAAD3RSTlMAC/agxRuzezZN6o5lJtuuJVejAAAA0klEQVQ4jYWS6xaEIAiEUUvzUrz/224umijsxo/OnOZDawCgl3GPBG9AlLHou97QSsIious+opX92An/lWk+Y0eqDOBIrZeYRoTc/Mn17IxWU/+G6X6ef3zEayb21SfiUH246OU2iHPJgBGxikOEmIjwREh/IkpUfBrEmIVW6YXoMZYXP/zwDfODArVdqKOGol3DfqFUEfX+6keSC+F5jFSHJNioFGJbfTHQev+0UOtKAMuy6ETvv2MKOpFG1vnZH0Hk9klIO7qUHcN2mg8mD83kB7MDFGibmognAAAAAElFTkSuQmCC"
                            rel="shortcut icon"
                            type="image/x-icon"
                        />
                    </Head>
                    <Component {...pageProps} err={err} />
                </CssBaseline>
            </ThemeProvider>
        );
    }
}

export default MyApp;
