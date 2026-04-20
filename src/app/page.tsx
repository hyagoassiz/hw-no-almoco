"use client";

import { Container, Typography, Card, Button, Box } from "@mui/material";

const produtos = [
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
    nome: "Hot Wheels Premium - '88 Honda CRX",
    imagem: "https://m.media-amazon.com/images/I/91RgZkZJ65L.jpg",
    links: [
      { label: "Amazon", url: "https://amzn.to/4tU6Hoz" },
      { label: "Mercado Livre", url: "https://meli.la/22hoAiX" },
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
];

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "#ffffff",
        py: 2,
      }}
    >
      <Container maxWidth="xs">
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Box
            component="img"
            src="/hwa.png"
            alt="logo"
            sx={{
              width: 150,
              mb: 0.5,
            }}
          />

          <Typography
            sx={{
              fontSize: 16,
              color: "#6b7280",
              mt: 0.5,
            }}
          >
            Links confiáveis para compra 👇
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {produtos.map((produto) => (
            <Card
              key={produto.nome}
              sx={{
                borderRadius: 3,
                border: "1px solid #e5e7eb",
                overflow: "hidden",
                boxShadow: "none",
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
                  {produto.links.map((link) => (
                    <Button
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      fullWidth
                      sx={{
                        background: "#111827",
                        color: "#fff",
                        borderRadius: 2,
                        textTransform: "none",
                        fontSize: 13,
                        py: 1.2,
                        "&:hover": {
                          background: "#000",
                        },
                      }}
                    >
                      Comprar ({link.label})
                    </Button>
                  ))}
                </Box>
              </Box>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
