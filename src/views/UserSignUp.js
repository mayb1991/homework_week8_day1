import React, { Component } from 'react'

export default class UserSignUp extends Component {
    sendSignUpInfo = async (e) => {
        e.preventDefault();

        if (e.target.password.value !== e.target.confirmPassword.value){ 
            return
        }

        const res = await fetch('http://localhost:5000/api/signup', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            })
        });
        const data = await res.json();
        console.log(data)
    };

    render() {
        return (
            <div className='container d-flex justify-content-center'>
            <form className='col-4' onSubmit={(e)=>{this.sendSignUpInfo(e)}}>

                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input type="text" className="form-control" name='username'/>
                </div>


                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input type="email" className="form-control" name='email'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" name='password'/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" name='confirmPassword'/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            </div>
        )
    }
}
//     userData;
//     constructor(props) {
//         super(props);
//         this.onChangeFirstName = this.onChangeFirstName.bind(this);
//         this.onChangeLastName = this.onChangeLastName.bind(this);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePassword = this.onChangePassword.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.state = {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             // confirmPassword: ''
//         }
//     }
//     // Form Events
//     onChangeFirstName(e) {
//         this.setState({ firstName: e.target.value })
//     }
//     onChangeLastName(e) {
//         this.setState({ lastName: e.target.value })
//     }
//     onChangeEmail(e) {
//         this.setState({ email: e.target.value })
//     }
//     onChangePassword(e) {
//         this.setState({ password: e.target.value })
//     }
//     onSubmit(e) {
//         e.preventDefault()
//         this.setState({
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//             // confirmPassword: ''
//         })
//     }
//     // React Life Cycle
//     componentDidMount() {
//         this.userData = JSON.parse(localStorage.getItem('user'));
//         if (localStorage.getItem('user')) {
//             this.setState({
//                 firstName: this.userData.firstName,
//                 lastName: this.userData.lastName,
//                 email: this.userData.email,
//                 password: this.userData.password
//             })
//         } else {
//             this.setState({
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 password: '',
//                 // confirmPassword: ''
//             })
//         }
//     }
//     // componentWillUpdate(nextProps, nextState) {
//     //     localStorage.setItem('user', JSON.stringify(nextState));
//     // }
//   render() {
//     return (
//         <div className='container d-flex justify-content-center'>
//         <form className='col-4' onSubmit={this.onSubmit}>
//         <div className="mb-3">
//           <label className="form-label">First Name</label>
//           <input type="text" className="form-control" value={this.state.firstName} onChange={this.onChangeFirstName} id="firstName"/>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Last Name</label>
//           <input type="text" className="form-control" value={this.state.lastName} onChange={this.onChangeLastName} id="lastName"/>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email address</label>
//           <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} id="email"/>
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} id="password"/>
//         </div>

//         {/* <div className="mb-3">
//             <label className="form-label">Confirm Password</label>
//             <input type="password" className="form-control" value={this.state.confirmPassword} name='confirmPassword'/>
//         </div> */}

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//       </div>
//     )
   
//   }
// }
