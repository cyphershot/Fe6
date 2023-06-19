import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css';
import { addData } from '../../components/contexts/ContextShare';
import { getallusers, viewUser } from '../../Services/allApi';

function Invoice() {
  const { id } = useParams();
  const [userDetail, setUserDetail] = useState({});
  const { useradd, setUserAdd } = useContext(addData);

  const userDetails = async () => {
    const userData = await viewUser(id);
    setUserDetail(userData.data);
  }

  useEffect(() => {
    userDetails();
  }, []);

  const [userdata, setUserdata] = useState([]);

  const getalluserData = async () => {
    try {
      const response = await getallusers();
      if (response.status === 200) {
        const updatedData = response.data.map((user, index) => ({
          ...user,
          id: index + 1, // Assigning a unique id to each user
        }));
        setUserdata(updatedData);
      } else {
        console.log('Cannot fetch data!!!');
      }
    } catch (error) {
      console.log('Error while fetching data:', error);
    }
  }

  useEffect(() => {
    getalluserData();
  }, []);

  return (
    <div className="container">
      <div className="invoice">
        <header>
          <section>
            <h1>Invoice</h1>
            <span>Email: {userDetail.email}</span> <br />
            <span>Name: {userDetail.customerName}</span> <br />
            <span>Company Name: {userDetail.companyName}</span>
          </section>
          <section>
            <span>GST: {userDetail.GSTNumber}</span>
          </section>
        </header>

        <main>
          <section>
            <span>Service Name</span>
            <span>Quantity</span>
            <span>Amount</span>
          </section>

          <section>
            <figure>
              <span>
                <strong>{userDetail.requireService}</strong>
              </span>
              <span>{userDetail.qty}</span>
              <span>{userDetail.orderValue}</span>
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
            <span>{userDetail.orderValue}</span>
          </section>
        </main>

        <footer>
          <Link to={`/edit/${id}`}>edit/Upload</Link>
          <a href="#0">Cancel</a>
        </footer>
      </div>
    </div>
  );
}

export default Invoice;
