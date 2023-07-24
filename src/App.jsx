import { AppRouter } from "./routers/app.router";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  
  return (
    <>
       <div className="page-container">
       <ToastContainer autoClose={3000} />
        <AppRouter/>
      </div>
    </>
  )
}

export default App