'use server';
import React from 'react';
export const handleFormSubmit = async (
  evt: React.FormEvent<HTMLInputElement>
) => {
  evt.preventDefault();
  let myFileInput = document.getElementById(
    'invoice-file-input'
  ) as HTMLInputElement;
  let myFile = myFileInput?.files && myFileInput?.files[0];
  if (!myFile) {
    return;
  }
  let data = new FormData();
  data.append('document', myFile, myFile.name);

  const responseData = await fetch(
    'https://api.mindee.net/v1/products/mindee/invoices/v4/predict',
    {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.NEXT_LOCAL_MINDEE_API_KEY}`
      },
      body: data
    }
  )
    .then((res) => {
      res.json();
    })
    .catch((err) => {
      console.log('error sending the invoice file', err);
    });

  console.log('this is the response', responseData);

  // return responseData;

  // let xhr = new XMLHttpRequest();
  // xhr.addEventListener('readystatechange', function () {
  //   if (this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // });
  // xhr.open(
  //   'POST',
  //   'https://api.mindee.net/v1/products/mindee/invoices/v4/predict'
  // );
  // xhr.setRequestHeader(
  //   'Authorization',
  //   `Token ${process.env.NEXT_LOCAL_MINDEE_API_KEY}`
  // );
  // xhr.send(data);
};
