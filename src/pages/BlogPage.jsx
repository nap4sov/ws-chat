import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import styled from 'styled-components';

const List = styled.ul`
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
`;

const BlogPage = () => {
  const { getIdTokenClaims } = useAuth0();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const claims = await getIdTokenClaims();
      if (!claims?.__raw) return;
      const { data } = await axios.get('http://localhost:3001/articles', {
        headers: {
          Authorization: 'Bearer ' + claims.__raw,
        },
      });
      setArticles(data);
    })();
  });

  return (
    <List>
      {articles.map(({ title, description, _id }) => (
        <li key={_id}>
          <h3>{title}</h3>
          <p>{description}</p>
        </li>
      ))}
    </List>
  );
};

export default BlogPage;
