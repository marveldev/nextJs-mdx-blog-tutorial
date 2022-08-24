import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'

const Home = ({ posts }) => {
  return (
    <div className="mt-5">
      {posts?.map((post, index) => (
        <Link key={index} href={`/blog/${post.slug}`} as={`/blog/${post.slug}`} passHref>
          <div className="card mb-3 pointer" style={{ maxWidth: '540px' }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.data.title}</h5>
                  <p className="card-text">{post.data.description}</p>
                  <p className="card-text">
                    <small className="text-muted">{post.data.date}</small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <Image
                  src={post.data.thumbnailUrl}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', filename))
    const { data } = matter(markdownWithMeta)

    return {
      data,
      slug: filename.split('.')[0],
    }
  })

  return {
    props: {
      posts,
    },
  }
}
