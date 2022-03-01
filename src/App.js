
import './App.css';
import { useState , useEffect } from 'react';
import {Button , InputLabel , Input , FormControl} from '@material-ui/core'
import {Message} from './Message'
import db from './firebase';
//import firebase from 'firebase'
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from '@material-ui/core';

function App() {

const [input , setInput] = useState('')
const [msg, setMsg] = useState([]);  // {username: 'abhi' , message:'hey bro'},{username: 'shubham' , message:'whatsup there'}


const [username , setUsername] = useState('')


useEffect(()=>{
// run once
db.collection('messages')
.orderBy('timestamp' , 'desc')  // for sortring in dec order of timestamp
.onSnapshot(snapshot=>{
  setMsg(snapshot.docs.map(doc => ({id:doc.id, message:doc.data()}) ))
})
  

} , [])




useEffect(()=>{

  setUsername(prompt('Please enter your name'))

} , [])

//console.log(input)
//console.log(msg)

const sendMessage = (e) => {
 
  e.preventDefault();  // since i used form so  to stop the refresh I need it
 // setMsg([...msg, {username:username , message: input} ]);
 
 db.collection('messages').add({
   message: input,
   username: username,
   timestamp: firebase.firestore.FieldValue.serverTimestamp()
 })

  setInput('')
  
  
}


  return (
    <div className="App">
    <img className='logo_fb' src='https://cdn-icons-png.flaticon.com/512/3814/3814521.png'   /> 
     <h1>fake facebook msg</h1>
     <h1>Welcome {username}</h1>

    <form className='app_form'>
    <FormControl className='app_formControl'>
   
    <Input className='app_input' placeholder='Enter a message...'  value={input} onChange={e => setInput(e.target.value) } />
    <IconButton className='app_iconButton' disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage} />  
    <SendIcon />
    </FormControl>
    </form>
    
    <FlipMove>
    {
      msg.map(({id , message}) =>(
        
        <Message key={id} username={username} text={message} />
      ))
    }
    
    </FlipMove>

     
     
    </div>
  );
}

export default App;
