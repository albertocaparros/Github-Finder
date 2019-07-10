import React,{useContext} from 'react';
import AlertContext from "../../context/alert/alertContext";

const Alert = () => {

    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;

    return (
       alert !== null && (
           // eslint-disable-next-line no-template-curly-in-string
           <div className={'alert alert-${alert.type}'}>
               <i className="fas fa-info-circle">{alert.msg}</i>
           </div>
       )
    );
};

export default Alert; 
