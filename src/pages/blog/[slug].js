import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import SyntaxHighlighter from 'react-syntax-highlighter'
import Button from '../../components/Button.jsx'

const PostPage = ({ data, mdxSource }) => {
  return (
    <div className="mt-4">
      <h1>{data.title}</h1>
      <MDXRemote {...mdxSource} components={{ Button, SyntaxHighlighter }} />
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src', 'posts'))
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false, //this returns a 404 page for any path that is not generated
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('src', 'posts', `${slug}.mdx`))
  const { data, content } = matter(markdownWithMeta)

  const mdxSource = await serialize(content)

  return {
    props: { data, slug, mdxSource },
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
