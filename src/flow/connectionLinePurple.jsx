import React from 'react';
import { useConnection } from '@xyflow/react';

export default ({ fromX, fromY, toX, toY }) => {
  const { fromHandle } = useConnection();

  return (
    <g>
      <path
        fill="none"
        stroke="#8e7cc3"
        strokeWidth={2}
        className="animated"
        d={`M${fromX},${fromY} C ${fromX} ${toY} ${fromX} ${toY} ${toX},${toY}`}
      />
    </g>
  );
};
