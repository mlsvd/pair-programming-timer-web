import React from "react";
import Title from "./Title";
import Timer from "./Timer";

class TimerPage extends React.Component {
    render () {
        return (
            <div className="text-center" style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }}>
                <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <main role="main" className="App inner cover">
                        <Title/>
                        <Timer/>
                        <a href="/about">Help / About</a>
                    </main>
                </div>
            </div>
        )
    }
}

export default TimerPage;