import ExamInformation from "@/sections/home/components/ExamInformation";
import StudentInformation from "@/sections/home/components/StudentInformation";
import { Container, Grid } from "@mui/material";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <ExamInformation params={params} />
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <StudentInformation />
        </Grid>
      </Grid>
    </Container>
  );
}
