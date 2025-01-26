import React, { useState, useCallback, useRef, useEffect } from 'react';
import { ReactFlow, Controls, useNodesState, useEdgesState, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/base.css';

import WrenchStart from './elements/wrenchBase/wrenchBase';
import WrenchRequest from './elements/request';
import Menu from './elements/wrenchBase/wrenchBaseOtions';

const proOptions = { hideAttribution: true };

const nodeTypes = {
  wrenchStart: WrenchStart,
  wrenchRequest: WrenchRequest,
};

const initialNodes = [
  {
    id: '1',
    type: 'wrenchStart',
    position: { x: 0, y: 0, zoom: 4 },
    draggable: false,
    deletable: false,
  },
  {
    id: '2',
    type: 'wrenchRequest',
    position: { x: 100, y: 200 },
  },
];

const initialEdges = [];
const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedNode, setSelectedNode] = useState(null);
  const menuRef = useRef(null);
  const flowRef = useRef(null);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const handleNodeClick = (event, node) => {
    if (node.id === '1') {
      setSelectedNode(node);
      setIsMenuOpen(true);
    }
  };
  const handlePaneClick = () => {
    setIsMenuOpen(false);
    setSelectedNode(null);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        flowRef.current && 
        !flowRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
        setSelectedNode(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full h-screen flex">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        proOptions={proOptions}
        snapToGrid={false}
        onNodeClick={handleNodeClick}
        onPaneClick={handlePaneClick}
        className="flex-1"
        ref={flowRef}
      >
        <Controls className=' text-blue '/>
      </ReactFlow>

      {isMenuOpen && (
        <Menu />
      )}
    </div>
  );
};

export default Flow;
