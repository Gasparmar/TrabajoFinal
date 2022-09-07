import '../styles/components/pages/Home.css';
import '../styles/components/pages/normalize.css';
const Home = (props) => {
    return (
        <main className="holder">
            
            <div className="homeimg">
                <img src="img/home/img01.jpg"   alt="Avion"/>
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ex reprehenderit natus molestias dolorum facere itaque ipsam, 
                         voluptatem impedit temporibus dolor laboriosam pariatur consequuntur earum corrupti, 
                         ducimus perspiciatis, odio voluptatum? Consequatur! jjhkgkgjhgjhgjgjhgjg
                    </p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita">Simplemente excelente</span>
                        <span class="autor">Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Home;