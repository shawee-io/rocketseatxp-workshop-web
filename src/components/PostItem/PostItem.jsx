import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Box, Flex } from '@primer/components';
import styled from 'styled-components';

const ADD_CLAP_MUTATION = gql`
  mutation addClap($postId: String!) {
    addClap(postId: $postId) {
      id
      picture
      description
      claps
    }
  }
`;

const PostImage = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid rgba(16, 15, 18, .3);
`;

const LikeButton = styled.button`
  background: transparent;
  border:none;
  padding: 0px;
  font-size: 24px;
  display: flex;
  align-items: center;

  &>span:last-child {
    font-size: 16px;
    margin-left: 8px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const LikeBox = styled(Flex)`
  border-right: 1px solid rgba(16, 15, 18, .3);
  border-left: 1px solid rgba(16, 15, 18, .3);
  border-bottom: 1px solid rgba(16, 15, 18, .3);
`;

const DescriptionBox = styled(LikeBox)`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const PostItem = ({ post }) => {
  const [addClap, { loading }] = useMutation(ADD_CLAP_MUTATION, {
    variables: {
      postId: post.id,
    },
  });

  return (
    <Box maxWidth={600}>
      <Flex flexDirection="column">
        <PostImage
          src={`http://127.0.0.1:8080/uploads/${post.picture.split('/').reverse()[0]}`}
          alt={post.description}
        />
        <LikeBox p={3} width="100%" justifyContent="space-between" alignItems="center">
          <LikeButton
            disabled={loading}
            onClick={addClap}
          >
            <span role="img" aria-label="Curtir">❤️</span><span>Curtir</span>
          </LikeButton>
          <span>{post.claps} curtidas</span>
        </LikeBox>
        <DescriptionBox p={3} width="100%">
          <p>{post.description}</p>
        </DescriptionBox>
      </Flex>
    </Box>
  )
}

export default PostItem;
