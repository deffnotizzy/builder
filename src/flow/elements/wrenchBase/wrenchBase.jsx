import React from 'react';
import { Handle, Position } from '@xyflow/react';
import Icon from '../../assets/WrenchStart.png';

const wrenchBase = () => {
  return (
    <div className="flex flex-row bg-darkgrey border-1 border-yellow rounded-xl w-r30 max-w-r30 p-2">
      <div className="flex flex-row gap-2 w-full">
        <section className="flex-shrink-0">
          <img 
            src={Icon} 
            alt="Wrench Starting Point" 
            className="w-r2 h-auto rounded-md" 
          />
        </section>
        <div className="flex flex-col text-white gap-1 w-full">
          <h1 className="text-base font-bold leading-tight"> 
            api/
          </h1>
          <p className="text-grey font-medium text-sm leading-snug"> 
            Drag and drop different blocks to add them to your API. Connect the 
            corresponding colors to create your custom API.
          </p>
        </div>
      </div>
      <Handle 
        type="target" 
        position={Position.Top} 
        style={{ backgroundColor: '#6f42c1', borderRadius: '50%', width: '10px', height: '10px' }} 
      />
      <Handle 
        type="source" 
        position={Position.Bottom} 
        style={{ backgroundColor: '#17a2b8', borderRadius: '50%', width: '10px', height: '10px' }} 
      />
    </div>
  );
};

export default wrenchBase;
