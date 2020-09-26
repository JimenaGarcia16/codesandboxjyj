import React from "react";
import { Link } from 'react-router-dom'
import "../Componentes/css/menuprincipal.css";
function Menuprincipal() {
  return (
    <div className="login" >
      <h1> ANOTACIONES I.E.S.E </h1>
      <button className="b1"> <Link to="/INICIAR SESION"> INICIAR SESION </Link></button>
      <button className="b2"> <Link to="/Registrar"> REGISTRARSE </Link></button>
    </div>
  );
  
}
 render(){
  return(
       <React.Fragment>
          
       <div className='hero'>
           {/* <img className='img-fluid' src={LogoHeader}/> */}
       </div>
       <div className='container'>
           <div className='row'>
               <div className='col-6'>
                   <Insignia 
                       firstName={this.state.form.firstName}
                       lastName={this.state.form.lastName}
                       email={this.state.form.email}
                       ocupacion={this.state.form.ocupacion}
                       username={this.state.form.username}
                   />
               </div>
               <div className='col-6'>
                   <InsigniaFormulario onChange={this.handleChange} formValues={this.state.form}/>
               </div>
           </div>
       </div>
     
       </React.Fragment>
   );
 }
 

export default Menuprincipal;
