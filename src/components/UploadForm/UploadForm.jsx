import React, { useRef, useState } from 'react';
import { Box, Flex, Button, TextInput, Flash } from '@primer/components';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const ADD_POST_MUTATION = gql`
  mutation addPost($post: AddPostInput!) {
    addPost(post: $post) {
      id
      picture
      description
    }
  }
`;

const UploadForm = () => {
  const [description, setDescription] = useState('');
  const [addPost, { data, error, loading }] = useMutation(ADD_POST_MUTATION, {
    refetchQueries: ['posts'],
  });

  const picture = useRef(null);
  

  return (
    <Box p={3}>
      <Flash scheme="green" display={data ? 'block' : 'none'} mb={5}>Foto enviada!</Flash>
      <Flash scheme="red" display={error? 'block' : 'none'} mb={5}>Erro ao enviar foto, tente novamente</Flash>
      <form
        onSubmit={e => {
          e.preventDefault();
          addPost({
            variables: {
              post: {
                picture: picture.current.files[0],
                description: description,
              },
            },
          });
        }}
      >
        <Flex flexDirection="column" alignItems="flex-start" width="100%">
          <Box mb={4}>
            <input type="file" ref={picture} required />
          </Box>
          <Box mb={4}>
            <TextInput
              placeholder="Descrição da sua foto"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              required
            />
          </Box>
          <Flex justifyContent="flex-end" width="100%">
            <Button disabled={loading} type="submit">Enviar</Button>
          </Flex>
        </Flex>
      </form>
    </Box>
  );
}

export default UploadForm;
