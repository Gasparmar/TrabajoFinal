import '../styles/components/pages/Contacto.css';
import '../styles/components/pages/normalize.css';
const Contacto = (props) => {
  return (
    <main className="holder contacto">
      <div>
        <h2>Contacto Rapido</h2>
        <fomr action="" method="" className="formulario">
          <p>
            <label for="nombre">Nombre</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="email">Email</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="telefono">Telefono</label>
            <input type="text" name="" />
          </p>
          <p>
            <label for="mensaje">Mensaje</label>
            <textarea name=""></textarea>
          </p>
          <p class="acciones">
            <input type="submit" value="Enviar" />
          </p>
        </fomr>
      </div>

      <div clas="datos">
        <h2>Otras vias de comunicacion</h2>
        <p>
          Tambien puedes comunirte con nosotros usando los siguientes medios
        </p>
        <ul>
          <li>Telefono: 4301541</li>
          <li>Email: contac@gmail.com</li>
          <li>Instagram:  </li>
          <li>Facebook: </li>
        </ul>
      </div>
    </main>
  );
};
export default Contacto;
