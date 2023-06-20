"use client";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import styles from "../../page.module.css";
import NavigationBar from "@/components/NavigationBar";
import { gql, useQuery } from "@apollo/client";

function PostDetail({ id }: { id: string }) {
  const { loading, error, data } = useQuery(gql`
    query {
      post(id: "${id}") {
        id
        title
        content
        imageUrl
        author {
          id
          name
        }
      }
    }
  `);

  if (loading) return <Typography>Loading...</Typography>;
  if (error)
    return <Typography>Something went wrong {error.message}</Typography>;

  const post = data.post;

  return (
    <div>
      <Typography align="center" component="div" marginBottom={2}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src={post.imageUrl}
        />
      </Typography>

      <Typography align="center" variant="h4" color="#000" marginY={3}>
        {post.title}
      </Typography>
      <Typography component={`div`} border={1} paddingY={2} paddingX={3}>
        <Typography color="text.secondary">{post.content}</Typography>
        <Typography color="text.secondary" align="right" fontWeight={`bold`}>
          Author: {post.author.name}
        </Typography>
      </Typography>
    </div>
  );
}

export default function Post({ params }: { params: { id: string } }) {
  return (
    <main className={styles.main}>
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "#FFF", minHeight: "inherit" }}
      >
        <NavigationBar></NavigationBar>
        <PostDetail id={params.id}></PostDetail>
      </Container>
    </main>
  );
}
