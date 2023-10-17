import styled from 'styled-components';

export const Input = styled('input')(() => {
  return {
    padding: '6px',
    border: '1px solid #a09d9d',
    borderRadius: '5px',
    outline: 'none',

    '&:focus': {
      borderColor: '#5f96ca',
      boxShadow: '0px 0px 37px 6px rgba(34, 60, 80, 0.12)',
    },
  };
});

export const Label = styled('label')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };
});
