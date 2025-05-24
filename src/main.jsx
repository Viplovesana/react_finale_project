
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './store.jsx';
import { Provider } from 'react-redux';
import "react-toastify/dist/ReactToastify.css";


createRoot(document.getElementById('root')).render(

   <Provider store={store}>
     <App />
   </Provider>

)