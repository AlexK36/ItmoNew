import Header from "../header/Header"
import "./app.css"
import News from "../news/News"
import CComponent from "../../newsComponents/CComponent"

function App(){
    return(
        <div className="app">
            <Header/>
            <News/>
            <CComponent/>
        </div>
    )
}

export default App