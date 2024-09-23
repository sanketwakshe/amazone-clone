import { useState } from "react";
import { getTicket, sum } from "./helper";
import Ticket from "./Ticket";

export default function Lottery(n=3,winningSum=15){
    let [ticket,setTicket] = useState(getTicket(n)); 
    
    let isWining =sum (ticket) ===winningSum;
    let buyTicket = () =>{
        setTicket(getTicket(n));

    }
    return(
        <div>
            <h1>Lottery Game</h1>
          <Ticket ticket={ticket}/>
          <button onClick={buyTicket}> Buy New Ticket</button>
                <h3>{isWining && "congratulation you on the ticket"}</h3>
        </div>
        
    );
}