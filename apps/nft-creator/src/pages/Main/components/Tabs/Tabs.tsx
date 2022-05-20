import { memo, useState } from 'react';
import { NftNav } from '../../../../components/NftNav';
import { Title } from '../../../../components/Title';
import { FilterTabs } from '../../../constants';
import { AllTab } from '../AllTab';
import { ApprovedTab } from '../ApprovedTab';
import { MyTab } from '../MyTab';
import * as S from './styles';

export const Tabs = memo(() => {
  const [activeTab, setActiveTab] = useState<string>(FilterTabs.all);

  return (
    <S.Tabs>
      <S.Header>
        <Title title={`${activeTab} tokens`} />
        <NftNav checked={activeTab} onSelect={setActiveTab} />
      </S.Header>
      <S.Content>
        {activeTab === FilterTabs.all && <AllTab />}
        {activeTab === FilterTabs.my && <MyTab />}
        {activeTab === FilterTabs.approved && <ApprovedTab />}
      </S.Content>
    </S.Tabs>
  );
});
