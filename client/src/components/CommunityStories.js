import React from 'react';
import styles from '../styles/CommunityStories.module.css';
import mockCommunityStories from '../mock/mockCommunityStories';

const CommunityStories = () => {
  return (
    <div className={styles.communityStories}>
      <h2>Community Stories</h2>
      {mockCommunityStories.map(story => (
        <div key={story.id} className={styles.story}> {/* Use story.id for the key */}
          <h3>{story.title}</h3>
          <p>{story.content}</p>
        </div>
      ))}
    </div>
  );
}

export default CommunityStories;
