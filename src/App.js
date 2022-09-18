import { useSelector } from "react-redux";
import Campagin from "./pages/Campaign";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
function App() {
    const {home, coaching, signUp } = useSelector(state => state.navigate);
        
  return (
    <div className="App">
      {home && <Home />} 
      {coaching && <Campagin />}
       {signUp && <SignUp />}
    </div>
  );
}

export default App;
