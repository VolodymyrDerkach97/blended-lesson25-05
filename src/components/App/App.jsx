

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { useLocalStorage } from 'hooks';
import { useSelector } from 'react-redux';

export const App = () => {
  // const [todos, setTodos] = useLocalStorage('todosKey', []);
  const todos = useSelector(state => state.todos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos?.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid>
            {todos?.length > 0 &&
              todos.map((todo, index) => (
                <GridItem key={todo.id}>
                  <Todo id={todo.id} text={todo.text} counter={index + 1} />
                </GridItem>
              ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
};
