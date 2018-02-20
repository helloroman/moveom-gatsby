import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from 'components/Organisms/Header';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="moveom – yoga school by Anna Nowak"
      meta={[
        {
          name: 'description',
          content:
            'Move the body. Move the energy. Be moved. Moveom is yoga school founded by experienced teacher Anna Nowak',
        },
        {
          name: 'keywords',
          content: 'yoga, moveom, anna nowak, nowak, ballet',
        },
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
