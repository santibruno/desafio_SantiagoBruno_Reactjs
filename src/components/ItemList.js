import React from "react";
const h = React.createElement;

const Item = (str) => {
    return h('label', { className: 'd-flex list-group-item' }, [
      h('input', {
        type: 'checkbox',
        className: 'form-check-input me-2',
      }),
      h('span', {}, str),
      h('button', {
        type: 'button',
        className: 'ms-auto btn-close',
        'aria-label': 'Close',
      }),
    ]);
  };
  
  const List = ({ items }) => {
    return <div className={'list-group mx-5 p-1 w-50 border border-dark'}>{items?.map((str) => Item(str))}</div>;
  };
  export default List;