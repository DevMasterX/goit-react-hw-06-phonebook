import styled from 'styled-components';

export const List = styled.ul`
  /* display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 3px solid #f08080;
  list-style: none; */
  list-style: none;
  padding-left: 15px;
  margin-bottom: 20px;
`;

// export const Item = styled.li`
//   background-color: #ffffff;
//   border: 3px solid #f08080;
//   padding: 10px;
//   border-radius: 4px;
//   margin-bottom: 7px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   font-size: 20px;
// `;

export const Item = styled('li')(() => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '7px',
  };
});

// export const Button = styled.button`
//   padding: 4px;
//   /* font: inherit;
//   cursor: pointer;
//   border-radius: 4px 8px;
//   border: 3px solid #f08080;*/
//   display: flex;
//   align-items: center;

//   border: 1px solid #a09d9d;
//   border-radius: 5px;
//   background-color: #feaaaa;
// `;

export const Button = styled('button')(() => {
  return {
    padding: '4px',
    border: '1px solid #a09d9d',
    borderRadius: '5px',
    backgroundColor: '#feaaaa',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
