import React, { useState, useEffect } from "react";
import axios from "axios";

const EmailList = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:8000/data/email/list");
    setData(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div>
      <h1 className="text-center my-5">Users Data</h1>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">S No.</th>
                  <th scope="col">Emails</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => {
                  return (
                    <tr key={item.id}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
