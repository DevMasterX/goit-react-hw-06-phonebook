import styled from 'styled-components';

// export const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   width: 400px;
//   padding: 12px;
//   background-color: rgba(0, 0, 0, 0.6);
//   border: 3px solid #f08080;
//   border-radius: 4px;
// `;

// export const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 16px;
//   color: #f08080;
//   font-size: 20px;
// `;

// export const Input = styled.input`
//   padding: 8px 12px;
//   font: inherit;
//   cursor: pointer;
// `;

// export const Button = styled.button`
//   padding: 8px 12px;
//   font: inherit;
//   cursor: pointer;
//   border-radius: 4px;
//   border: 3px solid #f08080;
//   color: #f08080;
//   font-size: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

export const Form = styled('form')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  };
});

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
    transition: 'all 0.2s linear',
  };
});

export const Label = styled('label')(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };
});

export const Button = styled('button')(() => {
  return {
    padding: '6px',
    border: '1px solid #a09d9d',
    borderRadius: '5px',
    outline: 'none',
    backgroundColor: '#c3d5fa',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      borderColor: 'transparent',
      backgroundColor: '#87aaf6',
      outLine: 'none',
      fontWeight: '500px',
      cursor: 'pointer',
    },

    transition: 'all 0.2s linear',
  };
});
