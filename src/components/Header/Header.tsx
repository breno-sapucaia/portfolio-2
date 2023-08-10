import { Box } from '@/components';
import { ReactComponent as Logo } from '@/assets/logo.svg';
import { useTheme } from 'styled-components';
interface HeaderProps {}

const Header = (props: HeaderProps) => {
  const { breakpoints } = useTheme();
  return (
    <Box display="flex" height={'48px'} maxWidth={breakpoints.lg} margin={'0 auto'}>
      <Logo />
      <Box display="flex"></Box>
    </Box>
  );
};
export default Header;
