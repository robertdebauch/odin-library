const form = document.querySelector('form');

export function titleValidation(title) {
  const trimmedTitle = title.trim();

  if (trimmedTitle.length === 0) {
    return {
      isValid: false,
      message: "Title can't be empty",
    };
  }

  if (trimmedTitle.length > 120) {
    return {
      isValid: false,
      message: "Title can't be this long",
    };
  }

  return {
    isValid: true,
    message: 'Interesting book, nice!',
  };
}

export function authorValidation(author) {
  const trimmedAuthor = author.trim();

  if (trimmedAuthor.length === 0) {
    return {
      isValid: false,
      message: 'This field cannot be empty, amigo',
    };
  }

  if (trimmedAuthor.length > 120) {
    return {
      isValid: false,
      message: "Names can't be this long (for our convenience)",
    };
  }

  return {
    isValid: true,
    message: 'Nice name, nice surname. Nice overall!',
  };
}

export function renderGenres(genresData) {
  const datalist = document.querySelector('#genres-list');
  if (!datalist) {
    return;
  }

  datalist.innerHTML = genresData.map((genre) => `<option value="${genre}"></option>`).join('');
}

export function genreValidation(genre) {
  const trimmedGenre = genre.trim();

  if (!trimmedGenre) {
    return {
      isValid: false,
      message: 'Please select a genre or type your option',
    };
  }

  return {
    isValid: true,
    message: 'Looks valid!',
  };
}

export function pagesValidation(pages) {
  const numberOfPages = Number(pages);

  if (isNaN(numberOfPages) || numberOfPages <= 0) {
    return {
      isValid: false,
      message: "The Number of Pages can't be less than AT LEAST one",
    };
  }
  if (!Number.isInteger(numberOfPages)) {
    return {
      isValid: false,
      message: 'You should use integers even if you have only a half of page',
    };
  }
  return {
    isValid: true,
    message: 'Everything is correct!',
  };
}

async function loadGenres() {
  try {
    const response = await fetch('../assets/genres.json');

    if (!response.ok) {
      throw new Error(`Ошибка загрузки JSON-данных: ${response.status}`);
    }

    const genres = await response.json();
    console.log('JSON-данные успешно загружены', genres);

    renderGenres(genres);
  } catch (error) {
    console.error('Не вышло получить данные о жанрах', error);
  }
}

loadGenres();
