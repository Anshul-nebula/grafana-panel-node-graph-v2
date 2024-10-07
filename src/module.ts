import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './components/SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel ).setPanelOptions((builder) => {
  return builder
    .addTextInput({
      path: 'text',
      name: 'Simple text option',
      description: 'Description of panel option',
      defaultValue: 'Hello from module.ts',
    })
    .addBooleanSwitch({
      path: 'showSeriesCount',
      name: 'Show series counter',
      defaultValue: false,
    })
    .addRadio({
      path: 'seriesCountSize',
      defaultValue: 'sm',
      name: 'Series counter size',
      settings: {
        options: [
          {
            value: 'sm',
            label: 'Small',
          },
          {
            value: 'md',
            label: 'Medium',
          },
          {
            value: 'lg',
            label: 'Large',
          },
        ],
      },
      showIf: (config) => config.showSeriesCount,
    });
});


// import { PanelPlugin } from '@grafana/data';
// import GraphLists from './components/GraphList';
// // import { SimpleOptions } from './types'; // Adjust if you have custom options types
//
// export const plugin = new PanelPlugin(GraphLists).setPanelOptions((builder) => {
//
//     return builder
//       .addBooleanSwitch({
//         path: 'showSeriesCount',
//         name: 'Show series count',
//         defaultValue: true,
//       });
//   });
