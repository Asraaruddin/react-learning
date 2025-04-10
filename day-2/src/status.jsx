import React from "react";
import PropTypes from "prop-types";


function StatusBadge({isOnline}){
    return (
        <div>
            {isOnline ? (
                <span style={{color:"green"}}>✅  Online</span>
            )
            :(
                <span style={{color:"red"}}>❌ Offline</span>
            )}
        </div>
    )
}

export default StatusBadge;