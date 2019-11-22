import React, { useState } from 'react';
import { Dialog } from '@primer/components';
import { ApolloProvider } from '@apollo/react-hooks';

import UploadForm from './components/UploadForm/UploadForm';
import NavBar from './components/NavBar/NavBar';
import PostList from './components/PostList/PostList'

import client from './apollo/apolloConfig';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = (visibility) => () => setModalVisible(visibility);

  return (
    <ApolloProvider client={client}>
      <NavBar openModal={toggleModal(true)} />
      <PostList />
      <Dialog title="Enviar imagem" isOpen={modalVisible} onDismiss={toggleModal(false)}>
        <UploadForm onComplete={toggleModal(false)} />
      </Dialog>
    </ApolloProvider>
  );
}

export default App;