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

