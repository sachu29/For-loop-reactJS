import React from "react";
// import listComponent from "Home";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="dashboard">
          <aside class="left-aside">
            <img
              width="100"
              src="../assets/Images/Credence-Analytics.jpg"
              alt="Credence-Analytics-Logo"
            />
            <ul class="menu">
              <li>Dashboard</li>
              <li>In Progress</li>
              <li>History</li>
            </ul>
          </aside>

          <main>
            <section class="top">
              <h1>Dashboard</h1>
              <div class="profile-bar">
                <ul class="profile-image">
                  <li>
                    <img
                      width="20"
                      src="../assets/Images/icon-question.png"
                      alt="question mark"
                    />
                  </li>
                  <li>
                    <img
                      width="25"
                      src="../assets/Images/icon-bell.png"
                      alt="Bell Icon"
                    />
                  </li>
                  <li>
                  <img src="../assets/Images/icon-avatar.svg" alt="" />
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <div class="process-tab">
                <div>
                  <label for="">Auto Processing</label>
                  <input type="checkbox" class="process-input" />
                </div>

                <div>
                  <span class="manual"> Manual Processing </span>
                  <ul>
                    <li>
                      <span class="dot primary-clr"></span> All
                    </li>
                    <li>
                      <span class="dot secondary-clr"></span> TAT
                    </li>
                    <li>
                      <span class="dot secondary-clr"></span> Count
                    </li>
                  </ul>
                </div>

                <div>
                  <ul>
                    <li>Time</li>
                    <li>
                      <span class="dot primary-clr"></span>10 Min
                    </li>
                    <li>
                      <span class="dot secondary-clr"></span>1 Hour
                    </li>
                  </ul>

                  <ul>
                    <li>
                      <span class="dot secondary-clr"></span>1 Day
                    </li>
                    <li>
                      <span class="dot secondary-clr"></span>5 Day
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <ul class="card-section">
                
                <ListComponent/>
                
              </ul>

              
            </section>
          </main>
        </div>
      </div>
    );
  }
}

export default Home;

const ListComponent = () => {
  
      const card = [
        { TAT: 15, count: 1500, msg: "Process Message" },
        { TAT: 15, count: 1500, msg: " Recon Messages" },
        { TAT: 15, count: 1500, msg: "Mark Message (Unidentified)" },
        { TAT: 15, count: 1500, msg: "Mark Message(Return Of Fund) " },
        { TAT: 15, count: 1500, msg: "Filter Message" },
        { TAT: 15, count: 1500, msg: "Fetch Customer Details" }
      ];
      return (
        <React.Fragment>
          
    
          {card.map((card) => (
            <div class="card">
              <img
                class="info"
                width="20"
                src="../assets/Images/icon-info.png"
                alt="Info icon"
              />
              <div class="tat">
                <img className="timer" width="20" src="../assets/Images/icon-time.png" alt="Icon-Time" />
                <span>TAT</span>
                <div class="blue-bar">
                  <span class="progress clr-blue"></span>
                  {card.TAT}
                </div>
              </div>
              <div class="count">
                <img className="graph" width="20" src="../assets/Images/icon-graph.png" alt="Icon-graph" />
                <span>Count</span>
                <div class="yellow-bar">
                  <span class="progress primary-clr"></span>
                  {card.count}
                </div>
              </div>
              <p class="status">{card.msg}</p>
            </div>
          ))}
    
        </React.Fragment>
      );
    };