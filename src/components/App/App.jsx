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
import { useFetchContactsQuery } from 'redux/todoSlice';

export const App = () => {
  // const [todos, setTodos] = useLocalStorage('todosKey', []);
  const { data: todos } = useFetchContactsQuery();

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
