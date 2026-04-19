import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
} from "@mui/material";

const produtos = [
  {
    nome: "Hot Wheels Premium Nissan Skyline",
    preco: "R$ 49,90",
    imagem: "https://via.placeholder.com/300",
    link: "https://seu-link-afiliado.com",
  },
  {
    nome: "Hot Wheels Premium Toyota Supra",
    preco: "R$ 52,90",
    imagem: "https://via.placeholder.com/300",
    link: "https://seu-link-afiliado.com",
  },
];

export default function Home() {
  return (
    <Box sx={{ background: "#0f172a", minHeight: "100vh", py: 4 }}>
      <Container maxWidth="sm">
        {/* Header */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ color: "#fff", fontWeight: "bold" }}>
            Hot Wheels no Almoço
          </Typography>

          <Typography sx={{ color: "#94a3b8", mt: 1 }}>
            Miniaturas que eu recomendo 🔥
          </Typography>
        </Box>

        {/* Lista */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          {produtos.map((produto) => (
            <Card
              key={produto.nome}
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                background: "#1e293b",
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
            >
              <CardMedia
                component="img"
                image={produto.imagem}
                alt={produto.nome}
                sx={{
                  height: 180,
                  objectFit: "cover",
                }}
              />

              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ color: "#fff", fontWeight: "bold" }}
                >
                  {produto.nome}
                </Typography>

                <Typography
                  sx={{
                    color: "#22c55e",
                    fontWeight: "bold",
                    mt: 1,
                    mb: 2,
                  }}
                >
                  {produto.preco}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  href={produto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: "#22c55e",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "#16a34a",
                    },
                  }}
                >
                  Comprar agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
