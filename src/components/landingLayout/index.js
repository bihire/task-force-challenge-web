import React from "react";
import "./landing_layout.scss";


const LandingLayout = (children) => {
    return (<div>
        <div className="landing_layout">
            <div className="landing_layout_container">
                {/* <div className="landing_layout_container_top">
                    ghjk
                </div> */}
                <div className="landing_layout_container_inner">
                    {children}
                </div>
            </div>
        </div>
    </div>);
}

export default LandingLayout