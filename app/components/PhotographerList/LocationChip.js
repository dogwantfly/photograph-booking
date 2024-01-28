import { Chip } from '@mui/material';

export default function LocationChip({ label, href }) {
  return (
    <Chip
      label={label}
      component='a'
      href={href}
      clickable
      variant='outlined'
      sx={{
        px: {
          xs: 8,
          sm: 4,
        },
        py: { xs: 3.5, sm: 2.5 },
        fontSize: 16,
      }}
    />
  );
}
