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
  apiKey: "AIzaSyDJeM5yykBZPf-CZKimxylNdbOnB36mTtk",
  authDomain: "leomendoza-a96ea.firebaseapp.com",
  projectId: "leomendoza-a96ea",
  storageBucket: "leomendoza-a96ea.appspot.com",
  messagingSenderId: "1087594751372",
  appId: "1:1087594751372:web:3bff6411d6d601290fe2a9",
  measurementId: "G-882HPECHNC"
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
