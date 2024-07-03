import React from 'react';

interface TreeNode {
  name: string;
  node?: TreeNode[];
}

const renderNodes = (nodes: TreeNode[]): JSX.Element => {
  return (
      <ul>
        {nodes.map(item => (
            <li key={item.name}>
              {item.name}
              {item.node && item.node.length > 0 && renderNodes(item.node)}
            </li>
        ))}
      </ul>
  );
};

const nodes: TreeNode[] = [
  {
    name: '1',
    node: [
      {
        name: '1.1',
        node: [
          {
            name: '1.1.1'
          },
          {
            name: '1.1.2'
          }
        ]
      },
      {
        name: '1.2',
        node: [
          {
            name: '1.2.1'
          },
          {
            name: '1.2.2',
            node: [
              {
                name: '1.2.2.1'
              },
              {
                name: '1.2.2.2'
              }
            ]
          },
          {
            name: '1.2.3'
          }
        ]
      },
      {
        name: '1.3'
      }
    ]
  },
  {
    name: '2',
    node: [
      {
        name: '2.1',
        node: [
          {
            name: '2.1.1'
          }
        ]
      },
      {
        name: '2.2'
      }
    ]
  },
  {
    name: '3',
    node: [
      {
        name: '3.1',
        node: [
          {
            name: '3.1.1'
          },
          {
            name: '3.1.2'
          }
        ]
      },
      {
        name: '3.2'
      },
      {
        name: '3.3',
        node: [
          {
            name: '3.3.1'
          },
          {
            name: '3.3.2',
            node: [
              {
                name: '3.3.2.1'
              }
            ]
          }
        ]
      }
    ]
  }
];

const App: React.FC = () => {
  return (
      <div>
        {renderNodes(nodes)}
      </div>
  );
};

export default App;
