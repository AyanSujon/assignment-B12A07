import React from 'react';
import TicketCard from './TicketCard';
// import TicketData from "./customerTicketsData";

const CustomerTickets = () => {



// const TicketCard Data = 


    return (
        <div className='col-span-12 md:col-span-9 '>
            <h2 className='mb-3 font-semibold text-2xl text-[#34485A]'>Customer Tickets</h2>
            <div id='customer-tickets-container-wraper'>
                <div id='customer-tickets-container' className="customer-tickets-card grid grid-cols-12 gap-5">
                    {/* card */}
                    {
                        <TicketCard></TicketCard>
                    }
                    {
                        <TicketCard></TicketCard>
                    }
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;