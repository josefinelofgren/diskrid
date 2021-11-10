import React from 'react';

interface Props {
    message: any; 
  }
  


function FormError(props: Props) {
    const {message} = props;

    return(
         <div className="alert alert-warning error-message">
            {message}
        </div> 
    );
}

export default FormError;