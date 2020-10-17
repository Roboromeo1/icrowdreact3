TaskType.jsx
import React from 'react';
import './TaskType.css';
import {Menu} from 'semantic-ui-react'

function TaskType(props) {

    return (
        <div>
            <Menu borderless inverted color='green' > 
            <Menu.Item   >New Requester Task</Menu.Item >  
            <Menu.Item   >Worker Task</Menu.Item >  
            </Menu>
            <label class='name'>Select Task Type: </label>
            <input type="radio"  class='task' checked={props.checkChoiceTask} onChange={props.changeChoiceTask}  />
            <label class='name' >Choice Task</label>
            <input type="radio" class='task' checked={props.checkDecisionTask} onChange={props.changeDecisionTask} />
            <label class='name'>Decision-Making Task</label>
            <input type="radio"  class='task' checked={props.checkSentenceTask} onChange={props.changeSentenceTask} />
            <label class='name'>Sentence-Level Task</label>
        </div>
    )


}

export default TaskType

TaskType.css
.task{
    margin-right:20px;
    margin-left:150px;
    margin-bottom:20px;

    
}
.name{
    font-weight: bold;
    
}
.header

{
    display:flex;
    margin-left: 50px;
}

Submitbutton.jsx
import React from 'react'
import { Button} from 'semantic-ui-react'

function SubmitButton (props)
 { 
        return (
                <div >
            <Button  color='black' style={{width:'250px',height:'50px',marginLeft:'1000px' }} onClick={props.Submit}>Submit</Button>
            </div>
        )
}
export default SubmitButton
Sentence.jsx
import React from 'react'


function Sentence () 
{
        return (
            <div>
            <h4>Setting up for Sentence-Level Task</h4>
           <h4>Writing Skill</h4>
           <h4>Acedemic Skill</h4>
           <h4>High learning Skill</h4>
           </div>
        )
}
export default Sentence

Requirement.jsx
import React from 'react'
import { Menu } from 'semantic-ui-react'
import './Requirement.css';

function Requirement(props) {
    return (
        <div>
            <Menu borderless inverted color='green' > 
         
            <Menu.Item   >Worker Requirement</Menu.Item >  
            </Menu>
            
            <label class='name'>Require Master Workers: </label>
            <input type="radio"  class='task' checked={props.yesCheck} onChange={props.yesChange} value="yes" />
            <label class='name' >Yes</label>
            <input type="radio" class='task'  checked={props.noCheck} onChange={props.noChange} value="no"/>
            <label class='name'>No</label><br></br>
            <label class='name'>Reward per response</label>
            <input type="text"  class='reward'  onChange={props.rewardChange} /> <br></br>
            <label class='name' >Number of workers</label>
            <input type="text" class='number' checked={props.decisionCheck} onChange={props.numberChange} /><br></br>
        </div>




    )
}

export default Requirement

Requirement.css
input[type=text], select {
    width: 20%;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 8px 10px;
  
  
    
  }
  .task{
    margin-right:20px;
    margin-left:50px;
    margin-bottom:20px;

    
}
.reward
{
    margin-left:45px;
    margin-bottom:20px;
}
.number
{
    margin-left:55px;
    margin-bottom:20px;

}
index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

index.css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
Describe.jsx
import React from 'react'
import {Menu} from 'semantic-ui-react'
import './Describe.css';

function Describe (props)
{
        return (
            <div >
            <Menu borderless inverted color='green' > 
            <Menu.Item   >Describe your Task to Workers</Menu.Item >  
            </Menu>
            <label class='name'>Title</label>
            <input type="text"  class='title'  onChange={props.changeTitleTask} /> <br></br>
            <label class='name' >Description</label>
            <input type="text" class='description' onChange={props.changeDescriptionTask} /><br></br>
            <label class='name'>Expirty Date</label>
            <input type="text"  class='describe' onChange={props.changeExpiryTask} /> <br></br>
            <Menu borderless inverted color='green' > 
            <Menu.Item   >Setting up your task</Menu.Item >  
            </Menu>
            </div>




        )
}

export default Describe

Describe.css
.describe
{
    margin-right:20px;
    margin-left:50px;
    margin-bottom:20px;
}
.title
{
    margin-left:98px;
    margin-bottom:20px;
}
.description
{
    margin-left:55px;
    margin-bottom:20px;

}
input[type=text], select {
    width: 20%;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 8px 10px;
  
  
    
  }
Decision.jsx
import React from 'react'



function Decision  ()
{

        return (
            <div>
           <h4>Setting up for Decision Task</h4>
           <h4>You must have high responsibility</h4>
           <h4>A Degree</h4>
           <h4>Team leader skill</h4>

           

            </div>
        )
}

export default Decision
Choice.jsx
import React from 'react'


function Choice ()
{
        return (
            <div>
           <h4>This is the set up for choice task</h4>
           <h4>1/ You need know how to make right choice</h4>
           <h4>2/ You need to pick a right person for this task</h4>
           <h4>3/ You must have high responsibility</h4>


            </div>
            
              
        )
}

export default Choice;

App.js
import React,{useState} from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import TaskType from './TaskType'
import Choice from './Choice.jsx'
import Sentence from './Sentence'
import Describe from './Describe'
import Requirement from './Requirement'
import SubmitButton from './SubmitButton'
import Decision from './Decision'

function App() {
  const[render, settingUpTask] =useState(<Choice />)
  const [Type, setType] = useState('Choice')
  const [TitleOfTask, setTitle] =useState("")
  const [DescriptionOfTask, setDescription] = useState("")
  const [DateExpiryTask, setDate] = useState("")
  const [Master, setMaster] = useState("")
  const [RewardOfTask, setReward] = useState("")
  const [NumberOfWorkers, setNumber]= useState("")
  function Submit(){

    fetch('http://localhost:8000/', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body : JSON.stringify({

        Type: Type,
        TitleOfTask: TitleOfTask,
        DescriptionOfTask: DescriptionOfTask,
        DateExpiryTask: DateExpiryTask,
        Master: Master ,
        RewardOfTask: RewardOfTask,
        NumberOfWorkers: NumberOfWorkers 
      })
      })
      .then(response => {
        response.json()})
      .then(data => console.log(data))
      .catch(err => {
      console.log("Error:" + err)
    })
}
  return (
    <div className = 'App' >
 
      <TaskType
      changeChoiceTask={TaskChoice} 
      checkChoiceTask = {Type ==="Choice"}
      changeDecisionTask={TaskDecision}
      checkDecisionTask = {Type ==="Decision"}
      changeSentenceTask={TaskSentence}
      checkSentenceTask = {Type ==="Sentence"}
      ></TaskType>
      
      <Describe
      changeTitleTask ={Title}
      changeDescriptionTask = {Description}
      changeExpiryTask = {ExpiryDate}
      ></Describe>
      <div>{render}</div>
      
      <Requirement
      yesChange ={MasterChoice}
      yesCheck = {Master === "yes"}
      noChange ={MasterChoice}
      noCheck = {Master === "no"}
      rewardChange ={Reward}
      numberChange ={Number}></Requirement>
      <SubmitButton Submit={Submit} />

    </div>
  );
  
  function TaskChoice(){
    settingUpTask(<Choice />)
    setType("Choice")
    }
  function TaskDecision(){
    settingUpTask(<Decision />)
    setType("Decision")
    }
    function TaskSentence(){
      settingUpTask(<Sentence />)
      setType("Sentence")
    }
    function Title(task){
      setTitle(task.target.value)
     
    }
    function Description(task){
      setDescription(task.target.value)
    }
    function ExpiryDate(task){
      setDate(task.target.value)
    }
    function MasterChoice(task){
      setMaster(task.target.value)
    }
    function Reward(task){
      setReward(task.target.value)
    }
    function Number(task){
      setNumber(task.target.value)
    }
    

}

export default App;
App.css
.App {
  
  background-color: rgb(100, 196, 209) ; 
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

