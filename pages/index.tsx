import { Container, Title, Text, Button, Group, Stack, Card, SimpleGrid, ThemeIcon, List, Box, BackgroundImage, Overlay } from '@mantine/core';
import { IconGlassFull, IconBuildingSkyscraper, IconChefHat, IconCalendarEvent, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Home() {
  // UPDATE THIS LINK to their real WhatsApp
  const whatsappLink = "https://wa.me/554796972470?text=Olá,%20gostaria%20de%20saber%20sobre%20eventos%20corporativos.";

  return (
    <>
      {/* HERO SECTION */}
      <Box style={{ position: 'relative', height: '600px' }}>
        <BackgroundImage
          src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop"
          radius="sm"
          h="100%"
        >
            <Overlay color="#000" opacity={0.6} zIndex={1} />
            <Container size="md" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <Title order={1} style={{ fontSize: '3.5rem', color: '#fff', marginBottom: '20px' }}>
                Madame du Vin
              </Title>
              <Text size="xl" c="dimmed" style={{ maxWidth: '600px', color: '#E1C4C8' }}>
                Exclusive Corporate Buyouts & Private Tastings
              </Text>
              <Text size="lg" mt="md" style={{ color: '#fff' }}>
                The perfect "Third Place" for your team offsite, client closure, or private celebration.
              </Text>
              
              <Button 
                component="a" 
                href={whatsappLink}
                size="xl" 
                color="bordeaux" 
                mt={40}
                leftSection={<IconBrandWhatsapp size={24} />}
              >
                Reserve Your Date
              </Button>
            </Container>
        </BackgroundImage>
      </Box>

      {/* VALUE PROPOSITION */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={50}>Why Rent the Adega?</Title>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
          <Feature 
            icon={<IconBuildingSkyscraper size={40} />} 
            title="Total Privacy" 
            description="No shouting over loud music. You get the entire 8-table space for your team to connect properly." 
          />
          <Feature 
            icon={<IconGlassFull size={40} />} 
            title="Curated Wine List" 
            description="Sommelier-led selection tailored to your budget. From casual happy hours to premium verticals." 
          />
          <Feature 
            icon={<IconChefHat size={40} />} 
            title="Flexible Catering" 
            description="We partner with top local restaurants for food delivery, or keep it classic with our premium charcuterie." 
          />
        </SimpleGrid>
      </Container>

      {/* THE OFFER / PRICING */}
      <Container size="md" py={40}>
        <Card withBorder shadow="sm" radius="md" padding="xl" style={{ borderColor: '#AD4C61' }}>
          <Stack align="center" gap="xs">
            <Text tt="uppercase" fw={700} c="bordeaux" style={{ letterSpacing: 2 }}>
              The Corporate Package
            </Text>
            <Title order={2}>Rent The House</Title>
            <Text size="sm" c="dimmed">Ideal for 10-20 Guests</Text>
          </Stack>
          
          <Group justify="center" mt="xl" mb="xl">
             <Text size="xl" span fw={700}>Minimum Spend:</Text>
             <Text size="xl" span c="bordeaux" fw={900} style={{ fontSize: '2.5rem' }}>R$ 2.500</Text>
          </Group>

          <List spacing="md" size="lg" center icon={
            <ThemeIcon color="bordeaux" size={24} radius="xl">
              <IconCalendarEvent size={16} />
            </ThemeIcon>
          }>
            <List.Item>Exclusive use of the space (4 Hours)</List.Item>
            <List.Item>R$ 1.500 consumable credit included</List.Item>
            <List.Item>Dedicated Sommelier service</List.Item>
            <List.Item>Charcuterie board setup included</List.Item>
          </List>

          <Button component="a" href={whatsappLink} fullWidth size="xl" color="bordeaux" mt={40}>
            Check Availability
          </Button>
          <Text size="xs" c="dimmed" ta="center" mt="sm">
            Available Tuesdays, Wednesdays, and Thursdays
          </Text>
        </Card>
      </Container>

      {/* FOOTER */}
      <Box bg="#1A1B1E" py={40} mt={80}>
        <Container size="md" ta="center">
          <Title order={4} c="white" mb="sm">Madame du Vin</Title>
          <Text c="dimmed" size="sm">Private Events • Wine Education • Retail</Text>
        </Container>
      </Box>
    </>
  );
}

// THIS IS THE FIXED COMPONENT
function Feature({ icon, title, description }: { icon: any, title: string, description: string }) {
  return (
    <Stack align="center" gap="sm">
      <ThemeIcon size={80} radius={80} variant="light" color="bordeaux">
        {icon}
      </ThemeIcon>
      <Text size="xl" fw={700} mt="md" ta="center">{title}</Text>
      <Text c="dimmed" ta="center">{description}</Text>
    </Stack>
  );
}