import React from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Stack,
  Typography,
} from '@mui/material';

const companies = [
  {
    name: 'Phoenix Pizza',
    type: 'Restaurant',
    emoji: '🍕',
    whitelist: false,
  },
  {
    name: 'Politi',
    type: 'Offentlig tjeneste',
    emoji: '🚓',
    whitelist: true,
  },
  {
    name: 'EMS',
    type: 'Sundhed',
    emoji: '🚑',
    whitelist: true,
  },
  {
    name: 'Mekaniker',
    type: 'Værksted',
    emoji: '🔧',
    whitelist: false,
  },
  {
    name: 'Taxi',
    type: 'Transport',
    emoji: '🚕',
    whitelist: false,
  },
];

export default function App() {
  return (
    <Box
      sx={{
        height: '100%',
        overflowY: 'auto',
        backgroundColor: '#0b1220',
        p: 2,
      }}
    >
      <Typography variant="h5" fontWeight="bold" mb={0.5}>
        🏢 Firmaer
      </Typography>

      <Typography variant="body2" sx={{ opacity: 0.7, mb: 2 }}>
        PhoenixDK
      </Typography>

      <Stack spacing={1.5}>
        {companies.map((company) => (
          <Card
            key={company.name}
            sx={{
              backgroundColor: '#141f31',
              borderRadius: 3,
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between" mb={1}>
                <Box>
                  <Typography variant="h6">
                    {company.emoji} {company.name}
                  </Typography>

                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {company.type}
                  </Typography>
                </Box>

                {company.whitelist && (
                  <Chip
                    size="small"
                    label="Whitelist"
                    color="warning"
                  />
                )}
              </Stack>

              <Button
                fullWidth
                variant="contained"
                disabled={company.whitelist}
                onClick={() =>
                  console.log(`PhoenixDK job clicked: ${company.name}`)
                }
              >
                {company.whitelist ? 'Kræver godkendelse' : 'Gå på arbejde'}
              </Button>
            </CardContent>
          </Card>
        ))}
      </Stack>
    </Box>
  );
}