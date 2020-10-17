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
