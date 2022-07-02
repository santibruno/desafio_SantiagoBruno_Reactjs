

import React from 'react';

const InputGroup = ({ texto, btnId, onAddTask }) => {
const clickBtn = () => {
  onAddTask('Hola desde ' + btnId);
};

return (
  <div className="d-flex justify-content-center">
    <div className="input-group mb-3 p-5 ">
      <input
        type="text"
        id="myInput"
        className="form-control"
        placholder="task"
        ariaLabel="Task"
        ariaDescribedby={btnId}
      />
      <button
        id={btnId}
        className="btn btn-outline-secondary"
        type="button"
        onClick={clickBtn}
      >
        {texto}
      </button>
    </div>
  </div>
);
};

export default InputGroup;


