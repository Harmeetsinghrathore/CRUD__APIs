import React from "react";
import "./Welcome.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faAngular, faAngellist } from "@fortawesome/free-brands-svg-icons";

export const Welcome = () => {
  function register() {
    let registration_popup = document.querySelector(".registration_popup");
    let main__registration__div = document.querySelector(
      ".main__registration__div"
    );
    registration_popup.classList.toggle("visible");
    main__registration__div.classList.toggle("scale1");
  }

  function register1() {
    let registration_popup2 = document.querySelector(".registration_popup2");
    let main__registration__div2 = document.querySelector(
      ".main__registration__div2"
    );
    registration_popup2.classList.toggle("visible");
    main__registration__div2.classList.toggle("scale1");
  }

  return (
    <>
      {/* <!----------------------- header section start ------------- --> */}
      <header>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 globa__width col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
              <div className="row">
                <div className="col-12 Wraper__ col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
                  <div className="header___top text-center">
                    <img
                      src="./img/Picture1.png"
                      alt="top logo image"
                      className="img-fluid"
                    />{" "}
                    <strong>BoloSai</strong>
                  </div>
                  <div className="signup__and__registration text-end">
                    <a onClick={register} href="#">
                      Signup
                    </a>{" "}
                    /
                    <a onClick={register} href="#">
                      Register
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!----------------------- header section end ------------- --> */}

      {/* <!-------------------------- after header title start ----------------------> */}

      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 globa__width col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
              <div className="row">
                <div className="col-12 Wraper__ text-center col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
                  <h2>Positive Sai Message</h2>
                  <p>Shraddha aur saburi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-------------------------- after header title end ----------------------> */}

      <section className="seclect_____">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 globa__width col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
              <div className="row">
                <div className="col-12 text-end col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
                  <div className="select__section">
                    <select>
                      <option value="">???????????? ???????????? ?????????</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????</option>
                      <option value="">????????????????????????????????????</option>
                      <option value="">???????????? ????????????????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">????????????</option>
                      <option value="">??????????????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">??????????????? (??????????????????)</option>
                      <option value="">??????????????????</option>
                      <option value="">????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">???????????????????????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">??????????????????????????????????????????</option>
                      <option value="">???????????? (??????????????????????????????)</option>
                      <option value="">???????????? (?????????????????????)</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">????????????????????????????????????</option>
                      <option value="">????????????</option>
                      <option value="">????????????</option>
                      <option value="">?????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">?????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">??????????????????????????????</option>
                      <option value="">?????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">???????????????????????????????????????</option>
                      <option value="">?????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">?????????</option>
                      <option value="">????????????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">?????????????????????????????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????? ???????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">??????????????????????????????</option>
                      <option value="">?????????????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">???????????????????????? ??????????????????</option>
                      <option value="">???????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">???????????????????????????</option>
                      <option value="">??????????????????</option>
                      <option value="">??????????????????</option>
                    </select>
                    <div className="mt-2">
                      <img
                        src="./img/googlelogo_color_42x16dp.png"
                        alt=""
                        className="img-fluid"
                      />
                      <span style={{ fontSize: "13px" }}> ?????????????????? ????????????????????????</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!------------------------- main header section start  ---------------> */}
      <section>
        <div className="row">
          <div className="container-fluid">
            <div className="col-12 globa__width col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
              <div className="row">
                <div className="col-12 text-center col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
                  <div className="main___body">
                      <button onClick={register} style={{fontSize : '20px', padding : "5px", borderRadius : '6px', color : '#cd853f ', position: "absolute", bottom: 0, right: "-90px", border: 'none'}} > Next </button>
                    <div className="top__img text-center">
                      <img
                        src="./img/Picture2.png"
                        alt="main-logo"
                        className="img-fluid"
                      />
                    </div>
                    <img
                      width="7%"
                      src="./img/message.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div className="sms___icon mb-4"></div>
                    <div className="details____body">
                      <p className="text-start">
                        Most writers regard the truth as their most valuable
                        possession, and therefore are most economical in its
                        use.
                      </p>
                    </div>
                    <span>Share it on</span>
                    <div className="footer___body__shear__icon d-flex justify-content-end align-items-center mt-4 mb-3 px-4">
                      <div className="icon__body">
                        <a className="ins__" href="#">
                        <FontAwesomeIcon icon={faInstagram} style={{fontSize : '20px', color : 'black'}}/>
                        </a>
                        <a className="face__" href="#">
                          <FontAwesomeIcon icon={faFacebook} style={{fontSize : '20px', color : 'black'}} />
                        </a>
                        <a className="twi__" href="#">
                        <FontAwesomeIcon icon={faTwitter} style={{fontSize : '20px', color : 'black'}} />
                        </a>
                      </div>
                    </div>

                    {/* <!-- shadow  --> */}
                    <div
                      onClick={() => console.log("Working")}
                      className="shape__1"
                    ></div>
                    <div onClick={register1} className="shape__2"></div>
                    <div className="shape__3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="registration_popup">
          <div
            style={{ position: "relative" }}
            className="main__registration__div px-5 py-4 text-center"
          >
            <span className="absolute__crose">
              <i onClick={register} className="fas fa-times"></i>
            </span>
            <div className="header__registraion text-center">
              <h4>Register</h4>
              <h3>Rs.499.00</h3>
              <p className="yearly">Yearly</p>
              <p className="membership">Membership changes</p>
              <p className="alredy">
                Already have an account <a href="#">Sign In</a>
              </p>
            </div>
            <div className="text-center ">
              <form className="text-start fonm___popup">
                <label>User name</label>
                <br />
                <span className="d-flex Password p-0 align-items-center justify-content-between">
                  <div className="dot_icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <input className="username1" type="text" />
                  <br />
                </span>
                <label>User name</label>
                <br />
                <span className="d-flex Password p-0 align-items-center justify-content-between">
                  <div className="dot_icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <input className="username2" type="text" />
                  <br />
                </span>
                <label>Password</label>
                <br />
                <span className="d-flex Password p-0 align-items-center justify-content-between">
                  <div className="dot_icon">
                    <i className="fas fa-ellipsis-h fa-ellipsis-h1"></i>
                    <br />
                    <i className="fas fa-ellipsis-h fa-ellipsis-h2"></i>
                  </div>
                  <input className="pass1" type="password" />
                  <br />
                </span>
                <label>Password</label>
                <br />
                <span className="d-flex p-0 Password align-items-center justify-content-between">
                  <div className="dot_icon">
                    <i className="fas fa-ellipsis-h fa-ellipsis-h1"></i>
                    <br />
                    <i className="fas fa-ellipsis-h fa-ellipsis-h2"></i>
                  </div>
                  <input className="pass2" type="password" />
                  <br />
                </span>
                <label>Password</label>
                <br />
                <span className="d-flex p-0 Password align-items-center justify-content-between">
                  <div className="dot_icon">
                    <i className="fas fa-ellipsis-h fa-ellipsis-h1"></i>
                    <br />
                    <i className="fas fa-ellipsis-h fa-ellipsis-h2"></i>
                  </div>
                  <input className="pass3" type="password" />
                  <br />
                </span>
                <br />
                <input className="submit__btn" type="submit" value="Register" />
              </form>
            </div>
          </div>
        </div>

        <div className="registration_popup2">
          <div
            style={{ position: "relative" }}
            className="main__registration__div2 px-5 py-4 text-center"
          >
            <span className="absolute__crose">
              <i onClick={register} className="fas fa-times"></i>
            </span>
            <div className="header__registraion header__registraion2 text-center">
              <h1>Login</h1>
              <p className="alredy">
                Welcome back! Don't have an account <a href="#">Sign Up</a>
              </p>
            </div>
            <div className="text-center ">
              <form className="text-start fonm___popup fonm___popup2">
                <label className="text-center">User name</label>
                <br />
                <span className="d-flex Password p-0 align-items-center justify-content-between">
                  <div className="dot_icon">
                    <i className="fas fa-user"></i>
                  </div>
                  <input className="userx" type="text" />
                  <br />
                </span>
                <label className="text-center">Password</label>
                <br />
                <span className="d-flex p-0 Password align-items-center justify-content-between">
                  <div className="dot_icon">
                    <i className="fas fa-ellipsis-h fa-ellipsis-h1"></i>
                    <br />
                    <i className="fas fa-ellipsis-h fa-ellipsis-h2"></i>
                  </div>
                  <input className="passx" type="password" />
                  <br />
                </span>
                <a
                  style={{
                    color: "#000",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                  href="#"
                >
                  Forgot Password
                </a>
                <br />
                <input
                  style={{ marginTop: "15px" }}
                  className="submit__btnx"
                  type="submit"
                  value="sign up"
                />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!------------------------- main header section end  --------------->  */}

      <section className="click__text">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 globa__width col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
              <div className="row">
                <div className="col-12 text-center col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
                  <div className="some__text___body__bottom mt-lg-2">
                    <span>Click any Message Cards here</span>
                    <hr />
                    <p>
                      Note: All the quotes here are referred from Shirdi Sai
                      Baba's sayings, books, movies and online contents, these
                      are inspired contents, we are showing Each quote loads
                      automatically every quote gives us a positive hope.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="id___">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 Footer___text col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
              <div className="row">
                <div className="col-12 text-center col-md-12 col-lg-12 col-xxl-12 col-xl-12 mx-auto">
                  <div className="text-end read___miracle">
                    <a href="#">Read Miracle Stories </a>
                  </div>
                  <div className="text___after__footer mt-5">
                    <div className="row d-flex justify-content-between align-items-center">
                      <div className="col-12 col-md-6 mx-auto">
                        <div className="left__siter__after mt-2">
                          <span>
                            <a href="#">
                              <i className="fab fa-facebook-f fb__"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-instagram ist__"></i>
                            </a>
                            <a href="#">
                              <i className="fab fa-twitter tw__"></i>
                            </a>
                          </span>
                          <span style={{ fontSize: "15px" }} className="px-3">
                            Follow BoloSai on Social Media
                          </span>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 mx-auto">
                        <div className="right__siter__after mt-2 d-flex align-items-center">
                          <img
                            src="./img/download.png"
                            alt=""
                            className="img-fluid"
                          />
                          <div className="id___profile">
                            <h6>You experienced Miracles?</h6>
                            <a href="#">Share it with Community</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="main___footer">
                    <p>
                      This website is completely dedicated to Shirdi Saibaba &
                      is meant to spread his message.. and to help everyone find
                      answers to their problems
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <a href="#">
                        {" "}
                        <img
                          width="20"
                          src="./img/logo.png"
                          alt=""
                          className="img-fluid"
                        />{" "}
                        By Organizein
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
