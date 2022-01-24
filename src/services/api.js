const callToApi = () => {
   
    return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json') 
      .then(response => response.json())
      console.log(callToApi);
  };
  
  export default callToApi;