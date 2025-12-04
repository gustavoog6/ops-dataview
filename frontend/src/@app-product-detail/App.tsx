import Common from '@zydon/common/components/Common';

import Plugin from './Plugin';
import { Props } from './props';

import './styles.css';

const App = ({ primaryColor = '#000000', ...otherProps }: Props) => {
  return (
    <Common primaryColor={primaryColor} cssVarPrefix="plugin">
      <Plugin {...{ primaryColor, ...otherProps }} />
    </Common>
  );
};

export default App;
