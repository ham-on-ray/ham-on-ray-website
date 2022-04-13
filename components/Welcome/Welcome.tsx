import { Title, Text, Anchor, Image, Center, Box } from '@mantine/core';
import useStyles from './Welcome.styles';

export function Welcome() {
  const { classes } = useStyles();

  return (
    <Box>
      <Center>
        <Image
          src='logo.png'
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
