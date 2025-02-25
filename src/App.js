import CardList from './components/CardList';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import SkillList from './components/SkillList';
import"./App.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHVxGjmGq-dLs7Z7Uz4MJdIfGHMG5kgBU",
  authDomain: "leomendoza-a96ea.firebaseapp.com",
  projectId: "leomendoza-a96ea",
  storageBucket: "leomendoza-a96ea.firebasestorage.app",
  messagingSenderId: "1087594751372",
  appId: "1:1087594751372:web:6a7f43c5fc2684bb0fe2a9",
  measurementId: "G-ZDPF92YBCE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <br id='habilidades'></br>
      <br />
      <SkillList></SkillList>
      <br id='proyectos'></br>
      <br/>
      <CardList></CardList>
    </div>
  );
}
/* firebase deploy --only hosting:leomendoza */
export default App;
