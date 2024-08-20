import React from 'react';

function Countdown({ countdown }) {
  const getMessage = () => {
    if (countdown === 3) return '-----';
    if (countdown === 2) return 'Preparados';
    if (countdown === 1) return 'Listos';
    if (countdown === 0) return 'Ya!';
  };

  return <div className="countdown">{getMessage()}</div>;
}

export default Countdown;