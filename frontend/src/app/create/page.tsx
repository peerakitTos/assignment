"use client";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import styles from "../page.module.css";
import NavigationBar from "@/components/NavigationBar";
import { FormEvent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { AuthorType } from "@/constant/type";
import { useRouter } from "next/navigation";

function AuthorSelect({ onSelect }: { onSelect: (e: string) => void }) {
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const { loading, error, data } = useQuery(gql`
    query {
      authors {
        id
        name
      }
    }
  `);

  if (loading || error)
    return (
      <Select
        variant="outlined"
        label="Author"
        sx={{ marginBottom: 3, color: "#000" }}
        size="small"
        placeholder="------Select Author------"
        autoWidth
        displayEmpty
        value={""}
        disabled
      >
        <MenuItem value={""}>------Select Author------</MenuItem>
      </Select>
    );
  const authors = data.authors;
  return (
    <Select
      variant="outlined"
      sx={{ marginBottom: 3, width: "100%" }}
      size="small"
      displayEmpty
      value={selectedAuthor}
      onChange={(e) => {
        const value = e.target.value;
        setSelectedAuthor(value);
        onSelect(value);
      }}
    >
      <MenuItem value={""} disabled>
        ------Select Author------
      </MenuItem>
      {authors.map((author: AuthorType) => {
        return (
          <MenuItem value={author.id} key={author.id}>
            {author.name}
          </MenuItem>
        );
      })}
    </Select>
  );
}

const CREATE_POST_MUTATION = gql`
  mutation PostMutation(
    $title: String
    $content: String
    $imageUrl: String
    $author: String
  ) {
    createPost(
      title: $title
      content: $content
      imageUrl: $imageUrl
      author: $author
    ) {
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

export default function Create() {
  const router = useRouter();
  const [imageUrl, setImageUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const [createPost] = useMutation(CREATE_POST_MUTATION, {
    variables: {
      title: title,
      content: content,
      imageUrl: imageUrl,
      author: author,
    },
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const post = await createPost();
    if (post) {
      return router.push("/");
    }
  };
  return (
    <main className={styles.main}>
      <Container
        maxWidth="md"
        sx={{ backgroundColor: "#FFF", minHeight: "inherit" }}
      >
        <NavigationBar></NavigationBar>
        <Typography variant="h4" align="center" color="#333" marginBottom={3}>
          Create Post
        </Typography>
        <form style={{ width: `100%` }} onSubmit={onSubmit}>
          <Grid container justifyContent={`center`} margin={`auto`}>
            <Grid item xs={12} md={8}>
              <Typography align="center" component="div" marginBottom={2}>
                <Box
                  component="img"
                  sx={{
                    width: 240,
                  }}
                  alt="The house from the offer."
                  src={imageUrl || "/default-image.jpg"}
                  onError={() => {
                    setImageUrl("");
                  }}
                />
              </Typography>

              <TextField
                id="image-url"
                label="image url"
                placeholder="image url"
                variant="outlined"
                size="small"
                fullWidth
                defaultValue={imageUrl}
                onBlur={(e) => {
                  setImageUrl(e.target.value);
                }}
                sx={{ marginBottom: 3 }}
              />
              <TextField
                id="title"
                label="title"
                placeholder="title"
                variant="outlined"
                size="small"
                fullWidth
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                sx={{ marginBottom: 3 }}
              />
              <TextField
                id="content"
                label="Content"
                placeholder="Content"
                multiline
                size="small"
                maxRows={4}
                variant="outlined"
                fullWidth
                value={content}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                sx={{ marginBottom: 3 }}
              />
              <AuthorSelect
                onSelect={(e: string) => {
                  setAuthor(e);
                }}
              ></AuthorSelect>
              <Typography sx={{ textAlign: `center` }}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Container>
    </main>
  );
}
