import Head from 'next/head';
import { Container, Title, Text, Button, Group, Stack, Card, SimpleGrid, ThemeIcon, List, Box, BackgroundImage, Overlay, Tooltip } from '@mantine/core';
import { IconGlassFull, IconBuildingSkyscraper, IconChefHat, IconCalendarEvent, IconBrandWhatsapp } from '@tabler/icons-react';

export default function Home() {
  // --- CONFIGURATION ---
  // UPDATE THIS LINK to their real WhatsApp
  // Message is now in PT-BR
  const whatsappLink = "https://wa.me/554796972470?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20Adega%20Exclusiva%20para%20eventos.";
  
  // META TAGS (For beautiful WhatsApp Previews)
  const metaTitle = "Madame du Vin | Eventos Corporativos Exclusivos";
  const metaDesc = "Reserve nossa adega inteira para o seu evento. Sommelier dedicado, vinhos selecionados e privacidade total.";
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
                Eventos Corporativos & Degustações Privadas
              </Text>
              <Text size="lg" mt="md" style={{ color: '#fff' }}>
                O ambiente perfeito para fechar negócios, celebrar metas ou reunir a equipe com privacidade.
              </Text>
              
              <Button 
                component="a" 
                href={whatsappLink}
                size="xl" 
                color="bordeaux" 
                mt={40}
                leftSection={<IconBrandWhatsapp size={24} />}
              >
                Reservar Data
              </Button>
            </Container>
        </BackgroundImage>
      </Box>

      {/* VALUE PROPOSITION */}
      <Container size="lg" py={80}>
        <Title order={2} ta="center" mb={50}>Por que fechar a Adega?</Title>
        <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
          <Feature 
            icon={<IconBuildingSkyscraper size={40} />} 
            title="Privacidade Total" 
            description="Sem barulho ou música alta. O espaço de 8 mesas fica 100% reservado para o seu grupo conversar à vontade." 
          />
          <Feature 
            icon={<IconGlassFull size={40} />} 
            title="Curadoria de Vinhos" 
            description="Seleção guiada pelo Sommelier, ajustada ao perfil do seu time. De happy hours descontraídos a verticais premium." 
          />
          <Feature 
            icon={<IconChefHat size={40} />} 
            title="Gastronomia Flexível" 
            description="Oferecemos tábuas de frios premium. Para pratos quentes, temos parcerias com restaurantes locais para entrega." 
          />
        </SimpleGrid>
      </Container>

      {/* TANGIBILITY SECTION (VISUALIZING THE SPEND) */}
      <Box bg="#1A1B1E" py={60}>
        <Container size="lg">
          <Title order={2} ta="center" mb={10} c="white">O que R$ 2.500 oferece?</Title>
          <Text ta="center" c="dimmed" mb={50}>O valor inclui R$ 1.500 de consumação, que rende ótimas opções:</Text>
          
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
            {/* Example 1: OLD WORLD */}
            <Card padding="lg" radius="md" withBorder style={{ borderColor: '#333', backgroundColor: '#141517' }}>
              <Title order={3} size="h4" mb="md" c="bordeaux">Experiência "Velho Mundo"</Title>
              <Text c="dimmed" size="sm" mb="md">Uma jornada pela história para 12 convidados.</Text>
              <List spacing="xs" size="sm" center icon={<ThemeIcon color="gray" variant="outline" size={16} radius="xl"><IconGlassFull size={10}/></ThemeIcon>}>
                <List.Item>
                   <WineItem 
                      name="Boas-vindas: Cave Geisse Nature" 
                      story="Produzido em Pinto Bandeira (RS) pelo método tradicional (Champenoise). Mário Geisse, o fundador, é considerado a maior lenda das borbulhas na América do Sul." 
                   />
                </List.Item>
                <List.Item>
                  <WineItem 
                    name="Branco: Chablis Le Classique (França)" 
                    story="A mais pura expressão da uva Chardonnay. As vinhas crescem sobre solo calcário rico em fósseis marinhos, o que dá ao vinho um toque mineral e salino inconfundível." 
                  />
                </List.Item>
                <List.Item>
                  <WineItem 
                    name="Tinto: Brunello di Montalcino (Itália)" 
                    story="O 'Rei da Toscana'. Feito 100% com uva Sangiovese Grosso e envelhecido obrigatoriamente por 5 anos antes de sair da vinícola. Potente e eterno." 
                  />
                </List.Item>
                <List.Item>Acompanha: 3x Tábuas de Frios + Pães Artesanais</List.Item>
              </List>
            </Card>
            
            {/* Example 2: NEW WORLD */}
            <Card padding="lg" radius="md" withBorder style={{ borderColor: '#333', backgroundColor: '#141517' }}>
              <Title order={3} size="h4" mb="md" c="bordeaux">Descoberta "Novo Mundo"</Title>
              <Text c="dimmed" size="sm" mb="md">Sabores intensos e modernos para 15 convidados.</Text>
              <List spacing="xs" size="sm" center icon={<ThemeIcon color="gray" variant="outline" size={16} radius="xl"><IconGlassFull size={10}/></ThemeIcon>}>
                <List.Item>
                  <WineItem 
                    name="Boas-vindas: Rosé de Provence (Uruguai)" 
                    story="Inspirado na França, mas com a alma de Garzón. A brisa do Oceano Atlântico resfria as uvas, garantindo uma acidez elétrica e aromas de frutas frescas." 
                  />
                </List.Item>
                <List.Item>
                  <WineItem 
                    name="Tinto 1: Catena Zapata Malbec (Argentina)" 
                    story="O vinho que colocou a América do Sul no mapa mundial. Nicolás Catena foi o pioneiro em plantar vinhas em atitudes extremas nos Andes." 
                  />
                </List.Item>
                <List.Item>
                  <WineItem 
                    name="Tinto 2: Napa Valley Cabernet (EUA)" 
                    story="Famoso pelo 'Julgamento de Paris' de 1976, onde os vinhos da Califórnia venceram os franceses em teste cego. Encorpado, com muita fruta e carvalho." 
                  />
                </List.Item>
                <List.Item>Acompanha: 4x Tábuas de Queijos e Geleias</List.Item>
              </List>
            </Card>
          </SimpleGrid>
          <Text ta="center" size="xs" c="dimmed" mt={30} fs="italic">
            *Exemplos ilustrativos. O Sommelier montará a carta ideal baseada na preferência do grupo.
          </Text>
        </Container>
      </Box>

      {/* THE OFFER / PRICING */}
      <Container size="md" py={80}>
        <Card withBorder shadow="sm" radius="md" padding="xl" style={{ borderColor: '#AD4C61' }}>
          <Stack align="center" gap="xs">
            <Text tt="uppercase" fw={700} c="bordeaux" style={{ letterSpacing: 2 }}>
              Pacote Corporativo
            </Text>
            <Title order={2}>Adega Exclusiva</Title>
            <Text size="sm" c="dimmed">Ideal para grupos de 10 a 20 pessoas</Text>
          </Stack>
          
          <Group justify="center" mt="xl" mb="xl">
             <Text size="xl" span fw={700}>Consumação Mínima:</Text>
             <Text size="xl" span c="bordeaux" fw={900} style={{ fontSize: '2.5rem' }}>R$ 2.500</Text>
          </Group>

          <List spacing="md" size="lg" center icon={
            <ThemeIcon color="bordeaux" size={24} radius="xl">
              <IconCalendarEvent size={16} />
            </ThemeIcon>
          }>
            <List.Item>Uso exclusivo do espaço (4 Horas)</List.Item>
            <List.Item>R$ 1.500 de crédito em vinhos/comida</List.Item>
            <List.Item>Serviço de Sommelier dedicado</List.Item>
            <List.Item>Montagem de antepastos inclusa</List.Item>
          </List>

          {/* REFINED CTA */}
          <Button component="a" href={whatsappLink} fullWidth size="xl" color="bordeaux" mt={40}>
            Falar com o Sommelier
          </Button>
          <Text size="xs" c="dimmed" ta="center" mt="sm">
            Disponível Terças, Quartas e Quintas
          </Text>
        </Card>
      </Container>

      {/* FAQ SECTION */}
      <Container size="md" pb={80}>
        <Title order={2} ta="center" mb={40}>Perguntas Frequentes</Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={30}>
          <Stack gap="xs">
            <Text fw={700}>O espaço fica fechado só para nós?</Text>
            <Text size="sm" c="dimmed">Sim. Ao contratar o pacote "Adega Exclusiva", nós não abrimos para o público geral. A casa é sua.</Text>
          </Stack>
          <Stack gap="xs">
            <Text fw={700}>Tem jantar ou comida quente?</Text>
            <Text size="sm" c="dimmed">Nosso foco são os vinhos e tábuas de frios/antepastos. Para jantar completo, temos parceiros que entregam aqui.</Text>
          </Stack>
          <Stack gap="xs">
            <Text fw={700}>E se passar do valor da consumação?</Text>
            <Text size="sm" c="dimmed">O valor de R$ 1.500 é o mínimo garantido. O que for consumido acima disso é cobrado normalmente no checkout.</Text>
          </Stack>
          <Stack gap="xs">
            <Text fw={700}>Tem estacionamento?</Text>
            <Text size="sm" c="dimmed">Sim, temos vagas disponíveis em frente à adega.</Text> 
          </Stack>
        </SimpleGrid>
      </Container>

      {/* FOOTER */}
      <Box bg="#1A1B1E" py={40}>
        <Container size="md" ta="center">
          <Title order={4} c="white" mb="sm">Madame du Vin</Title>
          <Text c="dimmed" size="sm">Eventos Privados • Wine Education • Varejo</Text>
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

function WineItem({ name, story }: { name: string, story: string }) {
  return (
    <Tooltip 
      label={story} 
      multiline 
      w={220} 
      withArrow 
      transitionProps={{ duration: 200 }}
      color="gray"
    >
      <Text span style={{ cursor: 'help', textDecoration: 'underline dotted #AD4C61', textUnderlineOffset: '3px' }}>
        {name}
      </Text>
    </Tooltip>
  );
}