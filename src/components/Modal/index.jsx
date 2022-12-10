import React from "react";
import "./style.css";
export default ({isActive, setState}) =>{
let style ={
    display: isActive && "flex",  
   // display: isActive ? "flex" : "none", равнозначные надписи, НО ТК В css ПРОПИСАН УЖЕ ДИСПЛЕЙ НОНЕ, ТО НАДПИСЬ ВЫШЕ ЛУЧШЕ
   // В App.jsx есть такая трока useState(true),в зависимости от нее будет тру или фалс  
}

    return <div className="modal-container" style={style}>
        <div className="modal">
            <div className="modal-close" onClick={()=> setState
            (false)}/> 
            {/* строка выше. т.е при наэатии на modal-close, выполняется функция, которая посредством
            setState меняет значение у modalActive (см файл App.jsx) */}
            <h2>Modal</h2>


        </div>
    </div>

}