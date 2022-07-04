import { useEffect, useState } from 'react';

import { NodeSections } from './types';
import { REQUEST_OPTIONS } from './const';

import { DEFAULT_NODES_URL } from 'consts';

function useSidebarNodes() {
  const [nodeSections, setNodeSections] = useState<NodeSections>([]);

  useEffect(() => {
    fetch(DEFAULT_NODES_URL, REQUEST_OPTIONS)
      .then((result) => result.json())
      .then(setNodeSections)
      .catch(console.error);
  }, []);

  return nodeSections;
}

export { useSidebarNodes };
