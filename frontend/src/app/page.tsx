"use client";
import styles from "./page.module.css";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import BlogCard from "@/components/BlogCard";
import { PostType } from "@/constant/type";
import { gql, useQuery } from "@apollo/client";
import { client } from "@/api/client";
import NavigationBar from "@/components/NavigationBar";

const postsQuery = gql`
  query {
    posts {
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
`;

function PostGrid() {
  const { loading, error, data } = useQuery(postsQuery);

  if (loading) return <Typography>Loading...</Typography>;
  if (error)
    return <Typography>Something went wrong {error.message}</Typography>;

  return (
    <Grid container spacing={3}>
      {data.posts.map((post: PostType, index: number) => {
        return (
          <Grid item md={4} xs={12} sm={6} key={index}>
            <BlogCard post={post}></BlogCard>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default async function BlogApp() {
  return (
    <main className={styles.main}>
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "#FFF", minHeight: "inherit", paddingBottom: 3 }}
      >
        <NavigationBar></NavigationBar>
        <PostGrid></PostGrid>
      </Container>
    </main>
  );
}
