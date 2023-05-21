import { RiDeleteBinLine } from 'react-icons/ri';
import { Text } from 'components';
import { DeleteButton, TodoWrapper } from './Todo.styled';
import { useState } from 'react';

export const Todo = ({ text, counter, onClick, id, onEdit }) => {
  const [newText, setNewText] = useState(text);
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      <TodoWrapper>
        <Text textAlign="center" marginBottom="20px">
          TODO #{counter}
        </Text>
        {isEdit ? (
          <input
            type="text"
            autoFocus
            value={newText}
            onBlur={() => {
              setIsEdit(false);
              onEdit({ id, text: newText });
            }}
            onChange={e => setNewText(e.target.value)}
          />
        ) : (
          <Text onClick={() => setIsEdit(true)}>{text}</Text>
        )}

        <DeleteButton type="button" onClick={() => onClick(id)}>
          <RiDeleteBinLine size={24} />
        </DeleteButton>
      </TodoWrapper>
    </>
  );
};
