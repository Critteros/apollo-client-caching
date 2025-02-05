import { gql } from '@apollo/client';

export const GET_NOTES = gql`
  query AllNotes($page: Int!) {
    notes(page: $page) {
      title
      contents
      id
    }
  }
`;

export const ADD_NOTE = gql`
  mutation AddNote($title: String!, $contents: String!) {
    createNote(title: $title, contents: $contents) {
      __typename
    }
  }
`;

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: ID!) {
    deleteNote(id: $id)
  }
`;
