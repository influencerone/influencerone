 
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import style from '../Earning/Earning.module.css'

const InfluencerEarning = () => {
    const earnings = [
        { name: 'Organizer', email: 'Organizer@gmail.com', date: 'Jan 26, 2024', amount: 300, status: 'Received' },
        { name: 'Organizer', email: 'Organizer@gmail.com', date: 'Jan 26, 2024', amount: 300, status: 'Received' },
        { name: 'Organizer', email: 'Organizer@gmail.com', date: 'Jan 26, 2024', amount: 300, status: 'Received' },
        { name: 'Organizer', email: 'Organizer@gmail.com', date: 'Jan 26, 2024', amount: 300, status: 'Received' },
        { name: 'Organizer', email: 'Organizer@gmail.com', date: 'Jan 26, 2024', amount: 300, status: 'Received' },
        { name: 'Organizer', email: 'Organizer@gmail.com', date: 'Jan 26, 2024', amount: 300, status: 'Received' },
        { name: 'Organizer', email: 'Organizer@gmail.com', date: 'Jan 26, 2024', amount: 300, status: 'Received' },
    ];


    // Calculate total earnings
    const totalEarnings = earnings.reduce((total, earning) => total + earning.amount, 0);

    return (
        <section>
            <div className="text-center py-4 shadow-sm">
                <h2>Total Earning</h2>
            </div>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4} className="my-4">
                        <div className={`${style.total_earnings} p-3 mb-4 `}>
                            <h4>Total Earnings</h4>
                            <h2 className="text-success text-center pt-2">${totalEarnings.toFixed(2)}</h2>
                            <p className="text-muted text-center pt-2">as of 01-December 2022</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <table striped bordered hover className="w-100">
                            <thead>
                                <tr>
                                    <th className="py-2">Name</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {earnings.map((earning, index) => (
                                    <tr key={index} style={{color: "#2C3E50"}}>
                                        <td className="py-3">
                                            {earning.name}<br />
                                            <small className="text-muted">{earning.email}</small>
                                        </td>
                                        <td>{earning.date}</td>
                                        <td>${earning.amount}</td>
                                        <td>{earning.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default InfluencerEarning;

