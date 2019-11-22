import React from 'react';
import { Flex, Box } from '@primer/components';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import PostItem from '../PostItem/PostItem';

const GET_POSTS_QUERY = gql`
  query posts {
    posts {
      id
      picture
      description
      claps
    }
  }
`;

const PostList = (props) => {
  const { loading, data } = useQuery(GET_POSTS_QUERY);

  if (loading) {
    return null;
  }

  return (
    <Flex p={5} width="100%" minHeight="100vh" justifyContent="center" alignItems="flex-start">
      <Flex flexDirection="column">
        {
          data.posts.map(post => (
            <Box p={3} key={post.id}>
              <PostItem post={post} />
            </Box>
          ))
        }
      </Flex>
    </Flex>
  );
};

export default PostList;
