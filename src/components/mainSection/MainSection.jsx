import React from 'react';
import Container from '../container/Container';
import CustomerTickets from './CustomerTickets';
import TaskStatus from './TaskStatus';

const MainSection = () => {
    return (
        <section>
            <Container>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-12'>
                <CustomerTickets></CustomerTickets>
                <TaskStatus></TaskStatus>
                </div>
            </Container>
        </section>
    );
};

export default MainSection;