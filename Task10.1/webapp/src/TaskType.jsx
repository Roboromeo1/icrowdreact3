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



