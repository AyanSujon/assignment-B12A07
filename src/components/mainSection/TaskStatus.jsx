import React from 'react';

const TaskStatus = () => {
    return (
        <div className=' col-span-12 md:col-span-3  h-100 border-2 border-red-100'>
            <div>
                <h1 className='mb-3 font-semibold text-2xl text-[#34485A]'>Task Status</h1>
                <div id='task-status-card' className="space-y-3">
                    <p className='text-[#627382]'>Select a ticket to add to Task Status</p>
                    <div class="card bg-base-100 card-xs shadow-sm">
                    <div class="card-body">
                        <h2 class="card-title">Payment Failed - Card Declined</h2>
                        <div class="justify-end card-actions">
                        <button className="btn w-full bg-[#02A53B] text-white">Complete</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TaskStatus;