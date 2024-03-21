import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BasicInfo = ({ addBasicData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact) {
      alert("Все поля обязательны!");
    } else {
      addBasicData(name, email, contact);
      navigate("/questions");
    }
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card h-100">
            <div className="card-body my-3">
              <form onSubmit={submit}>
                <label htmlFor="" className="d-block">
                  <h4 className="text-center">Данные</h4>
                </label>
                <div className="form-group my-3">
                  <label htmlFor="">
                    <b>1.</b> Имя
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="form-control my-2"
                    placeholder="Введите имя"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group my-3">
                  <label htlmFor="">
                    <b>2.</b> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    className="form-control my-2"
                    placeholder="Введие email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">
                    <b>3.</b> Номер телефона
                  </label>
                  <input
                    type="tel"
                    name="contact"
                    value={contact}
                    onChange={(e) => {
                      setContact(e.target.value);
                    }}
                    className="form-control my-2"
                    placeholder="Введите номер телефона"
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success m-auto d-block"
                >
                  Далее
                </button>
              </form>
              <center>
                <span className="badge badge-pill bg-success">
                  <b>1</b>
                </span>
                <span className="badge rounded-pill disabled">2</span>
                <span className="badge rounded-pill disabled">3</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicInfo;
