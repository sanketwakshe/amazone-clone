import "./Ticket.css";
import TicketNum from "./TicketNum";
export default function Ticket({ticket}){
    return(
        <div class="Ticket">
            <p>Ticket</p>
            {
                ticket.map((num,idx)=>(
                    <TicketNum num={num}key={idx}/>
                ))
            }
        </div>
    )
}