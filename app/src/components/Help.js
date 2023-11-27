import React from "react";
import { Tooltip } from 'react-tooltip'

class Help extends React.Component {
    render () {
        return (
            <div>
                <a data-tooltip-id="instructions">
                    Help / About
                </a>
                <Tooltip id="instructions">
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <h2>Pair Programming Timekeeper</h2>
                      <span>The app offers flexible time intervals catering to the dynamic nature of pair programming sessions.</span>
                      <span>Users can choose from intervals of 1 minute, 10 minutes, 50 minutes, and 1 hour to structure their collaborative coding sessions.</span>
                      <span>The timer runs discreetly in the background, allowing team members to focus on their work while staying mindful of time.</span>
                      <br />
                      <span>Pair programming sessions often benefit from periodic breaks to maintain productivity and engagement.</span>
                      <span>The app's intuitive design ensures that teams can seamlessly switch roles between the driver and navigator, fostering a balanced and effective collaboration rhythm.</span>
                  </div>
                </Tooltip>
            </div>
        );
    }
}

export default Help;
