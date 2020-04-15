import React from 'react';
import { Helmet } from 'react-helmet';

const Head = props => {
  return (
    <Helmet>
      <title>{props.title} - Harisenin.com</title>

      <meta charSet="UTF-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="description"
        content={`${props.description}`}
      />

      <link
        rel="shortcut icon"
        href={`${process.env.PUBLIC_URL}/Harisenin.com icon-21.png`}
      />
    </Helmet>
  );
};

export default Head;
