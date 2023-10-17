import styled from 'styled-components';

export const Div = styled.div`
  margin-bottom: 15px;
`;

// export const Label = styled.label`
//   color: #000;
//   font-size: 20px;
// `;

export const Label = styled('label')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };
});

// export const Input = styled.input`
//   /* width: 400px; */
//   padding: 10px;
//   margin: 0 auto;
//   border-radius: 4px;
//   border: 3px solid #f08080;
// `;

export const Input = styled('input')(() => {
  return {
    padding: '8px',
    border: '1px solid #a09d9d',
    borderRadius: '5px',
    outline: 'none',

    '&:focus': {
      borderColor: '#5f96ca',
      boxShadow: '0px 0px 37px 6px rgba(34, 60, 80, 0.12)',
    },
  };
});
