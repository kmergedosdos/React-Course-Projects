const Item = () => {
   return (
      <div className="item">
         <h2 className="question">How would one say goodbye in Spanish?</h2>
         <ul className="choices">
            <li className="active">Adiós</li>
            <li>Hola</li>
            <li>Au Revoir</li>
            <li>Salir</li>
         </ul>
         <hr/>
      </div>
   );
}

export default Item;