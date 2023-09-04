import { x } from '@xstyled/styled-components';
import me from '../../assets/img/me.jpg';
import { ReactComponent as GithubIcon } from '@/assets/icons/GithubLogo.svg';
import { ReactComponent as LinkedInIcon } from '@/assets/icons/LinkedinLogo.svg';
import { ReactComponent as InstagramIcon } from '@/assets/icons/InstagramLogo.svg';
import code from '../../assets/img/code.jpg';
import styled from 'styled-components';

const Social = styled(x.div)`
  display: flex;

  & > svg {
    cursor: pointer;
    transition: 250ms all ease-in-out;
    transform: scale(1);
  }
  & > svg:hover {
    transform: scale(1.5);
  }
`;

const About = () => {
  return (
    <x.div display="flex" flexDirection="column" gap={8}>
      <x.div container={{ md: true }} margin={'0 auto'} display="flex" flexDirection="column" mt="120px">
        <x.img width={'132px'} height={'132px'} borderRadius={132} src={me}></x.img>
        <x.h1 fontSize={'64px'} fontWeight="700" color="text-light" mt={16}>
          I'm Breno Sapucaia,
          <br /> and welcome to my portfolio.
        </x.h1>
        <x.div display="flex" w="100%" justifyContent="space-between" mt={8}>
          <x.p color="text-grayed" fontWeight={600} fontSize="24px">
            Here you will be able to find some about my experience so far in these 4 years of activity in the market.
          </x.p>
          <Social display="flex" gap={6}>
            <x.a href="">
              <InstagramIcon />
            </x.a>
            <LinkedInIcon />
            <GithubIcon />
          </Social>
        </x.div>
      </x.div>
      <x.div
        w="100%"
        h={'500px'}
        background={`url(".${code}");`}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        style={{
          filter: 'grayscale(1)',
        }}
      />
    </x.div>
  );
};

export default About;
