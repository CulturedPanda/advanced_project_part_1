import React from 'react';

function MicButton({ openRecordMessageModal }) {
       return  <label onClick={openRecordMessageModal} className="padding form-label hover-pointer">
            <i className="bi bi-input bi-mic"/>
        </label>
}

export default MicButton;