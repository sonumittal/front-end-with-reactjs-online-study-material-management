import React from 'react';
import {Link} from "react-router-dom";

export const Material = () => {
    return (
        <div>
            {/*------------  study material middle section ----*/}
    <main className="container subjects">

        <div className="align-items-center p-3 my-3 rounded shadow-sm well">
            <h5>Select subject for study material:</h5>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                     1. All Core Subjects
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                   <p> <Link to="/SelectedMaterial">1. PPS</Link></p>
                   <p><Link to="/SelectedMaterial">2. COA</Link></p>
                    <p><Link to="/SelectedMaterial">3. OS</Link></p>
                        <p><Link to="/SelectedMaterial">4. Software Engineering</Link></p>
                            <p><Link to="/SelectedMaterial">5. DBMS</Link></p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                     2. All Elective Subjects
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p> <Link to="/SelectedMaterial">1. PPS</Link></p>
                   <p><Link to="/SelectedMaterial">2. COA</Link></p>
                    <p><Link to="/SelectedMaterial">3. OS</Link></p>
                        <p><Link to="/SelectedMaterial">4. Software Engineering</Link></p>
                            <p><Link to="/SelectedMaterial">5. DBMS</Link></p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      3. All Open-Elective Subjects
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p> <Link to="/SelectedMaterial">1. PPS</Link></p>
                   <p><Link to="/SelectedMaterial">2. COA</Link></p>
                    <p><Link to="/SelectedMaterial">3. OS</Link></p>
                        <p><Link to="/SelectedMaterial">4. Software Engineering</Link></p>
                            <p><Link to="/SelectedMaterial">5. DBMS</Link></p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </main>
{/*------------end of  study material middle section ----*/}
        </div>
    )
}
