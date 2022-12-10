import React, {useState} from "react";
import "./search.css";
// import searchImg from "./img/magnifying-glass-solid.svg";
// import closeImg from "./img/circle-xmark-regular.svg";

import {ReactComponent as SearchImg} from "./img/magnifying-glass-solid.svg";
import {ReactComponent as CloseImg} from "./img/circle-xmark-regular.svg";
// реактКомпонент импортирует тег как компонент 
export default ({data}) =>{
    const [text, updateText] = useState("") // если внутри текст, то появляется закрывающая свг, если внутри пусто, то лупа
   const [searchData, setSearchData] = useState(data.filter(el => el.name.toLowerCase().includes(text.toLowerCase())));
   
    const clearSearch = () => {
    updateText(""); 
    setSearchData(data);
   }   
   
   const search = (e) =>{
    updateText(e.target.value);
    let arr = data.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()))
    setSearchData(arr);
    console.log(arr);
   }
   return <div className="search-block">
<input placeholder="Поиск..." value={text} onChange={search}/>
{/* e.target - это сам тег input, value - новое значение атрибута, которое передается в компоненте текст */}
{/* в нашем случае, типо когда вводим, то появляется крестик, а когда инпут пуст, то там лупа */}

{/* <button>{text ? <img src={closeImg}/> : <img src={searchImg}/>}</button> это как сперва делал когда импорт был вверху, ну он закоменчен*/}

<button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg/>}</button>
{/* при клике на CloseImg сработает функция clearSearch, которая меняет текст на пустоту */}
   
   {text && <div className="search-result">
    по запросу <b>{text}</b> &nbsp;
    {searchData.length > 0 ? 'найдено ' + searchData.length +' товаров' : "Не найдено ни одного товара"}
   
    </div>}
    </div>
    
}