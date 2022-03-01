import {Card , CardContent ,Typography } from '@material-ui/core'
import { forwardRef } from 'react'
import './Message.css'

export const Message= forwardRef(({text , username} , ref )=>{

 const isUser = username === text.username

    return (
        <div ref={ref} className={`msg_card ${isUser && 'msg_user'}`}> {/* if its you the user then use this class */}
         <Card className={isUser? 'msg_userCard': "msg_guestCard"}>  
         <CardContent>
           <Typography
            color="white"
            variant="h5"
            component="h2"
          >
       {!isUser && `${text.username}:`}{text.message}
           </Typography>
        
        </CardContent>
    </Card>


        
        </div>
    )
})