import '../styles/components/pages/Nosotros.css';
import '../styles/components/pages/normalize.css';
const Nosotros = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Fugit quaerat necessitatibus voluptatum ducimus consequuntur accusantium at 
                    facere quia odit repudiandae maiores placeat hic atque, explicabo ullam voluptate! Saepe, est maiores.
                </p>
                <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Fugit quaerat necessitatibus voluptatum ducimus consequuntur accusantium at 
                facere quia odit repudiandae maiores placeat hic atque, explicabo ullam voluptate! Saepe, est maiores.
                </p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src="img/nosotros/nosotros1.jpg" alt="juan gomez"/>
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Reprehenderit dignissimos itaque accusantium nobis dolores ea,
                              optio recusandae ipsam officia debitis asperiores at? Eos assumenda, 
                              blanditiis ipsa aut laborum ipsam incidunt.
                         </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros2.jpg" alt="diana reyes"/>
                        <h5>Diana Reyes</h5>
                        <h6>Gerente Comercial</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Reprehenderit dignissimos itaque accusantium nobis dolores ea,
                              optio recusandae ipsam officia debitis asperiores at? Eos assumenda, 
                              blanditiis ipsa aut laborum ipsam incidunt.
                         </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros3.jpg" alt="jorge gutierrez"/>
                        <h5>Jorge Gutierrez</h5>
                        <h6>Gerente de Sistemas</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Reprehenderit dignissimos itaque accusantium nobis dolores ea,
                              optio recusandae ipsam officia debitis asperiores at? Eos assumenda, 
                              blanditiis ipsa aut laborum ipsam incidunt.
                         </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros4.jpg" alt="Erica Ramirez"/>
                        <h5>Erica Ramirez</h5>
                        <h6>Gerente de Marketing</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Reprehenderit dignissimos itaque accusantium nobis dolores ea,
                              optio recusandae ipsam officia debitis asperiores at? Eos assumenda, 
                              blanditiis ipsa aut laborum ipsam incidunt.
                         </p>
                    </div>
                    <div className="persona">
                        <img src="img/nosotros/nosotros5.jpg" alt="Pedro Putignani"/>
                        <h5>Pedro Putignani</h5>
                        <h6>Gerente de Logistica</h6>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                             Reprehenderit dignissimos itaque accusantium nobis dolores ea,
                              optio recusandae ipsam officia debitis asperiores at? Eos assumenda, 
                              blanditiis ipsa aut laborum ipsam incidunt.
                         </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Nosotros;