import React from 'react'
import './Aboutus.css'
import corona from '../../Asset/Ezgif.com-video-to-gif_240px_65pc_speed.gif';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
function Aboutus() {
    return (
        <>
         <div className="container-fluid">
          <div className="row">
             <div className="col-sm-4"> 
               <div className="card" style={{width:"18rem"}}>
                <img  src={corona} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                   <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
               </div>
             
             </div>
            <div className="col-sm-8">
               <div className="card text-center">
                 <div className="card-header"> About History</div>
                     <div className="card-body">
                       <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                     </div>
                    <div className="card-footer text-muted">2 days ago</div>
              </div> 
            </div>
         </div>
       </div>
          
         <footer>
             <div>
              <h2>About Us Page</h2>
            </div>
         </footer>
       </>
    )
}

export default Aboutus
