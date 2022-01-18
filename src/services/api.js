const callToApi = (searchName) => {
    // Recibimos por parámetros searchName, que nos lo pasan desde App dentro del useEffect
    // Llamamos al fetch interpolando la URL del API más el nombre buscado
    return fetch(`https://beta.adalab.es/pw-recursos/apis/adalabers-v1/promo-patata.json`)
      .then(response => response.json())
      .then(response => { console.log(response);
        // La respuesta del API es un objeto que dentro tiene la propiedad results que es un array
        // Recorremos el array results obteniendo solo el nombre
        // Esto lo hacemos para limpiar la respuesta del API antes de devolverla al componente App
        // Esto es opcional pero recomendado
        const result = response.results.map(item => {
          return {
            name:item.name
          };
        });
        // Retornamos los resultados del API al componente App
        return result;
      });
  };
  
  export default callToApi;