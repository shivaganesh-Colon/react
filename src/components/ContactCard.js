import React from 'react'

const ContactCard = (props)=>{
    const {id,name,email} =props.conatct
 return(
    <div className="item">
    <div className="row content">
        <div className="col-md-4 header">{name}</div>
        <div className="col-md-4 ">{email}</div>
        <div className="col-md-4 "> <i className="trash alternate outline icon" style={{color:"red"}}></i></div>
       
    </div>
</div>
 )
}
export default ContactCard