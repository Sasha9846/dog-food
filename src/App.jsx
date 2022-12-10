import React, {useState} from "react"; //useState -это для того, чтоб динамично менялась шапка в зависимости от входа на сайт
import "./style.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
// import Card from "./components/Card"; // если файл в папке называется index, то его сразу найдет
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import products from "./assets/data.json" // файлу json не нужен экспорт
// import Search from "./components/Search/search";
import Modal from "./components/Modal"; // если файл внутри папки называется index, то можно писать кратко как здесь


const smiles = ["^_^", "=)", "O_o", "@_@", "-_-", ";(", ";)"]


const App = () => {
   //let user = localStorage.getItem("user8") //Объекты веб-хранилища localStorage и sessionStorage позволяют хранить пары ключ/значение в браузере.
   const [user, setUser] = useState(localStorage.getItem("user8"));
   const [modalActive, setModalActive] = useState(true);
   return <>
   <div className = "container">
    {/* передаю пропсу шапки сайта значение, которое передается результатом пропса */}
        <Header
         user={user}
         setUser={setUser}
         products={products}
         setModalActive={setModalActive}
        /> 
        <main>
            {user ? <Catalog data = {products}/> : 
            <Home data = {smiles}/>}
        </main>
    <Footer/>
    </div>
    {/* isActive и setState - это параметры, которые работают внутри компонента Modal
    modalActive и  setModalActive -значения, которые сохраняются внутри праметров */}
    <Modal isActive={modalActive} setState={setModalActive}/>
    </>
}
export default App;