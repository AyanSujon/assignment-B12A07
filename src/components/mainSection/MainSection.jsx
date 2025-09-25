import React, { Suspense } from 'react';
import Container from '../container/Container';
import CustomerTickets from './CustomerTickets';
import TaskStatus from './TaskStatus';




const MainSection = ({fetchPromise, onAddTask, tasks}) => {




    return (
        <>
        <Container>
            <div className='grid gap-5 grid-cols-12 py-10 '>
            <Suspense fallback={<div  className='grid col-span-12 md:col-span-9 justify-center items-center'><span className="loading loading-spinner loading-xl"></span></div>}>
                <CustomerTickets onAddTask={onAddTask} fetchPromise={fetchPromise}></CustomerTickets>
            </Suspense>
            <TaskStatus tasks={tasks}></TaskStatus>
            </div>
        </Container>
        </>
    );
};

export default MainSection;