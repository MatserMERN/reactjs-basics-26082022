import Scott from "./1.components/1.function/Greet";
import { GreetOne as Adam } from "./1.components/1.function/GreetOne";
import { GreetThree } from "./1.components/1.function/GreetThree";
// import {GreetTwo, Hello} from "./1.components/1.function/GreetTwo";
import Welcome from "./1.components/2.class/Welcome";
import { WelcomeOne } from "./1.components/2.class/WelcomeOne";
import UserAPI from "./10.ajax-calls/UserAPI";
import UserDetails from "./10.ajax-calls/UserDetails";
import Routing from "./11.Routing/Routing";
import ComponentOne from "./12.prop-drilling/use-context/ComponentOne";
import ContextOne from "./12.prop-drilling/use-context/ContextApi";
import WishOne from "./12.prop-drilling/WishOne";
import Hello from "./2.jsx/Hello";
import Greeting from "./3.props/Greeting";
import GreetingOne from "./3.props/GreetingOne";
import GreetingTwo from "./3.props/GreetingTwo";
import GreetValidate from "./3.props/GreetValidate";
import Counter from "./4.state/Counter";
import Message from "./4.state/Message";
import User from "./4.state/User";
import ClassClick from "./5.event-handling/ClassClick";
import EventBind from "./5.event-handling/EventBind";
import FunctionClick from "./5.event-handling/FunctionClick";
import Parent from "./5.event-handling/parent-child/Parent";
// import ClassCounter from "./6.higher-order-components/ClassCounter";
import HoverCounter from "./6.higher-order-components/HoverCounter";
import TestOne from "./6.higher-order-components/TestOne";
import TestTwo from "./6.higher-order-components/TestTwo";
import Controlled from "./7.controlled-uncontrolled/Controlled";
import UnControlled from "./7.controlled-uncontrolled/UnControlled";
import ClassCounter from "./8.hooks/ClassCounter";
import FunctionCounter from "./8.hooks/FunctionCounter";
import HooksWithArray from "./8.hooks/HooksWithArray";
import HookWithObject from "./8.hooks/HookWithObject";
import HookWithString from "./8.hooks/HookWithString";
import LifecycleA from "./9.life-cycle-methods/LifecycleA";
import ProductData from "./redux/components/ProductData";
import Products from "./redux/components/Products";
import UserData from "./redux/components/UserData";


function App() {
  function getMessage(){
    return "Here is your message"
  }
  return (
    <div className="container">
      <ProductData />
      <Products />
      {/* <UserData /> */}
      {/* <ComponentOne />
      <br />
      <ContextOne /> */}
      {/* <WishOne /> */}
      {/* <Routing /> */}
      {/* <UserDetails /> */}
      {/* <UserAPI /> */}
      {/* <LifecycleA /> */}
      {/* <HooksWithArray /> */}
      {/* <HookWithObject /> */}
      {/* <HookWithString /> */}
      {/* <FunctionCounter /> */}
      {/* <ClassCounter /> */}
      {/* <UnControlled /> */}
      {/* <Controlled /> */}
      {/* <ClassCounter />
      <br />
      <HoverCounter /> */}
      {/* <TestOne />
      <TestTwo /> */}
      {/* <Parent /> */}
      {/* <EventBind /> */}
      {/* <FunctionClick /> */}
      {/* <br />
      <ClassClick /> */}
      {/* <User /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <GreetValidate id={1}
                     name="Scott"
                     isAdmin={true}
                     department = {null}
                     grade={undefined}
                     status="Loading"
                     address={{ zipcode: 12345, city: "Boston", country: "USA"}}
                     getMessage={() => console.log("fat arrow function")}
                     subjects={["ReactJS", "Angular", "NodeJS"]}
                     codes={[1234, "ABC123", "CODE123"]}
      /> */}
      {/* <GreetingOne id={1001}
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

      /> */}
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
