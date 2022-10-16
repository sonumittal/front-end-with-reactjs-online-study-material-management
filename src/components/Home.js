import React from 'react';
import {Link} from "react-router-dom";

export const Home = () => {
  return (
    <div>
       {/*--------- notice boeard and welcome content middle section -----*/}
       <>
        <main className="container">
          <div className="align-items-center p-3 my-3 rounded shadow-sm">
            {/*- notice bord -----*/}
            <div className="row">
              <div className="col-sm-4">
                {/*---notice board and content area--------*/}
                <section>
                  <div className="container">
                    <div
                      className="page-header"
                      style={{
                        border: "2px solid #dedcdc",
                        borderTop: "0",
                        borderBottom: "0px",
                        color: "#A2BFE9",
                      }}
                    >
                      <div
                        className="panel panel-danger"
                        style={{ maxHeight: "400px", overFlow: "hidden" }}
                      >
                        <section
                          style={{
                            color: "#fff",
                            backgroundColor: "#A2BFE9",
                            borderColor: "#A2BFE9",
                            padding: "5px",
                            borderRadius: "5px 5px 0 0",
                          }}
                        >
                          <h2
                            className="panel-title"
                            style={{ textAlign: "center", fontSize: "20px" }}
                          >
                            <b>News & Notifications</b>
                          </h2>
                        </section>

                    {/*------marquee tag----*/}
                        <section
                          behavior="scroll"
                          direction="up"
                          onmouseover="this.stop();"
                          onmouseout="this.start();"
                          scrolldelay="150"
                        >
                          <div
                            className="panel-body"
                            style={{ minHeight: "400px", padding: "20px" }}
                          >
                            <Link to="/" target="_blank" rel="noopener noreferrer" >
                              <p
                                style={{ color: "#6B6B6B", fontWeight: "bold" }}
                              >
                                notification-1
                              </p>
                            </Link>

                            <Link to="/" target="_blank" rel="noopener noreferrer" >
                              <p
                                style={{ color: "#6B6B6B", fontWeight: "bold" }}
                              >
                                notification-2
                              </p>
                            </Link>

                            <Link to="/" target="_blank" rel="noopener noreferrer" >
                              <p
                                style={{ color: "#6B6B6B", fontWeight: "bold" }}
                              >
                                notification-3
                              </p>
                            </Link>
                          </div>
                        </section>
                      </div>
                      </div>
                      <section
                        style={{
                          color: "#fff",
                          backgroundColor: "#A2BFE9",
                          borderColor: "#A2BFE9",
                          padding: "5px",
                          borderRadius: "0 0 5px 5px",
                        }}
                      >
                        <Link to="/Notification">
                          <p
                            className="panel-title"
                            style={{ textAlign: "center" }}
                          >
                            Click here for all Notificatoins
                          </p>
                        </Link>
                      </section>
                    </div>
                  
                </section>

                {/*---end notice board and content area-------*/}
              </div>
              {/*- end of notice bord -----*/}

              {/*- welcome section -----*/}
              <div
                className="col-sm-8"
                style={{ marginTop: "20px", textAlign: "justify" }}
              >
                <h3>Welcome to School Of Engineering</h3>
                <div className="mt-2">
                  School of Engineering, Tezpur University was established in
                  2006. School of Engineering has nine Departments viz. Applied
                  Sciences(ASc), Civil Engineering(CE), Computer Science &
                  Engineering (CSE), Electronics & Communication Engineering
                  (ECE), Electrical Engineering (EE), Energy Technology (ENE),
                  Design, Food Engineering & Technology (FET), Mechanical
                  Engineering (ME). various educational programmes offered by
                  School of Engineering include Under Graduate (UG), Post
                  Graduate(PG) and Ph.D programmes. All these Departments have
                  their own Academic building. There is also a common School of
                  Engineering building with an approximate built-up area of 2980
                  Sq.m for use of all the Departments. Various common facilities
                  are made available in this common building. These include
                  Classrooms, Chemistry and Physics laboratories, Computer
                  Centre, Gallery , Video Conferency Rooms, Language Laboratory,
                  Smart Classrooms etc., Smart Lecture Halls are used for
                  conducting common classes of School of Engineering and in the
                  class rooms, Departmental classes are conducted. besides
                  these, School of Engineering have one Microsoft Incubation
                  Centre and Centre for Innovation, incubation and
                  Entrepreneurship (CIIE). Office of the Dean, School of
                  Engineering located in the common Building has its own office
                  rooms and a conference room. One B.Tech Admission Cell for
                  North-East category admission (BSSC), another one B.Tech
                  admission Cell for JoSSA admission, one AICTE cell and an
                  Examination control room are also located at this building.
                </div>
              </div>
            </div>
            </div>
            {/*- end of welcome section -----*/}
          
        </main>
      </>
      {/*----------end of notice boeard and welcome content middle section -----*/}
    </div>
  )
}
