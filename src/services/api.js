const callToApi = () => {
   
    return fetch('https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json') 
      .then(response => response.json())
      .then(response => { 
        const results = response.results
        return results;
      });
  };
  
  export default callToApi;