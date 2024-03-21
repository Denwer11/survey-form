import React from "react";
import { useNavigate } from "react-router-dom";

const EnteredDetails = ({ data, questionData }) => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/thanks");
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body m-3">
              <h4>Введенные данные</h4>
              <p>
                <b>Имя:</b> {data.name}
              </p>
              <p>
                <b>Email:</b> {data.email}
              </p>
              <p>
                <b>Номер телефона:</b> {data.contact}
              </p>

              <h4>Ответы</h4>
              <p>
                <b>Профессия:</b> {questionData.profession}
              </p>
              <p>
                <b>Интересы:</b> {questionData.interest}
              </p>
              <p>
                <b>Соц. сеть / мессенджер:</b> {questionData.reference}
              </p>
            </div>
            <button type="submit" onClick={submit} className="btn btn-success">
              Отправить
            </button>
            <center>
              <span className="badge rounded-pill disabled">1</span>
              <span className="badge rounded-pill disabled">2</span>
              <span className="badge badge-pill bg-success">
                <b>3</b>
              </span>
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnteredDetails;
