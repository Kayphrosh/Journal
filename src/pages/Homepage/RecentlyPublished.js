import React from 'react';
import publishedImg from '../../Images/bg.jpg';
import './recently-published.css';
const RecentlyPublished = () => {
  const dataPublished = [
    {
      issueThumbmail: publishedImg,
      issueTitle:
        'Our aim is to grow a space for the law profession to publish articles easily.',
      issuePreviewText:
        'Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam integer.',
      authorName: 'Mr. Nwanko',
      issueLink: 'read link',
    },
    {
      issueThumbmail: publishedImg,
      issueTitle:
        'Our aim is to grow a space for the law profession to publish articles easily.',
      issuePreviewText:
        'Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam integer.',
      authorName: 'Mr. Nwanko',
      issueLink: 'read link',
    },
    {
      issueThumbmail: publishedImg,
      issueTitle:
        'Our aim is to grow a space for the law profession to publish articles easily.',
      issuePreviewText:
        'Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rncus enim blandit et eget lorem.Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam integer.',
      authorName: 'Mr. Nwanko',
      issueLink: 'read link',
    },
  ];

  return (
    <section className="recently-published-container">
      <header>
        <h4>Recently Published Issues</h4>
        <a href="www.google.com">See all</a>
      </header>

      <main className="recently-published">
        {dataPublished.map((data, idx) => {
          return (
            <article>
              <div className="issue-thumbmail">
                <img src={data.issueThumbmail} alt="" />
              </div>
              <div className="issue-preview-text">
                <h5>{data.issueTitle}</h5>
                <p>{data.issuePreviewText}</p>
                <span className="issue-cta">
                  <small>{data.authorName}</small>
                  <a href={data.issueLink}>
                    <>Read more </>
                    <iconify-icon icon="ci:external-link"></iconify-icon>
                  </a>
                </span>
              </div>
            </article>
          );
        })}
      </main>
    </section>
  );
};

export default RecentlyPublished;
