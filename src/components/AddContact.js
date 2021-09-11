import React from 'react'

class AddContact extends React.Component{

render(){
    return(
        <div className="container ui main">
            <h2>Add Contact</h2>
            <form className="row ui form">
                <div className="col-md-4 field">
                   <label>Name</label>
                   <input type="text" name="name" placeholder="name" />
                </div>
                <div className="col-md-4 field">
                   <label>Email</label>
                   <input type="text" name="email" placeholder="email" />
                </div>
            </form>
        </div>
    )
}

}
export default AddContact;