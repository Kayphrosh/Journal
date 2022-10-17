import React from 'react';
import './issues-container-main.css';
import publishedImg from '../../../Images/bg.jpg';

const AllIssues = () => {
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
    {
      issueThumbmail: publishedImg,
      issueTitle:
        'Our aim is to grow a space for the law profession to publish articles easily.',
      issuePreviewText:
        'Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rncus enim blandit et eget lorem. Rhoncus enim blandit et eget lorem aiquam mattis nisi. Volutpat quis lacus id enim, sagittis magna tortor. In diam integer.',
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
    <main className="recently-published all-issues">
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
  );
};

export default AllIssues;
