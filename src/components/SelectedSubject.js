import React from 'react';

export const SelectedSubject = () => {
    return (
        <div>
            {/*----------  subjects middle section -----*/}
    <main className="container subjects">

        <div className="align-items-center p-3 my-3 rounded shadow-sm well">
            <h5>Download Subject Name Exam papers from here</h5>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                     1st Test all exam papers
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                   <p> <a href="http://sonumittal.github.io">PPS Test-1 2021</a></p>
                   <p><a href="http://sonumittal.github.io">PPS Test-1 2020</a></p>
                   <p><a href="http://sonumittal.github.io">PPS Test-1 2019</a></p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        2nd Test all exam papers (MIDTERM)
                      </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body">
                        <p> <a href="http://sonumittal.github.io">PPS Test-2 2021</a></p>
                            <p><a href="http://sonumittal.github.io">PPS Test-2 2020</a></p>
                            <p><a href="http://sonumittal.github.io">PPS Test-2 2019</a></p>
                      </div>
                    </div>
                  </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        3rd Test all exam papers
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p> <a href="http://sonumittal.github.io">PPS Test-3 2021</a></p>
                            <p><a href="http://sonumittal.github.io">PPS Test-3 2020</a></p>
                            <p><a href="http://sonumittal.github.io">PPS Test-3 2019</a></p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        4th Test all exam papers (ENDTERM)
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                        <p> <a href="http://sonumittal.github.io">PPS Test-1 2021</a></p>
                            <p><a href="http://sonumittal.github.io">PPS Test-4 2020</a></p>
                            <p><a href="http://sonumittal.github.io">PPS Test-4 2019</a></p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    </main>
{/*----------end of  subjects middle section -----*/}
        </div>
    )
}
