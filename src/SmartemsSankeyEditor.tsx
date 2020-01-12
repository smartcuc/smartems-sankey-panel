import React, { PureComponent } from 'react';
import {
  FormField,
  ThresholdsEditor,
  PanelOptionsGrid,
  ValueMappingsEditor,
  FieldDisplayEditor,
  FieldPropertiesEditor,
  Switch,
  PanelOptionsGroup,
  DataLinksEditor,
} from '@grafana/ui';

import { 
  PanelEditorProps,
  FieldDisplayOptions,
  ThresholdsConfig,
  ValueMapping,
  FieldConfig,
  DataLink,
} from '@grafana/data';

import { SmartemsSankeyOptions } from './types';

export class SmartemsSankeyEditor extends PureComponent<PanelEditorProps<SmartemsSankeyOptions>> {
  onTextChanged = ({ target }: any) => {
    this.props.onOptionsChange({ ...this.props.options, text: target.value });
  };

  render() {
    const { options } = this.props;

    return (
      <div className="section gf-form-group">
        <h5 className="section-heading">Display</h5>
        <FormField label="Text" labelWidth={5} inputWidth={20} type="text" onChange={this.onTextChanged} value={options.text || ''} />
      </div>
    );
  }
}
