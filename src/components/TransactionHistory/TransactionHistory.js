import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import style from './TransactionHistory.module.css'

function TransactionHistory() {

//   const [filter, setFilter] = useState();

  const transactionsDetails = [ 
      {
          date: '19 jul 2024',
          payment: '150 $',
          type: 'Credited',   
      },
      {
        date: '19 jul 2024',
        payment: '500 $',
        type: 'Debited',   
    },
    {
        date: '19 jul 2024',
        payment: '150 $',
        type: 'Credited',   
    },
    {
        date: '19 jul 2024',
        payment: '500 $',
        type: 'Debited',   
    },
    {
        date: '19 jul 2024',
        payment: '150 $',
        type: 'Credited',   
    },
    {
        date: '19 jul 2024',
        payment: '500 $',
        type: 'Debited',   
    },
    ]
  return (
    <div>
        <section>
            <h2 className='text-center py-4 shadow-sm'>Transaction History</h2>
            <Container>
                <Row className='  mt-5'>
                    
                    <Col className='col-md-6'>
                    <div>
                        <h2>Transactions</h2>
                    </div>
                    {transactionsDetails.map((request, index) => ( 

                        <div >
                            
                            <div className={`${style.transaction_details} px-5 py-2 my-5 rounded border d-flex justify-content-between text-align-center`}>
                                <p>{request.date}</p>
                                <div className=''>
                                    
                                    {request.type === 'Credited' && <span className="text-success">{request.payment} </span>}
                                    {request.type === 'Debited' && <span className="text-danger">{request.payment} </span>}
                                    <br/><span className=" ">{request.type} </span>

                                </div>
                            </div>
                        </div>
                    ))}
                    </Col>


                </Row>
            </Container>
        </section>
    </div>
  )
}

export default TransactionHistory