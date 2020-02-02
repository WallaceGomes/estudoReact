import React from 'react';

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props}/>
    </div>
  );
};

// {...props} copia as propriedades, as propriedades do componente abaixo.

export default withClass;
