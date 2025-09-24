import React from 'react';

const CustomerTickets = () => {
    return (
        <div className='col-span-12 md:col-span-9 h-100 border-2 border-amber-100'>
            <h2 className='mb-3 font-semibold text-2xl text-[#34485A]'>Task Status</h2>
            <div id='customer-tickets-container'>
                <div className="customer-tickets-card">
                    <div className="card card-dash bg-base-100 w-96">
                        <div className="card-body">
                            <h2 className="card-title">Card Title</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerTickets;