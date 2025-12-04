import SearchInput from '@zydon/common/components/SearchInput';

import { Props } from './props';

const Plugin = ({ authData }: Props) => {
  return (
    <SearchInput
      placeholder={`O que você procura ${authData.name}?`}
      onSearch={search => search}
      fullWidth
      sx={{ maxWidth: 400 }}
    />
  );
};

export default Plugin;
