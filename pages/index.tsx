import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Box } from '@mantine/core';

export default function HomePage() {
  return (
    <Box style={{
      background: '#c93529',
      minHeight: '100vh'
    }}>
      <Welcome />
      {/* <ColorSchemeToggle /> */}
    </Box>
  );
}
