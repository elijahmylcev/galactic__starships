export default class SwapiService {
  _apiBase = 'https://swapi.dev/api';

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} --> received ${res.status}`);
    }
    return await res.json();
  }

  async getAllStarships(page) {
    const res = await this.getResource(`/starships/?page=${page}`);
    console.log(res);
    return res.results.map(this._transformStarship);
  }

  async getStarship(id) {
    const starship = await this.getResource(`/starships/${id}/`);
    return this._transformStarship(starship);
  }

  // Функция получает id из объекта, приходящего с api
  _extractId(item) {
    const idRegExp = /\/([0-9]*)\/$/;
    return item.url.match(idRegExp)[1];
  }

  // Трансформирую данные, чтобы интегрировать их в компонент
  _transformStarship = (starship) => {
    const id = this._extractId(starship);
    return {
      id,
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCopacity: starship.cargoCopacity,
      adress: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
    };
  };
}
