import React from 'react';
import Container from '../container/Container';
import CustomerTickets from './CustomerTickets';
import TaskStatus from './TaskStatus';

const MainSection = () => {
    return (
        <>
        <Container>
            <div className='grid gap-5 grid-cols-12 py-10 '>
            <CustomerTickets></CustomerTickets>
            <TaskStatus></TaskStatus>
            </div>
        </Container>
        </>
    );
};

export default MainSection;