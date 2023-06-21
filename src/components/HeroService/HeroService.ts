import buildApiUrl from "../../config/ApiConsts";
import { ConfigProvider } from "../../config/configProvider";

interface Hero {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}

const searchHeroes = async (
  name: string = "",
  offset: number = 0,
  limit: number = ConfigProvider.config.api.resultsPage
): Promise<Hero[]> => {
  const params: { [key: string]: string } = {
    offset: String(offset),
    limit: String(limit),
  };

  if (name) {
    params.name = name;
  }

  const url = buildApiUrl("characters", params);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data && data.data && data.data.results) {
      return data.data.results.map((hero: any) => ({
        id: hero.id,
        name: hero.name,
        description: hero.description,
        thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
      }));
    }
  } catch (error) {
    console.error("Error searching heroes:", error);
  }

  return [];
};

const getHeroDetails = async (id: number): Promise<Hero | null> => {
  const url = buildApiUrl(`characters/${id}`);

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (
      data &&
      data.data &&
      data.data.results &&
      data.data.results.length > 0
    ) {
      console.log("Description" + data.data.results);
      const hero = data.data.results[0];
      return {
        id: hero.id,
        name: hero.name,
        thumbnail: `${hero.thumbnail.path}.${hero.thumbnail.extension}`,
        description: hero.description,
      };
    }
  } catch (error) {
    console.error("Error getting hero details:", error);
  }

  return null;
};

export default { searchHeroes, getHeroDetails };
