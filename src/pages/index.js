import React from 'react'
import styles from '../../styles/home.module.css'
import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'

const Home = ({ posts }) => {
  console.log(posts)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
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
