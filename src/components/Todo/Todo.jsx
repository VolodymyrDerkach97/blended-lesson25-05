import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useState } from 'react';

import {
  useDeleteContactMutation,
  useUpdateContactMutation,
} from 'redux/todoSlice';

export const Todo = ({ text, counter, onClick, id, onEdit }) => {
  const [newText, setNewText] = useState(text);
  const [isEdit, setIsEdit] = useState(false);

  const [updateTodo, { isLoading }] = useUpdateContactMutation();
  const [deleteTodo] = useDeleteContactMutation();
  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{id}
        </Text>
        {isEdit ? (
          <input
            type="text"
            autoFocus
            value={newText}
            onBlur={() => {
              setIsEdit(false);
              updateTodo({ id, text: newText });
            }}
            onChange={e => setNewText(e.target.value)}
          />
        ) : (
          <Text onClick={() => setIsEdit(true)}>
            {isLoading ? 'завантаження...' : text}
          </Text>
        )}

        <DeleteButton type="button" onClick={() => deleteTodo(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
