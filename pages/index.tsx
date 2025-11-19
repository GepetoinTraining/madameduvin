import Head from 'next/head';
import { Container, Title, Text, Button, Group, Stack, Card, SimpleGrid, ThemeIcon, List, Box, BackgroundImage, Overlay } from '@mantine/core';
import { IconGlassFull, IconBuildingSkyscraper, IconChefHat, IconCalendarEvent, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Home() {
  // --- CONFIGURATION ---
  // UPDATE THIS LINK to their real WhatsApp
  const whatsappLink = "https://wa.me/5547000000000?text=Olá,%20gostaria%20de%20saber%20sobre%20o%20pacote%20corporativo.";
  
  // META TAGS (For beautiful WhatsApp Previews)
  const metaTitle = "Madame du Vin | Exclusive Corporate Buyouts";
  const metaDesc = "Reserve our entire 8-table adega for your private team event. Sommelier service, curated wines, and total privacy.";
  const metaImage = "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070&auto=format&fit=crop";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        {/* OpenGraph / WhatsApp */}
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:image" content={metaImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

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

      {/* TANGIBILITY SECTION (VISUALIZING THE SPEND) */}
      <Box bg="#1A1B1E" py={60}>
        <Container size="lg">
          <Title order={2} ta="center" mb={10} c="white">What does R$ 2.500 get you?</Title>
          <Text ta="center" c="dimmed" mb={50}>Your minimum spend credit (R$ 1.500) goes a long way.</Text>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
            {/* Example 1 */}
            <Card padding="lg" radius="md" withBorder style={{ borderColor: '#333', backgroundColor: '#141517' }}>
              <Title order={3} size="h4" mb="md" c="bordeaux">The "Old World" Experience</Title>
              <Text c="dimmed" size="sm" mb="md">A journey through history for 12 guests.</Text>
              <List spacing="xs" size="sm" center icon={<ThemeIcon color="gray" variant="outline" size={16} radius="xl"><IconGlassFull size={10}/></ThemeIcon>}>
                <List.Item>Welcome: Espumante Cave Geisse Nature</List.Item>
                <List.Item>White: Chablis Le Classique (France)</List.Item>
                <List.Item>Red: Brunello di Montalcino (Italy)</List.Item>
                <List.Item>Food: 3x Large Charcuterie Boards + Artisan Breads</List.Item>
              </List>
            </Card>
            
            {/* Example 2 */}
            <Card padding="lg" radius="md" withBorder style={{ borderColor: '#333', backgroundColor: '#141517' }}>
              <Title order={3} size="h4" mb="md" c="bordeaux">The "New World" Discovery</Title>
              <Text c="dimmed" size="sm" mb="md">Bold flavors and modern techniques for 15 guests.</Text>
              <List spacing="xs" size="sm" center icon={<ThemeIcon color="gray" variant="outline" size={16} radius="xl"><IconGlassFull size={10}/></ThemeIcon>}>
                <List.Item>Welcome: Rosé de Provence Style (Uruguay)</List.Item>
                <List.Item>Red 1: Catena Zapata Malbec (Argentina)</List.Item>
                <List.Item>Red 2: Napa Valley Cabernet (USA)</List.Item>
                <List.Item>Food: 4x Mixed Cheese & Jam Boards</List.Item>
              </List>
            </Card>
          </SimpleGrid>
          <Text ta="center" size="xs" c="dimmed" mt={30} fs="italic">
            *Examples only. Our Sommelier will build a custom list based on your team's preferences.
          </Text>
        </Container>
      </Box>

      {/* THE OFFER / PRICING */}
      <Container size="md" py={80}>
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

          {/* REFINED CTA */}
          <Button component="a" href={whatsappLink} fullWidth size="xl" color="bordeaux" mt={40}>
            Consult with Sommelier
          </Button>
          <Text size="xs" c="dimmed" ta="center" mt="sm">
            Available Tuesdays, Wednesdays, and Thursdays
          </Text>
        </Card>
      </Container>

      {/* FAQ SECTION */}
      <Container size="md" pb={80}>
        <Title order={2} ta="center" mb={40}>Common Questions</Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
          <Stack gap="xs">
            <Text fw={700}>Is the venue really private?</Text>
            <Text size="sm" c="dimmed">Yes. When you book the corporate package, we close the doors to the public. It is 100% yours.</Text>
          </Stack>
          <Stack gap="xs">
            <Text fw={700}>Can we bring outside food?</Text>
            <Text size="sm" c="dimmed">We provide cold cuts and appetizers. For hot meals, we have partnerships with local restaurants for delivery.</Text>
          </Stack>
          <Stack gap="xs">
            <Text fw={700}>What if we exceed the consumption credit?</Text>
            <Text size="sm" c="dimmed">The R$ 1.500 is just the minimum. Anything consumed above that is billed at standard menu price.</Text>
          </Stack>
          <Stack gap="xs">
            <Text fw={700}>Is there parking?</Text>
            <Text size="sm" c="dimmed">Yes, we have spaces available in front of the adega.</Text> 
          </Stack>
        </SimpleGrid>
      </Container>

      {/* FOOTER */}
      <Box bg="#1A1B1E" py={40}>
        <Container size="md" ta="center">
          <Title order={4} c="white" mb="sm">Madame du Vin</Title>
          <Text c="dimmed" size="sm">Private Events • Wine Education • Retail</Text>
        </Container>
      </Box>
    </>
  );
}

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