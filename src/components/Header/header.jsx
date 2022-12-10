import React, {useState} from "react"; //useState -это для того, чтоб динамично менялась шапка в зависимости от входа на сайт
import "./header.css";
import Search from "../Search/search";
export default ({user, setUser, products, setModalActive}) => {
    // хук состояния [свойство, функция в качестве аргумента которой передается новое значение нашего свойства] = useState(аргумент - изначальное значение свойств)
  //  const [user, setUser] = useState(localStorage.getItem("user8"));

    const logIn = (e) => {
        e.preventDefault();
        // let name = prompt("Как вас зовут?");
        // if (name) {
        //     localStorage.setItem("user8", name);
        //     setUser(name);
        // }
        setModalActive(true);
        setModalActive(prev => !prev);// - callback-функция, возвращающая противоположное значение, аналогично выше
    }
    //let user = localStorage.getItem("user8")
    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("user8");
        setUser("");
    }
    return <header>
<a className="logo" href="">DogFood</a>
<Search data={products}/>
{/* <input type="search" placeholder="Поиск" className="search"/> */}
<nav className="menu">
    {user && <a href="">{user}</a>}
    {!user && <a href="" onClick ={logIn}>Войти</a>}
    {user && <a href="" onClick ={logOut}> Выйти</a>}
</nav>

    </header>
}