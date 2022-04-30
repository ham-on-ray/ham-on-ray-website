import { Title, Text, Anchor, Image, Center, Box } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <Box pb={100}>
      <Center>
        <Image
          src='logo-red.png'
          width={300}
          pt={100}
        />
      </Center>
      <Text align="center" mt={100}>
        We're currently working on
      </Text>
      <Title order={1} align="center"
      >
        Treasure Hunter
      </Title>

      <Text align="center" mt={100} mb={20}>
        Checkout our latest games
      </Text>
      <Center>
        <iframe
          src="https://itch.io/embed/1509473?linkback=true&amp;bg_color=8d0085&amp;fg_color=ffffff&amp;link_color=edde00&amp;border_color=d424ca"
          width="552" height="167" frameBorder="0"
        >
          <a href="https://hamonraygames.itch.io/dont-mess-with-my-console">
            Don't Mess With My Console by Ham on Ray Games
          </a>
        </iframe>
      </Center>
      <Text
        align="center"
        pt={50}
      >
        Drop us an email
      </Text>
      <Title
        align="center"
        order={3}
      >
        <Anchor
          href="mailto:info@hamonray.com"
          color={'dark'}
          size={'xl'}
        >info@hamonray.com</Anchor>
      </Title>

    </Box>
  );
}
