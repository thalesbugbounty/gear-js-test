import { Dispatch, SetStateAction } from 'react';
import { Nodes as NodesType, NodeSections } from '../../../../types';
import { Section } from './Section/Section';
import styles from './Nodes.module.scss';

type Props = {
  nodeSections: NodeSections;
  localNodes: NodesType;
  setLocalNodes: Dispatch<SetStateAction<NodesType>>;
  selectedNode: string;
  setSelectedNode: Dispatch<SetStateAction<string>>;
};

const Nodes = ({ nodeSections, localNodes, setLocalNodes, selectedNode, setSelectedNode }: Props) => {
  const getSections = () =>
    nodeSections.map((section, index) => (
      <Section
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        section={section}
        localNodes={localNodes}
        setLocalNodes={setLocalNodes}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
      />
    ));

  return <ul className={styles.nodes}>{getSections()}</ul>;
};

export { Nodes };
