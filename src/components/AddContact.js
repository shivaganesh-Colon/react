import React from 'react'

class AddContact extends React.Component{
state ={
    name:"",
    email:""
}
add =(e) =>{
     e.preventDefault();
     if(this.state.name === "" && this.state.email === ""){
         alert('all fields are mandatory')
         return
     }
     this.props.addContactHandler(this.state)
     this.setState({name:"",email:""})
     console.log(this.state)
}
render(){
    return(
        <div className="container ui main">
            <h2>Add Contact</h2>
            <form className="row ui form" onSubmit={this.add}>
                <div className="col-md-4 field">
                   <label>Name</label>
                   <input type="text" name="name" placeholder="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                </div>
                <div className="col-md-4 field">
                   <label>Email</label>
                   <input type="text" name="email" placeholder="email" value={this.state.email} onChange={(e)=>this.setState({email:e.target.value})} />
                </div>
                <div className="col-md-4 field">
                <br></br>
                <button className="btn btn-primary">
                    Submit
                </button>
                </div>
             
            </form>
        </div>
    )
}

}
export default AddContact;