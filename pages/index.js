// import Container from '@/components/Container'
// import BlogPost from '@/components/BlogPost'
// import Pagination from '@/components/Pagination'
// import { getAllPosts } from '@/lib/notion'
// import BLOG from '@/blog.config'

// export async function getStaticProps () {
//   const posts = await getAllPosts({ includePages: false })
//   const postsToShow = posts.slice(0, BLOG.postsPerPage)
//   const totalPosts = posts.length
//   const showNext = totalPosts > BLOG.postsPerPage
//   return {
//     props: {
//       page: 1, // current page is 1
//       postsToShow,
//       showNext
//     },
//     revalidate: 1
//   }
// }

// const blog = ({ postsToShow, page, showNext }) => {
//   return (
//     <Container title={BLOG.title} description={BLOG.description}>
//       {postsToShow.map(post => (
//         <BlogPost key={post.id} post={post} />
//       ))}
//       {showNext && <Pagination page={page} showNext={showNext} />}
//     </Container>
//   )
// }

// export default blog

import { getAllPosts, getAllTagsFromPosts } from '@/lib/notion'
import SearchLayout from '@/layouts/search'

export default function search ({ tags, posts }) {
  return <SearchLayout tags={tags} posts={posts} />
}
export async function getStaticProps () {
  const posts = await getAllPosts({ includePages: false })
  const tags = getAllTagsFromPosts(posts)
  return {
    props: {
      tags,
      posts
    },
    revalidate: 1
  }
}
