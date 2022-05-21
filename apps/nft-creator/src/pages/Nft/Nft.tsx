import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from '../../components/Spinner';
import { Title } from '../../components/Title';
import { Typography } from '../../components/ui/Typography';
import { useNftStore } from '../../stores';
import { SendButtons } from './components/SendButtons';
import * as S from './styles';

export const Nft = observer(() => {
  const { id } = useParams<{ id?: string }>();
  const { readToken, token, readLoader } = useNftStore();

  useEffect(() => {
    if (!!id) readToken(id);
  }, [id, readToken]);

  return (
    <S.NftPage>
      <Title title={`NFT #${id}`} />
      {!!token && (
        <S.Content>
          <S.Left>
            <S.Image image={token.media} />
            <SendButtons />
          </S.Left>
          <S.Description>
            <Typography family="syncopate" color="secondary" tag="h3">
              Description
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </S.Description>
          <S.Attributes>
            <Typography family="syncopate" color="secondary" tag="h3">
              Attributes
            </Typography>
          </S.Attributes>
          <S.Addresses>
            <Typography family="syncopate" color="secondary" tag="h3">
              Approved Addresses
            </Typography>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release
              of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </S.Addresses>
        </S.Content>
      )}
      {readLoader.isLoading && <Spinner status="Loading" />}
    </S.NftPage>
  );
});
