import React, { useState } from "react";

const Body = () => {
  const [state, setState] = useState({
      rating:'',
    input: "",
    text: "",
  });
  const [newFlag,setNewFlag] = useState(false)
  const [flag,setflag] = useState(false)
  const changeHandler = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  const submitHandler = (e) => {
      e.preventDefault();
      if (state.input.length < 3) 
      {
        setflag(true)
        setNewFlag(false)
      }else if(state.input.length > 15){
          setNewFlag(true)
          setflag(false)

      }
    else{
        setflag(false)
        alert(state.input + ' ' + state.text + ' ' + state.rating)
        setNewFlag(false)
    }
  };
  return (
    <div>
      {/* navbar */}
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/docs/5.1/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Bootstrap
          </a>
        </div>
      </nav>

      {/* cards */}

      <div className="container">
          <div className="row">
          <div className="card col-4 mx-5 " style={{ width: "18rem" }}>
          <img src="../image/image1.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Review this product
            </button>
          </div>
        </div>

        <div className="card col-4 mx-5 "  style={{ width: "18rem" }}>
          <img src="../image/image2.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Review this product
            </button>
          </div>
        </div>

        <div className="card col-4 mx-5 " style={{ width: "18rem" }}>
          <img src="../image/image3.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@mdo"
            >
              Review this product
            </button>
          </div>
        </div>

          </div>
    
      </div>
      {/* modals */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New message
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form >
                <div className="mb-3">
                  <label htmlFor="rating" className="col-form-label">
                    rating:
                  </label>
                  <select  id="rating" name='rating' onChange={changeHandler}>
                    <option value="none" select disabled hidden>
                      Select an Option
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="input"
                    id="recipient-name"
                    onChange={changeHandler}
                    />
                    {
                    flag && <p style={{color:'red'}}>name must be greater than 2</p>
                    
                    }
                    {
                    newFlag && <p style={{color:'red'}}>name must be smaller than 15</p>
                    }
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Message:
                  </label>
                  <textarea
                    className="form-control"
                    name="text"
                    id="message-text"
                    onChange={changeHandler}
                  ></textarea>
                </div>
                {/* button */}
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                
                  <button type="submit" className="btn btn-primary" onClick={submitHandler}>
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
