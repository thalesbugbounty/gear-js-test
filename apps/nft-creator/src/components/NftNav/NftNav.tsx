import { FilterTabs } from '../../pages/constants';
import * as S from './styled';

type Props = {
  onSelect?: (value: string) => void;
  checked?: string;
};

export const NftNav: React.FC<Props> = ({ checked, onSelect }) => {
  return (
    <S.Wrapper>
      {Object.keys(FilterTabs).map(tab => {
        const active = checked === tab;
        const onSelectHandle = () => {
          if (!!onSelect) onSelect(tab);
        };
        return (
          <S.Item active={active} key={tab} onClick={onSelectHandle}>
            {tab}
          </S.Item>
        );
      })}
    </S.Wrapper>
  );
};
