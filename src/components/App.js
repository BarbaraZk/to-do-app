import React from 'react';
import AddTask from "./AddTask";
import TaskList from './TaskList';
import "./App.css";
import {Container,Row,Col} from "react-bootstrap";


class App extends React.Component {
  counter =0
  state = { 
    tasks:[
      // {id:"", name:"", date:"", priority:"", active:"", finishDate:null}
    ]
   } 

   addTask=(text, prioritet, date)=>{
     const task = {id:this.counter, name:text, date:date, priority:prioritet, active:true, finishDate:null}

     this.counter++

     let tasks =[...this.state.tasks]
     tasks.push(task)
     this.setState({
       tasks
     })
     console.log(task)
     return true
  //  this.setState(prevState=>({
  //     tasks :[...prevState.tasks, task]
  //  }))
  //       return true
  //    }
   }

   deleteTask=(id)=>{
    //  const tasks =[...this.state.tasks]
    //  const index = tasks.indexOf(task=>task.id===id)
    //  tasks.splice(index,1)
    //  this.setState({
    //    tasks
    //  })

    let tasks = [...this.state.tasks]
    tasks= tasks.filter(task=>task.id!==id)
    this.setState({
      tasks
    })

   }

   changeStatus=(id)=>{
    //  let tasks =[...this.state.tasks]
    //  tasks.forEach(item=>{
    //    if(item.id===id){
    //      item.active=false;
    //      item.finishDate= new Date().getTime()
    //    }
    //  })
    //  this.setState({
    //    tasks
    //  })

    let tasks =[...this.state.tasks]
    tasks = tasks.map(item=>{
      if(item.id===id){
        item.active=false;
        item.finishDate = new Date().getTime()
      }
      return item
    })
    this.setState({
      tasks
    })

   }
   
  render() { 
    return (
      <Container className="App" fluid>
        <Row>
        <div className='title'>TO DO LIST</div>
        </Row>
        <Row>
          <Col>
          <AddTask add={this.addTask} className="AddTask"/>
          </Col>
        </Row>
        <Row>
          <Col>
          <TaskList tasks={this.state.tasks} delete={this.deleteTask} changeStatus={this.changeStatus}/>
          </Col>
        </Row>
            
      
     
      </Container>
    )
  }
}
 
export default App;

