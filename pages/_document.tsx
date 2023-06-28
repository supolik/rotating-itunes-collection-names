import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import React from 'react';
import { createGenerateId, JssProvider, SheetsRegistry } from 'react-jss';
export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const registry = new SheetsRegistry();
        const generateId = createGenerateId();
        const originalRenderPage = ctx.renderPage;
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) =>
                    (
                        <JssProvider generateId={generateId} registry={registry}>
                            <App {...props} />
                        </JssProvider>
                    ),
            });

        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <>
                    {initialProps.styles}
                    <style
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{ __html: registry.toString() }}
                        id="server-side-styles"
                    />
                </>
            ),
        };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <style>{'body{ display:block !important }'}</style>
                </Head>
                <body style={{ background: '#f5f5f5', overflow: 'auto' }}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
