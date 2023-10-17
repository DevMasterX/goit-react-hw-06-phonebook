import styled from 'styled-components';

export const DeleteButton = styled('button')(() => {
  return {
    padding: '4px',
    border: '1px solid #a09d9d',
    borderRadius: '5px',
    backgroundColor: '#feaaaa',
    '&:hover': {
      borderColor: 'transparent',
      backgroundColor: '#c83033',
      cursor: 'pointer',
      color: 'white',
      scale: '1.055',
      boxShadow: '0px 0px 37px 6px rgba(34, 60, 80, 0.12)',
    },

    transition: 'all 0.2s linear',
  };
});

export const ContactItem = styled('li')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '7px',
  };
});
