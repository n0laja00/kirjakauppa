import React from 'react'

export default function Footer() {
    return (
        <footer className="row mt-5">
          <div className="col-4">
            <p>Lorem impsum lorem ipsum lorem ipsum</p>
          </div>
          <div className="col-4">
          <div class="container mt-5 mb-5 d-flex justify-content-center">
              <ul class="social-list">
                  <li>
                      <div class="maincard">
                          <div class="thecard">
                            <a href="#">
                              <div class="thefront text-center facebook">
                                  <div class="social-icon"> <i class="fa fa-facebook fa-2x"></i> </div>
                              </div>
                              <div class="theback text-center facebook">
                                  <div class="social-text mt-1"> <small class="font-weight-bold">Facebook</small> </div>
                              </div>
                            </a>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="maincard">
                          <div class="thecard">
                            <a href="#">
                              <div class="thefront text-center instagram">
                                  <div class="social-icon"> <i class="fa fa-instagram fa-2x"></i> </div>
                              </div>
                              <div class="theback text-center instagram">
                                  <div class="social-text mt-1"> <small class="font-weight-bold">Instagram</small> </div>
                              </div>
                            </a>
                          </div>
                      </div>
                  </li>
                  <li>
                      <div class="maincard ">
                          <div class="thecard">
                            <a href="#">
                              <div class="thefront text-center youtube">
                                  <div class="social-icon"> <i class="fa fa-youtube fa-2x"></i> </div>
                              </div>
                              <div class="theback text-center youtube">
                                  <div class="social-text mt-1"> <small class="font-weight-bold">Youtube</small> </div>
                              </div>
                            </a>
                          </div>
                      </div>
                  </li>
              </ul>
          </div>
          </div>
          <div className="col-4">
            <p>Lorem impsum lorem ipsum lorem ipsum</p>
          </div>
    </footer>
    )
}
