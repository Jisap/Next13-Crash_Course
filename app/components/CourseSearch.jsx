'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => { // getSearchResults establece en la página ppal el state de course a mostrar

    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {                                 // En el submit
        e.preventDefault();                                             // obtenemos los cursos según query de busqueda
        const res = await fetch(`/api/courses/search?query=${query}`);  // y establecemos el state de courses a mostrar
        const courses = await res.json();
        getSearchResults(courses);
    };

  return (
    <form className='search-form' onSubmit={handleSubmit}>
        <input
            type='text'
            className='search-input'
            placeholder='Search Courses...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}  // Establece el query 
      />
      <button className='search-button' type='submit'>
        Search
      </button>
    </form>
  )
}

export default CourseSearch