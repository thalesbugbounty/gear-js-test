import { Link } from 'react-router-dom';
import { ReactComponent as SVG } from '../../../../assets/logo.svg';

export const Logo = () => {
  return (
    <Link to="/">
      <SVG />
    </Link>
  );
};
