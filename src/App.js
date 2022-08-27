import Scott from "./1.components/1.function/Greet";
import { GreetOne as Adam } from "./1.components/1.function/GreetOne";
import { GreetThree } from "./1.components/1.function/GreetThree";
// import {GreetTwo, Hello} from "./1.components/1.function/GreetTwo";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import GreetingTwo from "./3.props/GreetingTwo";


function App() {
  function getMessage(){
    return "Here is your message"
  }
  return (
    <div className="container">
      <GreetingOne id={1001}
                   name="Scott"
                   isAdmin={true}
                   department={null}
                   grade={undefined}
                   address ={{city: "Boston", country: "USA"}}
                   getMessage={getMessage}
                   getData={function(){return "Here is your data"}}
                   getInfo={() => "Welcome to props"}
                   subjects={["ReactJS", "Angular", "NodeJS"]}

      />
      <br /><br />
      <GreetingTwo id={1001}
                   name="Scott"
                   isAdmin={true}
                   department={null}
                   grade={undefined}
                   address ={{city: "Boston", country: "USA"}}
                   getMessage={getMessage}
                   getData={function(){return "Here is your data"}}
                   getInfo={() => "Welcome to props"}
                   subjects={["ReactJS", "Angular", "NodeJS"]}

      />
      {/* <Greeting name="Scott" skill="ReactJS" /> */}
      {/* <Greeting name="Adam" skill="Angular"/>
      <Greeting name="Tuan" skill="NodeJS"/> */}
      {/* <Hello /> */}
      {/* <Scott />
      <Adam />
      <GreetTwo />
      <GreetThree />
      <Hello />
      <Welcome />
      <WelcomeOne /> */}
    </div>
  );
}

export default App;
