import { Box } from '@/components';

interface HeaderProps {}

const Header = () => {
  return (
    <Box display="flex" backgroundColor={'cyan'} height={'48px'}>
      Hello box with styled-components and system-styled
    </Box>
  );
};
export default Header;
