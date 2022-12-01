/*import ClassComponent2 from './ClassComponent2'
function App(){
  return(
    <section>
      <p>hello everyone</p>
      <h1>This is h1 tag</h1>
     <img src="https://i.pinimg.com/736x/10/35/81/103581ad3841dd4d45df056695313e9e.jpg"width="30%"alt=""/>
     <ClassComponent2/>
    </section>
  
    )
}
export default App*/




//import PropsExample from './PropsExample'
//import FuncPropExample from './FuncPropExample'
import StateExample from "./StateExample"
function App(){
  return(
        <div>
       {/* <h1>This is about props example</h1>
      <PropsExample name="manasa" age="19"/>
        <PropsExample name="lalitha" age="20"/>
        <PropsExample name="ramya" age="20"/>*/}
       {/* <FuncPropExample framework="react" number="3"/>*/}
       <StateExample/>
        </div>
    )
}

export default App


