import React from "react";
import Helmet from "react-helmet";
import Document, { Main, NextScript, Head } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/styles";

class CommonsDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentsSheet.collectStyles(
              materialSheets.collect(<App {...props} />)
            )
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        helmet: Helmet.renderStatic(),
        styles: (
          <>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
            {materialSheets.getStyleElement()}
          </>
        )
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }
  render() {
    const { helmet } = this.props as any;
    const htmlAttrs = helmet.htmlAttributes.toComponent();
    const bodyAttrs = helmet.bodyAttributes.toComponent();

    return (
      <html {...htmlAttrs}>
        <Head>
          {helmet.title.toComponent()}
          {helmet.meta.toComponent()}
          {helmet.link.toComponent()}
        </Head>
        <body {...bodyAttrs}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CommonsDocument;
