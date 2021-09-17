import React from 'react'
import ContactCard from './ContactCard';


const Conatctlist =(props) =>{
    console.log(props)
    const deleteContactHandler
    const renderContactlist =props.contacts.map((conatct)=>{
        return (
         <ContactCard conatct={conatct} clickHander= {deleteContactHandler} />
        );
    })
return (
    <div className="ui celled list">
       {renderContactlist}
    </div>
)
}
export default Conatctlist