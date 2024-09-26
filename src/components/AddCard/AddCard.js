import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// import credit_card_img from '../../Images/credit_card_img.png';
// import dialog_box_img from '../../Images/success_dialog_box_img.png';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import style from '../AddCard/AddCard.module.css'

function AddCard() {
  const [state, setState] = useState('form'); // Initial state: 'form', 'success', 'history'
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [cardHolderName, setCardHolderName] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [errors, setErrors] = useState({});

  // const location = useLocation();
  // const plan = location.state;

  const validateInputs = () => {
    let errors = {};

    if (!cardName) {
      errors.cardName = 'Please enter card number.';
    }

    if (
      !expiryDate ||
      !/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(expiryDate)
    ) {
      errors.expiryDate = 'Please enter a valid expiry date (MM/YY).';
    }

    if (!cvv || cvv.length !== 3 || isNaN(cvv)) {
      errors.cvv = 'Please enter a valid 3-digit CVV.';
    }

    if (!cardHolderName || cardHolderName.length < 3) {
      errors.cardHolderName = 'Please enter cardholder name.';
    }

    return errors;
  };

  const handleAddCard = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length === 0) {
      setState('success');
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCloseDialog = () => {
    setState('history');
  };

  return (
    <div>
      {state === 'form' && (
        <section>
          <h2 className="text-center py-4 shadow-sm">Add Card</h2>
          <Container>
            <Row>
              <Col>
                <div className="px-5">
                  <h2>Selected Plan</h2>
                  <p>
                    <strong>Duration:</strong> 
                  </p>
                  <p>
                    <strong>Price:</strong> 
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} className='  d-flex align-items-center '>
                <div className={`${style.add_card}     `}>
                  <form>
                    <div className="px-5">
                      <label>Card Name</label>
                      <input
                        type="text"
                        placeholder="Card Number"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                      />
                      {errors.cardName && (
                        <p className={style.error_message}>{errors.cardName}</p>
                      )}
                      <Row className="  py-4">
                        <Col md={6}>
                          <label>Expiry Date</label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                          />
                          {errors.expiryDate && (
                            <p className={style.error_message}>{errors.expiryDate}</p>
                          )}
                        </Col>
                        <Col md={6}>
                          <label>CVV</label>
                          <input
                            type="text"
                            placeholder="CVV"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                          />
                          {errors.cvv && (
                            <p className={style.error_message}>{errors.cvv}</p>
                          )}
                        </Col>
                      </Row>
                      <div>
                        <label>Card Holder Name</label>
                        <input
                          type="text"
                          placeholder="Card Holder Name"
                          value={cardHolderName}
                          onChange={(e) => setCardHolderName(e.target.value)}
                        />
                        {errors.cardHolderName && (
                          <p className={style.error_message}>
                            {errors.cardHolderName}
                          </p>
                        )}
                      </div>
                      <div className="pt-4">
                        <input
                          type="checkbox"
                          checked={saveCard}
                          onChange={(e) => setSaveCard(e.target.checked)}
                        />
                        <label className="px-2">Save Card</label>
                      </div>
                    </div>
                    <div className={`${style.add_card_btn} my-5 text-center`}>
                      <button className={style.add_btn} onClick={handleAddCard}>
                        Add
                      </button>
                    </div>
                  </form>
                </div>
               
              </Col>
              <Col md={6}>
                <div className={style.add_card_img}>
                  <img src={''} alt="Credit Card" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      )}

      {state === 'success' && (
        <div className={style.dialog_overlay}>
          <div className={style.dialog_box}>
            <div className={style.dialog_content}>
              <div className={style.dialog_icon}>
                <img src={''} alt="Success" />
              </div>
              <p>Payment Successful</p>
            </div>
            <button className={style.dialog_close_button} onClick={handleCloseDialog}>
              Close
            </button>
          </div>
        </div>
      )}

      {state === 'history' && <TransactionHistory />}
    </div>
  );
}

export default AddCard;

 