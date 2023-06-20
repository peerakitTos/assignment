import { iBlogCardProp } from "@/constant";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@mui/material";

export default function BlogCard({ post }: iBlogCardProp) {
  return (
    <Link href={`/posts/${post.id}`} sx={{ textDecoration: "none" }}>
      <Card sx={{ boxShadow: 5 }}>
        <CardMedia
          component="img"
          height="200"
          image={post.imageUrl}
          sx={{ objectFit: "contain", backgroundColor: "#000" }}
        />
        <CardContent>
          <Typography align="center" color="#000" fontWeight={`bold`}>
            {post.title}
          </Typography>
          <Typography color="text.secondary">{post.content}</Typography>
          <Typography color="text.secondary" align="right" fontWeight={`bold`}>
            Author: {post.author.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
