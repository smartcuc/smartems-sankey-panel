import { PanelPlugin } from '@grafana/data';
import { SmartemsSankeyOptions, defaults } from './types';
import { SmartemsSankeyPanel } from './SmartemsSankeyPanel';
import { SmartemsSankeyEditor } from './SmartemsSankeyEditor';

export const plugin = new PanelPlugin<SmartemsSankeyOptions>(SmartemsSankeyPanel)
    .setDefaults(defaults)
    .setEditor(SmartemsSankeyEditor);
