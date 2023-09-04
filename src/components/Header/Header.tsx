import { ReactComponent as Logo } from '@/assets/icons/logo.svg';
import { x } from '@xstyled/styled-components';
import { Button } from '@/components';
interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <x.div
      display="flex"
      height={'48px'}
      container={{ md: true }}
      margin={'0 auto'}
      justifyContent="space-between"
      mt={'4.5rem'}
    >
      <Logo />
      <x.div display="flex" gap={'1rem'}>
        <Button variant="default">Get in touch</Button>
        <Button variant="contained">My curriculum</Button>
      </x.div>
    </x.div>
  );
};
export default Header;
