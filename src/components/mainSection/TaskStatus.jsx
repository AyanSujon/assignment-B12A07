import React from 'react';

const TaskStatus = () => {
    return (
        <div className=' col-span-12 md:col-span-3 '>
            <div className='task-status-container'>
                <h2 className='mb-3 font-semibold text-2xl text-[#34485A]'>Task Status</h2>
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
            {/* Resolved Task */}
                <div className='resolved-task-container'>
                <h2 className='mb-3 font-semibold text-2xl text-[#34485A]'>Resolved Task</h2>
                <div id='resolved-task-card' className="space-y-3">
                    <p className='text-[#627382]'>No resolved tasks yet.</p>
                    <div class="card bg-[#E0E7FF] card-xs shadow-sm">
                    <div class="card-body">
                        <h2 class="card-title">Incorrect Billing Address</h2>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskStatus;