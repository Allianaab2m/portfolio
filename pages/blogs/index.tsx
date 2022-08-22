import Link from "next/link";
import { client } from '../../lib/microcms'
import { Navbar } from '../../components/Navbar'
import { Footer } from '../../components/Footer'
import { BlogCard } from "../../components/BlogCard";
import type { NextPage, InferGetStaticPropsType } from "next";

export const BlogIndex: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ blogs }) => {
  console.log(blogs)
  return (
    <>
      <Navbar />
        <div className="grid md:grid-cols-2">
          {blogs.map((blog) => {
            return <BlogCard 
              className="bg-base-300 m-3 hover:bg-base-200"
              key={blog.id} 
              id={blog.id}
              title={blog.title}
              description={blog.description}  
              updateDate={blog.updatedAt}
            />
          })}
        </div>
      <Footer />
    </>
  )
}

export const getStaticProps = async () => {
  const data = await client.get({endpoint: 'blogs'})

  return {
    props: {
      blogs: data.contents as Array<any>
    }
  }
}

export default BlogIndex
