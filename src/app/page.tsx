"use client";

import { Container, Typography, Card, Button, Box } from "@mui/material";

const produtos = [
  {
    nome: "Hot Wheels Premium - '88 Honda CRX",
    imagem: "https://m.media-amazon.com/images/I/91RgZkZJ65L.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.to/4tU6Hoz" },
      { label: "Mercado Livre", url: "https://meli.la/22hoAiX" },
    ],
  },
  {
    nome: "Hot Wheels Premium - Mercedes-Bens 500 SEL",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/006/652/004/products/6441fe397c800134c89de7644d0c73c9eeca66e7-1c0cd45a61639b166b17695655561988-480-0.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/4mLbcQf" },
      { label: "Mercado Livre", url: "https://meli.la/1h8Bf7T" },
    ],
  },
  {
    nome: "Hot Wheels Premium - 2002 Pontiac Firebird",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/006/652/004/products/533281ff7987f760730dc212f4e44981d7d95129-fc8e336e460a3e931f17693095900853-480-0.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/4dWWd3f" },
      { label: "Mercado Livre", url: "https://meli.la/1JWdBe8" },
    ],
  },
  {
    nome: "Hot Wheels Premium - '77 Toyota Celica",
    imagem:
      "https://http2.mlstatic.com/D_NQ_NP_697923-MLB107570671554_032026-O.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/4mGwNcp" },
      { label: "Mercado Livre", url: "https://meli.la/2JYnSbR" },
    ],
  },
  {
    nome: "Hot Wheels Premium - Nissan Skyline 2000GT-R LBKW",
    imagem: "https://img.olx.com.br/images/73/734634389843310.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.to/4tZYhfB" },
      { label: "Mercado Livre", url: "https://meli.la/1Mj42M9" },
    ],
  },
  {
    nome: "Hot Wheels Premium - 1993 Toyota 4Runner",
    imagem:
      "https://acdn-us.mitiendanube.com/stores/006/652/004/products/aae3b9b172c0fd2bca79d9a6bab9a2eeb4920b34-d88acfc65c97e34eb317693095764179-480-0.webp",
    links: [
      { label: "Amazon", url: "https://amzn.to/3ODZ1If" },
      { label: "Mercado Livre", url: "https://meli.la/2UvNxxR" },
    ],
  },
];

export default function Home() {
  return (
    <Box sx={{ minHeight: "100vh", background: "#ffffff", py: 2 }}>
      <Container maxWidth="xs">
        {/* HEADER */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            component="img"
            src="/hwa.png"
            alt="logo"
            sx={{ width: 150, mb: 1 }}
          />

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: 18,
              color: "#111827",
            }}
          >
            Hot Wheels Premium mais baratos que encontrei 🔥
          </Typography>

          <Typography
            sx={{
              fontSize: 14,
              color: "#6b7280",
              mt: 0.5,
            }}
          >
            Links confiáveis para comprar 👇
          </Typography>
        </Box>

        {/* LISTA */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {produtos.map((produto) => (
            <Card
              key={produto.nome}
              sx={{
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src={produto.imagem}
                alt={produto.nome}
                sx={{
                  width: "100%",
                  background: "#f9fafb",
                  p: 2,
                }}
              />

              <Box sx={{ p: 2 }}>
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 16,
                    color: "#111827",
                    mb: 1.5,
                  }}
                >
                  {produto.nome}
                </Typography>

                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  {produto.links.map((link) => {
                    const isAmazon = link.label === "Amazon";

                    return (
                      <Button
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        fullWidth
                        sx={{
                          background: isAmazon ? "#FF9900" : "#3483FA",
                          color: "#fff",
                          borderRadius: 2,
                          textTransform: "none",
                          fontSize: 13,
                          py: 1.2,
                          "&:hover": {
                            opacity: 0.9,
                          },
                        }}
                      >
                        {isAmazon
                          ? "Comprar na Amazon"
                          : "Comprar no Mercado Livre"}
                      </Button>
                    );
                  })}
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
