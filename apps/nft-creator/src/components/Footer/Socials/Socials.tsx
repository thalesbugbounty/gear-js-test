import { ReactComponent as Twitter } from '../../../assets/twitter.svg';
import { ReactComponent as Github } from '../../../assets/github.svg';
import { ReactComponent as Discord } from '../../../assets/discord.svg';
import { ReactComponent as Medium } from '../../../assets/medium.svg';
import * as S from './styles';

const socials = [
  { href: 'https://twitter.com/gear_techs', icon: Twitter },
  { href: 'https://github.com/gear-tech', icon: Github },
  { href: 'https://discord.com/invite/7BQznC9uD9', icon: Discord },
  { href: 'https://medium.com/@gear_techs', icon: Medium },
];

export const Socials = () => (
  <S.List>
    {socials.map(({ href, icon: Icon }) => (
      <S.Item key={href}>
        <a href={href} target="_blank" rel="noreferrer">
          <Icon data-testid="svg" />
        </a>
      </S.Item>
    ))}
  </S.List>
);
