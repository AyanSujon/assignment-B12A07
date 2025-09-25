import React from 'react';
import cardCalander from "../../assets/ri_calendar-line.png"
const TicketCard = () => {
    return (
                    <div className="card bg-base-100 col-span-12 md:col-span-6">
                        <div className="card-body">
                            <div className='flex justify-between items-center'>
                                <h2 className="title card-title text-lg">Login Issues - Can't Access Account</h2>
                                <div className="card-status badge badge-soft badge-success"> <span className='card-status-circle w-4 h-4 rounded-full bg-success'></span>Open</div>
                            </div>
                            <p className='description text-sm'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                            
                            <div className=" text-[12px] md:text-[9px] lg:text-sm flex justify-between items-center">
                            <div className='flex gap-2 items-center text-[#F83044]'>
                                <span className='card-id text-[#627382]'>#1001</span>
                                <span className='card-priority uppercase '>HIGH PRIORITY</span>
                            </div>
                            <div className='flex gap-2 items-center' >
                                <span className='customer text-[#627382]'>John Smith</span>
                                <div className='flex justify-between items-center gap-1 text-[#627382]'><span><img className='w-4' src={cardCalander} alt="Card Calander" /></span><span className='createdAt'>1/15/2024</span></div>
                            </div>

                            </div>
                        </div>
                    </div>
                    
    );
};

export default TicketCard;