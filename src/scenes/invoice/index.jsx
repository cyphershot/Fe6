import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Invoice() {
  return (
    <div className="container">
      <div className="invoice">
        <header>
          <section>
            <h1>Invoice</h1>
            <span>06/06/2023</span> <br />
            <span>Name: Noeal Thomas</span> <br />
            <span>Company Name: Cyphershot</span>
          </section>
          <section>
            <span>89 289</span>
          </section>
        </header>

        <main>
          <section>
            <span>Description</span>
            <span>Quantity</span>
            <span>Amount</span>
          </section>

          <section>
            <figure>
              <span>
                <strong>Materials</strong> (large)
              </span>
              <span>1</span>
              <span>2.90</span>
            </figure>

            <figure>
              <span>
                <strong>Materials</strong> (small)
              </span>
              <span>2</span>
              <span>7.00</span>
            </figure>
          </section>

          <section>
            <span>Total</span>
            <span>9.90</span>
          </section>
        </main>

        <footer>
          <Link to="/edit">Upload</Link>
          <a href="#0">Cancel</a>
        </footer>
      </div>
    </div>
  );
}

export default Invoice;
