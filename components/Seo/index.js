import React from "react";
import Head from "next/head";

const Seo = ({ title }, blogsData) => {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ayush's portfolio website" />
        <meta name="author" content="Ayush Soni" />
        <meta name="author" content="ayushsoni1010" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Ayush Soni" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ayushsoni1010" />
        <meta name="twitter:creator" content="@ayushsoni1010" />
        <meta
          name="twitter:image"
          content="https://ayushsoni1010.com/profile.jpg"
        />
        <title>{title}</title>

        {blogsData ? (
          <>
            <meta property="og:title" content={`${blogsData.title}`} />
            <meta property="og:site_name" content="Blogs | Ayush Soni" />
            <meta property="og:description" content="Welcome to my blog!" />
            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content={`https://ayushsoni1010/blogs/${blogsData.slug}`}
            />
            <meta
              property="og:image"
              content={`https://ayushsoni1010/${blogsData.cover_image}`}
            />
          </>
        ) : (
          <>
            <meta property="og:site_name" content="Ayush Soni" />
            <meta name="og:title" content="Ayush Soni" />
            <meta
              property="og:description"
              content="Welcome to my personal portfolio!"
            />
            <meta property="og:type" content="website" />
            <meta
              property="og:image"
              content="https://ayushsoni1010.com/developer.png"
            />
          </>
        )}
      </Head>
    </React.Fragment>
  );
};

export default Seo;
